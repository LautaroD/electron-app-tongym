import React from 'react';
import './CardRutine.scss';
import moment from 'moment';
moment().format();

const formatMonth = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre'
};

export default function CardRutine({ nombre, fecha = 'Sin asignar' }) {
    if (fecha !== 'Sin asignar') {
        fecha = moment(fecha).month()
    }

    return (
        <div className='cardRutine'>
            <div className='cardRutine__header'>
                <p>{nombre}</p>
            </div>
            <div className='cardRutine__subHeader'>
                {formatMonth[fecha + 1]}
            </div>
        </div>
    )
}
