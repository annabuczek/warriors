import React from 'react';
import PropTypes from 'prop-types';
import './WarriorsCarouselItem.scss';

const WarriorsCarouselItem = ({ warrior, image }) => {
  return (
    <div>
      <h3 className="warrior__name">{warrior.name}</h3>
      <div className="warrior__content">
        <div className="warrior__content--left">
          <img
            className="warrior__image"
            src={image}
            alt={`Zdjęcie ${warrior.name}`}
          ></img>
        </div>
        <div className="warrior__content--right">
          <div className="warrior__superpower">
            <h3 className="warrior__superpower-title">Super Power</h3>
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
};

WarriorsCarouselItem.propTypes = {
  warrior: PropTypes.object.isRequired,
};

export default WarriorsCarouselItem;
