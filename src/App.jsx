import React from 'react';
import ErrorBoundry from './components/boundry-error/Error-boundry';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from './store/store';
const App=()=>{
    return(
        <>
         <ErrorBoundry>
             <Provider store={store}>
                 <Router>
                 <Header/>
                  <Main/>
                 </Router>
             </Provider>
            
         </ErrorBoundry>
        
      
       </>
    )
}


export default App;