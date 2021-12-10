import React from 'react';

import './ScorePage.css';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

export function ScorePage() {
    return(
        <div className="score-page">
            <Navbar />
            {/* <div className="score-head">
                <h3>Aluno: Iago Bruno</h3>
                <h3>Turma: Informática A</h3>
                <h3>Ano: 3° Série</h3>
            </div> */}
            <table>
                <thead>
                    <tr>
                        <th colSpan={9} style={{fontSize: "16px"}}>Pontuação de Notas</th>
                    </tr>
                    <tr>
                        <th colSpan={5} style={{fontSize: "16px"}}>Aluno: Iago Bruno</th>
                        <th colSpan={3} style={{fontSize: "16px"}}>Turma: Informática A</th>
                        <th colSpan={1} style={{fontSize: "16px"}}>Ano: 3° Série</th>
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
                    <tr>
                        <td colSpan={2}>Matemática</td>
                        <td colSpan={2}>Lanne</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Biologia</td>
                        <td colSpan={2}>Rafael</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Português</td>
                        <td colSpan={2}>Amanda</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>História</td>
                        <td colSpan={2}>Adrianna</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Artes</td>
                        <td colSpan={2}>Cida</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Inglês</td>
                        <td colSpan={2}>Klecio</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}