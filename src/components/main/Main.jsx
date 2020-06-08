import React from 'react';
import {Route } from 'react-router-dom';
import ErrorBoundry from '../boundry-error/Error-boundry';
import Departures from './subComponent/BtnDepartures';
import Arrivals from './subComponent/BtnArrivals';
import TabelFly from './subComponent/TabelFly';
import './main.scss'


const Main =()=>{

    return(
          <section className='main-section'>

              <div className='buttons-fly'>
                  <Departures/>
                  <Arrivals/>
                  </div>
                  <ErrorBoundry>
                  <Route 
                   path='/:direction' component={TabelFly}
                  
                  />
                  </ErrorBoundry>
                 
          </section>
    )
}

export default Main;