import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import './RemoveWarriorPopup.scss';
import '../../styles/shared/Warrior.scss';

const RemoveWarriorPopup = ({ removeWarrior }) => {
  return (
    <Popup
      trigger={<button className="warrior__button">Rezerwa </button>}
      modal
    >
      {(close) => (
        <div className="popup">
          <div className="popup__content">
            Czy jesteś pewny/pewna, ze chcesz wysłać wojownika do
            rezerwy?
          </div>
          <div className="popup__actions">
            <button
              className="popup__button--confirm"
              onClick={() => {
                removeWarrior();
              }}
            >
              Wyślij do rezerwy
            </button>
            <button
              className="popup__button--decline"
              onClick={() => {
                close();
              }}
            >
              Anuluj
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

RemoveWarriorPopup.protoTypes = {
  removeWarrior: PropTypes.func.isRequired,
};

export default RemoveWarriorPopup;
