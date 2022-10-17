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

    const [dayOneFirst, setDayOneFirst] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    })

    const [dayOneSecond, setDayOneSecond] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    });

    const [dayOneThird, setDayOneThird] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    });

    const [dayTwoFirst, setDayTwoFirst] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    })

    const [dayTwoSecond, setDayTwoSecond] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    });

    const [dayTwoThird, setDayTwoThird] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    });

    const [dayThreeFirst, setDayThreeFirst] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    })

    const [dayThreeSecond, setDayThreeSecond] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    });

    const [dayThreeThird, setDayThreeThird] = useState({
        1: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        2: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        3: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        },
        4: {
            exercise: '',
            rep: 0,
            weight: 0,
            type: ''
        }
    });

    const prevStep = () => {
        if (step === 0) return
        setStep(step - 1)
    }

    const nextStep = () => {
        if (step === 9) return
        setStep(step + 1)
    }

    const handleSubmit = async () => {
        dataRutine.dayOne = { dayOneFirst, dayOneSecond, dayOneThird };
        dataRutine.dayTwo = { dayTwoFirst, dayTwoSecond, dayTwoThird };
        dataRutine.dayThree = { dayThreeFirst, dayThreeSecond, dayThreeThird };
        await pdfController.loadPDF(dataRutine, 'savedb');
        let result = await rutinesController.createRutine(dataRutine);
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
                    firstSerie={dayOneFirst}
                    setFirstSerie={setDayOneFirst}
                    day='Dia uno'
                />
            )
        case 2:
            return (
                <SerieTwo
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    secondSerie={dayOneSecond}
                    setSecondSerie={setDayOneSecond}
                    day='Dia uno'
                />
            )
        case 3:
            return (
                <SerieThree
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    thirdSerie={dayOneThird}
                    setThirdSerie={setDayOneThird}
                    day='Dia uno'
                />
            )
        case 4:
            return (
                <SerieOne
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    firstSerie={dayTwoFirst}
                    setFirstSerie={setDayTwoFirst}
                    day='Dia dos'
                />
            )
        case 5:
            return (
                <SerieTwo
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    secondSerie={dayTwoSecond}
                    setSecondSerie={setDayTwoSecond}
                    day='Dia dos'
                />
            )
        case 6:
            return (
                <SerieThree
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    thirdSerie={dayTwoThird}
                    setThirdSerie={setDayTwoThird}
                    day='Dia dos'
                />
            )
        case 7:
            return (
                <SerieOne
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    firstSerie={dayThreeFirst}
                    setFirstSerie={setDayThreeFirst}
                    day='Dia tres'
                />
            )
        case 8:
            return (
                <SerieTwo
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    secondSerie={dayThreeSecond}
                    setSecondSerie={setDayThreeSecond}
                    day='Dia tres'
                />
            )
        case 9:
            return (
                <SerieThree
                    ejercicios={ejercicios}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    thirdSerie={dayThreeThird}
                    setThirdSerie={setDayThreeThird}
                    handleSubmit={handleSubmit}
                    day='Dia tres'
                />
            )
        default:
            console.log('Error');;
    }
}