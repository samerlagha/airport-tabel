import {createStore, combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import{routerReducer} from 'react-router-redux';
import {fligthsReducer} from '../store/flights.reducer';

const reducer=combineReducers({
 routing:routerReducer,
 fligths:fligthsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
export default store;