import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import { logoPrimary } from '../../assets';
import { BasicModal, Alert } from '../../shared';
import { NewRutine, NewClient, NewExercise } from '../Forms';

export function Sidebar() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);
    const [sizeModal, setSizeModal] = useState('tiny');
    const [alert, setAlert] = useState({
        show: false,
        type: '',
        description: ''
    });

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
        setSizeModal('tiny')
    };

    const openAlert = (type, message) => {
        setAlert({ show: true, type: type, message: message })
    }

    const openModal = (type) => {
        if (type === 'newRutine') {
            setTitleModal('Nueva rutina');
            setSizeModal('large');
            setContentModal(<NewRutine onClose={closeModal} openAlert={openAlert} />)
        }
        else if (type === 'newClient') {
            setTitleModal('Nuevo cliente');
            setContentModal(<NewClient onClose={closeModal} openAlert={openAlert} />)
        }
        else if (type === 'newExercise') {
            setTitleModal('Nuevo ejercicio');
            setContentModal(<NewExercise onClose={closeModal} openAlert={openAlert} />)
        }

        setShowModal(true);
    }

    const { pathname } = useLocation();

    const isCurrentPage = (route) => {
        return route === pathname
    }

    return (
        <>
            <div className='left-menu'>
                <div className='left-menu__logo'>
                    <Image src={logoPrimary} size='medium' />
                </div>
                <Menu secondary vertical fluid>
                    <Menu.Item
                        as={Link}
                        to='/'
                        name='Inicio'
                        icon='home'
                        active={isCurrentPage('/')}
                    />
                    <Menu.Item
                        as={Link}
                        to='/clients'
                        name='Clientes'
                        icon='users'
                        active={isCurrentPage('/clients')}
                    />
                    <Menu.Item
                        as={Link}
                        to='/rutines'
                        name='Rutinas'
                        icon='ordered list'
                        active={isCurrentPage('/rutines')}
                    />
                    <Menu.Item
                        as={Link}
                        to='/ejercicios'
                        name='Ejercicios'
                        icon='folder open'
                        active={isCurrentPage('/ejercicios')}
                    />
                </Menu>

                <Menu secondary vertical fluid>
                    <Menu.Item
                        name='Nuevo Cliente'
                        icon='plus'
                        link
                        onClick={() => openModal('newClient')}
                    />
                    <Menu.Item
                        name='Nuevo Ejercicio'
                        icon='plus'
                        link
                        onClick={() => openModal('newExercise')}
                    />
                    <Menu.Item
                        name='Nueva Rutina'
                        icon='plus'
                        link
                        onClick={() => openModal('newRutine')}
                    />
                </Menu>
                <span className='left-menu__appVersion'>
                    v1.0.0
                </span>
            </div>
            <BasicModal
                show={showModal}
                onClose={closeModal}
                title={titleModal}
                children={contentModal}
                size={sizeModal}
            />
            {
                (alert.show) ? <Alert alert={setAlert} type={alert.type} message={alert.message} /> : <></>
            }

        </>
    )
}
