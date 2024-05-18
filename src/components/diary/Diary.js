import React, { useState } from 'react';
import DiaryCalendar from './DiaryCalendar';
import DiaryFoodList from './DiaryFoodList';
import DiarySummary from './DiarySummary';
import styles from './Diary.module.css';

const Diary = () => {

  const [consumedCalories, setConsumedCalories] = useState(0);
  const [foodList, setFoodList] = useState([]);

  const addFoodToList = (food) => {
    setFoodList([...foodList, food]);
    setConsumedCalories(consumedCalories + food.calories);
  };

  const removeFoodFromList = (foodToRemove) => {
    const updatedFoodList = foodList.filter(food => food !== foodToRemove);
    setFoodList(updatedFoodList);
    setConsumedCalories(consumedCalories - foodToRemove.calories);
  };

  return (
    <div className={styles.diaryContainer}>      
      <div className={styles.calendarSection}>
        <DiaryCalendar />
      </div>
      <div className={styles.foodListSection}>
        <DiaryFoodList
          foodList={foodList}
          addFoodToList={addFoodToList}
          removeFoodFromList={removeFoodFromList}
        />
      </div>
      <div className={styles.summarySection}>
        <DiarySummary consumedCalories={consumedCalories} />
      </div>
    </div>
  );
};

export default Diary;
