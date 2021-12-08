import React from 'react';

import './ScorePage.css';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

export function ScorePage() {
    return(
        <div className="score-page">
            <Navbar />
            <div className="score-head">
                <h3>Aluno: Iago Bruno</h3>
                <h3>Turma: Informática A</h3>
            </div>
            <table>
                <tr><th colSpan={6}>Pontuação de Notas</th></tr>
                <td><strong>Matéria</strong></td>
                <td><strong>1º BIM</strong></td>
                <td><strong>2º BIM</strong></td>
                <td><strong>3º BIM</strong></td>
                <td><strong>4º BIM</strong></td>
                <tr>
                    <td>Matemática</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
    );
}