import React, { useEffect, useState } from 'react';

import './ScorePage.css';

import { Navbar } from '../../assets/GlobalStyles/Navbar';
import { ClassAttributes, ScoreAttributes, UserAttributes, UserAuth } from '../../types/types';
import api from '../../services/api';

interface InfoUserAttributes {
    user: UserAttributes;
    userClass: ClassAttributes;
    scoresSerialized: {
        score: ScoreAttributes,
        teacher: UserAttributes,
    }[];
}

export function ScorePage() {
    const [infoUser, setInfoUser] = useState<InfoUserAttributes>();
    const [userAuth] = useState<UserAuth | null>(
        JSON.parse(sessionStorage.getItem("auth") || '')
    );

    function averageScores(score: ScoreAttributes){
        let sum = 0;

        if (score.first_bimester) sum += score.first_bimester;
        if (score.second_bimester) sum += score.second_bimester;
        if (score.third_bimester) sum += score.third_bimester;
        if (score.fourth_bimester) sum += score.fourth_bimester;

        if (sum > 0) return sum / 4;
        
        return sum;
    }

    useEffect(() => {
        api.get(`users/list-scores/${userAuth?.user_id}`).then((response) => {
            setInfoUser(response.data);
        })
    }, [userAuth]);

    return(
        <div className="score-page">
            <Navbar />
            <table>
                <thead>
                    <tr>
                        <th colSpan={9} style={{fontSize: "16px"}}>Pontuação de Notas</th>
                    </tr>
                    <tr>
                        <th colSpan={5} style={{fontSize: "16px"}}>
                            Aluno: {infoUser?.user.name}
                        </th>
                        <th colSpan={3} style={{fontSize: "16px"}}>
                            Turma: {`${infoUser?.userClass.name} ${infoUser?.userClass.code}`}
                        </th>
                        <th colSpan={1} style={{fontSize: "16px"}}>Ano: {infoUser?.userClass.year}</th>
                    </tr>
                    <tr>
                        <th colSpan={2}>Matéria</th>
                        <th colSpan={2}>Professor</th>
                        <th>1º BIM</th>
                        <th>2º BIM</th>
                        <th>3º BIM</th>
                        <th>4º BIM</th>
                        <th>Média Final</th>
                    </tr>
                </thead>
                <tbody>
                    {infoUser?.scoresSerialized.map((scoreSerialized) => {
                        return (
                            <tr>
                                <td colSpan={2}>{scoreSerialized.score.matter}</td>
                                <td colSpan={2}>{scoreSerialized.teacher.name}</td>
                                <td>{scoreSerialized.score.first_bimester}</td>
                                <td>{scoreSerialized.score.second_bimester}</td>
                                <td>{scoreSerialized.score.third_bimester}</td>
                                <td>{scoreSerialized.score.fourth_bimester}</td>
                                <td>{averageScores(scoreSerialized.score)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}