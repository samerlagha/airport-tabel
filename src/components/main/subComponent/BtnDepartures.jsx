import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {activeButtonSelector,flightsListSelector} from '../../../store/flights.selectors'
import * as flightsActions from '../../../store/flights.actions';

import './button.scss';

const Departures =({isLoading,flightsList})=>{
  let isActive = isLoading || flightsList.length > 0 ? 'active' : 'not-active';
 
    return (
        <Link to= 'departure' >
        <button className= {`btn departures-btn ${isActive}`}>
          <i className="fas fa-plane-departure"></i>
         <span> ВИЛІТ усі РЕЙСИ</span>
        </button>
      </Link>
    )
}
const mapState =state=>{
  return{
    isLoadin: activeButtonSelector(state),
    flightsList:flightsListSelector(state)
  }
}
export default connect(mapState,flightsActions)(Departures);