/* import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import styles from './DiaryFoodList.module.css';

import Input from '../AutoCompleteInput/AutoCompleteInput';
import {
  addConsumedFood,
  searchFood,
  getConsumedFoods,
} from './api/apiServices';
const userInfo = JSON.parse(localStorage.getItem('USER'));


const DiaryFoodList = ({ foodList, addFoodToList, removeFoodFromList }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [grams, setGrams] = useState('');
  const [showAddFood, setShowAddFood] = useState(false);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(
    window.innerWidth >= 768
  );


  const idUser = userInfo.user.id;


  const handleAddFood = async () => {
    if (selectedFood && grams) {
      const { calories: cals } = foodSearch.find(e => e.title === selectedFood);
      console.log(cals);
      const food = {
        productName: selectedFood,
        grams,
        idUser,

        calories: grams * cals,

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
  const allProducts = async () => {
    try {
      const result = await searchFood('');
      setFoodsearch(result.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo) {
      const getFoods = async () => {
        try {
          setIsLoading(true);
          const result = await getConsumedFoods(idUser, date);
          addFoodToList([]);
          addFoodToList(result);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getFoods();
    }
    const handleResize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    allProducts();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            onChange={e => setSelectedFood(e.target.value)}
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
          {foodList.length ? (
            foodList.map((food, index) => (
              <tr key={index}>
                <td>{food.name}</td>
                <td>{food.grams}</td>
                <td>{food.calories}</td>
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
          )} */
/*         </tbody>
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
 */ 