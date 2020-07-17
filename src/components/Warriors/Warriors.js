import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addWarriorToMyList,
  removeWarriorFromMyList,
} from '../../redux/myList/actions';
import '@brainhubeu/react-carousel/lib/style.css';
import './Warriors.scss';

const Warriors = ({
  warriors,
  addWarriorToMyList,
  removeWarriorFromMyList,
  myList,
}) => {
  const toggleWarriorOnMyList = (warrior) => {
    if (warrior.id in myList) {
      removeWarriorFromMyList(warrior);
    } else {
      addWarriorToMyList(warrior);
    }
  };
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
                    <Link
                      to={`/warriors/show/${warrior.id}`}
                      className="warrior__button"
                    >
                      Wyświetl szczegóły
                    </Link>
                    <button
                      className="warrior__button"
                      onClick={() => toggleWarriorOnMyList(warrior)}
                    >
                      {warrior.id in myList
                        ? `Usuń z mojej listy`
                        : 'Dodaj do mojej listy'}
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

const mapStateToProps = ({ warriors, myList }) => {
  return { warriors: Object.values(warriors.data), myList };
};

export default connect(mapStateToProps, {
  addWarriorToMyList,
  removeWarriorFromMyList,
})(Warriors);
