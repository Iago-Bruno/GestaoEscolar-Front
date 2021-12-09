import React, { useState, FormEvent } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import api from '../../services/api';

import { AiOutlineMail } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md';

import iconDm from '../../assets/IconDM.png';

import './LoginPage.css';

export function LoginPage() {
    let navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        const response = await api.post(
            'login',
            {
                email,
                password
            }
        );

        sessionStorage.setItem("auth", JSON.stringify(response.data));

        await navigate('/home');
    }

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
                <form className="user-form" onSubmit={handleLogin}>
                    <h1>Entrar</h1>

                    <div className="form-input">
                        <AiOutlineMail className="icon" />
                        <input 
                            placeholder="E-mail" 
                            className="input" 
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-input">
                        <MdLockOutline className="icon" />
                        <input 
                            placeholder="Senha" 
                            className="input" 
                            type="text"
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>

                    <button className="form-button">Entrar</button>

                    <h6>Se não possui conta, cadastre-se <Link to="/register">clicando aqui</Link></h6>
                </form>
            </div>
        </div>  
    );
}