import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md';
import { IoIdCardOutline } from 'react-icons/io5';

import iconDM from '../../assets/IconDM.png';

import './RegisterPage.css';

export function RegisterPage() {
    const navigate = useNavigate();

    async function handleRegister() {
        await navigate('/home');
    }

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
                <form className="user-form" onSubmit={handleRegister}>
                    <h1>Criar conta</h1>

                    <div className="form-input">
                        <FiUser className="icon" />
                        <input placeholder="Nome" className="input" type="text" />
                    </div>
                    <div className="form-input">
                        <AiOutlineMail className="icon" />
                        <input placeholder="E-mail" className="input" type="text" />
                    </div>
                    <div className="form-input">
                        <MdLockOutline className="icon" />
                        <input placeholder="Senha" className="input" type="text" />
                    </div>
                    <div className="form-input">
                        <IoIdCardOutline className="icon" />
                        <input placeholder="Número de Registro" className="input" type="text" />
                    </div>

                    <button className="form-button">Cadastrar-se</button>

                    <h6>Se já possui conta, logue-se <Link to="/">clicando aqui.</Link></h6>
                </form>
            </div>
        </div>
    );
}
