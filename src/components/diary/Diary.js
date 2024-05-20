import React, { useState, useEffect } from 'react';
import DiaryCalendar from './DiaryCalendar';
import DiaryFoodList from './DiaryFoodList';
import DiarySummary from './DiarySummary';
import styles from './Diary.module.css';
import { getConsumedFoods } from './api/apiServices';

const Diary = () => {
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addFoodToList = food => {
    setFoodList([...foodList, ...food]);
    setConsumedCalories(consumedCalories + food.calories);
  };

  const removeFoodFromList = foodToRemove => {
    const updatedFoodList = foodList.filter(food => food !== foodToRemove);
    setFoodList(updatedFoodList);
    setConsumedCalories(consumedCalories - foodToRemove.calories);
  };

  const getFoodList = async () => {
    setIsLoading(true);
    const result = await getConsumedFoods('123456asd', '16-05-2024');
    // console.log(result + 'resultado');
    addFoodToList(result);
    setIsLoading(false);
  };
  useEffect(() => {
    console.log('hola');
    getFoodList();
  }, []);

  return (
    <div className={styles.diaryContainer}>
      <div className={styles.calendarSection}>
        <DiaryCalendar />
      </div>
      <div className={styles.foodListSection}>
        {isLoading ? (
          <div>Loading... </div>
        ) : (
          <DiaryFoodList
            foodList={foodList}
            addFoodToList={addFoodToList}
            removeFoodFromList={removeFoodFromList}
          />
        )}
      </div>
      <div className={styles.summarySection}>
        <DiarySummary consumedCalories={consumedCalories} />
      </div>
    </div>
  );
};

export default Diary;
