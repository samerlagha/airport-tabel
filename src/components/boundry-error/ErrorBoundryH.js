import React, { useState } from 'react';
import ErrorIndicator from "./ErrorIndicator";

const  ErrorBoundryH = () =>{


  const [hasError, setError] = useState(false);
function error(){
   setError(hasError =>{
    hasError = !hasError.setError;
   })

 }
 

  return(
      {error}
  )
  }

export default ErrorBoundryH;