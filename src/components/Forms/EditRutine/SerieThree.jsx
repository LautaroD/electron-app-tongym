import React from 'react';
import { Form, Select, Button, Icon } from 'semantic-ui-react';

export default function SerieThree({ prevStep, nextStep, thirdSerie, setThirdSerie, handleSubmit, ejercicios, day }) {
    return (
        <>
            <Form style={{ padding: '15px' }}>
                <h2>{day} - serie 3</h2>
                <Form.Group >
                    <Form.Field
                        name='firstExercise'
                        control={Select}
                        options={ejercicios}
                        label={{ children: 'Primer Ejercicio', htmlFor: 'form-select-control-gender' }}
                        placeholder='Nombre ejercicio'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        className='firstExercise'
                        width={5}
                        value={thirdSerie[1].exercise}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 1: { ...thirdSerie[1], exercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='firstRep'
                        type='number'
                        value={thirdSerie[1].rep}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 1: { ...thirdSerie[1], rep: e.target.value } })}
                        className='firstRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='firstWeight'
                        type='number'
                        value={thirdSerie[1].weight}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 1: { ...thirdSerie[1], weight: e.target.value } })}
                        className='firstWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='firstType'
                        placeholder="Descripción..."
                        value={thirdSerie[1].type}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 1: { ...thirdSerie[1], type: e.target.value } })}
                        className='firstType'
                        width={7}
                    />
                </Form.Group>
                {/* SEGUNDO EJERCICIO */}
                <Form.Group >
                    <Form.Field
                        name='secondExercise'
                        control={Select}
                        options={ejercicios}
                        label={{ children: 'Segundo Ejercicio', htmlFor: 'form-select-control-gender' }}
                        placeholder='Nombre ejercicio'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        className='secondExercise'
                        width={5}
                        value={thirdSerie[2].exercise}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 2: { ...thirdSerie[2], exercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='secondRep'
                        type='number'
                        value={thirdSerie[2].rep}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 2: { ...thirdSerie[2], rep: e.target.value } })}
                        className='secondRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='secondWeight'
                        type='number'
                        value={thirdSerie[2].weight}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 2: { ...thirdSerie[2], weight: e.target.value } })}
                        className='secondWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='secondType'
                        placeholder="Descripción..."
                        value={thirdSerie[2].type}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 2: { ...thirdSerie[2], type: e.target.value } })}
                        className='secondType'
                        width={7}
                    />
                </Form.Group>
                {/* TERCER EJERCICIO */}
                <Form.Group >
                    <Form.Field
                        name='thirdExercise'
                        control={Select}
                        options={ejercicios}
                        label={{ children: 'Tercer Ejercicio', htmlFor: 'form-select-control-gender' }}
                        placeholder='Nombre ejercicio'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        className='thirdExercise'
                        width={5}
                        value={thirdSerie[3].exercise}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 3: { ...thirdSerie[3], exercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='thirdRep'
                        type='number'
                        value={thirdSerie[3].rep}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 3: { ...thirdSerie[3], rep: e.target.value } })}
                        className='thirdRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='thirdWeight'
                        type='number'
                        value={thirdSerie[3].weight}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 3: { ...thirdSerie[3], weight: e.target.value } })}
                        className='thirdWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='thirdType'
                        placeholder="Descripción..."
                        value={thirdSerie[3].type}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 3: { ...thirdSerie[3], type: e.target.value } })}
                        className='thirdType'
                        width={7}
                    />
                </Form.Group>
                {/* CUARTO EJERCICIO */}
                <Form.Group >
                    <Form.Field
                        name='fourthExercise'
                        control={Select}
                        options={ejercicios}
                        label={{ children: 'Cuarto Ejercicio', htmlFor: 'form-select-control-gender' }}
                        placeholder='Nombre ejercicio'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        className='fourthExercise'
                        width={5}
                        value={thirdSerie[4].exercise}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 4: { ...thirdSerie[4], exercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='fourthRep'
                        type='number'
                        value={thirdSerie[4].rep}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 4: { ...thirdSerie[4], rep: e.target.value } })}
                        className='fourthRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='fourthWeight'
                        type='number'
                        value={thirdSerie[4].weight}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 4: { ...thirdSerie[4], weight: e.target.value } })}
                        className='fourthWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='fourthType'
                        placeholder="Descripción..."
                        value={thirdSerie[4].type}
                        onChange={(e) => setThirdSerie({ ...thirdSerie, 4: { ...thirdSerie[4], type: e.target.value } })}
                        className='fourthType'
                        width={7}
                    />
                </Form.Group>
            </Form>
            {
                (day !== 'Dia tres')
                    ?
                    <>
                        <Button onClick={prevStep} color='violet' icon labelPosition='left'>
                            Anterior
                            <Icon name='left arrow' />
                        </Button>
                        <Button onClick={nextStep} color='violet' icon labelPosition='right'>
                            Siguiente
                            <Icon name='right arrow' />
                        </Button>
                    </>
                    : <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={prevStep} color='violet' icon labelPosition='left'>
                            Anterior
                            <Icon name='left arrow' />
                        </Button>
                        <span>
                            <Button onClick={handleSubmit} color='green'>
                                <Icon name='save' />
                                Guardar
                            </Button>
                            <Button color='blue'>
                                <Icon name='print' />
                                Imprimir
                            </Button>
                        </span>
                    </span>
            }
        </>
    )
}
