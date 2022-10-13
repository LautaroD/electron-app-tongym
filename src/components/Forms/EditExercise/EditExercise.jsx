import React, { useState } from 'react';
import { Exercises } from '../../../api';
import { Form, Dropdown } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises, setLoadingFalse, setLoadingTrue } from '../../../redux/actions';
import * as Yup from 'yup';

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

export function EditExercise({ onClose, openAlert }) {
    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();
    const exercise = useSelector((state) => state.exercisesReducer.exerciseToEdit);

    const formik = useFormik({
        initialValues: {
            text: exercise.text,
            difficulty: exercise.difficulty,
            categories: exercise.categories,
            key: exercise.key
        },
        validationSchema: Yup.object({
            text: Yup.string().required(true)
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                formValue = { ...formValue, value: formValue.text }
                await exercisesController.updateExercise(formValue);
                dispatch(getAllExercises());
                dispatch(setLoadingTrue());
                setTimeout(() => {
                    dispatch(setLoadingFalse());
                }, 1000);
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
                placeholder='Categorías'
                fluid
                multiple
                selection
                options={optionsCategory}
                // value={(categories).flat(Infinity)}
                value={formik.values.categories}
                onChange={(e, data) => handleChangeDropdown(e, data)}
            />
            <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>Editar</Form.Button>
        </Form>
    )
}