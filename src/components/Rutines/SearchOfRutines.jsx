import React from 'react';
import { Form, Button, Icon, Popup } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { searchRutine } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { resetRutines } from '../../redux/actions';
// import * as Yup from 'yup';

export default function SearchOfRutines({ currentPage }) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: { search: '', month: 0 },
        // validationSchema: Yup.object({ search: Yup.string().required(true) }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                // console.log(formValue);
                dispatch(searchRutine(formValue))
            } catch (error) {
                console.log(error);
            }
        }
    })

    const cleanSearch = () => {
        currentPage(1);
        dispatch(resetRutines());
        formik.setFieldValue('search', '');
        formik.setFieldValue('month', 0);
        // formik.values.search = '';
    }

    return (
        <>
            <div className='searchBar'>
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
                            name='month'
                            placeholder='Elige un mes...'
                            value={formik.values.month}
                            onChange={formik.handleChange}
                            error={formik.errors.month}
                        >
                            <option disabled value={0}>Mes...</option>
                            <option value='1'>Enero</option>
                            <option value='2'>Febrero</option>
                            <option value='3'>Marzo</option>
                            <option value='4'>Abril</option>
                            <option value='5'>Mayo</option>
                            <option value='6'>Junio</option>
                            <option value='7'>Julio</option>
                            <option value='8'>Agosto</option>
                            <option value='9'>Septiembre</option>
                            <option value='10'>Octubre</option>
                            <option value='11'>Noviembre</option>
                            <option value='12'>Diciembre</option>
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