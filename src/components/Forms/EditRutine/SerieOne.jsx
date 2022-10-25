import React from 'react';
import { Form, Button, Icon, Input } from 'semantic-ui-react';
import SelectorNested from '../../SelectorNested/SelectorNested';

export default function SerieOne({ prevStep, nextStep, firstSerie, setFirstSerie, ejercicios, day, categories }) {

    return (
        <>
            <Form style={{ padding: '15px' }}>
                <h2>{day} - serie 1</h2>
                <Form.Group >
                    <SelectorNested categories={categories} exercises={ejercicios} serie={firstSerie} nSerie={1} setSerie={setFirstSerie} />
                    <Form.Field
                        style={{ marginBottom: '14px' }}
                        control={Input}
                        label='Primer ejercicio'
                        name='name'
                        type='text'
                        placeholder='Nombre del ejercicio...'
                        value={firstSerie[1].exercise}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 1: { ...firstSerie[1], exercise: e.target.value } })}
                        className='firstExercise'
                        width={5}
                    />
                    {/* <Form.Field
                        name='firstExercise'
                        control={Select}
                        options={ejercicios}
                        label={{ children: 'Primer Ejercicio', htmlFor: 'form-select-control-gender' }}
                        placeholder='Nombre ejercicio'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        className='firstExercise'
                        width={5}
                        value={firstSerie[1].exercise}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 1: { ...firstSerie[1], exercise: e.target.innerText } })}
                    /> */}
                    <Form.Input
                        label='Repeticiones'
                        name='firstRep'
                        type='number'
                        value={firstSerie[1].rep}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 1: { ...firstSerie[1], rep: e.target.value } })}
                        className='firstRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='firstWeight'
                        type='number'
                        value={firstSerie[1].weight}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 1: { ...firstSerie[1], weight: e.target.value } })}
                        className='firstWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='firstType'
                        placeholder="Descripción..."
                        value={firstSerie[1].type}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 1: { ...firstSerie[1], type: e.target.value } })}
                        className='firstType'
                        width={7}
                    />
                </Form.Group>
                {/* SEGUNDO EJERCICIO */}
                <Form.Group >
                    <SelectorNested categories={categories} exercises={ejercicios} serie={firstSerie} nSerie={2} setSerie={setFirstSerie} />
                    <Form.Field
                        style={{ marginBottom: '14px' }}
                        control={Input}
                        label='Segundo ejercicio'
                        name='name'
                        type='text'
                        placeholder='Nombre del ejercicio...'
                        // value={dataRutine.name}
                        // onChange={(e) => setDataRutine({ ...dataRutine, name: e.target.value })}
                        value={firstSerie[2].exercise}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 2: { ...firstSerie[2], exercise: e.target.value } })}
                        className='secondExercise'
                        width={5}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='secondRep'
                        type='number'
                        value={firstSerie[2].rep}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 2: { ...firstSerie[2], rep: e.target.value } })}
                        className='secondRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='secondWeight'
                        type='number'
                        value={firstSerie[2].weight}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 2: { ...firstSerie[2], weight: e.target.value } })}
                        className='secondWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='secondType'
                        placeholder="Descripción..."
                        value={firstSerie[2].type}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 2: { ...firstSerie[2], type: e.target.value } })}
                        className='secondType'
                        width={7}
                    />
                </Form.Group>
                {/* TERCER EJERCICIO */}
                <Form.Group >
                    <SelectorNested categories={categories} exercises={ejercicios} serie={firstSerie} nSerie={3} setSerie={setFirstSerie} />
                    <Form.Field
                        style={{ marginBottom: '14px' }}
                        control={Input}
                        label='Tercer ejercicio'
                        name='name'
                        type='text'
                        placeholder='Nombre del ejercicio...'
                        // value={dataRutine.name}
                        // onChange={(e) => setDataRutine({ ...dataRutine, name: e.target.value })}
                        value={firstSerie[3].exercise}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 3: { ...firstSerie[3], exercise: e.target.value } })}
                        className='thirdExercise'
                        width={5}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='thirdRep'
                        type='number'
                        value={firstSerie[3].rep}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 3: { ...firstSerie[3], rep: e.target.value } })}
                        className='thirdRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='thirdWeight'
                        type='number'
                        value={firstSerie[3].weight}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 3: { ...firstSerie[3], weight: e.target.value } })}
                        className='thirdWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='thirdType'
                        placeholder="Descripción..."
                        value={firstSerie[3].type}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 3: { ...firstSerie[3], type: e.target.value } })}
                        className='thirdType'
                        width={7}
                    />
                </Form.Group>
                {/* CUARTO EJERCICIO */}
                <Form.Group >
                    <SelectorNested categories={categories} exercises={ejercicios} serie={firstSerie} nSerie={4} setSerie={setFirstSerie} />
                    <Form.Field
                        style={{ marginBottom: '14px' }}
                        control={Input}
                        label='Cuarto ejercicio'
                        name='name'
                        type='text'
                        placeholder='Nombre del ejercicio...'
                        // value={dataRutine.name}
                        // onChange={(e) => setDataRutine({ ...dataRutine, name: e.target.value })}
                        value={firstSerie[4].exercise}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 4: { ...firstSerie[4], exercise: e.target.value } })}
                        className='fourthExercise'
                        width={5}
                    />
                    <Form.Input
                        label='Repeticiones'
                        name='fourthRep'
                        type='number'
                        value={firstSerie[4].rep}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 4: { ...firstSerie[4], rep: e.target.value } })}
                        className='fourthRep'
                        width={2}
                    />
                    <Form.Input
                        label='Peso (kg)'
                        name='fourthWeight'
                        type='number'
                        value={firstSerie[4].weight}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 4: { ...firstSerie[4], weight: e.target.value } })}
                        className='fourthWeight'
                        width={2}
                    />
                    <Form.Input
                        label='Tipo'
                        name='fourthType'
                        placeholder="Descripción..."
                        value={firstSerie[4].type}
                        onChange={(e) => setFirstSerie({ ...firstSerie, 4: { ...firstSerie[4], type: e.target.value } })}
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