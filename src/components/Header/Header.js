import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <section className="header">
      <nav className="header__navigation">
        <div className="header__navigation--left">
          <Link to="/" className="header__link">
            Strona Główna
          </Link>
        </div>
        <div className="header__navigation--right">
          <Link to="/mylist" className="header__link">
            Moja Lista
          </Link>
          <Link to="/warriors/new" className="header__link">
            Dodaj Wojownika
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Header;
