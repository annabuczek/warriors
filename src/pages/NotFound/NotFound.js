import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h3 className="not-found__message">
        Strona nie została znaleziona
      </h3>
      <Link to="/" className="not-found__link">
        Wróć na Stronę Główną
      </Link>
    </div>
  );
};

export default NotFound;
