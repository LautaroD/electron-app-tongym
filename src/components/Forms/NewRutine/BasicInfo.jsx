import React from 'react';
import { Form, Button, Icon, Select } from 'semantic-ui-react';
import './BasicInfo.scss';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale('es', es)

export default function BasicInfo({ nextStep, dataRutine, setDataRutine, optionClients }) {

    return (
        <>
            <Form>
                <div className='basicInfo-form'>
                    <div className='basicInfo-form__nameClient'>
                        <Form.Input
                            label='Nombre'
                            name='name'
                            type='text'
                            placeholder='Nombre de la rutina...'
                            value={dataRutine.name}
                            onChange={(e) => setDataRutine({ ...dataRutine, name: e.target.value })}
                            className='firstRep'
                            width={15}
                        />
                        <Form.Field
                            clearable
                            name='client'
                            control={Select}
                            options={optionClients}
                            label={{ children: 'Asignar a:', htmlFor: 'form-select-control-gender' }}
                            placeholder='Nombre del cliente'
                            search
                            searchInput={{ id: 'form-select-control-gender' }}
                            className='firstExercise'
                            width={15}
                            // value={(e) => setDataRutine({...dataRutine, assignedTo: })}
                            value={dataRutine.assignedTo.name}
                            onChange={(e, data) => {
                                optionClients.forEach(client => {
                                    if (client.value === data.value) setDataRutine({ ...dataRutine, assignedTo: client })
                                    else return
                                })
                            }}
                        // onChange={(e) => setFirstSerie({ ...firstSerie, 1: { ...firstSerie[1], firstExercise: e.target.innerText } })}
                        />
                        <label className='basicInfo-form__labelProgramStart'>Inicio del programa:</label>
                        <DatePicker
                            selected={dataRutine.startProgram}
                            onChange={date => {
                                setDataRutine({ ...dataRutine, startProgram: date });
                                // formik.setFieldValue('startDate', date)
                            }}
                            placeholderText='Seleccione una fecha...'
                            locale='es'
                            dateFormat="dd 'de' MMMM 'de' yyyy"
                            className='react-datepicker__inputRutine'
                        />
                    </div>
                    <Form.TextArea
                        label='Descripción'
                        placeholder='Breve descripción...'
                        className='descriptionForm'
                        onChange={(e) => setDataRutine({ ...dataRutine, description: e.target.value })}
                        value={dataRutine.description}
                        width={12}
                        rows={9}
                    />
                </div>
            </Form>
            <Button onClick={nextStep} color='violet' icon labelPosition='right'>
                Siguiente
                <Icon name='right arrow' />
            </Button>
        </>
    )
}
