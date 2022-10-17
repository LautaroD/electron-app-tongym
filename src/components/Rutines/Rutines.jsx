import React, { useEffect, useState } from 'react';
import './Rutines.scss';
import { getAllRutines } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import CardRutine from './CardRutine';
import { Dimmer, Loader } from 'semantic-ui-react';
import SearchOfRutines from './SearchOfRutines';
import { BasicModal } from '../../shared';
import { EditRutine } from '../Forms';

export function Rutines() {
    const dispatch = useDispatch();
    const rutinas = useSelector((state) => state.rutinesReducer.rutines);
    const copyRutines = useSelector((state) => state.rutinesReducer.copyRutines);

    useEffect(() => {
        dispatch(getAllRutines());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);
    const [sizeModal, setSizeModal] = useState(null);

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
        setSizeModal('tiny')
    };

    const openModal = (type) => {
        if (type === 'editRutine') {
            setTitleModal('Editar rutina');
            setSizeModal('large');
            setContentModal(<EditRutine onClose={closeModal} />)
        }
        setShowModal(true);
    }

    if (rutinas === null || rutinas === undefined) return (
        <Dimmer active inverted>
            <Loader inverted >Cargando...</Loader>
        </Dimmer>
    )

    if (rutinas.length === 0 && copyRutines.length === 0) return (
        <h1 className='component-rutine__titleNoRutines'>No se encontraron rutinas...</h1>
    )

    if (rutinas.length === 0 && copyRutines.length !== 0) return (
        <div className='component-rutine'>
            <div className='component-rutine__header'>
                <h2>Rutinas</h2>
                <p>Rutinas creadas: <span className='contador'>{copyRutines.length}</span></p>
            </div>
            <SearchOfRutines />
            <h4>No se encontraron rutinas compatibles con su busqueda...</h4>
        </div>
    )

    return (
        <>
            <div className='component-rutine'>
                <div className='component-rutine__header'>
                    <h2>Rutinas</h2>
                    <p>Rutinas creadas: <span className='contador'>{rutinas.length}</span></p>
                </div>
                <SearchOfRutines />

                <div className='component-rutine__content'>
                    {
                        rutinas.map((rutina) => (
                            <CardRutine
                                key={rutina.key}
                                name={rutina.name}
                                description={rutina.description}
                                rutina={rutina}
                                openModal={openModal}
                            />
                        ))
                    }
                </div>
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


    // return (
    //     <>
    //         {
    //             (rutinas === null || rutinas === undefined)
    //                 ? <>
    //                     <Dimmer active inverted>
    //                         <Loader inverted >Cargando...</Loader>
    //                     </Dimmer>

    //                 </>
    //                 : (rutinas.length === 0)
    //                     ? (copyRutines.length === 0)
    //                         ? <h1 className='component-rutine__titleNoRutines'>No se encontraron rutinas...</h1>
    //                         : <h4>No se encontraron rutinas compatibles con su busqueda...</h4>
    //                     : <div className='component-rutine'>
    //                         <div className='component-rutine__header'>
    //                             <h2>Rutinas</h2>
    //                             <p>Rutinas creadas: <span className='contador'>{rutinas.length}</span></p>
    //                         </div>
    //                         <SearchOfRutines />

    //                         <div className='component-rutine__content'>
    //                             {
    //                                 rutinas.map((rutina) => (
    //                                     <CardRutine
    //                                         key={rutina.dataRutine.key}
    //                                         name={rutina.dataRutine.name}
    //                                         description={rutina.dataRutine.description}
    //                                         rutina={rutina}
    //                                     />
    //                                 ))
    //                             }
    //                         </div>
    //                     </div>
    //         }
    //     </>
    // )
}
