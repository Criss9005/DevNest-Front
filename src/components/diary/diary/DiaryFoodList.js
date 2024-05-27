import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import styles from './DiaryFoodList.module.css';
import Input from '../../AutoCompleteInput/AutoCompleteInput';
import {
  addConsumedFood,
  searchFood,
  getConsumedFoods,
} from './api/apiServices';
const userInfo = JSON.parse(localStorage.getItem('USER'));
// let idUser = null;

const DiaryFoodList = ({
  foodList,
  addFoodToList,
  setFoodList,
  removeFoodFromList,
  date,
}) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [grams, setGrams] = useState('');
  const [showAddFood, setShowAddFood] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foodSearch, setFoodsearch] = useState([]);
  const [idUser, setIdUser] = useState(null);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(
    window.innerWidth >= 768
  );

  const handleAddFood = async () => {
    if (selectedFood && grams) {
      const { calories: cals } = foodSearch.find(e => e.title === selectedFood);
      const food = {
        productName: selectedFood,
        grams: parseFloat(grams),
        idUser,
        calories: parseFloat(((grams * (cals / 100)) / 1000).toFixed(2)),
      };
      try {
        const res = await addConsumedFood(food);
        if (res.status === 201) {
          addFoodToList(food);
          setSelectedFood('');
          setGrams('');
        }
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
      setIdUser(userInfo.user.id);
      const getFoods = async () => {
        if (idUser) {
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
  }, [date, addFoodToList, idUser]);

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
          <Input
            list={foodSearch}
            setSelectedFood={setSelectedFood}
            setFoodsearch={setFoodsearch}
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
