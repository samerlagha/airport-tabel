import React from 'react';
import {Link} from 'react-router-dom';
import './button.scss';

const Departures =()=>{
    return (
        <Link to="/departure">
        <button className=' btn departures-btn not-active'>
          <i className="fas fa-plane-departure"></i>
         <span> ВИЛІТ усі РЕЙСИ</span>
        </button>
      </Link>
    )
}

export default Departures;