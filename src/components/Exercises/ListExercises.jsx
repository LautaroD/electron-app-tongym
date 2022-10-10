import React from 'react';
import { Table, Icon, Popup } from 'semantic-ui-react';
import './ListExercises.scss';
import { Exercises } from '../../api';
import { useDispatch } from 'react-redux';
import { getAllExercises, editExercise } from '../../redux/actions';

const controllerExercises = new Exercises();

export default function ListExercises({ exercises, openModal }) {
    const dispatch = useDispatch();

    const edit = (exercise) => {
        dispatch(editExercise(exercise));
        openModal('editExercise');
    }

    const deleteExercise = async (exercise) => {
        await controllerExercises.deleteExercise(exercise);
        dispatch(getAllExercises());
    }

    return (
        <div className='listExercises-container'>
            {
                (exercises.length === 0)
                    ? <h4>No hay resultados compatibles con su busqueda...</h4>
                    :
                    <Table celled size='large' collapsing >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nombre</Table.HeaderCell>
                                <Table.HeaderCell>Dificultad</Table.HeaderCell>
                                <Table.HeaderCell>Grupos musculares</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {exercises.map((exercise) => (
                                <Table.Row key={exercise.key}>
                                    <Table.Cell >{exercise.text}</Table.Cell>
                                    <Table.Cell >{(exercise.difficulty.length < 1) ? 'No especificado' : exercise.difficulty}</Table.Cell>
                                    <Table.Cell style={{ textTransform: 'capitalize' }}>
                                        {
                                            (exercise.categories.length < 1)
                                                ? <span style={{ margin: '3px', padding: '3px', backgroundColor: 'gray', borderRadius: '5px', color: '#edede9' }}>No especificado</span>
                                                : (exercise.categories.map(categorie => (
                                                    <span key={exercise.key * Math.random()} style={{ margin: '3px', padding: '3px', backgroundColor: '#6C63FF', borderRadius: '5px', color: '#edede9' }}>{categorie}</span>
                                                )))
                                        }
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        <Popup basic content='Editar' trigger={
                                            <span style={{ cursor: 'pointer' }}>
                                                <Icon name='edit' onClick={() => edit(exercise)} />
                                            </span>} />
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        <Popup basic content='Eliminar' trigger={
                                            <span style={{ cursor: 'pointer' }}>
                                                <Icon name='trash alternate outline' onClick={() => deleteExercise(exercise)} />
                                            </span>} />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
            }
        </div>
    )
}
