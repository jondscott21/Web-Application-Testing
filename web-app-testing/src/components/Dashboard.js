import React from 'react';

function Dashboard({stateUpdater}) {
    const handleButtonClick = (value) => {
        stateUpdater(value);
    }
    return(
        <div>
            <button data-testid="strike-button" onClick={() => handleButtonClick('strike')}>Strike</button>
            <button data-testid="ball-button" onClick={() => handleButtonClick('ball')}>Ball</button>
            <button data-testid="foul-button" onClick={() => handleButtonClick('foul')}>Foul</button>
            <button data-testid="hit-button" onClick={() => handleButtonClick('hit')}>Hit</button>
        </div>
    );
    
}

export default Dashboard;