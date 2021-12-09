import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserImg from '../User.png';

import './Navbar.css';

import IconDM from '../IconDM.png';
import { UserAuth } from '../../types/types';

export function Navbar() {
    const navigate = useNavigate();
    const [userAuth] = useState<UserAuth | null>(
        JSON.parse(sessionStorage.getItem("auth") || '')
    );

    console.log(userAuth?.type);

    async function handleScore() {
        await navigate('/score');
    }

    async function handleProfile() {
        await navigate('/profile');
    }

    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src={IconDM} alt="Icone" />

                <div className="nav-options light">
                    <h2>Horários</h2>
                </div>
                <div className="nav-options black" onClick={handleScore}>
                    <h2>Notas</h2>
                </div>
                <div className="nav-options light" onClick={handleProfile}>
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