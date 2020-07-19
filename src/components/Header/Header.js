import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import NavigationDesktop from '../NavigationDesktop/NavigationDesktop';
import './Header.scss';

export const Header = ({ myList }) => {
  const getMyListCount = () => {
    return Object.keys(myList).length;
  };
  return (
    <section className="header">
      <nav className="header__navbar">
        <Link to="/" className="header__link">
          Strona Główna
        </Link>
        <NavigationMobile listCount={getMyListCount()} />
        <NavigationDesktop listCount={getMyListCount()} />
      </nav>
    </section>
  );
};

Header.protoTypes = {
  myList: PropTypes.object.isRequired,
};

export default connect(({ myList }) => ({ myList }))(Header);
