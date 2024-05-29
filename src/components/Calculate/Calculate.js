import React, { useEffect, useState, useContext } from 'react';
import styles from '../Calculate/calculato.module.css';
import MenuSummary from '../MenuSummary/MenuSummary';
import { SummaryContext } from '../diary/diary/summaryContext';

export default function CalculatorDailyCalories(props) {
  const { foodList, date } = useContext(SummaryContext);

  const [dailyCalorieIntake, setDailyCalorieIntake] = useState(0);
  const [nonRecommendedFoods, setNonRecommendedFoods] = useState([]);
  const [consumedCalories, setConsumedCalories] = useState(0);
  // const [date, setDate] = useState(null);

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
    //console.log(foodList);
    setConsumedCalories(
      foodList
        ? foodList.reduce((a, c) => {
            const calories = c.calories;
            a += calories;
            return a;
          }, 0)
        : 0
    );

    const handleStorageUpdate = () => {
      updateUserData();
    };

    window.addEventListener('storageUpdate', handleStorageUpdate);

    return () => {
      window.removeEventListener('storageUpdate', handleStorageUpdate);
    };
  }, [foodList]);

  return (
    <div className={styles.calulateContainer}>
      <MenuSummary />

      <div className={styles['calculate__field']}>
        <div className={styles['calculate__field__summary']}>
          <h4 className={styles['titles']}>Summary for {date}</h4>
          <ul className={styles['summary__ul']}>
            <li>
              <span>Left </span>
              <span>
                {dailyCalorieIntake
                  ? (dailyCalorieIntake - consumedCalories).toFixed(2)
                  : '000 '}{' '}
                Kcal
              </span>
            </li>

            <li>
              <span>Consumed </span>
              <span>{consumedCalories.toFixed(2) ?? '000'} Kcal </span>
            </li>

            <li>
              <span>Daily rate </span>
              <span>
                {dailyCalorieIntake ? dailyCalorieIntake : '000'} Kcal{' '}
              </span>
            </li>

            <li>
              <span>n% of normal </span>
              <span>
                {dailyCalorieIntake
                  ? ((consumedCalories * 100) / dailyCalorieIntake).toFixed(2)
                  : '0'}
                %{' '}
              </span>
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
