import React from 'react';
import { Client } from '../../../api';
import { Form, Icon, Input } from 'semantic-ui-react';
import { useFormik } from 'formik';
import '../NewClient/NewClient.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { getAllClients, setLoadingFalse, setLoadingTrue } from '../../../redux/actions';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import es from 'date-fns/locale/es';
registerLocale('es', es)

const clientController = new Client();

export function EditClient({ onClose }) {
    const clientInfo = useSelector((state) => state.clientsReducer.clientToEdit);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: clientInfo[0].name,
            lastName: clientInfo[0].lastName,
            birthDate: clientInfo[0].birthDate,
            gender: clientInfo[0].gender,
            contacto: clientInfo[0].contacto,
            email: clientInfo[0].email,
            startedDate: clientInfo[0].startedDate,
            startDate: parseISO(clientInfo[0].startDate),
            key: clientInfo[0].key,
            rutinas: clientInfo[0].rutinas
        },
        validationSchema: Yup.object({
            name: Yup.string().required(true),
            lastName: Yup.string().required(true)
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await clientController.updateClient(formValue);
                dispatch(setLoadingTrue());
                setTimeout(() => {
                    dispatch(setLoadingFalse());
                    dispatch(getAllClients());
                }, 500);
                onClose();
            } catch (error) {
                console.log(error);
            }
        }
    })

    const deleteClient = (client) => {
        clientController.deleteClient(client);
        dispatch(setLoadingTrue());
        setTimeout(() => {
            dispatch(getAllClients());
            dispatch(setLoadingFalse());
        }, 1000);
        onClose();
    }

    return (
        <Form onSubmit={formik.handleSubmit} className='newClient'>
            <Form.Group widths='equal'>
                <Form.Input
                    name='name'
                    placeholder="Nombre"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    className='inputName'
                />
                <Form.Input
                    name='lastName'
                    placeholder="Apellido"
                    value={formik.values.lastName}
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
                    <option value=''>---</option>
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
            <Form.Group widths='equal'>
                <Form.Button type='submit' primary fluid loading={formik.isSubmitting} style={{ marginTop: '15px' }}>Actualizar</Form.Button>
                <Form.Button type='button' color='red' fluid loading={formik.isSubmitting} style={{ marginTop: '15px' }} onClick={() => deleteClient(clientInfo)}>
                    <Icon name='trash alternate' inverted />
                    Borrar
                </Form.Button>
            </Form.Group>
        </Form >
    )
}
