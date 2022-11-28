import React, { useEffect, useState, useRef } from 'react';
import { Dimmer, Loader, Pagination } from 'semantic-ui-react';
import ListOfClients from './ListOfClients';
import './Clients.scss';
import SearchOfClients from './SearchOfClients';
import { getAllClients } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { EditClient } from '../Forms';
import { BasicModal } from '../../shared';

export function Clients() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(25);

    const ref = useRef(null);

    const dispatch = useDispatch();

    const clients = useSelector((state) => state.clientsReducer.clients);
    const clientsCopy = useSelector((state) => state.clientsReducer.clientsCopy);

    useEffect(() => {
        dispatch(getAllClients());
        setPosts(clients);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setPosts(clients);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clients])

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
    };

    const openModal = (type) => {
        if (type === 'editClient') {
            setTitleModal('Actualizar información');
            setContentModal(<EditClient onClose={closeModal} />)
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
    return (
        <div>
            {
                (clients === null || clients === undefined)
                    ? (<>
                        <Dimmer active inverted>
                            <Loader inverted >Cargando...</Loader>
                        </Dimmer>

                    </>)
                    : (clientsCopy.length === 0)
                        ? <h1 className='component-rutine__titleNoRutines'>No hay clientes registrados...</h1>
                        : (
                            <>
                                <div className='clients-section' ref={ref}>
                                    <span className='clients-section__header'>
                                        <h2>Clientes</h2>
                                        <p>Total de clientes: <span className='contador'>{clientsCopy.length}</span></p>
                                    </span>
                                    <SearchOfClients currentPage={setCurrentPage} />
                                    <ListOfClients clients={currentPosts} openModal={openModal} />
                                    <span className='clients-section__pagination'>
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
                            </>
                        )
            }
            <BasicModal
                show={showModal}
                onClose={closeModal}
                title={titleModal}
                children={contentModal}
            />
        </div>
    )
}
