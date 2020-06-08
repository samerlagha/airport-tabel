import { fetchFlightsList  } from './fetchFlights';

//1- create action variabel
export const FLIGHTS_DEPARTURES = 'FLIGHTS_DEPARTURES';
export const SHOW_SPINNER='SHOW_SPINNER';
export const ACTIVE_BUTTON='ACTIVE_BUTTON';

//create actionsListRecived
export const  flightsListRecieved=(flightsData)=>{
  return {

    type: FLIGHTS_DEPARTURES ,
    payload :{
        flightsData,
    }
  }
   
}

//action for spinner
export const showSpinner=()=>{
    return {
        type: SHOW_SPINNER
    }
}

//action active button
export const activeButton=(stateBtn)=>{
  return {
      type: ACTIVE_BUTTON,
 payload: {stateBtn}
 
}

}
//  get list 

const ARRIVAL = ' ARRIVAL';
export const getFlightsList = (type)=>(dispatch)=>{
   if(type === ARRIVAL) {
       dispatch(activeButton(true))
   } else{
       dispatch(activeButton(false))
   }
   dispatch(showSpinner());
   fetchFlightsList()
       .then(item=>dispatch(flightsListRecieved(item.body[type])))
   
}