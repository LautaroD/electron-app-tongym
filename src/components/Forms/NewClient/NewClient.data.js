import * as Yup from 'yup';

export function initialValues() {
    let date = new Date();

    return {
        name: '',
        lastName: '',
        birthDate: '',
        gender: '',
        contacto: '',
        email: '',
        startedDate: (date).toLocaleDateString(),
        startDate: date,
        key: date * Math.random(),
        rutinas: [],
        planillaMedica: 'no',
        lastPayment: '',
        disciplina: ''
    }
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required(true),
        lastName: Yup.string().required(true),
    })
}