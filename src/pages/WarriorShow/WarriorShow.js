import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveWarriorPopup from '../../components/RemoveWarriorPopup/RemoveWarriorPopup';
import NotFound from '../NotFound/NotFound';
import BackButton from '../../components/BackButton/BackButton';
import {
  addWarriorToMyList,
  removeWarriorFromMyList,
} from '../../redux/myList/actions';
import { removeWarrior } from '../../redux/warriors/actions';
import './WarriorShow.scss';
import '../../styles/shared/Warrior.scss';

export const WarriorShow = ({
  warriors,
  match,
  myList,
  addWarriorToMyList,
  removeWarriorFromMyList,
  removeWarrior,
}) => {
  const warrior = warriors.data[match.params.id];
  if (!warrior) {
    return <NotFound />;
  }

  const toggleWarriorOnMyList = (warrior) => {
    if (warrior.id in myList) {
      removeWarriorFromMyList(warrior);
    } else {
      addWarriorToMyList(warrior);
    }
  };

  return (
    <div className="warrior-show">
      <BackButton />
      <div className="warrior">
        <h3 className="warrior__name">{warrior.name}</h3>
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
            <div className="warrior-show__description">
              {warrior.description}
            </div>
            <div className="warrior__actions">
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
              <RemoveWarriorPopup
                removeWarrior={() => removeWarrior(warrior)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WarriorShow.protoTypes = {
  myList: PropTypes.object.isRequired,
  warriors: PropTypes.object.isRequired,
  removeWarriorFromMyList: PropTypes.func.isRequired,
  addWarriorToMyList: PropTypes.func.isRequired,
  removeWarrior: PropTypes.func.isRequired,
};

export default connect(
  ({ warriors, myList }) => ({
    warriors,
    myList,
  }),
  { addWarriorToMyList, removeWarriorFromMyList, removeWarrior },
)(WarriorShow);
