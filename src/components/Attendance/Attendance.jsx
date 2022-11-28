import React, { useEffect, useState } from 'react';
import Buscador from './Buscador';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClients, getListAttendance, setLoadingTrue, setLoadingFalse } from '../../redux/actions';
import { Header, Icon } from 'semantic-ui-react';
import { BasicModal } from '../../shared';
import UpdateList from './UpdateList';
import './Attendance.scss';
import moment from 'moment';
import ListClientsAttendance from './ListClientsAttendance';

export function Attendance() {

    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState((moment().month() + 1));

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);
    const [sizeModal, setSizeModal] = useState('tiny');

    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clientsReducer.clients);
    const listAttendance = useSelector((state) => state.attendanceReducer.listClients);

    useEffect(() => {
        dispatch(getAllClients());
        dispatch(getListAttendance());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let optionClients = [];
    clients.forEach(client => optionClients.push({
        key: client.key,
        value: client.name + ' ' + client.lastName,
        text: client.name.toUpperCase() + ' ' + client.lastName.toUpperCase(),
        payment: null,
        contacto: client.contacto
    }))

    const openModal = () => {
        setTitleModal('Actualizar lista de asistencias');
        setSizeModal('large');
        setContentModal(<UpdateList year={year} month={month} attendance={listAttendance} clients={optionClients} closeModal={closeModal} />)
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
        setSizeModal('tiny');
        dispatch(setLoadingTrue())
        setTimeout(() => {
            dispatch(setLoadingFalse())
        }, 2000);
    };


    function nextYear() {
        setYear(year + 1);
    }

    function prevYear() {
        setYear(year - 1);
    }

    return (
        <>
            <div className='attendance'>

                <span className='attendance__header'>
                    <h2>Pagos y asistencias</h2>
                </span>
                <div className='attendance__subHeader'>
                    <Buscador setYear={setYear} setMonth={setMonth} month={month} clients={optionClients} attendance={listAttendance} openModal={openModal} />
                </div>
                <div className='attendance__content'>
                    <div className='cardInfo__subHeader'>
                        <span style={{ cursor: 'pointer' }} onClick={() => prevYear()}><Icon name='arrow left' size='big' /></span>
                        <Header as='h2'>{year}</Header>
                        <span style={{ cursor: 'pointer' }} onClick={() => nextYear()}><Icon name='arrow right' size='big' /></span>
                    </div>
                    {
                        // eslint-disable-next-line array-callback-return
                        listAttendance.map(list => {
                            if (year === list.info.year && month === list.info.month) {
                                return (
                                    <span key={(new Date().getMilliseconds())}>
                                        <ListClientsAttendance list={list.client} />
                                    </span>
                                )
                            }
                        })
                    }
                </div>
                <BasicModal
                    show={showModal}
                    onClose={closeModal}
                    title={titleModal}
                    children={contentModal}
                    size={sizeModal}
                />
            </div>
        </>
    )
}
