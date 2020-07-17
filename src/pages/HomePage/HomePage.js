import React from 'react';
import WarriorsCarousel from '../../components/WarriorsCarousel/WarriorsCarousel';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__banner"></section>
      <WarriorsCarousel />
    </div>
  );
};

export default HomePage;
