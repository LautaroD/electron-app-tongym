import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllExercises } from '../../redux/actions';
import ListExercises from './ListExercises';
import SearchOfExercises from './SearchOfExercises';
import { BasicModal } from '../../shared';
import { EditExercise } from '../Forms';
import './Exercises.scss';
import { Pagination } from 'semantic-ui-react';


export function Exercises() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(50);

    const ref = useRef(null);

    const dispatch = useDispatch();

    const exercises = useSelector((state) => state.exercisesReducer.exercises);
    const exercisesCopy = useSelector((state) => state.exercisesReducer.exercisesCopy);

    useEffect(() => {
        dispatch(getAllExercises());
        setPosts(exercises);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setPosts(exercises);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exercises])

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState(null);

    const closeModal = () => {
        setShowModal(false);
        setTitleModal('')
        setContentModal(null);
    };

    const openModal = (type) => {
        if (type === 'editExercise') {
            setTitleModal('Editar ejercicio');
            setContentModal(<EditExercise onClose={closeModal} />)
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
        <>
            <div>
                {
                    (exercises === null || exercises === undefined)
                        ? <h1 className='component-rutine__titleNoRutines'>No hay ejercicios creados...</h1>
                        : (exercises.length === 0 && exercisesCopy.length === 0)
                            ? <h1 className='component-rutine__titleNoRutines'>No hay ejercicios creados...</h1>
                            : (
                                <>
                                    <div className='clients-section' ref={ref}>
                                        <span className='clients-section__header'>
                                            <h2>Ejercicios</h2>
                                            <p>Ejercicios creados: <span className='contador'>{exercisesCopy.length}</span></p>
                                        </span>
                                        <SearchOfExercises exercises={exercises} currentPage={setCurrentPage} />
                                        <ListExercises exercises={currentPosts} openModal={openModal} />
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
            </div>
            <BasicModal
                show={showModal}
                onClose={closeModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    )
}
