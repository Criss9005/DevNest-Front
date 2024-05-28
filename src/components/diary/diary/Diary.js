import React, { useState, useCallback, useContext } from 'react';
import DiaryCalendar from './DiaryCalendar';
import DiaryFoodList from './DiaryFoodList';
import { SummaryContext } from './summaryContext';

import styles from './Diary.module.css';
import { removeFoodRegister } from './api/apiServices';


const Diary = () => {
  const { foodList, setFoodList, date, setDate } = useContext(SummaryContext);

  const [consumedCalories, setConsumedCalories] = useState(0);

  const addFoodToList = useCallback(
    food => {
      if (Array.isArray(food))
        if (!food.length) {
          setFoodList([]);

        } else {
          setFoodList(prevFoodList => [...prevFoodList, ...food]);
        }
      else
        setFoodList(prevFoodList => [
          ...prevFoodList,
          { ...food, name: food.productName },
        ]);
      setConsumedCalories(prevCalories => prevCalories + food.calories);
    },
    [setFoodList]
  );

  const removeFoodFromList = async foodToRemove => {
    try {
      const response = await removeFoodRegister(foodToRemove.id);
      if (response.status === 200) {
        const updatedFoodList = foodList.filter(
          food => food.id !== foodToRemove.id
        );
        setFoodList(updatedFoodList);
        setConsumedCalories(consumedCalories - foodToRemove.calories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className={styles.diaryContainer}>
      <div className={styles.calendarSection}>
        <DiaryCalendar setDate={setDate} setFoodList={setFoodList} />
      </div>
      <div className={styles.foodListSection}>
        <DiaryFoodList
          foodList={foodList}
          addFoodToList={addFoodToList}
          setFoodList={setFoodList}
          removeFoodFromList={removeFoodFromList}
          date={date}
        />
      </div>
      
    </div>
  );
};

export default Diary;
