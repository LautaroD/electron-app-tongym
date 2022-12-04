import React, { useState, useEffect } from 'react';
import { Form, Select, Table, Icon, Input, Button, Label } from 'semantic-ui-react';
import './UpdateList.scss';
import { Attedance } from '../../api';
import { useSelector } from 'react-redux';

const attendanceController = new Attedance();


export default function UpdateList({ clients, closeModal, month, year }) {
    const [listClients, setListClients] = useState([]);
    const [copyListClient, setCopyListClient] = useState([]);

    const listAttendance = useSelector((state) => state.attendanceReducer.listClients);

    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        let result = listAttendance.filter(list => {
            if (year === list.info.year && month === list.info.month) {
                return list.client
            }
        })
        setListClients(result);
        setCopyListClient(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setCopyListClient(listClients)
    }, [listClients])


    function deleteClient(client) {
        let result = (listClients[0].client).filter(c => c.key !== client.key);
        setListClients([...listClients, listClients[0].client = result])
    }

    function saveAttedance() {
        attendanceController.saveAttendance(copyListClient[0], month, year);
        closeModal();
    }

    function changePayment(clientKey, data) {
        let result = (copyListClient[0].client).filter(c => c.key === clientKey);
        result[0].payment = data;

        let updatedClient = (copyListClient[0].client).filter(c => c.key !== clientKey);
        updatedClient.push(result);
    }

    // console.log(listClients);
    return (
        <div className='updateList__body'>
            <>
                <Form.Field
                    clearable
                    name='client'
                    control={Select}
                    options={clients}
                    placeholder='Nombre del cliente'
                    search
                    searchInput={{ id: 'attendanceClient' }}
                    className='selectClientAttendance'
                    value={null}
                    onChange={(e, data) => {
                        let exists = false;
                        let result = clients.filter(client => client.value === data.value);
                        if (result.length > 0) {
                            if (listClients.length === 0) return setListClients([{ info: { year: year, month: month }, client: [...result] }]);
                            ((listClients[0].client)).forEach(element => {
                                if (element.key === result[0].key) exists = true;
                            });
                        }
                        result = result.flat(Infinity)
                        if (!exists) setListClients([...listClients, listClients[0].client.push(...result)])
                        else return
                    }}
                />
            </>
            <div className='updateList__table'>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nombre</Table.HeaderCell>
                            <Table.HeaderCell>Pago</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            (listClients.length < 1)
                                ? <><Table.Row style={{ margin: '15px', display: 'block' }}><Table.Cell>No hay clientes registrados...</Table.Cell></Table.Row></>
                                : (listClients[0].client).map(client => (
                                    <Table.Row key={client.key}>
                                        <Table.Cell width={12}>{client.text}</Table.Cell>
                                        {
                                            (client.payment === null)
                                                ? <Table.Cell>
                                                    <Input
                                                        labelPosition='right'
                                                        type='number'
                                                        placeholder='Monto...'
                                                        onChange={(data) => { changePayment(client.key, data.target.value) }}
                                                    >
                                                        <Label basic>$</Label>
                                                        <input />
                                                    </Input>
                                                    {/* <Input
                                                        type='number'
                                                        placeholder='Escriba aquí...'
                                                        onChange={(data) => changePayment(client.key, data.target.value)}
                                                    /> */}
                                                </Table.Cell>
                                                : <Table.Cell>
                                                    <Input
                                                        labelPosition='right'
                                                        type='number'
                                                        placeholder='Monto...'
                                                        defaultValue={client.payment}
                                                        onChange={(data) => { changePayment(client.key, data.target.value) }}
                                                    >
                                                        <Label basic>$</Label>
                                                        <input />
                                                    </Input>
                                                    {/* <Input
                                                        labelPosition='right'
                                                        type='number'
                                                        placeholder='Escriba aquí...'
                                                        defaultValue={client.payment}
                                                        onChange={(data) => { changePayment(client.key, data.target.value) }}
                                                    /> */}
                                                </Table.Cell>
                                        }
                                        <Table.Cell><Icon name='cancel' onClick={() => deleteClient(client)} /></Table.Cell>
                                    </Table.Row>
                                ))

                        }
                    </Table.Body>
                </Table>
            </div>
            <Button type='submit' onClick={() => saveAttedance()}>Guardar</Button>
        </div>
    )
}
