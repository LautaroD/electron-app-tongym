import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { clientsReducer, loadingReducer, exercisesReducer, rutinesReducer } from './reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    clientsReducer,
    loadingReducer,
    exercisesReducer,
    rutinesReducer
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)