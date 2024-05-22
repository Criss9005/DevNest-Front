import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import styles from './DiaryFoodList.module.css';
import {
  addConsumedFood,
  searchFood,
  getConsumedFoods,
} from './api/apiServices';
import { tuple } from 'yup';
const userInfo = JSON.parse(localStorage.getItem('USER'));

const DiaryFoodList = ({
  foodList,
  addFoodToList,
  removeFoodFromList,
  date,
}) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [grams, setGrams] = useState('');
  const [showAddFood, setShowAddFood] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(
    window.innerWidth >= 768
  );
  const idUser = userInfo.user.id; // id de usuario que esta logueado

  const handleAddFood = async () => {
    if (selectedFood && grams) {
      const food = {
        productName: selectedFood,
        grams: parseInt(grams),
        idUser,
        // Aquí deberías obtener las calorías reales del backend
        calories: 100, // Valor de ejemplo
      };
      try {
        const res = await addConsumedFood(food);
        console.log(res);
        addFoodToList(food);
        setSelectedFood('');
        setGrams('');
      } catch (error) {
        console.error(error);
      }
    }
  };
  const onHandleInput = async e => {
    const value = e.target.value;
    // console.log(e.target.value);
    setSelectedFood(value);
    try {
      const result = await searchFood(value);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getFoods = async () => {
      try {
        setIsLoading(true);
        console.log(idUser, date);
        const result = await getConsumedFoods(idUser, date);
        addFoodToList(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    const handleResize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    getFoods();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [date, idUser]);

  return (
    <div>
      {(isTabletOrDesktop || showAddFood) && (
        <div
          className={`${styles.addFoodSection} ${
            !isTabletOrDesktop && styles.fullScreen
          }`}
        >
          {!isTabletOrDesktop && (
            <div className={styles.backButtonContainer}>
              <FaChevronLeft
                className={styles.backButton}
                onClick={() => setShowAddFood(false)}
              />
            </div>
          )}
          <input
            type="text"
            value={selectedFood}
            onInput={e => onHandleInput(e)}
            placeholder="Enter product name"
          />
          <input
            type="text"
            value={grams}
            onChange={e => setGrams(e.target.value)}
            placeholder="Grams"
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Food</th>
            <th>Grams</th>
            <th>Kcal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : foodList.length ? (
            foodList.map((food, index) => (
              <tr key={index}>
                <td>{food.name}</td>
                <td>{food.grams}</td>
                <td>{(food.calories * food.grams) / 100}</td>
                <td>
                  <FaTimes onClick={() => removeFoodFromList(food)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data to show</td>
            </tr>
          )}
          {/* {!showAddFood && (
            <tr>
              <td colSpan="4">No data to show</td>
            </tr>
          )} */}
        </tbody>
      </table>
      {!isTabletOrDesktop && !showAddFood && (
        <div className={styles.addButtonContainer}>
          <button
            className={styles.addButton}
            onClick={() => setShowAddFood(true)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default DiaryFoodList;
