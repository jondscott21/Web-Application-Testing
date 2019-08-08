import React from 'react';

function Dashboard({stateUpdater}) {
    const handleButtonClick = (value) => {
        stateUpdater(value);
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => handleButtonClick('strike')}>Strike</button>
            <button onClick={() => handleButtonClick('ball')}>Ball</button>
            <button onClick={() => handleButtonClick('foul')}>Foul</button>
            <button onClick={() => handleButtonClick('hit')}>Hit</button>
        </div>
    );
    
}

export default Dashboard;