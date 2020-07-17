import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import '@brainhubeu/react-carousel/lib/style.css';
import './Warriors.scss';

const Warriors = ({ warriors }) => {
  return (
    <section className="warriors">
      <h2 className="warriors__title">Poznaj Wojowników</h2>
      <Carousel
        arrows
        dots
        centered
        infinite
        className="warriors__carousel"
      >
        {warriors.map((warrior) => {
          return (
            <div className="warrior" key={warrior.id}>
              <h3 className="warrior__name">{warrior.name}</h3>
              <div className="warrior__content">
                <div className="warrior__content--left">
                  <img
                    className="warrior__image"
                    src={
                      'https://source.unsplash.com/random/400x300?jedi'
                    }
                    alt={`Zdjęcie ${warrior.name}`}
                  ></img>
                </div>
                <div className="warrior__content--right">
                  <div className="warrior__superpower">
                    <h3 className="warrior__superpower-title">
                      Super Power
                    </h3>
                    <div className="warrior__superpower-content">
                      {warrior.skill}
                    </div>
                  </div>
                  <div className="warrior__actions">
                    <button className="warrior__button">
                      Wyświetl szczegóły
                    </button>
                    <button className="warrior__button">
                      Dodaj/Usuń z listy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

const mapStateToProps = ({ warriors }) => {
  return { warriors: Object.values(warriors.data) };
};

export default connect(mapStateToProps)(Warriors);
