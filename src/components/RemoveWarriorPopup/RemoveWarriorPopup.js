import React from 'react';
import Popup from 'reactjs-popup';
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
              className="warrior__button"
              onClick={() => {
                removeWarrior();
              }}
            >
              Wyślij do rezerwy
            </button>
            <button
              className="warrior__button"
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

export default RemoveWarriorPopup;
