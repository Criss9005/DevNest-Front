import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './DailyCaloriesForm.module.css';
import Modal from '../Modal/Modal';
import { useModal } from '../Modal/useModal';
import css from '../Modal/modal.module.css';

function DailyCaloriesForm() {
  const [formData, setFormData] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '1',
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [isOpen, openModal, closeModal] = useModal(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('USER'));
    const token = userData?.accessToken || null;
    setIsLoggedIn(!!token);
    iconst newData = JSON.parse(localStorage.getItem('CAL_NO_USER'))
    if (newData) { 
      setFormData(newData)
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.height || formData.height < 100 || formData.height > 250) {
      newErrors.height = 'Height must be between 100 and 250 cm';
    }
    if (!formData.age || formData.age < 18 || formData.age > 100) {
      newErrors.age = 'Age must be between 18 and 100 years';
    }
    if (
      !formData.currentWeight ||
      formData.currentWeight < 20 ||
      formData.currentWeight > 500
    ) {
      newErrors.currentWeight = 'Current weight must be between 20 and 500 kg';
    }
    if (
      !formData.desiredWeight ||
      formData.desiredWeight < 20 ||
      formData.desiredWeight > 500
    ) {
      newErrors.desiredWeight = 'Desired weight must be between 20 and 500 kg';
    }
    if (!['1', '2', '3', '4'].includes(formData.bloodType)) {
      newErrors.bloodType = 'Blood type must be 1, 2, 3, or 4';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    const isValid = validate();
    if (!isValid) return;

    try {
      localStorage.setItem('CAL_NO_USER', JSON.stringify(formData));

      const userData = JSON.parse(localStorage.getItem('USER'));
      const token = userData?.accessToken || null;

      const apiUrl = token
        ? 'https://devnest-back-1.onrender.com/api/products/private/daily-intake'
        : 'https://devnest-back-1.onrender.com/api/products/public/daily-intake';

      const response = await axios({
        method: token ? 'post' : 'get',
        url: apiUrl,
        data: token ? formData : {},
        params: !token ? formData : {},
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      setResult(response.data);

      if (token) {
        localStorage.setItem('dailyIntake', JSON.stringify(response.data));
        const updatedUserData = {
          ...userData,
          user: {
            ...userData.user,
            dailyIntake: response.data,
          },
        };
        localStorage.setItem('USER', JSON.stringify(updatedUserData));
        window.dispatchEvent(new Event('storageUpdate'));
        navigate('/diary');
      } else {
        openModal();
      }
    } catch (error) {
      console.error('Error fetching daily intake data', error);
    }
  };

  return (
    <div className={styles['main__container']}>
      <div className={styles['main__content']}>
        <form
          className={styles['calculate__form']}
          onSubmit={e => e.preventDefault()}
        >
          <h1 className={styles['calculate__form-title']}>
            Calculate your daily calorie intake right now
          </h1>

          <div className={styles['calculate__form-container']}>
            <div className={styles['calculate__field-wrapper']}>
              <input
                type="number"
                name="height"
                placeholder=" "
                value={formData.height}
                onChange={handleInputChange}
                className={styles['calculate__field']}
              />
              <label htmlFor="height" className={styles['floating-label']}>
                Height, cm *
              </label>
              {errors.height && (
                <div className={styles['subtitle-error']}>{errors.height}</div>
              )}
            </div>

            <div className={styles['calculate__field-wrapper']}>
              <input
                type="number"
                name="age"
                placeholder=" "
                value={formData.age}
                onChange={handleInputChange}
                className={styles['calculate__field']}
              />
              <label htmlFor="age" className={styles['floating-label']}>
                Age *
              </label>
              {errors.age && (
                <div className={styles['subtitle-error']}>{errors.age}</div>
              )}
            </div>

            <div className={styles['calculate__field-wrapper']}>
              <input
                type="number"
                name="currentWeight"
                placeholder=" "
                value={formData.currentWeight}
                onChange={handleInputChange}
                className={styles['calculate__field']}
              />
              <label
                htmlFor="currentWeight"
                className={styles['floating-label']}
              >
                Current weight, kg *
              </label>
              {errors.currentWeight && (
                <div className={styles['subtitle-error']}>
                  {errors.currentWeight}
                </div>
              )}
            </div>
          </div>

          <div className={styles['calculate__form-container']}>
            <div className={styles['calculate__field-wrapper']}>
              <input
                type="number"
                name="desiredWeight"
                placeholder=" "
                value={formData.desiredWeight}
                onChange={handleInputChange}
                className={styles['calculate__field']}
              />
              <label
                htmlFor="desiredWeight"
                className={styles['floating-label']}
              >
                Desired weight, kg *
              </label>
              {errors.desiredWeight && (
                <div className={styles['subtitle-error']}>
                  {errors.desiredWeight}
                </div>
              )}
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
                  <input
                    type="radio"
                    name="bloodType"
                    value="1"
                    checked={formData.bloodType === '1'}
                    onChange={handleInputChange}
                    className={styles['calculate__radio-item']}
                  />
                  <span className={styles['checkmark']}></span>
                </label>
                <label>
                  2
                  <input
                    type="radio"
                    name="bloodType"
                    value="2"
                    checked={formData.bloodType === '2'}
                    onChange={handleInputChange}
                    className={styles['calculate__radio-item']}
                  />
                  <span className={styles['checkmark']}></span>
                </label>
                <label>
                  3
                  <input
                    type="radio"
                    name="bloodType"
                    value="3"
                    checked={formData.bloodType === '3'}
                    onChange={handleInputChange}
                    className={styles['calculate__radio-item']}
                  />
                  <span className={styles['checkmark']}></span>
                </label>
                <label>
                  4
                  <input
                    type="radio"
                    name="bloodType"
                    value="4"
                    checked={formData.bloodType === '4'}
                    onChange={handleInputChange}
                    className={styles['calculate__radio-item']}
                  />
                  <span className={styles['checkmark']}></span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="button"
            className={css.startlosebtn}
            onClick={handleFormSubmit}
            disabled={
              !formData.height ||
              !formData.age ||
              !formData.currentWeight ||
              !formData.desiredWeight ||
              !formData.bloodType
            }
          >
            Start losing weight
          </button>
        </form>

        {result && !isLoggedIn && (
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <h3 className={css.titlemodal}>
              Your recommended daily calorie intake is
            </h3>
            <p className={css.numberCal}>{result.dailyCalorieIntake}</p>
            <h4 className={css.foodNotEat}>Foods you should not eat</h4>
            <ul>
              {result.nonRecommendedFoods.map((food, index) => (
                <li className={css.liFood} key={index}>
                  {index + 1}. {food}
                </li>
              ))}
            </ul>

            <button
              className={css.startlose}
              onClick={() => navigate('/register')}
            >
              Start losing weight
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default DailyCaloriesForm;
