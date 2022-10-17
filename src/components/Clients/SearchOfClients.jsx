import React from 'react';
import { Form, Button, Icon, Popup } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { searchClient } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { resetClients } from '../../redux/actions';
import * as Yup from 'yup';

export default function SearchOfClients() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: { search: '', disciplina: '' },
        validationSchema: Yup.object({ search: Yup.string() }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                dispatch(searchClient(formValue))
            } catch (error) {
                console.log(error);
            }
        }
    })

    const cleanSearch = () => {
        dispatch(resetClients());
        formik.setFieldValue('search', '')
        formik.setFieldValue('disciplina', '')
    }

    return (
        <>
            <span style={{ display: 'flex' }}>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            name='search'
                            placeholder="Buscar..."
                            value={formik.values.search}
                            onChange={formik.handleChange}
                            error={formik.errors.search}
                            className='inputName'
                        />
                        <Form.Field
                            className='searchBar__select'
                            control='select'
                            name='disciplina'
                            placeholder='Disciplina...'
                            value={formik.values.disciplina}
                            onChange={formik.handleChange}
                            error={formik.errors.disciplina}
                        >
                            <option disabled value=''>Disciplina...</option>
                            <option value='Aerolocalizada'>Aerolocalizada</option>
                            <option value='Funcional'>Funcional</option>
                            <option value='Musculacion'>Musculación</option>
                            <option value='Strong'>Strong</option>
                            <option value='Zumba'>Zumba</option>
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
            </span>
        </>
    )
}