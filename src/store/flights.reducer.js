import {FLIGHTS_DEPARTURES, SHOW_SPINNER, ACTIVE_BUTTON } from './flights.actions'
const initialState={
  flightsData:[],
  isActiveButton:false,
  isLoading: false,
};

const flightsReducer=(state=initialState,action)=>{
  switch(action.type){
       case FLIGHTS_DEPARTURES:
         return {
         ...state,
         flightsData: action.payload.flightsData,
       }
       case SHOW_SPINNER:
         return{
           ...state,
           isLoading: !state.isLoading,
         }

         case ACTIVE_BUTTON:
           return{
             ...state,
             isActiveButton:action.payload.stateBtn,
           }
      default:
          return state;
  }
}


export default flightsReducer;