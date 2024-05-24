import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './DailyCaloriesForm.module.css';
import Button from '../Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Modal from '../Modal/Modal';
import { useModal } from '../Modal/useModal';
import css from '../Modal/modal.module.css';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .min(100, 'Height must be greater than or equal to 100 cm')
    .max(220, 'Height must be less than or equal to 250 cm')
    .required('Height is required'),
  age: yup
    .number()
    .min(18, 'Age must be greater than or equal to 18 years')
    .max(120, 'Age must be less than or equal to 100 years')
    .required('Age is required'),
  currentWeight: yup
    .number()
    .min(30, 'Current weight must be greater than or equal to 20 kg')
    .max(200, 'Current weight must be less than or equal to 500 kg')
    .required('Current weight is required'),
  desiredWeight: yup
    .number()
    .min(30, 'Desired weight must be greater than or equal to 20 kg')
    .max(200, 'Desired weight must be less than or equal to 500 kg')
    .required('Desired weight is required'),
  bloodType: yup
    .number()
    .oneOf(
      [1, 2, 3, 4],
      'Blood type must be one of the following values: 1, 2, 3, 4'
    )
    .required('Blood type is required'),
});

function DailyCaloriesForm() {
  const [result, setResult] = useState(null);
  const [isOpen, openModal, closeModal] = useModal(false);
  const navigate = useNavigate();

  const handleFormSubmit = async values => {
    try {
      localStorage.setItem('CAL_NO_USER', JSON.stringify(values));

      const token = localStorage.getItem('accessToken');
      console.log(`Access token: ${token}`);
      const apiUrl = token
        ? 'https://devnest-back-1.onrender.com/api/products/private/daily-intake'
        : 'https://devnest-back-1.onrender.com/api/products/public/daily-intake';

      const response = await axios.get(apiUrl, {
        params: values,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      console.log('API Response:', response.data);
      setResult(response.data);
      openModal();

      if (token) {
        navigate('/diary');
      }
    } catch (error) {
      console.error('Error fetching daily intake data', error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {formik => {
          const { handleSubmit, isValid, dirty, errors, touched } = formik;
          return (
            <Form className={styles['calculate__form']} onSubmit={handleSubmit}>
              <h1 className={styles['calculate__form-title']}>
                Calculate your daily calorie intake right now
              </h1>

              <div className={styles['calculate__form-container']}>
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
                    Height, cm *
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
                  <label
                    htmlFor="currentWeight"
                    className={styles['floating-label']}
                  >
                    Current weight, kg *
                  </label>
                  <ErrorMessage
                    name="currentWeight"
                    component="div"
                    className={styles['subtitle-error']}
                  />
                </div>
              </div>
              <div className={styles['calculate__form-container']}>
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
                  <label
                    htmlFor="desiredWeight"
                    className={styles['floating-label']}
                  >
                    Desired weight, kg *
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
              </div>

              <Button
                id={'button-form'}
                type="submit"
                disabled={!(dirty && isValid && formik.values.bloodType)}
                className={
                  !(dirty && isValid && formik.values.bloodType)
                    ? 'disabled-btn'
                    : ''
                }
                onClick={async () => {
                  if (!formik.isValid || !formik.dirty) return;

                  // Trigger form submission
                  await handleSubmit();

                  const token = localStorage.getItem('accessToken');
                  if (token) {
                    navigate('/diary');
                  } else {
                    openModal();
                  }
                }}
                title={'Start losing weight'}
              />
            </Form>
          );
        }}
      </Formik>

      {result && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h3 className={css.titlemodal}>
            Your recommended daily calorie intake is
          </h3>
          <p className={css.numberCal}>{result.dailyCalorieIntake}</p>
          <h4 className={css.foodNotEat}>Foods you should not eat</h4>
          <ul>
            {result.nonRecommendedFoods.map((food, index) => (
              <li className={css.liFood} key={index}>
                {' '}
                {index + 1}. {food}
              </li>
            ))}
          </ul>

          <button
            className={css.startlose}
            onClick={() => {
              navigate('/register');
            }}
          >
            Start losing weight
          </button>
        </Modal>
      )}
    </>
  );
}

export default DailyCaloriesForm;
