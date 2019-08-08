import React from 'react';

function Display({stateValues}) {
    const {strike, ball, foul, hit} = stateValues
    return(
        <div>
            <p data-testid="strike">Strikes: {strike}</p>
            <p data-testid="ball">Balls: {ball}</p>
            <p data-testid="hit">Hits: {hit}</p>
        </div>
    )
}

export default Display;