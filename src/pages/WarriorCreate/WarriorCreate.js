import React from 'react';
import { Field, reduxForm } from 'redux-form';
import skills from '../../helpers/skills';
import './WarriorCreate.scss';

const WarriorCreate = ({ submitting, handleSubmit }) => {
  const renderInput = ({
    input,
    label,
    type,
    meta: { error, touched },
  }) => {
    return (
      <div
        className={`form__field ${
          touched && error ? 'form__field--error' : ''
        }`}
      >
        <label>
          {label}
          <input {...input} type={type} />
          {touched && error && (
            <div className="form__error">{error}</div>
          )}
        </label>
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="warrior-create">
      <h1 className="warrior-create__title">Dodaj Wojownika</h1>
      <form
        className="warrior-create__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          name="firstName"
          component={renderInput}
          type="text"
          label="Imię"
        />
        <Field name="skill" component="select">
          {Object.values(skills).map((skill) => {
            return (
              <option key={skill.id} value={skill.name}>
                {skill.name}
              </option>
            );
          })}
        </Field>
        <Field
          name="description"
          component={renderInput}
          type="text"
          label="Opis"
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

export default reduxForm({
  form: 'createWarriorForm',
  initialValues: { skill: skills['1'].name },
})(WarriorCreate);
