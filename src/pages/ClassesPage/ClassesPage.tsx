import React, { useEffect, useState } from 'react';

import { Navbar } from '../../assets/GlobalStyles/Navbar';

import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaDna } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { ClassAttributes, UserAuth } from '../../types/types';

import './ClassesPage.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export function ClassesPage() {
    const [classes, setClasses] = useState<ClassAttributes[]>([]);
    const [userAuth] = useState<UserAuth | null>(
        JSON.parse(sessionStorage.getItem("auth") || '')
    );

    // async function handleClass() {
    //     await navigate('/class', { state: { teacher: userAuth?.user_id }});
    // }

    useEffect(() => {
        api.get(`/users/list-teacher-classes/${userAuth?.user_id}`).then(response => {
            setClasses(response.data);
        });
    }, []);

    return(
        <div className="classes-page">
            <Navbar />
            <div className="classes-box">
                {classes.map((oneClass: ClassAttributes) => {
                    return (
                        <div className='classes'>
                            <Link className='link' to={`/class/${oneClass.id}`}>
                                <div className='class-header'>
                                    <h2>
                                        {`${oneClass.name} ${oneClass.code}`}
                                    </h2>
                                    {oneClass.name == 'Informática' && (
                                        <HiOutlineDesktopComputer />
                                    )}
                                    {oneClass.name == 'Análises' && (
                                        <FaDna />
                                    )}
                                    {oneClass.name == 'Agroecologia' && (
                                        <RiPlantFill />
                                    )}
                                </div>
                                <div className='class-body'>
                                    <h3>Curso: {oneClass.name}</h3>
                                    <h3>Turma: {oneClass.code}</h3>
                                    <h3>Ano: {oneClass.year}</h3>
                                </div>
                            </Link>
                        </div>
                    );
                })}
                
            </div>
        </div>
    );
}