import React from 'react';
import { connect } from 'react-redux';
import {
  addWarriorToMyList,
  removeWarriorFromMyList,
} from '../../redux/myList/actions';
import './WarriorShow.scss';
import '../../styles/shared/Warrior.scss';

const WarriorShow = ({
  warriors,
  match,
  myList,
  addWarriorToMyList,
  removeWarriorFromMyList,
}) => {
  const warrior = warriors.data[match.params.id];

  const toggleWarriorOnMyList = (warrior) => {
    if (warrior.id in myList) {
      removeWarriorFromMyList(warrior);
    } else {
      addWarriorToMyList(warrior);
    }
  };
  return (
    <div className="warrior-show">
      <div className="warrior">
        <h3 className="warrior__name">{warrior.name}</h3>
        <div className="warrior__content">
          <div className="warrior__content--left">
            <img
              className="warrior__image"
              src={'https://source.unsplash.com/random/400x300?jedi'}
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
            <div className="warrior-show__description">
              {warrior.description}
            </div>
            <div className="warrior__actions">
              <button
                className="warrior__button"
                onClick={() => toggleWarriorOnMyList(warrior)}
              >
                {warrior.id in myList
                  ? `Usuń z mojej listy`
                  : 'Dodaj do mojej listy'}
              </button>
              <button className="warrior__button">Rezerwa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ warriors, myList }) => ({
    warriors,
    myList,
  }),
  { addWarriorToMyList, removeWarriorFromMyList },
)(WarriorShow);
