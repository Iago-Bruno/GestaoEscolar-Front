import React, { useState } from 'react';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

import { BiSearchAlt } from 'react-icons/bi';

import './ClassPage.css';

export function ClassPage() {
    const [busca, setBusca] = useState("");

    const [first, setfirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");
    const [average, setAverage] = useState("");

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
                <div className='student-container'>
                    <div className='student-box'>
                        <div className='left'>
                            <h2>Iago Bruno</h2>
                            <h2>20129003187</h2>
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
                            <tr className='table-row'>
                                <th className='table-column'>Matemática</th>
                                <th className='table-column'><input value={first} onChange={e => setfirst(e.target.value)} /></th>
                                <th className='table-column'><input value={second} onChange={e => setSecond(e.target.value)} /></th>
                                <th className='table-column'><input value={third} onChange={e => setThird(e.target.value)} /></th>
                                <th className='table-column'><input value={fourth} onChange={e => setFourth(e.target.value)} /></th>
                                <th className='table-column'><input value={average} onChange={e => setAverage(e.target.value)} /></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='student-container'>
                    <div className='student-box'>
                        <div className='left'>
                            <h2>Iago Silva</h2>
                            <h2>10229003187</h2>
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
                            <tr className='table-row'>
                                <th className='table-column'>Matemática</th>
                                <th className='table-column'>6,5</th>
                                <th className='table-column'>7</th>
                                <th className='table-column'>4</th>
                                <th className='table-column'>10</th>
                                <th className='table-column'>6,87</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}