import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getClient, getAllMedicalForms } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Header, Icon } from 'semantic-ui-react';
import { CardInfo, Message } from './components';
import './Profile.scss';
import moment from 'moment';


export function Profile() {
    const infoClient = useSelector((state) => state.clientsReducer.client);
    const planillaMedica = useSelector((state) => state.medicalFormsReducer.allMedicalForms);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getClient(Number(id)));
        dispatch(getAllMedicalForms());
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
            {
                (infoClient === null || infoClient === undefined)
                    ? <h1>Cargando perfil...</h1>
                    : (
                        <>
                            <div className='profile__navBar'>
                                <span style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}><Icon name='arrow circle left' size='large' inverted color='violet' /> VOLVER ATRÁS</span>
                            </div>
                            <div className='profile-client'>
                                <div className='profile-client__header'>
                                    <Header as='h1' floated='left' >{(infoClient[0].name).toLowerCase() + ' ' + (infoClient[0].lastName).toLowerCase()}</Header>
                                    <Header as='h5' disabled floated='right'>Antiguedad: {antiguedad()} días</Header>
                                    <Divider clearing />
                                </div>
                                <div className='profile-client__content'>
                                    {
                                        (planillaMedica.includes(infoClient[0].key))
                                            ? <></>
                                            : <Message clientKey={infoClient[0].key} />
                                    }
                                    {/* <CardPayment /> */}
                                    <CardInfo infoClient={infoClient} />
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}
