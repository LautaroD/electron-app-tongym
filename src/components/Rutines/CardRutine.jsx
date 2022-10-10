import React, { useState } from 'react';
import { Card, Button, Popup, Icon, Accordion } from 'semantic-ui-react';
import './CardRutine.scss';
import { Rutines } from '../../api';
import { getAllRutines, editRutine } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { GeneratorPDF } from '../../api';
import SinglePage from '../SinglePagePDF/SinglePagePDF';
import moment from 'moment';

const rutinesController = new Rutines();
const pdfController = new GeneratorPDF();

export default function CardRutine({ name, description, rutina, openModal }) {
    const dispatch = useDispatch();

    const [preview, setPreview] = useState(false);

    const deleteRutine = () => {
        rutinesController.deleteRutine(name, rutina);
        setTimeout(() => {
            dispatch(getAllRutines());
        }, 500);
    }

    const descargarPDF = () => {
        pdfController.downloadRutine(rutina)
    }

    const editarRutina = () => {
        dispatch(editRutine(rutina));
        openModal('editRutine');
    }

    return (
        <div className='card-rutine'>
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        {name}
                        <div>
                            <span className='metaInfo'>Asignado a: {(rutina.dataRutine.assignedTo.key === 0) ? 'Nadie' : rutina.dataRutine.assignedTo.text}</span>
                            {
                                (rutina.dataRutine.startProgram === null) ? <span></span> : <span className='metaInfo'>Fecha de inicio: {moment(rutina.dataRutine.startProgram).format('DD/M/YY')}</span>
                            }
                        </div>
                    </Card.Header>
                    {/* <Card.Meta>Asignado a: Lautaro Darretche</Card.Meta> */}
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Accordion >
                        <Accordion.Title
                            active={preview}
                            index={0}
                            onClick={() => setPreview((prevState) => !prevState)}
                        >
                            <Icon name={(preview) ? 'zoom-out' : 'zoom-in'} />
                            Vista previa
                        </Accordion.Title>
                        <Accordion.Content active={preview}>
                            <SinglePage rutina={rutina} />
                        </Accordion.Content>
                    </Accordion>
                </Card.Content>
                <Card.Content extra>
                    <div className='buttons'>
                        {/* <Button compact color='violet'>
                            <Icon name='edit' inverted />
                            Editar
                        </Button>
                        <Button compact color='blue'>
                            <Icon name='print' inverted />
                            Imprimir
                        </Button> */}
                        <Button.Group basic size='mini'>
                            <Popup trigger={<Button icon='edit' onClick={() => editarRutina()} />} content='Editar' size='mini' />
                            <Popup trigger={<Button icon='print' />} content='Imprimir' size='mini' />
                            <Popup trigger={<Button icon='trash alternate' onClick={() => deleteRutine()} />} content='Eliminar' size='mini' />
                            <Popup trigger={<Button icon='download' onClick={() => descargarPDF()} />} content='Descargar PDF' size='mini' />
                        </Button.Group>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}