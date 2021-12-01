import React from 'react';
import { FiUser } from 'react-icons/fi';

import iconDM from '../assets/IconDM.png';

import './RegisterPage.css';

export function RegisterPage() {
    return (
        <div className="register-page">
            <div className="register-form">
                <div className="logo-form">
                    <img src={iconDM} alt="Icone-DM" />
                    <div className="logo-text">
                        <h1>Bem vindo!!</h1>
                        <h4>ECIT Dom Marcelo Pinto Carvalheira</h4>
                    </div>
                </div>
                <div className="user-form">
                    <div className="name">
                        <FiUser className="icon" />
                        <input placeholder="Nome" className="input" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

