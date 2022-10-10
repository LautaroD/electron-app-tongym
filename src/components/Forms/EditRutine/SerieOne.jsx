import React from 'react';
import { Form, Select, Button, Icon } from 'semantic-ui-react';

export default function SerieOne({ prevStep, nextStep, serieOne, setSerieOne, ejercicios }) {

    return (
        <>
            <Form style={{ padding: '15px' }}>
                <h2>Serie 1</h2>
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
                        value={serieOne[1].firstExercise}
                        onChange={(e) => setSerieOne({ ...serieOne, 1: { ...serieOne[1], firstExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='firstRep'
                        type='number'
                        value={serieOne[1].firstRep}
                        onChange={(e) => setSerieOne({ ...serieOne, 1: { ...serieOne[1], firstRep: e.target.value } })}
                        className='firstRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='firstWeight'
                        type='number'
                        value={serieOne[1].firstWeight}
                        onChange={(e) => setSerieOne({ ...serieOne, 1: { ...serieOne[1], firstWeight: e.target.value } })}
                        className='firstWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='firstType'
                        placeholder="Descripción..."
                        value={serieOne[1].firstType}
                        onChange={(e) => setSerieOne({ ...serieOne, 1: { ...serieOne[1], firstType: e.target.value } })}
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
                        value={serieOne[2].secondExercise}
                        onChange={(e) => setSerieOne({ ...serieOne, 2: { ...serieOne[2], secondExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='secondRep'
                        type='number'
                        value={serieOne[2].secondRep}
                        onChange={(e) => setSerieOne({ ...serieOne, 2: { ...serieOne[2], secondRep: e.target.value } })}
                        className='secondRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='secondWeight'
                        type='number'
                        value={serieOne[2].secondWeight}
                        onChange={(e) => setSerieOne({ ...serieOne, 2: { ...serieOne[2], secondWeight: e.target.value } })}
                        className='secondWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='secondType'
                        placeholder="Descripción..."
                        value={serieOne[2].secondType}
                        onChange={(e) => setSerieOne({ ...serieOne, 2: { ...serieOne[2], secondType: e.target.value } })}
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
                        value={serieOne[3].thirdExercise}
                        onChange={(e) => setSerieOne({ ...serieOne, 3: { ...serieOne[3], thirdExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='thirdRep'
                        type='number'
                        value={serieOne[3].thirdRep}
                        onChange={(e) => setSerieOne({ ...serieOne, 3: { ...serieOne[3], thirdRep: e.target.value } })}
                        className='thirdRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='thirdWeight'
                        type='number'
                        value={serieOne[3].thirdWeight}
                        onChange={(e) => setSerieOne({ ...serieOne, 3: { ...serieOne[3], thirdWeight: e.target.value } })}
                        className='thirdWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='thirdType'
                        placeholder="Descripción..."
                        value={serieOne[3].thirdType}
                        onChange={(e) => setSerieOne({ ...serieOne, 3: { ...serieOne[3], thirdType: e.target.value } })}
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
                        value={serieOne[4].fourthExercise}
                        onChange={(e) => setSerieOne({ ...serieOne, 4: { ...serieOne[4], fourthExercise: e.target.innerText } })}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='fourthRep'
                        type='number'
                        value={serieOne[4].fourthRep}
                        onChange={(e) => setSerieOne({ ...serieOne, 4: { ...serieOne[4], fourthRep: e.target.value } })}
                        className='fourthRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='fourthWeight'
                        type='number'
                        value={serieOne[4].fourthWeight}
                        onChange={(e) => setSerieOne({ ...serieOne, 4: { ...serieOne[4], fourthWeight: e.target.value } })}
                        className='fourthWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='fourthType'
                        placeholder="Descripción..."
                        value={serieOne[4].fourthType}
                        onChange={(e) => setSerieOne({ ...serieOne, 4: { ...serieOne[4], fourthType: e.target.value } })}
                        className='fourthType'
                        width={7}
                    />
                </Form.Group>
            </Form>
            <Button onClick={prevStep} color='violet' icon labelPosition='left'>
                Anterior
                <Icon name='left arrow' />
            </Button>
            <Button onClick={nextStep} color='violet' icon labelPosition='right'>
                Siguiente
                <Icon name='right arrow' />
            </Button>
        </>

    )
}