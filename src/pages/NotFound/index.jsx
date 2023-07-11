import React from 'react';
import { useRouteError } from 'react-router-dom';
import './index.scss';

const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error_container">
      <h1>Oops!</h1>
      <p>It looks like this page does not exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFoundPage;
