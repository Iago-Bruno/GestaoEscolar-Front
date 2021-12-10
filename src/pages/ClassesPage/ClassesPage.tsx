import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaDna } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';

import './ClassesPage.css';

export function ClassesPage() {
    const navigate = useNavigate();

    async function handleClass() {
        await navigate('/class');
    }

    return(
        <div className="classes-page">
            <Navbar />
            <div className="classes-box">
                <div className='classes' onClick={handleClass}>
                    <div className='class-header'>
                        <h2>1º Informática "A"</h2>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Informática</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 1°</h3>
                    </div>
                </div>
                <div className='classes' onClick={handleClass} >
                    <div className='class-header'>
                        <h2>2º Informática "A"</h2>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Informática</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 2°</h3>
                    </div>
                </div>
                <div className='classes' onClick={handleClass} >
                    <div className='class-header'>
                        <h2>3º Informática "A"</h2>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Informática</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 3°</h3>
                    </div>
                </div>
                <div className='classes' onClick={handleClass} >
                    <div className='class-header'>
                        <h2>1º Análises "A"</h2>
                        <FaDna />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Análises</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 1°</h3>
                    </div>
                </div>
                <div className='classes' onClick={handleClass} >
                    <div className='class-header'>
                        <h2>2º Análises "A"</h2>
                        <FaDna />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Análises</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 2°</h3>
                    </div>
                </div>
                <div className='classes' onClick={handleClass} >
                    <div className='class-header'>
                        <h2>3º Análises "A"</h2>
                        <FaDna />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Análises</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 3°</h3>
                    </div>
                </div>
                <div className='classes' onClick={handleClass} >
                    <div className='class-header'>
                        <h2>1º Agroecologia "A"</h2>
                        <RiPlantFill />
                    </div>
                    <div className='class-body'>
                        <h3>Curso: Agroecologia</h3>
                        <h3>Turma: A</h3>
                        <h3>Ano: 1°</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}