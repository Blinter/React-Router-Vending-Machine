import React from 'react';
import vendingMachineImage from './assets/VendingMachine.jpg';
import PromptDialog from './PromptDialog';
import Menu from './Menu';
import './VendingMachine.css';

function VendingMachine() {
    return (
        <>
            <PromptDialog />
            <img
                className="vendingLogo"
                src={vendingMachineImage}
                alt="Vending Machine Logo"
            />
            <Menu />
        </>
    );
}

export default VendingMachine;