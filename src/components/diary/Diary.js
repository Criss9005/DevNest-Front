import React, { useState, useEffect } from 'react';
import DiaryCalendar from './DiaryCalendar';
import DiaryFoodList from './DiaryFoodList';
/* import DiarySummary from './DiarySummary'; */
import styles from './Diary.module.css';
import { getConsumedFoods, removeFoodRegister } from './api/apiServices';

function getLocalDate() {
  const today = new Date();

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const localTime = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  );

  const day = addZero(localTime.getDate());
  const month = addZero(localTime.getMonth() + 1);
  const year = localTime.getFullYear();

  return `${day}-${month}-${year}`;
}

const Diary = () => {
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(getLocalDate());
  const idUser = '123456asd'; // Id usuario que inicia sesión.

  const addFoodToList = food => {
    setFoodList([...foodList, ...food]);
    setConsumedCalories(consumedCalories + food.calories);
  };

  const removeFoodFromList = async foodToRemove => {
    console.log(JSON.stringify(foodToRemove) + 'food to remove');
    try {
      const response = await removeFoodRegister(foodToRemove.id);
      console.log(response);
      const updatedFoodList = foodList.filter(
        food => food.id !== foodToRemove.id
      );
      setFoodList(updatedFoodList);
      setConsumedCalories(consumedCalories - foodToRemove.calories);
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodList = async () => {
    setIsLoading(true);
    try {
      const result = await getConsumedFoods(idUser, date);
      addFoodToList(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('hola', date);
    getFoodList();
  });
  
 
  return (
    <div className={styles.diaryContainer}>
      <div className={styles.calendarSection}>
        <DiaryCalendar setDate={setDate} setFoodList={setFoodList} />
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
    {/*   <div className={styles.summarySection}>
        <DiarySummary consumedCalories={consumedCalories} />
      </div> */}
    </div>
  );
};

export default Diary;
