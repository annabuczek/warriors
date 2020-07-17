import React from 'react';
import { connect } from 'react-redux';
import WarriorsCarouselItem from '../WarriorsCarouselItem/WarriorsCarouselItem';
import './WarriorsCarousel.scss';

const WarriorsCarousel = ({ warriors }) => {
  return (
    <section className="warriors">
      <h2 className="warriors__title">Poznaj Wojowników</h2>
      <div className="warriors__carousel">
        {warriors.map((warrior) => {
          return (
            <WarriorsCarouselItem
              warrior={warrior}
              key={warrior.id}
              image={
                'https://source.unsplash.com/random/400x300?jedi'
              }
            />
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = ({ warriors }) => {
  return { warriors: Object.values(warriors.data) };
};

export default connect(mapStateToProps)(WarriorsCarousel);
