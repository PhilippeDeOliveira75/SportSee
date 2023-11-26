import '@components/CardUser/CardUser.scss';
import { NavLink } from "react-router-dom";
import React from 'react';

function CardUser({ isOn }) {

    return (
        <>
            <div className="cardUser">
                <NavLink className={`link ${isOn ? 'api' : 'mock'}`} to={'/userPages/12'} >
                    <div className='w-card-user-home'>
                        <p className='card-user-home-title'>1</p>
                    </div>
                </NavLink>
                <NavLink className={`link ${isOn ? 'api' : 'mock'}`} to={'/userPages/18'} >
                    <div className='w-card-user-home'>
                        <p className='card-user-home-title'>2</p>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default CardUser