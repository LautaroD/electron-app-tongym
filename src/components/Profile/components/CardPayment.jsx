import React, { useState } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './CardPayment.scss';
import Months from './Months';

export function CardPayment({ payment }) {
    const [year, setYear] = useState(new Date().getFullYear())

    function nextYear() {
        setYear(year + 1);
    }

    function prevYear() {
        setYear(year - 1);
    }

    return (
        <>
            <div className='cardInfo__header'>
                <Header as='h3'>Asistencia y pagos</Header>
            </div>
            <div className='cardInfo__subHeader'>
                <span style={{ cursor: 'pointer' }} onClick={() => prevYear()}><Icon name='arrow left' size='big' /></span>
                <Header as='h2'>{year}</Header>
                <span style={{ cursor: 'pointer' }} onClick={() => nextYear()}><Icon name='arrow right' size='big' /></span>
            </div>
            <div className='cardInfo__content'>
                <Months />
            </div>
        </>
    )
}
