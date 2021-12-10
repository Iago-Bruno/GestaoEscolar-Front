import React, { useEffect, useState } from 'react';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

import PerfilImg from '../../assets/User.png';
import api from '../../services/api';
import { UserAttributes, UserAuth } from '../../types/types';

import './ProfilePage.css';

export function ProfilePage() {
    const [user, setUser] = useState<UserAttributes>({
        email: '',
        name: '',
        password: '',
        registration: 0,
        type: '',
    });
    const [userAuth] = useState<UserAuth | null>(
        JSON.parse(sessionStorage.getItem("auth") || '')
    );

    function handleSetUser(value: any, field: string){
        const newUser = {
            ...user,
            [field]: value,
        };

        setUser(newUser);
    }

    useEffect(() => {
        api.get(`users/${userAuth?.user_id}`).then((response) => {
            setUser(response.data);
        })
    }, [userAuth]);


    return(
        <div className="profile-page">
           <Navbar />
           <div className="profile">
               <div className="profile-box">
                    <img src={PerfilImg} alt="Perfil" />

                    <div className="user-option">
                        <label>E-mail*</label>
                        <div className="option">
                            <input 
                                value={user?.email} 
                                onChange={(e) => handleSetUser(e.target.value, 'email')}
                            />
                        </div>
                    </div>
                    <div className="user-option">
                        <label>Nome*</label>
                        <div className="option">
                            <input 
                                value={user?.name} 
                                onChange={(e) => handleSetUser(e.target.value, 'name')}
                            />
                        </div>
                    </div>
                    <div className="user-option">
                        <label>Número de matricula*</label>
                        <div className="option">
                            <h4>{user.registration}</h4>
                        </div>
                    </div>
                    <div className="user-option">
                        <label>Tipo do usúario*</label>
                        <div className="option">
                            <h4>{user.type}</h4>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
}