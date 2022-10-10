import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllExercises } from '../../redux/actions';
import ListExercises from './ListExercises';
import SearchOfExercises from './SearchOfExercises';
import { BasicModal } from '../../shared';
import { EditExercise } from '../Forms';
import './Exercises.scss';

export function Exercises() {
    const dispatch = useDispatch();

    const exercises = useSelector((state) => state.exercisesReducer.exercises);
    const exercisesCopy = useSelector((state) => state.exercisesReducer.exercisesCopy);

    useEffect(() => {
        dispatch(getAllExercises());
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
        if (type === 'editExercise') {
            setTitleModal('Editar ejercicio');
            setContentModal(<EditExercise onClose={closeModal} />)
        }
        setShowModal(true);
    }

    return (
        <>
            <div>
                {
                    (exercises === null || exercises === undefined)
                        ? <h1 className='component-rutine__titleNoRutines'>No hay ejercicios creados...</h1>
                        : (exercises.length === 0 && exercisesCopy.length === 0)
                            ? <h1 className='component-rutine__titleNoRutines'>No hay ejercicios creados...</h1>
                            : (
                                <>
                                    <div className='clients-section'>
                                        <span className='clients-section__header'>
                                            <h2>Ejercicios</h2>
                                            <p>Ejercicios creados: <span className='contador'>{exercisesCopy.length}</span></p>
                                        </span>
                                        <SearchOfExercises exercises={exercises} />
                                        <ListExercises exercises={exercises} openModal={openModal} />

                                    </div>
                                </>
                            )

                }
            </div>
            <BasicModal
                show={showModal}
                onClose={closeModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    )
}
