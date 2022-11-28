import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Icon, Popup } from 'semantic-ui-react';
import moment from 'moment';

export default function Buscador({ openModal, month, setMonth, setYear }) {

    const formik = useFormik({
        initialValues: { search: '', disciplina: '', month: month },
        validationSchema: Yup.object({ search: Yup.string() }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if (formValue.month !== month) return setMonth(Number(formValue.month));
            } catch (error) {
                console.log(error);
            }
        }
    })

    const cleanSearch = () => {
        formik.setFieldValue('month', (moment().month() + 1));
        setMonth((moment().month() + 1));
        setYear((new Date().getFullYear()))
    }

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Field
                        className='searchBar__select'
                        control='select'
                        name='month'
                        placeholder='Elige un mes...'
                        value={formik.values.month}
                        onChange={(e) => {
                            setMonth(Number(e.target.value));
                            formik.setFieldValue('month', e.target.value)
                        }}
                        // onChange={formik.handleChange}
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
            <Popup content='Refrescar' trigger={
                <Button icon onClick={() => cleanSearch()} style={{ marginLeft: '10px' }}>
                    <Icon name='redo' />
                </Button>} />
            <Button size='medium' onClick={openModal}>Actualizar lista</Button>

        </>
    )
}
