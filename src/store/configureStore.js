import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import blogReducer from "../Reducers/Blogsreducer.js"
import songReducer from "../Reducers/Songsreducer"
import backgroundReducer from "../Reducers/Backgroundreducers"
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        blogs:blogReducer,
        songs:songReducer,
        backgrounds: backgroundReducer
    }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

