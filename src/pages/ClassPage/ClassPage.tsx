import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../assets/GlobalStyles/Navbar';
import { BiSearchAlt } from 'react-icons/bi';

import './ClassPage.css';
import { ScoreAttributes, UserAttributes, UserAuth } from '../../types/types';
import api from '../../services/api';

interface ListStudentsSerialized{
    student: UserAttributes,
    scores: ScoreAttributes[],
}

export function ClassPage() {
    const params = useParams();
    const [busca, setBusca] = useState("");
    const [students, setStudents] = useState<ListStudentsSerialized[]>([]);
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

    function editScore(
        user_id: number | undefined,
        score_id: number | undefined,
        bimester: string,
        value: string
    ){
        let newStudents = students.map(student => {
            if (student.student.id === user_id) {
                let newScore = student.scores.map(score => {
                    if (score.id === score_id) {
                        return {
                            ...score,
                            [bimester]: parseFloat(value),
                        }
                    }

                    return score;
                });

                return {
                    ...student,
                    scores: newScore,
                }
            }

            return student;
        });


        setStudents(newStudents);
    }

    useEffect(() => {
        api.get(`/users/list-students/${userAuth?.user_id}/by-class/${params.id}}`).then(response => {
            setStudents(response.data);
        });
    }, []);

    return(
        <div className='class-page'>
            <Navbar />
            <div className='class-box'>
                <div className='filter'>
                    <input 
                        type="text"
                        placeholder='Buscar aluno' 
                        value={busca}
                        onChange={e => setBusca(e.target.value)} 
                    />
                    <BiSearchAlt />
                </div>

                {students.map(student => {
                    return (
                        <div className='student-container'>
                            <div className='student-box'>
                                <div className='left'>
                                    <h2>{student.student.name}</h2>
                                    <h2>{student.student.registration}</h2>
                                </div>
                            </div>
                            <table className='score-table'>
                                <thead className='table-head'>
                                    <tr className='table-row'>
                                        <td className='table-column'>Disciplina</td>
                                        <td className='table-column'>1° BIMESTRE</td>
                                        <td className='table-column'>2° BIMESTRE</td>
                                        <td className='table-column'>3° BIMESTRE</td>
                                        <td className='table-column'>4° BIMESTRE</td>
                                        <td className='table-column'>Média Final</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {student.scores.map(score => {
                                        return (
                                            <tr className='table-row'>
                                                <th className='table-column'>{score.matter}</th>
                                                <th className='table-column'>
                                                    <input
                                                        value={score.first_bimester} 
                                                        type='number'
                                                        onChange={
                                                            e => editScore(
                                                                student.student.id,
                                                                score.id,
                                                                'first_bimester',
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className='table-column'>
                                                    <input
                                                        value={score.second_bimester}
                                                        type='number'
                                                        onChange={
                                                            e => editScore(
                                                                student.student.id,
                                                                score.id,
                                                                'second_bimester',
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className='table-column'>
                                                    <input
                                                        value={score.third_bimester} 
                                                        type='number'
                                                        onChange={
                                                            e => editScore(
                                                                student.student.id,
                                                                score.id,
                                                                'third_bimester',
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className='table-column'>
                                                    <input
                                                        value={score.fourth_bimester}
                                                        type='number'
                                                        onChange={
                                                            e => editScore(
                                                                student.student.id,
                                                                score.id,
                                                                'fourth_bimester',
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className='table-column'>{averageScores(score)}</th>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}