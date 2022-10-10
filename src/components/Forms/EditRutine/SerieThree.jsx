import React from 'react';
import { Form, Select, Button, Icon } from 'semantic-ui-react';

export default function SerieThree({ prevStep, serieThree, setSerieThree, handleSubmit, ejercicios }) {
    return (
        <>
            <Form style={{ padding: '15px' }}>
                <h2>Serie 3</h2>
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
                        value={serieThree[1].firstExercise}
                        onChange={(e) => setSerieThree({ ...serieThree, 1: { ...serieThree[1], firstExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='firstRep'
                        type='number'
                        value={serieThree[1].firstRep}
                        onChange={(e) => setSerieThree({ ...serieThree, 1: { ...serieThree[1], firstRep: e.target.value } })}
                        className='firstRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='firstWeight'
                        type='number'
                        value={serieThree[1].firstWeight}
                        onChange={(e) => setSerieThree({ ...serieThree, 1: { ...serieThree[1], firstWeight: e.target.value } })}
                        className='firstWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='firstType'
                        placeholder="Descripción..."
                        value={serieThree[1].firstType}
                        onChange={(e) => setSerieThree({ ...serieThree, 1: { ...serieThree[1], firstType: e.target.value } })}
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
                        value={serieThree[2].secondExercise}
                        onChange={(e) => setSerieThree({ ...serieThree, 2: { ...serieThree[2], secondExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='secondRep'
                        type='number'
                        value={serieThree[2].secondRep}
                        onChange={(e) => setSerieThree({ ...serieThree, 2: { ...serieThree[2], secondRep: e.target.value } })}
                        className='secondRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='secondWeight'
                        type='number'
                        value={serieThree[2].secondWeight}
                        onChange={(e) => setSerieThree({ ...serieThree, 2: { ...serieThree[2], secondWeight: e.target.value } })}
                        className='secondWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='secondType'
                        placeholder="Descripción..."
                        value={serieThree[2].secondType}
                        onChange={(e) => setSerieThree({ ...serieThree, 2: { ...serieThree[2], secondType: e.target.value } })}
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
                        value={serieThree[3].thirdExercise}
                        onChange={(e) => setSerieThree({ ...serieThree, 3: { ...serieThree[3], thirdExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='thirdRep'
                        type='number'
                        value={serieThree[3].thirdRep}
                        onChange={(e) => setSerieThree({ ...serieThree, 3: { ...serieThree[3], thirdRep: e.target.value } })}
                        className='thirdRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='thirdWeight'
                        type='number'
                        value={serieThree[3].thirdWeight}
                        onChange={(e) => setSerieThree({ ...serieThree, 3: { ...serieThree[3], thirdWeight: e.target.value } })}
                        className='thirdWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='thirdType'
                        placeholder="Descripción..."
                        value={serieThree[3].thirdType}
                        onChange={(e) => setSerieThree({ ...serieThree, 3: { ...serieThree[3], thirdType: e.target.value } })}
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
                        value={serieThree[4].fourthExercise}
                        onChange={(e) => setSerieThree({ ...serieThree, 4: { ...serieThree[4], fourthExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='fourthRep'
                        type='number'
                        value={serieThree[4].fourthRep}
                        onChange={(e) => setSerieThree({ ...serieThree, 4: { ...serieThree[4], fourthRep: e.target.value } })}
                        className='fourthRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='fourthWeight'
                        type='number'
                        value={serieThree[4].fourthWeight}
                        onChange={(e) => setSerieThree({ ...serieThree, 4: { ...serieThree[4], fourthWeight: e.target.value } })}
                        className='fourthWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='fourthType'
                        placeholder="Descripción..."
                        value={serieThree[4].fourthType}
                        onChange={(e) => setSerieThree({ ...serieThree, 4: { ...serieThree[4], fourthType: e.target.value } })}
                        className='fourthType'
                        width={7}
                    />
                </Form.Group>
            </Form>
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        </>
    )
}