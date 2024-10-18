import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../GoBackButton';
import './MMs.css';

function MMs() {
    const navigate = useNavigate();
    const svgRef = useRef(null);

    useEffect(() => {
        const xmlns = "http://www.w3.org/2000/svg";
        const createMandM = () => {
            const g = document.createElementNS(xmlns, "g");
            g.setAttribute(
                "transform",
                `translate(${Math.random() * window.innerWidth}, -50)`);
            const circle = document.createElementNS(xmlns, "circle");
            circle.setAttribute("r", 15);
            circle.setAttribute("fill", getRandomColor());
            const text = document.createElementNS(xmlns, "text");
            text.setAttribute("x", 0);
            text.setAttribute("y", 5);
            text.setAttribute("font-size", "20px");
            text.setAttribute("font-family", "Arial, sans-serif");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("fill", "#FFFFFF");
            text.textContent = "m";
            g.appendChild(circle);
            g.appendChild(text);
            svgRef.current.appendChild(g);
            setTimeout(() => {
                svgRef.current.removeChild(g);
            }, 10000);
            animateMandM(g);
        };

        const animateMandM = (g) => {
            let position = -20;
            const interval = setInterval(() => {
                position += 2;
                g.setAttribute(
                    "transform",
                    `translate(${parseFloat(g.getAttribute("transform")
                        .split(',')[0]
                        .slice(10))}, 
                    ${position})`);
                if (position > window.innerHeight) {
                    clearInterval(interval);
                    svgRef.current.removeChild(g);
                }
            }, 8);
        };
        const getRandomColor = () => {
            const colors = [
                '#FF0000',
                '#00FF00',
                '#0000FF',
                '#FFFF00',
                '#FF00FF',
                '#00FFFF'
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        };
        const intervalId = setInterval(createMandM, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="mm-container">
                <h1>M&M's</h1>
                <svg ref={svgRef} width="100%" height="100%" />
                <GoBackButton navigate={navigate} />
            </div></>
    );
}

export default MMs;