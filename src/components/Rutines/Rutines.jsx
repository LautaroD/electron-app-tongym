import React, { useEffect, useState, useRef } from 'react';
import './Rutines.scss';
import { getAllRutines } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import CardRutine from './CardRutine';
import { Dimmer, Loader, Pagination } from 'semantic-ui-react';
import SearchOfRutines from './SearchOfRutines';
import { BasicModal } from '../../shared';
import { EditRutine } from '../Forms';

export function Rutines() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const ref = useRef(null);

    const dispatch = useDispatch();
    const rutinas = useSelector((state) => state.rutinesReducer.rutines);
    const copyRutines = useSelector((state) => state.rutinesReducer.copyRutines);
    // const reLoad = useSelector((state) => state.loadingReducer.isLoading);


    useEffect(() => {
        dispatch(getAllRutines());
        setPosts(rutinas);
        // eslint-disable-next-line react-hooks/exhaustive-deps

        return () => {
            dispatch(getAllRutines());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setPosts(rutinas);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rutinas])

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

    // Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePaginationChange = (e, { activePage }) => {
        setCurrentPage(activePage);
        ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const totalPages = pageNumbers[pageNumbers.length - 1];

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
                <SearchOfRutines currentPage={setCurrentPage} />

                <div className='component-rutine__content' ref={ref}>
                    {
                        currentPosts.map((rutina) => (
                            <CardRutine
                                key={rutina.key}
                                name={rutina.name}
                                description={rutina.description}
                                rutina={rutina}
                                openModal={openModal}
                            />
                        ))
                    }
                    <span className='component-rutine__pagination'>
                        <Pagination
                            activePage={currentPage}
                            boundaryRange={1}
                            onPageChange={handlePaginationChange}
                            size='small'
                            siblingRange={1}
                            totalPages={String(totalPages)}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                        />
                    </span>
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
}
