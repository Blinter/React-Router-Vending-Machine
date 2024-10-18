import React from 'react';
import { Link } from 'react-router-dom';
import { items, pathNames } from './items';
import './Menu.css';

function Menu() {
    return (
        <div className="prompt-dialog">
            <nav
                className="button-container">
                {items.map((item, index) => (
                    <Link
                        key={item}
                        to={`/${pathNames[index]}`}>
                        <button className="button">{item}</button>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Menu;