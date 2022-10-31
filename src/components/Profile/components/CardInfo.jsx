import React, { useState } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './CardInfo.scss';
import SinglePage from '../../SinglePagePDF/SinglePagePDF';
import CardRutine from './CardRutine';
import { BasicModal } from '../../../shared';

export function CardInfo({ infoClient }) {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);
    const [sizeModal, setSizeModal] = useState('tiny');
    const [year, setYear] = useState(new Date().getFullYear())

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
        setSizeModal('tiny')
    };

    const openOldRutine = (rutina) => {
        setTitleModal(rutina.assignedTo.text);
        setSizeModal('large');
        setContentModal(<SinglePage onClose={closeModal} rutina={rutina} />)
        setShowModal(true);
    }

    function nextYear() {
        setYear(year + 1);
    }

    function prevYear() {
        setYear(year - 1);
    }

    return (
        <>
            <div className='cardInfo__header'>
                <Header as='h3'>Programas de entrenamiento</Header>
            </div>
            <div className='cardInfo__subHeader'>
                <span style={{ cursor: 'pointer' }} onClick={() => prevYear()}><Icon name='arrow left' size='big' /></span>
                <Header as='h2'>{year}</Header>
                <span style={{ cursor: 'pointer' }} onClick={() => nextYear()}><Icon name='arrow right' size='big' /></span>
            </div>
            <div className='cardInfo__content'>
                {
                    // eslint-disable-next-line array-callback-return
                    infoClient[0].rutinas.map(rutina => {
                        let date = new Date(rutina.startProgram);
                        if (date.getFullYear() === year) return (
                            <span key={rutina.key} onClick={() => openOldRutine(rutina)}>
                                <CardRutine nombre={rutina.name} fecha={rutina.startProgram} />
                            </span>)
                    })
                }
            </div>
            <BasicModal
                show={showModal}
                onClose={closeModal}
                title={titleModal}
                children={contentModal}
                size={sizeModal}
            />
        </>
    )
}
