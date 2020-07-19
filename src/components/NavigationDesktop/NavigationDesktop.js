import React from 'react';
import PropTypes from 'prop-types';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import './NavigationDesktop.scss';

export const NavigationDesktop = ({ listCount }) => {
  return (
    <div className="nav-desktop">
      <NavigationLinks listCount={listCount} />
    </div>
  );
};

NavigationDesktop.protoTypes = {
  listCount: PropTypes.number.isRequired,
};

export default NavigationDesktop;
