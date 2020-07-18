import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addWarrior } from '../../redux/warriors/actions';
import skills from '../../helpers/skills';
import './WarriorCreate.scss';

const WarriorCreate = ({
  submitting,
  handleSubmit,
  addWarrior,
  warriors,
}) => {
  const generateNewWarriorId = () => {
    const warriorsKeys = Object.keys(warriors.data);
    const warriorsLastId = warriorsKeys[warriorsKeys.length - 1];
    return parseInt(warriorsLastId) + 1;
  };

  const onSubmit = (formValues) => {
    const warrior = { id: generateNewWarriorId(), ...formValues };
    addWarrior(warrior);
  };

  const renderInput = ({
    input,
    label,
    type,
    name,
    isTextarea,
    meta: { error, touched },
  }) => {
    return (
      <div
        className={`form__field ${
          touched && error ? 'form__field--error' : ''
        }`}
      >
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            {...input}
            type={type}
            className="form__textarea"
          />
        ) : (
          <input {...input} type={type} className="form__input" />
        )}
        {touched && error && (
          <div className="form__error">{error}</div>
        )}
      </div>
    );
  };

  const renderSelect = ({ input, label, type, name, options }) => {
    return (
      <div className="form__field">
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <select {...input} type={type} className="form__select">
          {options.map((option) => {
            return (
              <option
                key={option.id}
                value={option.name}
                className="form__option"
              >
                {option.name}
              </option>
            );
          })}
          ;
        </select>
      </div>
    );
  };

  return (
    <div className="warrior-create">
      <h1 className="warrior-create__title">Dodaj Wojownika</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="name"
          component={renderInput}
          type="text"
          label="Imię"
        />
        <Field
          name="firstName"
          component={renderSelect}
          type="select"
          label="Superpower"
          options={Object.values(skills)}
        />
        <Field
          name="description"
          component={renderInput}
          type="area"
          label="Opis"
          isTextarea
        />
        <button
          type="submit"
          disabled={submitting}
          className="form__submit"
        >
          Stwórz Wojownika
        </button>
      </form>
    </div>
  );
};

const form = reduxForm({
  form: 'createWarriorForm',
  initialValues: { skill: skills['1'].name },
})(WarriorCreate);

export default connect(({ warriors }) => ({ warriors }), {
  addWarrior,
})(form);
