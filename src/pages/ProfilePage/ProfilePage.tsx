import React from 'react';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

import PerfilImg from '../../assets/User.png';

import './ProfilePage.css';

export function ProfilePage() {
    return(
        <div className="profile-page">
           <Navbar />
           <div className="profile">
               <div className="profile-box">
                    <img src={PerfilImg} alt="Perfil" />

                    <div className="user-option">
                        <label>E-mail*</label>
                        <div className="option">
                            <h4>brunin3@gmail.com</h4>
                        </div>
                    </div>
                    <div className="user-option">
                        <label>Nome*</label>
                        <div className="option">
                            <h4>Iago</h4>
                        </div>
                    </div>
                    <div className="user-option">
                        <label>Tipo*</label>
                        <div className="option">
                            <h4>Aluno</h4>
                        </div>
                    </div>
                    <div className="user-option">
                        <label>Número de Registro</label>
                        <div className="option">
                            <h4>123123123</h4>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
}