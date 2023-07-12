import React from 'react';
import './index.scss';

const NotFoundPage = () => {
  return (
    <div id="error-page" className="error_container">
      <h1>Oops!</h1>
      <p>It looks like this page does not exist</p>
    </div>
  );
};

export default NotFoundPage;
