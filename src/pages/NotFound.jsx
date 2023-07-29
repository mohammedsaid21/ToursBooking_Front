import React from 'react'
import "../styles/thank-you.css"

import Logo from "../assets/images/logo.png"
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404</h1>
        <p className="not-found-message">Page Not Found</p>
        <p className="not-found-description">
          Oops! The page you are looking for could not be found.
        </p>
        <img
          className="not-found-image"
          src={Logo} // Replace with your own image URL
          alt="404 Not Found"
        />
      </div>
    </div>
  );
};


export default NotFound