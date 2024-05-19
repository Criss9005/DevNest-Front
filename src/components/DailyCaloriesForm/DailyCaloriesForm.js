import React from 'react';
import styles from './DailyCaloriesForm.module.css';
import Button from '../Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Modal from '../Modal/Modals'

const validationSchema = yup.object().shape({
  height: yup.number()
    .min(100, 'Height must be greater than or equal to 100 cm')
    .max(220, 'Height must be less than or equal to 250 cm')
    .required('Height is required'),
  age: yup.number()
    .min(18, 'Age must be greater than or equal to 18 years')
    .max(120, 'Age must be less than or equal to 100 years')
    .required('Age is required'),
  currentWeight: yup.number()
    .min(30, 'Current weight must be greater than or equal to 20 kg')
    .max(200, 'Current weight must be less than or equal to 500 kg')
    .required('Current weight is required'),
  desiredWeight: yup.number()
    .min(30, 'Desired weight must be greater than or equal to 20 kg')
    .max(200, 'Desired weight must be less than or equal to 500 kg')
    .required('Desired weight is required'),
    bloodType: yup.number()
    .oneOf([1, 2, 3, 4], 'Blood type must be one of the following values: 1, 2, 3, 4')
    .required('Blood type is required'),
});

function DailyCaloriesForm({ onFormSubmit }) {
  return (
    <Formik
      initialValues={{
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '1' // Valor por defecto
      }}
      validationSchema={validationSchema}
      onSubmit={onFormSubmit}
    >
      {formik => {
        const { handleSubmit, isValid, dirty, errors, touched } = formik;
        return (
          <Form className={styles['calculate__form']} onSubmit={handleSubmit}>
            <div className={styles['calculate__field-wrapper']}>
              <Field
                type="number"
                name="height"
                placeholder=" "
                className={
                  errors.height && touched.height
                    ? `${styles['calculate__field']} ${styles['input-error']}`
                    : styles['calculate__field']
                }
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
                type="number"
                name="age"
                placeholder=" "
                className={
                  errors.age && touched.age
                    ? `${styles['calculate__field']} ${styles['input-error']}`
                    : styles['calculate__field']
                }
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
                type="number"
                name="currentWeight"
                placeholder=" "
                className={
                  errors.currentWeight && touched.currentWeight
                    ? `${styles['calculate__field']} ${styles['input-error']}`
                    : styles['calculate__field']
                }
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
                type="number"
                name="desiredWeight"
                placeholder=" "
                className={
                  errors.desiredWeight && touched.desiredWeight
                    ? `${styles['calculate__field']} ${styles['input-error']}`
                    : styles['calculate__field']
                }
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
              <Modal></Modal>
            <Button
              id={'button-form'}
              type="submit"
              disabled={!(dirty && isValid && formik.values.bloodType)}
              className={
                !(dirty && isValid && formik.values.bloodType) ? 'disabled-btn' : ''
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