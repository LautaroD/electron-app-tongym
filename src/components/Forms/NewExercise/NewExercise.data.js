import * as Yup from 'yup';

export function initialValues() {
    return {
        key: Math.random() * (function () {
            let miliseconds = new Date();
            return miliseconds.getMilliseconds();
        })(),
        text: '',
        value: '',
        difficulty: '',
        categories: []
    }
}

export function validationSchema() {
    return Yup.object({
        text: Yup.string().required(true),
    })
}