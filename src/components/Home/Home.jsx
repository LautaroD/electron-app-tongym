import React, { useEffect, useState } from 'react';
import './Home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllClients, getAllExercises } from '../../redux/actions';
import ChartMw from './ChartMw';
import Circle from './Circle';
import LineChart from './LineChart';
import { Estadisticas, Rutines } from '../../api';
import { Header, Grid, Loader } from 'semantic-ui-react';
import Clock from './Clock';

const estadisticasController = new Estadisticas();
const rutinesController = new Rutines();

// estadisticasController.getDataWomenYear();

export function Home() {
    const [rutinas, setRutinas] = useState(0);
    const [genderTotals, setGenderTotals] = useState([]);
    const [attendanceClients, setAttendanceClients] = useState([]);
    const [newClients, setNewClients] = useState([]);

    (async function rutinesCreated() {
        let result = await rutinesController.getInfoRutines();
        setRutinas(result.totalCreated);
    })();

    const dispatch = useDispatch();

    const clients = useSelector((state) => state.clientsReducer.clients);
    let exercises = useSelector((state) => state.exercisesReducer.exercises);
    // let rutinas = useSelector((state) => state.rutinesReducer.rutines);
    exercises = exercises.length;
    let cantClientes = clients.length;
    // rutinas = rutinas.length

    useEffect(() => {
        dispatch(getAllClients());
        dispatch(getAllExercises());
        setTimeout(() => {
            (async function () {
                let totalClients = await estadisticasController.getTotals();
                let newClientsData = await estadisticasController.getNewClients();
                let attendance = await estadisticasController.getAttendante();
                setNewClients(newClientsData);
                setGenderTotals(totalClients);
                setAttendanceClients(attendance);
            })()
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className='homeI'>
            <Grid columns={3} >
                <Grid.Row stretched>

                    <Grid.Column width={3}>
                        <div className='firstColumn'>
                            <Header as='h1'>{cantClientes}</Header>
                            <p style={{ color: 'grey', fontWeight: 'bold', letterSpacing: '3px', fontSize: '16px' }}>clientes</p>
                        </div>
                        <div className='firstColumn'>
                            <Header as='h1'>{exercises}</Header>
                            <p style={{ color: 'grey', fontWeight: 'bold', letterSpacing: '3px', fontSize: '16px' }}>ejercicios creados</p>
                        </div>
                        <div className='firstColumn'>
                            <Header as='h1'>{rutinas}</Header>
                            <p style={{ color: 'grey', fontWeight: 'bold', letterSpacing: '3px', fontSize: '16px' }}>rutinas creadas</p>
                        </div>

                    </Grid.Column>

                    <Grid.Column width={7}>
                        {
                            (newClients.length < 1)
                                ? <div className='secondColumn'><Loader active inline>Cargando...</Loader></div>
                                : <div className='secondColumn'><ChartMw clients={newClients} /></div>
                        }


                        {
                            (attendanceClients.length < 1)
                                ? <div className='secondColumn'><Loader active inline>Cargando...</Loader></div>
                                : <div className='secondColumn'><LineChart clients={attendanceClients} label='Asistencias' /></div>
                        }
                    </Grid.Column>

                    <Grid.Column width={6}>

                        {
                            (genderTotals.length < 1)
                                ? <div className='thirdColumn'><Loader active inline>Cargando...</Loader></div>
                                : <div className='thirdColumn'><Circle totalClients={genderTotals} /></div>
                        }

                        {
                            (attendanceClients.length < 1)
                                ? <div className='thirdColumn'><Loader active inline>Cargando...</Loader></div>
                                : <div className='thirdColumn'><Clock /></div>
                        }

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )
}
