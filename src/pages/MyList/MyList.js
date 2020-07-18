import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addWarriorToMyList,
  removeWarriorFromMyList,
} from '../../redux/myList/actions';
import './MyList.scss';

const MyList = ({
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
  return (
    <div className="my-list">
      <h1 className="my-list__title">Twoi wojownicy</h1>
      <div className="mylist__content">
        {Object.values(myList).map((warrior) => {
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
      </div>
    </div>
  );
};

export default connect(({ myList }) => ({ myList }), {
  addWarriorToMyList,
  removeWarriorFromMyList,
})(MyList);
