import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../GoBackButton';
import KitKatGif from './KitKat.gif';
import './KitKat.css';

function KitKat() {
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
            flashInterval = setInterval(toggleFlash, 1000);
        }, 600);
        return () => {
            clearTimeout(startFlashingTimeout);
            clearInterval(flashInterval);
            if (container)
                container.classList.remove('flash');
        };
    }, []);
    return (
        <>
            <div ref={containerRef} className="kit-kat-container">
                <img
                    src={KitKatGif}
                    alt="KitKat Half Cracked"
                    className="kitkat-gif" />
            </div>
            <GoBackButton navigate={navigate} />
        </>
    );
}

export default KitKat;