import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClient } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Header, Message, Icon } from 'semantic-ui-react';
import { CardPayment, CardInfo } from './components';
import './Profile.scss';
import moment from 'moment';


export function Profile() {
    const infoClient = useSelector((state) => state.clientsReducer.client);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getClient(Number(id)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const antiguedad = () => {
        let fecha = infoClient[0].startDate;
        fecha = moment(fecha);
        let fechaB = moment(new Date());
        return fechaB.diff(fecha, 'days')
    }

    return (
        <div>
            <div className='home'>
                <span className='home__iconb'>
                    <Icon name='lock' size='massive' disabled />
                    <p className='home__iconb__textWarning'>Característica no disponible</p>
                </span>
                {/* <div className='home__contentPrimary'>
                <CardClients clients='123' title='Clientes registrados' />
                <CardClients clients='1243' title='Rutinas creadas' />
                <CardClients clients='1243' title='Ejercicios creados' />
            </div> */}
            </div>
            {/* {
                (infoClient === null || infoClient === undefined)
                    ? <h1>Cargando perfil...</h1>
                    : (
                        <div className='profile-client'>
                            <div className='profile-client__header'>
                                <Header as='h1' floated='left' >{infoClient[0].name + ' ' + infoClient[0].lastName}</Header>
                                <Header as='h5' disabled floated='right'>Antiguedad: {antiguedad()} días</Header>
                                <Divider clearing />
                            </div>
                            <div className='profile-client__content'>
                                {
                                    (infoClient[0].planillaMedica === 'no')
                                        ? <Message negative>
                                            <Message.Header>Sin planilla médica</Message.Header>
                                        </Message>
                                        : <></>
                                }
                                <CardInfo infoClient={infoClient} />
                                <CardPayment payment={infoClient[0].lastPayment} />

                            </div>
                        </div>
                    )
            } */}
        </div>
    )
}
