import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import UserImg from '../User.png';

import './Navbar.css';

import IconDM from '../IconDM.png';

import { UserAttributes } from '../../types/types';
import { UserAuth } from '../../types/types';
import api from '../../services/api';


export function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserAttributes>()
    const [userAuth] = useState<UserAuth | null>(
        JSON.parse(sessionStorage.getItem("auth") || '')
    );

    useEffect(() => {
        api.get(`users/${userAuth?.user_id}`).then((response) => {
            setUser(response.data);
        })
    }, [userAuth]);

    async function handleClasses() {
        await navigate('/classes');
    }

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
                <div className="nav-options light" onClick={handleProfile}>
                    <h2>Perfil</h2>
                </div>
                {userAuth?.type === "professor" ?
                    <div className="nav-options black" onClick={handleClasses}>
                        <h2>Turmas</h2>
                    </div>
                : 
                    <div className="nav-options black" onClick={handleScore}>
                        <h2>Notas</h2>
                    </div>
                }
            </div>
            
            <div className="nav-right">
                <h3>Bem Vindo, {user?.name}</h3>
                <img src={UserImg} alt="Icone" />
            </div>
        </nav>
    );
}