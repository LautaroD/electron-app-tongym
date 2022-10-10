import React from 'react';


export function CardInfo({ infoClient }) {
    console.log(infoClient);
    return (
        <div className='cardInfo__content'>
            <h1>{infoClient[0].name}</h1>
        </div>
    )
}
