import React from 'react';

import './ScorePage.css';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

export function ScorePage() {
    return(
        <div className="score-page">
            <Navbar />
            <table>
                <thead>
                    <tr>
                        <th><strong>Pontuação de Notas</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Matéria</strong></td>
                        <td><strong>1º BIM</strong></td>
                        <td><strong>2º BIM</strong></td>
                        <td><strong>3º BIM</strong></td>
                        <td><strong>4º BIM</strong></td>
                    </tr>
                    <tr>
                        <td>Matemática</td>
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