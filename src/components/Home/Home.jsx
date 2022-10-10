import React from 'react';
import './Home.scss';
import CardClients from './CardClients';
import { Icon } from 'semantic-ui-react';

export function Home() {
    return (
        <div className='home'>
            <span className='home__iconb'>
                <Icon name='lock' size='massive' disabled />
                <p className='home__iconb__textWarning'>Características no disponibles</p>
            </span>
            {/* <div className='home__contentPrimary'>
                <CardClients clients='123' title='Clientes registrados' />
                <CardClients clients='1243' title='Rutinas creadas' />
                <CardClients clients='1243' title='Ejercicios creados' />
            </div> */}
        </div>
    )
}
