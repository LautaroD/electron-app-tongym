import React from 'react';
import './Alert.scss';
import { Icon } from 'semantic-ui-react';

export function Alert({ alert, type, message }) {

    setTimeout(() => {
        alert({ show: false, type: '', message: '' })
    }, 3000);

    function typeOfAlert() {
        if (type === 'success') return (
            <div className='alert-container__success'>
                <Icon name='check circle' size='large' inverted color='grey' />
                <p>{message}</p>
            </div>
        )
        else if (type === 'error') return (
            <div className='alert-container__error'>
                <Icon name='cancel' size='large' inverted color='grey' />
                <p>{message}</p>
            </div>
        )
    }

    return (
        <>
            {typeOfAlert()}
        </>
    )
}

Alert.defaultProps = {
    show: false
}