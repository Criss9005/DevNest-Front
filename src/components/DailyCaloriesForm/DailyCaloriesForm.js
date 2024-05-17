import React from 'react';
import styles from './DailyCaloriesForm.module.css';
import Button from '../Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  height: yup.number()
    .min(100, 'Height must be greater than or equal to 100')
    .max(220, 'Height must be less than or equal to 220')
    .required('Height is required'),
  age: yup.number()
    .min(18, 'Age must be greater than or equal to 18')
    .max(120, 'Age must be less than or equal to 120')
    .required('Age is required'),
  currentWeight: yup.number()
    .min(30, 'Current weight must be greater than or equal to 30')
    .max(200, 'Current weight must be less than or equal to 200')
    .required('Current weight is required'),
  desiredWeight: yup.number()
    .min(30, 'Desired weight must be greater than or equal to 30')
    .max(200, 'Desired weight must be less than or equal to 200')
    .required('Desired weight is required'),
});

function DailyCaloriesForm({ onFormSubmit, height, age, currentWeight, desiredWeight, bloodType = '1' }) {
  return (
    <Formik
    initialValues={{
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1' // Valor por defecto
    }}
    validationSchema={schema}
    onSubmit={onFormSubmit}
    enableReinitialize
    >
      {formik => {
        const { handleSubmit, isValid, dirty, errors, touched, values } = formik;
        return (
          <Form className={styles['calculate__form']} onSubmit={handleSubmit}>
              <div className={styles['calculate__field-wrapper']}>
                <Field
                  type="height"
                  name="height"
                  placeholder=" "
            className={
              errors.height && touched.height
                ? `${styles['calculate__field']} ${styles['input-error']}`
                : styles['calculate__field']
            }
            onFocus={e => e.target.placeholder = ''}
            onChange={e => e.target.placeholder = ''}
          />
          <label htmlFor="height" className={styles['floating-label']}>
            Height *
          </label>
                <ErrorMessage
                  name="height"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['calculate__field-wrapper']}>
                <Field
                  type="age"
                  name="age"
                  placeholder=" "
            className={
              errors.age && touched.age
                ? `${styles['calculate__field']} ${styles['input-error']}`
                : styles['calculate__field']
            }
            onFocus={e => e.target.placeholder = ''}
            onChange={e => e.target.placeholder = ''}
          />
          <label htmlFor="age" className={styles['floating-label']}>
            Age *
          </label>
                <ErrorMessage
                  name="age"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['calculate__field-wrapper']}>
                <Field
                  type="currentWeight"
                  name="currentWeight"
                  placeholder=""
                  className={
                    errors.CurrentW && touched.CurrentW
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                  onFocus={e => e.target.placeholder = ''}
            onChange={e => e.target.placeholder = ''}
          />
          <label htmlFor="currentWeight" className={styles['floating-label']}>
          Current weight *
          </label>
                
                <ErrorMessage
                  name="currentWeight"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>
              <div className={styles['calculate__field-wrapper']}>
                <Field
                  type="desiredWeight"
                  name="desiredWeight"
                  placeholder=""
                  className={
                    errors.DesiredW && touched.DesiredW
                      ? styles['input-error']
                      : styles['calculate__field']
                  }
                  onFocus={e => e.target.placeholder = ''}
            onChange={e => e.target.placeholder = ''}
          />
          <label htmlFor="desiredWeight" className={styles['floating-label']}>
          Desired weight *
          </label>
                
                <ErrorMessage
                  name="desiredWeight"
                  component="div"
                  className={styles['subtitle-error']}
                />
              </div>

              <div className={styles['calculate__radio-wrapper']}>
                <div id={styles['blood-group']}>Blood type *</div>
                <div
                  role="group"
                  aria-labelledby="blood-group"
                  className={styles['calculate__radio']}
                >
                  <label>
                    1
                    <Field
                      type="radio"
                      name="bloodType"
                      value="1"
                      className={styles['calculate__radio-item']}
                      /*checked*/
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    2
                    <Field
                      type="radio"
                      name="bloodType"
                      value="2"
                      className={styles['calculate__radio-item']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    3
                    <Field
                      type="radio"
                      name="bloodType"
                      value="3"
                      className={styles['calculate__radio-item']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                  <label>
                    4
                    <Field
                      type="radio"
                      name="bloodType"
                      value="4"
                      className={styles['calculate__radio-item']}
                    />
                    <span className={styles['checkmark']}></span>
                  </label>
                </div>
              </div>

              <Button
                id={'button-form'}
                type="submit"
                disabled={!(dirty && isValid && values.bloodType)}
                className={
                  !(dirty && isValid && values.bloodType) ? 'disabled-btn' : ''
                }
                title={'Start losing weight'}
              />
            </Form>
        );
      }}
    </Formik>
  );
}

export default DailyCaloriesForm;