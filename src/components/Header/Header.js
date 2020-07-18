import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import './Hamburger.scss';

const NavigationLinks = ({ mobile, handleClick }) => {
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

const NavigationMobile = () => {
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
        <NavigationLinks mobile handleClick={() => setOpen(false)} />
      </div>
    </div>
  );
};

const NavigationDesktop = () => {
  return (
    <div className="nav-desktop">
      <NavigationLinks />
    </div>
  );
};

const Header = () => {
  return (
    <section className="header">
      <nav className="header__navbar">
        <Link to="/" className="header__link">
          Strona Główna
        </Link>
        <NavigationMobile />
        <NavigationDesktop />
      </nav>
    </section>
  );
};

export default Header;
