import React from 'react';
import {connect} from 'react-redux';
import { useLocation, Link} from 'react-router-dom';
import {activeButtonSelector,flightsListSelector} from '../../../store/flights.selectors';
import * as flightsActions from '../../../store/flights.actions';
import qs from 'qs';
import './button.scss';

const Arrivals =({isLoading ,flightsList})=>{

  const isActive = isLoading && flightsList.length > 1 ? "active" : "not-active";
  const search =qs.parse(useLocation().search,{ignoreQueryPrefix:true}).search;
  const isQueryParam= search ? `/arrival?search=${search}` : 'arrival';

    return (
          <Link to ={isQueryParam}>
        <button className={`arrivals-btn ${isActive} btn `}>
        <i className="fas fa-plane-arrival"></i>
        <span> ПРИЛІТ усі РЕЙСИ</span>
      </button>
      </Link>
    )
}

const mapState= state=>{
  return{
    isLoading: activeButtonSelector(state),
    flightsList: flightsListSelector(state),
  }
}
export default  connect( mapState,flightsActions)(Arrivals);