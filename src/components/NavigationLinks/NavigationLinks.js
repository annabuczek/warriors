import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavigationLinks.scss';

const NavigationLinks = ({ mobile, handleClick, listCount }) => {
  return (
    <div className="navigation-links">
      <Link
        to="/mylist"
        className={`navigation-links__link ${
          mobile ? 'navigation-links__link--mobile' : ''
        }`}
        onClick={handleClick}
      >
        Moja Lista
        <span className="navigation-links__list-counter">
          {listCount}
        </span>
      </Link>
      <Link
        to="/warriors/new"
        className="navigation-links__link navigation-links__link--add"
        onClick={handleClick}
      >
        Dodaj Wojownika
      </Link>
    </div>
  );
};

NavigationLinks.protoTypes = {
  listCount: PropTypes.number.isRequired,
  mobile: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default NavigationLinks;
