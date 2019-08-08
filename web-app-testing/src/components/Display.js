import React from 'react';

function Display({stateValues}) {
    const {strike, ball, foul, hit} = stateValues
    // console.log(props);
    return(
        <div>
            <p>Strikes: {strike}</p>
            <p>Balls: {ball}</p>
            <p>Hits: {hit}</p>
            <p></p>
        </div>
    )
}

export default Display;