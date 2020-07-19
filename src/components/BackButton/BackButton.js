import React from 'react';
import history from '../../history';
import back from '../../assets/back.svg';
import './BackButton.scss';

const BackButton = () => {
  return (
    <button className="back-button" onClick={() => history.goBack()}>
      <img
        className="back-button__icon"
        alt="back icon"
        src={back}
      ></img>
    </button>
  );
};

export default BackButton;
