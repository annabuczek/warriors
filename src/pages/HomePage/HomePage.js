import React from 'react';
import { Link } from 'react-scroll';
import Warriors from '../../components/Warriors/Warriors';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__banner">
        <div className="homepage__content">
          <h1 className="homepage__title">
            Witaj w świecie dzielnych wojowników!
          </h1>
          <h3 className="homepage__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent fringilla libero rhoncus nisi vulputate volutpat.
            Fusce interdum lobortis vulputate. Aliquam at libero eget
            purus pellentesque commodo quis at arcu.
          </h3>
          <Link
            className="homepage__button"
            to="warrior"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Poznaj ich bliżej
          </Link>
        </div>
      </section>
      <Warriors />
    </div>
  );
};

export default HomePage;
