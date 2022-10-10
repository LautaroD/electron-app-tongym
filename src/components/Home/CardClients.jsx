import React from 'react';
import './CardClients.scss';

export default function CardClients({ clients, title }) {
    return (
        <div className='card-home'>
            <div className='card-home__header'>
                <h3>{title} </h3>
            </div>
            <div className='card-home__content'>
                {clients}
            </div>
        </div>
    )
}
