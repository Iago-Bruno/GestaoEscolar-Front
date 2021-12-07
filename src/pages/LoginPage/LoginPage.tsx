import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md';

import iconDm from '../../assets/IconDM.png';

import './LoginPage.css';

export function LoginPage() {
    return(
        <div className="login-page">
            <div className="login-form">
                <div className="logo-form">
                    <img src={iconDm} alt="Icone-DM" />
                    <div className="logo-text">
                        <h1>Bem vindo!!</h1>
                        <h4>ECIT Dom Marcelo Pinto Carvalheira</h4>
                    </div>
                </div>
                <form className="user-form">
                    <h1>Entrar</h1>

                    <div className="form-input">
                        <AiOutlineMail className="icon" />
                        <input placeholder="E-mail" className="input" type="text" />
                    </div>
                    <div className="form-input">
                        <MdLockOutline className="icon" />
                        <input placeholder="Senha" className="input" type="text" />
                    </div>

                    <button className="form-button">Entrar</button>

                    <h6>Se não possui conta, cadastre-se clicando aqui</h6>
                </form>
            </div>
        </div>  
    );
}