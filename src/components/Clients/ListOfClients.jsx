import React from 'react';
import { Table, Icon, Popup, Dimmer, Loader } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { editClient } from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function ListOfClients({ clients, openModal, clientsCopy }) {

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loadingReducer.isLoading)

    const clientEdit = (client) => {
        openModal('editClient');
        dispatch(editClient(client));
    }

    return (
        <>
            {
                (isLoading)
                    ? <Dimmer active inverted>
                        <Loader inverted >Cargando...</Loader>
                    </Dimmer>
                    :
                    (clients.length === 0)
                        ? <h4>No hay resultados compatibles con su busqueda...</h4>
                        : <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                                    <Table.HeaderCell>Apellido</Table.HeaderCell>
                                    <Table.HeaderCell>Edad</Table.HeaderCell>
                                    <Table.HeaderCell>Genero</Table.HeaderCell>
                                    <Table.HeaderCell>Contacto</Table.HeaderCell>
                                    <Table.HeaderCell>Email</Table.HeaderCell>
                                    <Table.HeaderCell>Registrado</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    clients.map((client) => (
                                        <Table.Row key={client.key}>
                                            <Table.Cell style={{ textTransform: 'capitalize' }}>{(client.name).toUpperCase()}</Table.Cell>
                                            <Table.Cell style={{ textTransform: 'capitalize' }}>{(client.lastName).toUpperCase()}</Table.Cell>
                                            <Table.Cell>{client.birthDate || 'No especificado'}</Table.Cell>
                                            <Table.Cell>{client.gender || 'No especificado'}</Table.Cell>
                                            <Table.Cell>{client.contacto || 'No especificado'}</Table.Cell>
                                            <Table.Cell>{client.email || 'No especificado'}</Table.Cell>
                                            <Table.Cell>{client.startedDate || 'No especificado'}</Table.Cell>
                                            <Table.Cell collapsing>
                                                <Popup content='Editar' trigger={
                                                    <span style={{ cursor: 'pointer' }}>
                                                        <Icon name='edit' onClick={() => clientEdit(client)} />
                                                    </span>} />
                                            </Table.Cell>
                                            <Table.Cell collapsing>
                                                <Popup content='Perfil' trigger={
                                                    <Link to={`/perfil/${client.key}`}>
                                                        <span style={{ cursor: 'pointer' }}>
                                                            <Icon name='search plus' />
                                                        </span>
                                                    </Link>
                                                } />
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
            }
        </>
    )
}
