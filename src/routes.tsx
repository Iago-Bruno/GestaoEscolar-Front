import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ScorePage } from './pages/ScorePage/ScorePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { ClassesPage } from './pages/ClassesPage/ClassesPage';
import { ClassPage } from './pages/ClassPage/ClassPage';

export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="score" element={<ScorePage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="classes" element={<ClassesPage />} />
                <Route path="class" element={<ClassPage />} />
            </Routes>
        </BrowserRouter>
    );
}