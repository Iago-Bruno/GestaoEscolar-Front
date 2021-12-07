import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ScorePage } from './pages/ScorePage/ScorePage';

export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<RegisterPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="score" element={<ScorePage />} />
            </Routes>
        </BrowserRouter>
    );
}