import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import './Hamburger.scss';

const NavigationLinks = ({ mobile, handleClick, listCount }) => {
  return (
    <div className="header__links">
      <Link
        to="/mylist"
        className={`header__link ${
          mobile ? 'header__link--mobile' : ''
        }`}
        onClick={handleClick}
      >
        Moja Lista
        <span className="header__list-counter">{listCount}</span>
      </Link>
      <Link
        to="/warriors/new"
        className="header__link header__link--add"
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
