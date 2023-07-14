import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="mainContainer">
      <div id="error-page" className="errorContainer">
        <h1>{t('notFoundPage.title')}</h1>
        <p>{t('notFoundPage.description1')}</p>
        <p>{t('notFoundPage.description2')}</p>
        <img className="notFound" src="/images/404.webp" alt="404-image" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default NotFoundPage;
