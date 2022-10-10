import React, { useState, useEffect } from 'react';
import { Rutines, GeneratorPDF } from '../../../api';
import './NewRutine.scss';
import { useDispatch, useSelector } from 'react-redux';
import SerieOne from './SerieOne';
import SerieTwo from './SerieTwo';
import SerieThree from './SerieThree';
import BasicInfo from './BasicInfo';
import { getAllExercises, getAllRutines, getAllClients } from '../../../redux/actions';

const rutinesController = new Rutines();
const pdfController = new GeneratorPDF();

export function NewRutine({ onClose, openAlert }) {
    const dispatch = useDispatch();
    const ejercicios = useSelector((state) => state.exercisesReducer.exercises);
    const clients = useSelector((state) => state.clientsReducer.clients);

    const [step, setStep] = useState(0);

    useEffect(() => {
        dispatch(getAllExercises());
        dispatch(getAllClients());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [dataRutine, setDataRutine] = useState({
        name: '',
        description: '',
        key: (function () { return new Date().getMilliseconds() * Math.random() })(),
        assignedTo: {
            name: '',
            text: '',
            key: 0
        },
        startProgram: null
    })

    const [firstSerie, setFirstSerie] = useState({
        1: {
            firstExercise: '',
            firstRep: 0,
            firstWeight: 0,
            firstType: ''
        },
        2: {
            secondExercise: '',
            secondRep: 0,
            secondWeight: 0,
            secondType: ''
        },
        3: {
            thirdExercise: '',
            thirdRep: 0,
            thirdWeight: 0,
            thirdType: ''
        },
        4: {
            fourthExercise: '',
            fourthRep: 0,
            fourthWeight: 0,
            fourthType: ''
        }
    });

    const [secondSerie, setSecondSerie] = useState({
        1: {
            firstExercise: '',
            firstRep: 0,
            firstWeight: 0,
            firstType: ''
        },
        2: {
            secondExercise: '',
            secondRep: 0,
            secondWeight: 0,
            secondType: ''
        },
        3: {
            thirdExercise: '',
            thirdRep: 0,
            thirdWeight: 0,
            thirdType: ''
        },
        4: {
            fourthExercise: '',
            fourthRep: 0,
            fourthWeight: 0,
            fourthType: ''
        }
    });

    const [thirdSerie, setThirdSerie] = useState({
        1: {
            firstExercise: '',
            firstRep: 0,
            firstWeight: 0,
            firstType: ''
        },
        2: {
            secondExercise: '',
            secondRep: 0,
            secondWeight: 0,
            secondType: ''
        },
        3: {
            thirdExercise: '',
            thirdRep: 0,
            thirdWeight: 0,
            thirdType: ''
        },
        4: {
            fourthExercise: '',
            fourthRep: 0,
            fourthWeight: 0,
            fourthType: ''
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
        await pdfController.savePDF({ dataRutine, firstSerie, secondSerie, thirdSerie });
        let result = await rutinesController.createRutine(dataRutine, firstSerie, secondSerie, thirdSerie);
        openAlert(result.type, result.message);
        setTimeout(() => {
            dispatch(getAllRutines());
        }, 500);
        onClose();
    }

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
                    firstSerie={firstSerie}
                    setFirstSerie={setFirstSerie}
                />
            )
        case 2:
            return (
                <SerieTwo
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    secondSerie={secondSerie}
                    setSecondSerie={setSecondSerie}
                />
            )
        case 3:
            return (
                <SerieThree
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    thirdSerie={thirdSerie}
                    setThirdSerie={setThirdSerie}
                    handleSubmit={handleSubmit}
                />
            )
        default:
            console.log('Error');;
    }
}