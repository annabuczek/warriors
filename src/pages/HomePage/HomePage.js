import React from 'react';
import Warriors from '../../components/Warriors/Warriors';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__banner"></section>
      <Warriors />
    </div>
  );
};

export default HomePage;
