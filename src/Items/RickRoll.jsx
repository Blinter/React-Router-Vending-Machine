import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../GoBackButton';
import RickAstley from './RickAstley.gif';
import './RickAstley.css';

function RickRoll() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        let flashInterval;

        function toggleFlash() {
            if (container)
                container.classList.toggle('flash');
        }
        const startFlashingTimeout = setTimeout(() => {
            flashInterval = setInterval(toggleFlash, 250);
        }, 900);
        return () => {
            clearTimeout(startFlashingTimeout);
            clearInterval(flashInterval);
            if (container)
                container.classList.remove('flash');
        };
    }, []);
    return (
        <>
            <div ref={containerRef} className="rick-roll-container">
                <img
                    src={RickAstley}
                    alt="Rick Astley Dancing"
                    className="rick-gif" />
            </div>
            <GoBackButton navigate={navigate} />
        </>
    );
}

export default RickRoll;