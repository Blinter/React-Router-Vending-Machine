import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../GoBackButton';
import './RedBull.css';
import RedBullGif from './RedBull.gif';

function RedBull() {
    const navigate = useNavigate();

    return (
        <div className="red-bull-container">
            <h1>Red Bull</h1>
            <p className="slogan">Gives You Wings</p>

            <img
                src={RedBullGif}
                alt="Red Bull Gives You Wings"
                className="redbull-gif" />
            <GoBackButton navigate={navigate} />
        </div>
    );
}

export default RedBull;