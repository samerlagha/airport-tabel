import {createStore, combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import{routerReducer} from 'react-router-redux';
import { flightsReducer } from './flights.reducer';

//1-create combineReducers to combine all our Substores -2 store routing & flights
//2- create comopseEnhancers to using(ddevtools|| compose)
//3- create store arg( reducer, composeEnhancers(applyMiddleware(thunk)))

const reducer=combineReducers({
 routing:routerReducer,
 flights:flightsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
export default store;