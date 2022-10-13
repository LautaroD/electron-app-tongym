import React, { useState, useEffect } from 'react';
import { Rutines, GeneratorPDF } from '../../../api';
import '../NewRutine/NewRutine.scss';
import { useDispatch, useSelector } from 'react-redux';
import SerieOne from './SerieOne';
import SerieTwo from './SerieTwo';
import SerieThree from './SerieThree';
import BasicInfo from './BasicInfo';
import { getAllExercises, getAllRutines, getAllClients, setLoadingFalse, setLoadingTrue } from '../../../redux/actions';

const rutinesController = new Rutines();
const pdfController = new GeneratorPDF();

export function EditRutine({ onClose, openAlert }) {
    const dispatch = useDispatch();
    const ejercicios = useSelector((state) => state.exercisesReducer.exercises);
    const clients = useSelector((state) => state.clientsReducer.clients);
    const editRutine = useSelector((state) => state.rutinesReducer.rutineToEdit)

    const [step, setStep] = useState(0);

    useEffect(() => {
        dispatch(getAllExercises());
        dispatch(getAllClients());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [dataRutine, setDataRutine] = useState({
        name: editRutine.dataRutine.name,
        description: editRutine.dataRutine.description,
        key: editRutine.dataRutine.key,
        assignedTo: {
            value: editRutine.dataRutine.assignedTo.value,
            text: editRutine.dataRutine.assignedTo.text,
            key: editRutine.dataRutine.assignedTo.key
        },
        startProgram: (editRutine.dataRutine.startProgram === null) ? null : new Date(editRutine.dataRutine.startProgram)
    })

    const [serieOne, setSerieOne] = useState({
        1: {
            firstExercise: editRutine.serieOne[1].firstExercise,
            firstRep: editRutine.serieOne[1].firstRep,
            firstWeight: editRutine.serieOne[1].firstWeight,
            firstType: editRutine.serieOne[1].firstType
        },
        2: {
            secondExercise: editRutine.serieOne[2].secondExercise,
            secondRep: editRutine.serieOne[2].secondRep,
            secondWeight: editRutine.serieOne[2].secondWeight,
            secondType: editRutine.serieOne[2].secondType
        },
        3: {
            thirdExercise: editRutine.serieOne[3].thirdExercise,
            thirdRep: editRutine.serieOne[3].thirdRep,
            thirdWeight: editRutine.serieOne[3].thirdWeight,
            thirdType: editRutine.serieOne[3].thirdType
        },
        4: {
            fourthExercise: editRutine.serieOne[4].fourthExercise,
            fourthRep: editRutine.serieOne[4].fourthRep,
            fourthWeight: editRutine.serieOne[4].fourthWeight,
            fourthType: editRutine.serieOne[4].fourthType
        }
    });

    const [serieTwo, setSerieTwo] = useState({
        1: {
            firstExercise: editRutine.serieTwo[1].firstExercise,
            firstRep: editRutine.serieTwo[1].firstRep,
            firstWeight: editRutine.serieTwo[1].firstWeight,
            firstType: editRutine.serieTwo[1].firstType
        },
        2: {
            secondExercise: editRutine.serieTwo[2].secondExercise,
            secondRep: editRutine.serieTwo[2].secondRep,
            secondWeight: editRutine.serieTwo[2].secondWeight,
            secondType: editRutine.serieTwo[2].secondType
        },
        3: {
            thirdExercise: editRutine.serieTwo[3].thirdExercise,
            thirdRep: editRutine.serieTwo[3].thirdRep,
            thirdWeight: editRutine.serieTwo[3].thirdWeight,
            thirdType: editRutine.serieTwo[3].thirdType
        },
        4: {
            fourthExercise: editRutine.serieTwo[4].fourthExercise,
            fourthRep: editRutine.serieTwo[4].fourthRep,
            fourthWeight: editRutine.serieTwo[4].fourthWeight,
            fourthType: editRutine.serieTwo[4].fourthType
        }
    });

    const [serieThree, setSerieThree] = useState({
        1: {
            firstExercise: editRutine.serieThree[1].firstExercise,
            firstRep: editRutine.serieThree[1].firstRep,
            firstWeight: editRutine.serieThree[1].firstWeight,
            firstType: editRutine.serieThree[1].firstType
        },
        2: {
            secondExercise: editRutine.serieThree[2].secondExercise,
            secondRep: editRutine.serieThree[2].secondRep,
            secondWeight: editRutine.serieThree[2].secondWeight,
            secondType: editRutine.serieThree[2].secondType
        },
        3: {
            thirdExercise: editRutine.serieThree[3].thirdExercise,
            thirdRep: editRutine.serieThree[3].thirdRep,
            thirdWeight: editRutine.serieThree[3].thirdWeight,
            thirdType: editRutine.serieThree[3].thirdType
        },
        4: {
            fourthExercise: editRutine.serieThree[4].fourthExercise,
            fourthRep: editRutine.serieThree[4].fourthRep,
            fourthWeight: editRutine.serieThree[4].fourthWeight,
            fourthType: editRutine.serieThree[4].fourthType
        }
    });

    const prevStep = () => {
        if (step === 0) return
        setStep(step - 1)
    }

    const nextStep = () => {
        if (step === 3) return
        setStep(step + 1)
    }

    const handleSubmit = async () => {
        await rutinesController.editRutine({ dataRutine, serieOne, serieTwo, serieThree });
        dispatch(setLoadingTrue());
        setTimeout(() => {
            dispatch(getAllRutines());
            dispatch(setLoadingFalse());
        }, 1000);
        onClose();
    }

    // Junta en un array todos los clientes para después mostrarlos en el SELECT del form
    let optionClients = [];
    clients.forEach(client => optionClients.push({
        key: client.key,
        text: client.name.charAt(0).toUpperCase() + client.name.slice(1) + ' ' + client.lastName.charAt(0).toUpperCase() + client.lastName.slice(1),
        value: client.name + ' ' + client.lastName
    }))

    switch (step) {
        case 0:
            return (
                <BasicInfo
                    optionClients={optionClients}
                    nextStep={nextStep}
                    dataRutine={dataRutine}
                    setDataRutine={setDataRutine}
                />
            )
        case 1:
            return (
                <SerieOne
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    serieOne={serieOne}
                    setSerieOne={setSerieOne}
                />
            )
        case 2:
            return (
                <SerieTwo
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    serieTwo={serieTwo}
                    setSerieTwo={setSerieTwo}
                />
            )
        case 3:
            return (
                <SerieThree
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    serieThree={serieThree}
                    setSerieThree={setSerieThree}
                    handleSubmit={handleSubmit}
                />
            )
        default:
            console.log('Error');
    }
}