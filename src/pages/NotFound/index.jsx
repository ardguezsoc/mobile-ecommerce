import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div id="error-page" className="errorContainer">
        <h1>Oooooops!</h1>
        <p>It looks like the page you are looking for does not exist</p>
        <p>Try going back to the previous page clicking this image</p>
        <img className="notFound" src="./images/404.webp" alt="404-image" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default NotFoundPage;
