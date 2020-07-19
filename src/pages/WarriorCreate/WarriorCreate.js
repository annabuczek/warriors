import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addWarrior } from '../../redux/warriors/actions';
import skills from '../../helpers/skills';
import './WarriorCreate.scss';

class WarriorCreate extends React.Component {
  generateNewWarriorId = () => {
    const warriorsKeys = Object.keys(this.props.warriors.data);
    if (warriorsKeys.length === 0) {
      return 1;
    }
    const warriorsLastId = warriorsKeys[warriorsKeys.length - 1];
    return parseInt(warriorsLastId) + 1;
  };

  onSubmit = (formValues) => {
    const warrior = {
      id: this.generateNewWarriorId(),
      ...formValues,
    };
    this.props.addWarrior(warrior);
  };

  renderInput = ({
    input,
    label,
    type,
    name,
    isTextarea,
    meta: { error, touched },
  }) => {
    return (
      <div className="form__field">
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            {...input}
            type={type}
            className={`form__textarea ${
              touched && error ? 'form__textarea--error' : ''
            }`}
          />
        ) : (
          <input
            {...input}
            type={type}
            className={`form__input ${
              touched && error ? 'form__input--error' : ''
            }`}
          />
        )}
        {touched && error && (
          <div className="form__error">{error}</div>
        )}
      </div>
    );
  };

  renderSelect = ({ input, label, type, name, options }) => {
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

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="warrior-create">
        <h1 className="warrior-create__title">Dodaj Wojownika</h1>
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="name"
            component={this.renderInput}
            type="text"
            label="Imię"
          />
          <Field
            name="firstName"
            component={this.renderSelect}
            type="select"
            label="Super Power"
            options={Object.values(skills)}
          />
          <Field
            name="description"
            component={this.renderInput}
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
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'Imię jest wymagane';
  }
  if (!formValues.description) {
    errors.description = 'Opis jest wymagany';
  }
  return errors;
};

const form = reduxForm({
  form: 'createWarriorForm',
  initialValues: { skill: skills['1'].name },
  validate,
})(WarriorCreate);

export default connect(({ warriors }) => ({ warriors }), {
  addWarrior,
})(form);
