import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  let pathname = ['home', ...location.pathname.split('/').filter((crumb) => crumb !== '')];

  const routePath = (crumb) => {
    switch (crumb) {
      case 'home':
        return '/';
      case 'default':
        return '#';
    }
  };

  const crumbs = pathname.map((crumb) => {
    return (
      <div className="crumb" key={crumb}>
        <Link to={routePath(crumb)}>{crumb}</Link>
      </div>
    );
  });

  return crumbs.length > 1 && <div className="breadcrumbs">{crumbs}</div>;
};
