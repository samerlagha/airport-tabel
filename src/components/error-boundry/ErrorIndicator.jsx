import React from "react";
import "./error-indicator.scss";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">Error!!!</span>
      <span>but we already sent to fix it</span>
      
    </div>
  );
};

export default ErrorIndicator;
