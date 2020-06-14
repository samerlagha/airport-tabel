import React ,{useEffect} from 'react';
import {useLocation ,useParams} from 'react-router-dom';
import {connect } from 'react-redux';
import {flightsListSelector , spinnerSelectore} from '../../../store/flights.selectors';
import Spinner from '../../spinner/Spinner';
import FlysList from './FlysList';
import * as flightsActions from '../../../store/flights.actions';
import qs from 'qs';
import './tabelFly.scss'


const TabelFly =({getFlightsList,flights,isLoadin})=>{

    const { direction}= useParams();
    const search =qs.parse(useLocation().search,
       {ignoreQueryPrefix:true}).search;
      
       useEffect(() => {
          getFlightsList(direction);
          
       }, [direction]);

       if(isLoadin) return <Spinner/>;

       let allFilgths = !search ? flights
       : flights.filter(flight => flight.codeShareData[0].codeShare === search);
       const isFound = allFilgths.length < 1 ? (
        <tr>
        <th colSpan="7" className="not-found">
          Not Found
        </th>
      </tr> )
       
         : <FlysList data={allFilgths}/>




    return  <table className="flights-details">
         <thead className="table-head">
      <tr className="details-header">
        <th>Terminal</th>
        <th>Local Time</th>
        <th>Destination</th>
        <th>Status</th>
        <th>AirLine</th>
        <th>Flight</th>
      </tr>
    </thead>
    <tbody className="table-body">{isFound}</tbody>
  </table>
}

const mapState=state=>({
    flights: flightsListSelector(state),
    isLoading : spinnerSelectore(state),
});

export default  connect(mapState,flightsActions)(TabelFly);