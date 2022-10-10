import React, { useState } from 'react';
import { Exercises } from '../../../api';
import { Form, Dropdown } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './NewExercise.data';
import './NewExercise.scss';
import { useDispatch } from 'react-redux';
import { getAllExercises } from '../../../redux/actions';

const optionsCategory = [
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

const exercisesController = new Exercises();

export function NewExercise({ onClose, openAlert }) {
    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                formValue = { ...formValue, value: formValue.text }
                let result = await exercisesController.createExercise(formValue);
                openAlert(result.type, result.message);
                dispatch(getAllExercises());
                onClose();
            } catch (error) {
                openAlert('error', 'usuario no registrado');
            }
        }
    })

    const handleChangeDropdown = async (e, data) => {
        setCategories([data.value])
        await formik.setFieldValue('categories', data.value);
    }

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name='text'
                placeholder="Ejercicio"
                value={formik.values.text}
                onChange={formik.handleChange}
                error={formik.errors.text}
                className='inputName'
            />

            <Form.Field
                control='select'
                name='difficulty'
                placeholder='Dificultad'
                value={formik.values.difficulty}
                onChange={formik.handleChange}
                error={formik.errors.difficulty}
            >
                <option value=''>---</option>
                <option value='Principiante'>Principiante</option>
                <option value='Intermedio'>Intermedio</option>
                <option value='Avanzado'>Avanzado</option>
            </Form.Field>
            <Dropdown
                placeholder='Músculos...'
                fluid
                multiple
                selection
                options={optionsCategory}
                value={(categories).flat(Infinity)}
                onChange={(e, data) => handleChangeDropdown(e, data)}
            />
            <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>Crear</Form.Button>
        </Form>
    )
}