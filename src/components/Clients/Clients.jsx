import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import ListOfClients from './ListOfClients';
import './Clients.scss';
import SearchOfClients from './SearchOfClients';
import { getAllClients } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { EditClient } from '../Forms';
import { BasicModal } from '../../shared';

export function Clients() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllClients());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
    };

    const openModal = (type) => {
        if (type === 'editClient') {
            setTitleModal('Actualizar información');
            setContentModal(<EditClient onClose={closeModal} />)
        }
        setShowModal(true);
    }


    const clients = useSelector((state) => state.clientsReducer.clients)
    const clientsCopy = useSelector((state) => state.clientsReducer.clientsCopy)
    return (
        <div>
            {
                (clients === null || clients === undefined)
                    ? (<>
                        <Dimmer active inverted>
                            <Loader inverted >Cargando...</Loader>
                        </Dimmer>

                    </>)
                    : (clientsCopy.length === 0)
                        ? <h1 className='component-rutine__titleNoRutines'>No hay clientes registrados...</h1>
                        : (
                            <>
                                <div className='clients-section'>
                                    <span className='clients-section__header'>
                                        <h2>Clientes</h2>
                                        <p>Total de clientes: <span className='contador'>{clientsCopy.length}</span></p>
                                    </span>
                                    <SearchOfClients clients={clients} clientsCopy={clientsCopy.length} />
                                    <ListOfClients clients={clients} openModal={openModal} />
                                </div>
                            </>
                        )
            }
            <BasicModal
                show={showModal}
                onClose={closeModal}
                title={titleModal}
                children={contentModal}
            />
        </div>
    )
}
