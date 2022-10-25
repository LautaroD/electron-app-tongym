import React, { useState } from 'react';
import './SelectorNested.scss';
import { Icon } from 'semantic-ui-react';


export default function SelectorNested({ categories, exercises, serie, nSerie, setSerie }) {
    const [showCategories, setShowCategories] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [options, setOptions] = useState(false);

    function closeSelector(event) {
        event.stopPropagation()
        setShowMessage(false);
        setShowCategories(!showCategories);
    }

    function showOptions(categorie, e) {
        let target = e.target.parentElement.children;
        Array.from(target).forEach(element => element.className = null);
        e.target.className = 'optionSelected';
        let exercisesFilter = exercises.filter(e => e.categories.includes(categorie));
        setOptions(exercisesFilter);
        setShowMessage(true);
    }

    function selectExercise(exercise) {
        setSerie({ ...serie, [nSerie]: { ...serie[nSerie], exercise: exercise } })
        setShowCategories(false);
        setShowMessage(false);
    }

    // console.log(exercises);
    return (
        // <div className='selector' onMouseLeave={(e) => closeSelector(e)}>
        <div className='selector'>
            <span>
                <span className='selector__header' onClick={(e) => closeSelector(e)}><Icon name={(!showCategories) ? 'plus' : 'close'} /></span>                {/* <span className='selector__header' onClick={() => setShowCategories(!showCategories)}>Ejercicio...</span> */}
                {
                    (showCategories)
                        ? <div className='selector__categories'>
                            {categories.map(element => (
                                (<div
                                    key={element.key}
                                    onClick={(e) => { showOptions(element.text, e) }}
                                >
                                    {element.text}
                                </div>)
                            ))
                            }
                        </div>
                        : <></>
                }
                {
                    (showMessage)
                        ?
                        <div className='selector__options'>
                            {options.map(e => (
                                <div
                                    className='selector__optionSelected'
                                    key={e.key}
                                    onClick={() => selectExercise(e.text)}
                                >
                                    {e.text}
                                </div>
                            ))}
                        </div>
                        : <></>
                }
            </span>
        </div>
    )
}
