import React from 'react';
import { useNavigate } from 'react-router-dom';

import UserImg from '../User.png';

import './Navbar.css';

import Icone from '../../assets/Icone.png';

export function Navbar() {
    const navigate = useNavigate();

    async function handleHome() {
        await navigate('/score');
    }

    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src={Icone} alt="Icone" />

                <div className="nav-options light">
                    <h2>Horários</h2>
                </div>
                <div className="nav-options black" onClick={handleHome}>
                    <h2>Notas</h2>
                </div>
                <div className="nav-options light">
                    <h2>Perfil</h2>
                </div>
            </div>
            
            <div className="nav-right">
                <h3>Bem vindo, IagoBruno!</h3>
                <img src={UserImg} alt="Icone" />
            </div>
        </nav>
    );
}