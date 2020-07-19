import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import './Hamburger.scss';
import './NavigationMobile.scss';

export const NavigationMobile = ({ listCount }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-mobile">
      <button
        className={`hamburger hamburger--spin ${
          open ? 'is-active' : ''
        }`}
        type="button"
        onClick={(e) => setOpen(!open)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div
        className={`nav-mobile__drawer ${
          open ? 'nav-mobile__drawer--open' : ''
        }`}
      >
        <NavigationLinks
          mobile
          handleClick={() => setOpen(false)}
          listCount={listCount}
        />
      </div>
    </div>
  );
};

NavigationMobile.protoTypes = {
  listCount: PropTypes.number.isRequired,
};

export default NavigationMobile;
