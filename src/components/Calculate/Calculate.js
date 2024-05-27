import React, { useEffect, useState } from 'react';
import styles from '../Calculate/calculato.module.css';
import MenuSummary from "../MenuSummary/MenuSummary"

export default function CalculatorDailyCalories(props) {
  const [dailyCalorieIntake, setDailyCalorieIntake] = useState(0);
  const [nonRecommendedFoods, setNonRecommendedFoods] = useState([]);

  const updateUserData = () => {
    const userData = JSON.parse(localStorage.getItem('USER'));
    if (userData && userData.user && userData.user.dailyIntake) {
      setDailyCalorieIntake(userData.user.dailyIntake.dailyCalorieIntake);
      setNonRecommendedFoods(userData.user.dailyIntake.nonRecommendedFoods);
    } else {
      setDailyCalorieIntake(0);
      setNonRecommendedFoods([]);
    }
  };

  useEffect(() => {
    updateUserData();

    const handleStorageUpdate = () => {
      updateUserData();
    };

    window.addEventListener('storageUpdate', handleStorageUpdate);

    return () => {
      window.removeEventListener('storageUpdate', handleStorageUpdate);
    };
  }, []);

  return (
    <div className={styles.calulateContainer }>
        <MenuSummary/>

   
    <div className={styles['calculate__field']}>
      <div className={styles['calculate__field__summary']}>
        <h4 className={styles['titles']}>Summary for {' 13.08.2023'}</h4>
        <ul className={styles['summary__ul']}>
          <li>
            <span>Left </span>
            <span>{'000 '}Kcal </span>
          </li>

          <li>
            <span>Consumed </span>
            <span>{'000 '}Kcal </span>
          </li>

          <li>
            <span>Daily rate </span>
            <span>{dailyCalorieIntake} Kcal </span>
          </li>

          <li>
            <span>n% of normal </span>
            <span>{'000 '}Kcal </span>
          </li>
        </ul>
      </div>
      <div className={styles['calculate__field__summary_food']}>
        <h4 className={styles['titles']}>Food not recommended</h4>
        <ul className={styles['food']}>
          {nonRecommendedFoods.length > 0 ? (
            nonRecommendedFoods.map((food, index) => (
              <li key={index}>{food}</li>
            ))
          ) : (
            <li>Your diet will be displayed here</li>
          )}
        </ul>
      </div>
      </div>
       </div>
  );
}
