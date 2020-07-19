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
import '../../styles/shared/Warrior.scss';

export const Warriors = ({
  warriors,
  error,
  fetching,
  myList,
  addWarriorToMyList,
  removeWarriorFromMyList,
}) => {
  const toggleWarriorOnMyList = (warrior) => {
    if (warrior.id in myList) {
      removeWarriorFromMyList(warrior);
    } else {
      addWarriorToMyList(warrior);
    }
  };

  const renderCarousel = () => {
    return (
      <Carousel arrows dots centered infinite>
        {warriors.map((warrior) => {
          return (
            <div className="warrior" key={warrior.id}>
              <h3 className="warrior__name" id="warrior">
                {warrior.name}
              </h3>
              <div className="warrior__content">
                <div className="warrior__content--left">
                  <div className="warrior__image-wrapper">
                    <img
                      className="warrior__image"
                      src={`https://source.unsplash.com/random/400x300?jedi?sig=${warrior.id}`}
                      alt={`Zdjęcie ${warrior.name}`}
                    ></img>
                  </div>
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
                      className={`warrior__button ${
                        warrior.id in myList
                          ? 'warrior__button--remove'
                          : 'warrior__button--add'
                      }`}
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
    );
  };

  const renderContent = () => {
    if (fetching) {
      return <div className="warriors__loading">Loading...</div>;
    } else if (error) {
      return (
        <div className="warriors__error">
          Coś poszło nie tak, spróbuj ponownie za chwilę.
        </div>
      );
    } else {
      return renderCarousel();
    }
  };

  return (
    <section className="warriors">
      <h2 className="warriors__title">Oto odważni śmiałkowie!</h2>
      {renderContent()}
    </section>
  );
};

const mapStateToProps = ({ warriors, myList }) => {
  return {
    warriors: Object.values(warriors.data),
    error: warriors.error,
    fetching: warriors.fetching,
    myList,
  };
};

export default connect(mapStateToProps, {
  addWarriorToMyList,
  removeWarriorFromMyList,
})(Warriors);
