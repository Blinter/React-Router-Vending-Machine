import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../GoBackButton';
import KoolAidMan from './KoolAidMan.webp';
import './KoolAid.css';

function KoolAid() {
    const navigate = useNavigate();

    useEffect(() => {
        const wall = document.querySelector('.wall');
        const koolAidMan = document.querySelector('.kool-aid-man');
        let startTime = null;
        let duration = 1000;
        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const scaleFactor = 1 + progress * 0.5;
            wall.style.transform = `scale(${scaleFactor})`;
            wall.style.opacity = `${1 - progress}`;
            koolAidMan.style.opacity = `${progress}`;
            koolAidMan.style.transform = `translate(-50%, -50%) scale(${progress})`;
            if (progress > 0 && koolAidMan.style.visibility !== 'visible') {
                koolAidMan.style.visibility = 'visible';
            }
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 1000);
        return () => {
            wall.style.transform = '';
            wall.style.opacity = '';
            koolAidMan.style.opacity = '';
            koolAidMan.style.transform = '';
            koolAidMan.style.visibility = 'hidden'; // Reset visibility
        };
    }, []);

    return (
        <>
            <div className="kool-aid-container">
                <div className="wall"></div>
                <picture>
                    <source
                        type="image/webp"
                        srcSet={KoolAidMan} />
                    <img
                        className="kool-aid-man"
                        src={KoolAidMan}
                        alt="Kool-Aid Man" />
                </picture>
            </div>
            <GoBackButton navigate={navigate} />
        </>
    );
}

export default KoolAid;