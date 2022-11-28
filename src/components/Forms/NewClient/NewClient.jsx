import React from 'react';
import { Client } from '../../../api';
import { Form, Input } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './NewClient.data';
import './NewClient.scss';
import { useDispatch } from 'react-redux';
import { getAllClients } from '../../../redux/actions';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale('es', es)

// const dbController = new Database();
const clientController = new Client();

export function NewClient({ onClose, openAlert }) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                let result = await clientController.createClient(formValue.name, formValue.lastName, { ...formValue, name: (formValue.name).toLowerCase(), lastName: (formValue.lastName).toLowerCase() });
                openAlert(result.type, result.message);
                dispatch(getAllClients());
                onClose();
            } catch (error) {
                console.log(error);
                openAlert('error', 'Usuario no registrado');
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit} className='newClient'>
            <Form.Group widths='equal'>
                <Form.Input
                    name='name'
                    placeholder="Nombre"
                    value={(formik.values.name).trim()}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    className='inputName'
                />
                <Form.Input
                    name='lastName'
                    placeholder="Apellido"
                    value={(formik.values.lastName).trim()}
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                    className='inputLastName'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input
                    name='birthDate'
                    placeholder="Edad"
                    value={formik.values.birthDate}
                    onChange={formik.handleChange}
                    error={formik.errors.birthDate}
                />
                <Form.Field
                    control='select'
                    name='gender'
                    placeholder='Genero'
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    error={formik.errors.gender}
                >
                    <option disabled value=''>---</option>
                    <option value='Masculino'>Masculino</option>
                    <option value='Femenino'>Femenino</option>
                    <option value='Otro'>Otro</option>
                </Form.Field>
            </Form.Group>
            <div className='newClient-form'>
                <div className='newClient-form__contact'>
                    <Input
                        name='contacto'
                        icon='phone'
                        placeholder="Número de teléfono"
                        value={formik.values.contacto}
                        onChange={formik.handleChange}
                        error={formik.errors.contacto}
                        width={16}
                    />
                </div>
                <div className='newClient-form__email'>
                    <Input
                        name='email'
                        placeholder="Correo electronico"
                        icon="mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.errors.email}
                    />
                </div>
            </div>
            <div className='newClient__disciplinaSelect'>
                <Form.Field
                    control='select'
                    name='disciplina'
                    placeholder='Disciplina...'
                    value={formik.values.disciplina}
                    onChange={formik.handleChange}
                    error={formik.errors.disciplina}
                >
                    <option disabled value=''>Disciplina...</option>
                    <option value='Musculacion'>Musculación</option>
                    <option value='Strong'>Strong</option>
                    <option value='Zumba'>Zumba</option>
                    <option value='Aerolocalizada'>Aerolocalizada</option>
                    <option value='Natacion'>Natación</option>
                    <option value='Funcional'>Funcional</option>
                </Form.Field>
            </div>
            <label>Fecha de inicio</label>
            <DatePicker
                selected={formik.values.startDate}
                onChange={date => {
                    formik.setFieldValue('startedDate', date.toLocaleDateString());
                    formik.setFieldValue('startDate', date)
                }}
                locale='es'
                dateFormat="dd 'de' MMMM 'de' yyyy"
                className='datepicker__input'
            />
            <Form.Button type='submit' primary fluid loading={formik.isSubmitting} style={{ marginTop: '15px' }}>Registrar</Form.Button>
        </Form>
    )
}
