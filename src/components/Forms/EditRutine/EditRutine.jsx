import React, { useState, useEffect } from 'react';
import { Rutines } from '../../../api';
import '../NewRutine/NewRutine.scss';
import { useDispatch, useSelector } from 'react-redux';
import SerieOne from './SerieOne';
import SerieTwo from './SerieTwo';
import SerieThree from './SerieThree';
import BasicInfo from './BasicInfo';
import { getAllExercises, getAllRutines, getAllClients, setLoadingFalse, setLoadingTrue } from '../../../redux/actions';

const rutinesController = new Rutines();

const categories = [
    { key: '09', value: 'Abdominales', text: 'Abdominales' },
    { key: '13', value: 'Abductores', text: 'Abductores' },
    { key: '12', value: 'Aductores', text: 'Aductores' },
    { key: '11', value: 'Antebrazo', text: 'Antebrazo' },
    { key: '04', value: 'Bíceps', text: 'Bíceps' },
    { key: '14', value: 'Cuádriceps', text: 'Cuádriceps' },
    { key: '02', value: 'Dorsal', text: 'Dorsal' },
    { key: '03', value: 'Espinales', text: 'Espinales' },
    { key: '10', value: 'Gemelos', text: 'Gemelos' },
    { key: '08', value: 'Glúteos', text: 'Glúteos' },
    { key: '06', value: 'Hombros', text: 'Hombros' },
    { key: '07', value: 'Isquios', text: 'Isquios' },
    { key: '01', value: 'Pectoral', text: 'Pectoral' },
    { key: '05', value: 'Tríceps', text: 'Tríceps' },
]

export function EditRutine({ onClose, openAlert }) {
    const dispatch = useDispatch();
    const ejercicios = useSelector((state) => state.exercisesReducer.exercises);
    const clients = useSelector((state) => state.clientsReducer.clients);
    const editRutine = useSelector((state) => state.rutinesReducer.rutineToEdit);

    const [step, setStep] = useState(0);

    useEffect(() => {
        dispatch(getAllExercises());
        dispatch(getAllClients());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [dataRutine, setDataRutine] = useState({
        name: editRutine.name,
        description: editRutine.description,
        key: editRutine.key,
        assignedTo: {
            key: editRutine.assignedTo.key,
            value: editRutine.assignedTo.value,
            text: editRutine.assignedTo.text
        },
        startProgram: (editRutine.startProgram === null) ? null : new Date(editRutine.startProgram)
    })


    const [dayOneFirst, setDayOneFirst] = useState({
        1: {
            exercise: editRutine.dayOne.dayOneFirst[1].exercise,
            rep: editRutine.dayOne.dayOneFirst[1].rep,
            weight: editRutine.dayOne.dayOneFirst[1].weight,
            type: editRutine.dayOne.dayOneFirst[1].type
        },
        2: {
            exercise: editRutine.dayOne.dayOneFirst[2].exercise,
            rep: editRutine.dayOne.dayOneFirst[2].rep,
            weight: editRutine.dayOne.dayOneFirst[2].weight,
            type: editRutine.dayOne.dayOneFirst[2].type
        },
        3: {
            exercise: editRutine.dayOne.dayOneFirst[3].exercise,
            rep: editRutine.dayOne.dayOneFirst[3].rep,
            weight: editRutine.dayOne.dayOneFirst[3].weight,
            type: editRutine.dayOne.dayOneFirst[3].type
        },
        4: {
            exercise: editRutine.dayOne.dayOneFirst[4].exercise,
            rep: editRutine.dayOne.dayOneFirst[4].rep,
            weight: editRutine.dayOne.dayOneFirst[4].weight,
            type: editRutine.dayOne.dayOneFirst[4].type
        }
    })

    const [dayOneSecond, setDayOneSecond] = useState({
        1: {
            exercise: editRutine.dayOne.dayOneSecond[1].exercise,
            rep: editRutine.dayOne.dayOneSecond[1].rep,
            weight: editRutine.dayOne.dayOneSecond[1].weight,
            type: editRutine.dayOne.dayOneSecond[1].type
        },
        2: {
            exercise: editRutine.dayOne.dayOneSecond[2].exercise,
            rep: editRutine.dayOne.dayOneSecond[2].rep,
            weight: editRutine.dayOne.dayOneSecond[2].weight,
            type: editRutine.dayOne.dayOneSecond[2].type
        },
        3: {
            exercise: editRutine.dayOne.dayOneSecond[3].exercise,
            rep: editRutine.dayOne.dayOneSecond[3].rep,
            weight: editRutine.dayOne.dayOneSecond[3].weight,
            type: editRutine.dayOne.dayOneSecond[3].type
        },
        4: {
            exercise: editRutine.dayOne.dayOneSecond[4].exercise,
            rep: editRutine.dayOne.dayOneSecond[4].rep,
            weight: editRutine.dayOne.dayOneSecond[4].weight,
            type: editRutine.dayOne.dayOneSecond[4].type
        }
    });

    const [dayOneThird, setDayOneThird] = useState({
        1: {
            exercise: editRutine.dayOne.dayOneThird[1].exercise,
            rep: editRutine.dayOne.dayOneThird[1].rep,
            weight: editRutine.dayOne.dayOneThird[1].weight,
            type: editRutine.dayOne.dayOneThird[1].type
        },
        2: {
            exercise: editRutine.dayOne.dayOneThird[2].exercise,
            rep: editRutine.dayOne.dayOneThird[2].rep,
            weight: editRutine.dayOne.dayOneThird[2].weight,
            type: editRutine.dayOne.dayOneThird[2].type
        },
        3: {
            exercise: editRutine.dayOne.dayOneThird[3].exercise,
            rep: editRutine.dayOne.dayOneThird[3].rep,
            weight: editRutine.dayOne.dayOneThird[3].weight,
            type: editRutine.dayOne.dayOneThird[3].type
        },
        4: {
            exercise: editRutine.dayOne.dayOneThird[4].exercise,
            rep: editRutine.dayOne.dayOneThird[4].rep,
            weight: editRutine.dayOne.dayOneThird[4].weight,
            type: editRutine.dayOne.dayOneThird[4].type
        }
    });

    const [dayTwoFirst, setDayTwoFirst] = useState({
        1: {
            exercise: editRutine.dayTwo.dayTwoFirst[1].exercise,
            rep: editRutine.dayTwo.dayTwoFirst[1].rep,
            weight: editRutine.dayTwo.dayTwoFirst[1].weight,
            type: editRutine.dayTwo.dayTwoFirst[1].type
        },
        2: {
            exercise: editRutine.dayTwo.dayTwoFirst[2].exercise,
            rep: editRutine.dayTwo.dayTwoFirst[2].rep,
            weight: editRutine.dayTwo.dayTwoFirst[2].weight,
            type: editRutine.dayTwo.dayTwoFirst[2].type
        },
        3: {
            exercise: editRutine.dayTwo.dayTwoFirst[3].exercise,
            rep: editRutine.dayTwo.dayTwoFirst[3].rep,
            weight: editRutine.dayTwo.dayTwoFirst[3].weight,
            type: editRutine.dayTwo.dayTwoFirst[3].type
        },
        4: {
            exercise: editRutine.dayTwo.dayTwoFirst[4].exercise,
            rep: editRutine.dayTwo.dayTwoFirst[4].rep,
            weight: editRutine.dayTwo.dayTwoFirst[4].weight,
            type: editRutine.dayTwo.dayTwoFirst[4].type
        }
    })

    const [dayTwoSecond, setDayTwoSecond] = useState({
        1: {
            exercise: editRutine.dayTwo.dayTwoSecond[1].exercise,
            rep: editRutine.dayTwo.dayTwoSecond[1].rep,
            weight: editRutine.dayTwo.dayTwoSecond[1].weight,
            type: editRutine.dayTwo.dayTwoSecond[1].type
        },
        2: {
            exercise: editRutine.dayTwo.dayTwoSecond[2].exercise,
            rep: editRutine.dayTwo.dayTwoSecond[2].rep,
            weight: editRutine.dayTwo.dayTwoSecond[2].weight,
            type: editRutine.dayTwo.dayTwoSecond[2].type
        },
        3: {
            exercise: editRutine.dayTwo.dayTwoSecond[3].exercise,
            rep: editRutine.dayTwo.dayTwoSecond[3].rep,
            weight: editRutine.dayTwo.dayTwoSecond[3].weight,
            type: editRutine.dayTwo.dayTwoSecond[3].type
        },
        4: {
            exercise: editRutine.dayTwo.dayTwoSecond[4].exercise,
            rep: editRutine.dayTwo.dayTwoSecond[4].rep,
            weight: editRutine.dayTwo.dayTwoSecond[4].weight,
            type: editRutine.dayTwo.dayTwoSecond[4].type
        }
    });

    const [dayTwoThird, setDayTwoThird] = useState({
        1: {
            exercise: editRutine.dayTwo.dayTwoThird[1].exercise,
            rep: editRutine.dayTwo.dayTwoThird[1].rep,
            weight: editRutine.dayTwo.dayTwoThird[1].weight,
            type: editRutine.dayTwo.dayTwoThird[1].type
        },
        2: {
            exercise: editRutine.dayTwo.dayTwoThird[2].exercise,
            rep: editRutine.dayTwo.dayTwoThird[2].rep,
            weight: editRutine.dayTwo.dayTwoThird[2].weight,
            type: editRutine.dayTwo.dayTwoThird[2].type
        },
        3: {
            exercise: editRutine.dayTwo.dayTwoThird[3].exercise,
            rep: editRutine.dayTwo.dayTwoThird[3].rep,
            weight: editRutine.dayTwo.dayTwoThird[3].weight,
            type: editRutine.dayTwo.dayTwoThird[3].type
        },
        4: {
            exercise: editRutine.dayTwo.dayTwoThird[4].exercise,
            rep: editRutine.dayTwo.dayTwoThird[4].rep,
            weight: editRutine.dayTwo.dayTwoThird[4].weight,
            type: editRutine.dayTwo.dayTwoThird[4].type
        }
    });

    const [dayThreeFirst, setDayThreeFirst] = useState({
        1: {
            exercise: editRutine.dayThree.dayThreeFirst[1].exercise,
            rep: editRutine.dayThree.dayThreeFirst[1].rep,
            weight: editRutine.dayThree.dayThreeFirst[1].weight,
            type: editRutine.dayThree.dayThreeFirst[1].type
        },
        2: {
            exercise: editRutine.dayThree.dayThreeFirst[2].exercise,
            rep: editRutine.dayThree.dayThreeFirst[2].rep,
            weight: editRutine.dayThree.dayThreeFirst[2].weight,
            type: editRutine.dayThree.dayThreeFirst[2].type
        },
        3: {
            exercise: editRutine.dayThree.dayThreeFirst[3].exercise,
            rep: editRutine.dayThree.dayThreeFirst[3].rep,
            weight: editRutine.dayThree.dayThreeFirst[3].weight,
            type: editRutine.dayThree.dayThreeFirst[3].type
        },
        4: {
            exercise: editRutine.dayThree.dayThreeFirst[4].exercise,
            rep: editRutine.dayThree.dayThreeFirst[4].rep,
            weight: editRutine.dayThree.dayThreeFirst[4].weight,
            type: editRutine.dayThree.dayThreeFirst[4].type
        }
    })

    const [dayThreeSecond, setDayThreeSecond] = useState({
        1: {
            exercise: editRutine.dayThree.dayThreeSecond[1].exercise,
            rep: editRutine.dayThree.dayThreeSecond[1].rep,
            weight: editRutine.dayThree.dayThreeSecond[1].weight,
            type: editRutine.dayThree.dayThreeSecond[1].type
        },
        2: {
            exercise: editRutine.dayThree.dayThreeSecond[2].exercise,
            rep: editRutine.dayThree.dayThreeSecond[2].rep,
            weight: editRutine.dayThree.dayThreeSecond[2].weight,
            type: editRutine.dayThree.dayThreeSecond[2].type
        },
        3: {
            exercise: editRutine.dayThree.dayThreeSecond[3].exercise,
            rep: editRutine.dayThree.dayThreeSecond[3].rep,
            weight: editRutine.dayThree.dayThreeSecond[3].weight,
            type: editRutine.dayThree.dayThreeSecond[3].type
        },
        4: {
            exercise: editRutine.dayThree.dayThreeSecond[4].exercise,
            rep: editRutine.dayThree.dayThreeSecond[4].rep,
            weight: editRutine.dayThree.dayThreeSecond[4].weight,
            type: editRutine.dayThree.dayThreeSecond[4].type
        }
    });

    const [dayThreeThird, setDayThreeThird] = useState({
        1: {
            exercise: editRutine.dayThree.dayThreeThird[1].exercise,
            rep: editRutine.dayThree.dayThreeThird[1].rep,
            weight: editRutine.dayThree.dayThreeThird[1].weight,
            type: editRutine.dayThree.dayThreeThird[1].type
        },
        2: {
            exercise: editRutine.dayThree.dayThreeThird[2].exercise,
            rep: editRutine.dayThree.dayThreeThird[2].rep,
            weight: editRutine.dayThree.dayThreeThird[2].weight,
            type: editRutine.dayThree.dayThreeThird[2].type
        },
        3: {
            exercise: editRutine.dayThree.dayThreeThird[3].exercise,
            rep: editRutine.dayThree.dayThreeThird[3].rep,
            weight: editRutine.dayThree.dayThreeThird[3].weight,
            type: editRutine.dayThree.dayThreeThird[3].type
        },
        4: {
            exercise: editRutine.dayThree.dayThreeThird[4].exercise,
            rep: editRutine.dayThree.dayThreeThird[4].rep,
            weight: editRutine.dayThree.dayThreeThird[4].weight,
            type: editRutine.dayThree.dayThreeThird[4].type
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
        await rutinesController.editRutine(dataRutine, 'savedb');
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
                    firstSerie={dayOneFirst}
                    setFirstSerie={setDayOneFirst}
                    day='Dia uno'
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
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
                    categories={categories}
                />
            )
        default:
            console.log('Error');;
    }
}