import React from 'react';
import { Form, Button, Icon, Popup } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { searchExercises, getAllExercises } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import './SearchOfExercise.scss';

export default function SearchOfExercises({ currentPage }) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: { search: '', dificultad: '', categoria: '' },
        validationSchema: Yup.object({ search: Yup.string() }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                dispatch(searchExercises(formValue))
            } catch (error) {
                console.log(error);
            }
        }
    })

    const cleanSearch = () => {
        currentPage(1);
        formik.setFieldValue('search', '');
        formik.setFieldValue('dificultad', '');
        formik.setFieldValue('categoria', '');
        dispatch(getAllExercises());
    }

    return (
        <>
            <div className='searchBar' >
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            name='search'
                            placeholder="Buscar por nombre..."
                            value={formik.values.search}
                            onChange={formik.handleChange}
                            error={formik.errors.search}
                            className='searchBar__inputName'
                        />
                        <Form.Field
                            className='searchBar__select'
                            control='select'
                            name='dificultad'
                            placeholder='Dificultad...'
                            value={formik.values.dificultad}
                            onChange={formik.handleChange}
                            error={formik.errors.dificultad}
                        >
                            <option disabled value=''>Dificultad...</option>
                            <option value='Principiante'>Principiante</option>
                            <option value='Intermedio'>Intermedio</option>
                            <option value='Avanzado'>Avanzado</option>
                        </Form.Field>
                        <Form.Field
                            className='searchBar__select'
                            control='select'
                            name='categoria'
                            placeholder='Categoría...'
                            value={formik.values.categoria}
                            onChange={formik.handleChange}
                            error={formik.errors.categoria}
                        >
                            <option disabled value=''>Grupo muscular...</option>
                            <option value='Abdominales'>Abdominales</option>
                            <option value='Abductores'>Abductores</option>
                            <option value='Aductores'>Aductores</option>
                            <option value='Antebrazo'>Antebrazo</option>
                            <option value='Bíceps'>Bíceps</option>
                            <option value='Cuádriceps'>Cuádriceps</option>
                            <option value='Dorsal'>Dorsal</option>
                            <option value='Espinales'>Espinales</option>
                            <option value='Gemelos'>Gemelos</option>
                            <option value='Glúteos'>Glúteos</option>
                            <option value='Hombros'>Hombros</option>
                            <option value='Isquios'>Isquios</option>
                            <option value='Pectoral'>Pectoral</option>
                            <option value='Tríceps'>Tríceps</option>
                        </Form.Field>
                    </Form.Group>
                </Form>
                <Popup content='Buscar' trigger={
                    <Button type='submit' icon onClick={formik.handleSubmit} style={{ marginLeft: '10px' }}>
                        <Icon name='search' />
                    </Button>} />
                <Popup content='Reiniciar lista' trigger={
                    <Button icon onClick={() => cleanSearch()} style={{ marginLeft: '10px' }}>
                        <Icon name='redo' />
                    </Button>} />
            </div>
        </>
    )
}