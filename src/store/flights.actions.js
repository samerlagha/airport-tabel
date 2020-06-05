import { fetchFlightsList  } from './fetchFlights';

export const FLIGHTS_DEPARTURES = 'FLIGHTS_DEPARTURES';
export const SHOW_SPINNER='SHOW_SPINNER';
export const ACTIVE_BUTTON='ACTIVE_BUTTON'

export const  flightsListRecieved=(flightsData)=>{
  return {

    type: FLIGHTS_DEPARTURES ,
    payload :{
        flightsData,
    }
  }
   
}


export const showSpinner=()=>{
    return {
        type: SHOW_SPINNER
    }
}

export const activeButton=(stateBtn)=>{
  return {
      type: ACTIVE_BUTTON,
 payload: {stateBtn}
 
}
}
export const getFlightsList = (type)=>(dispatch,getState)=>{
   if(type==='arrival') {
       dispatch(activeButton(true))
   } else{
       dispatch(activeButton(false))
   }
   dispatch(showSpinner());
   fetchFlightsList()
       .then(item=>dispatch(flightsListRecieved(item.body[type])))
   
}