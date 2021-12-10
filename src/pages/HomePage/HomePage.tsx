import React from 'react';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

import Landing from '../../assets/landing.jpg';

import './HomePage.css';

export function HomePage() {
    return(
        <div className="home-page">
            <Navbar />
            <div className='home'>
                <div className='home-content'>
                    <h2>Bem vindo ao WebSite</h2>
                    <h4>Esta ferramenta é de uso exclusivo de professores e alunos 
                        para o acompanhamento de assuntos acadêmicos.</h4>
                </div>  
                <img src={Landing} alt='blabla' />
            </div>
        </div>
    );
}