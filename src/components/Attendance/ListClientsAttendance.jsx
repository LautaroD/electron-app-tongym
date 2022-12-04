import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import './ListClientsAttendance.scss';

export default function ListClientsAttendance({ list }) {

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>NOMBRE</Table.HeaderCell>
                        <Table.HeaderCell>CONTACTO</Table.HeaderCell>
                        <Table.HeaderCell>ESTADO</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        list.map(element => {
                            return (element.payment === null || element.payment.length < 1)
                                ? (<Table.Row error key={element.key} className='tableError'>
                                    <Table.Cell width={6}>{element.text}</Table.Cell>
                                    <Table.Cell width={6}>{element.contacto}</Table.Cell>
                                    <Table.Cell width={6}><Icon name='attention' color='red' />Sin pago registrado</Table.Cell>
                                </Table.Row>)
                                : (<Table.Row positive key={element.key} className='tableAfirmative'>
                                    <Table.Cell width={6}>{element.text}</Table.Cell>
                                    <Table.Cell width={6}>{element.contacto}</Table.Cell>
                                    <Table.Cell width={6}>${element.payment}</Table.Cell>
                                </Table.Row>)
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
