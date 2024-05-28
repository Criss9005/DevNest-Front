import React, { useState, useEffect, useContext } from 'react';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import styles from './DiaryFoodList.module.css';
import Input from '../../AutoCompleteInput/AutoCompleteInput';
import { SummaryContext } from './summaryContext';

import {
  addConsumedFood,
  searchFood,
  getConsumedFoods,
} from './api/apiServices';
// const idUser = JSON.parse(localStorage.getItem('USER'));
// let idUser = null;

const DiaryFoodList = ({
  // foodList,
  addFoodToList,
  // setFoodList,
  removeFoodFromList,
  // date,
}) => {
  const { foodList, date, idUser, setIdUser } = useContext(SummaryContext);

  const [selectedFood, setSelectedFood] = useState('');
  const [grams, setGrams] = useState('');
  const [showAddFood, setShowAddFood] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foodSearch, setFoodsearch] = useState([]);
  // const [idUser, setIdUser] = useState(null);
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
        calories: parseFloat((grams * cals) / 100),
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
    // setIdUser(userInfo.user.id);
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
    const handleResize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    allProducts();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [date, addFoodToList, idUser, setIdUser]);

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
            inputClassName={styles.inputHolder} // Clase personalizada para Input
            listboxClassName={styles.listboxHolder} // Clase personalizada para Listbox
          />
          <input
            className={styles.inputHolder}
            type="text"
            value={grams}
            onChange={e => setGrams(e.target.value)}
            placeholder="Grams"
          />
          <button className={styles.addButton} onClick={handleAddFood}>
            <span>Add</span>
          </button>
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
            className={styles.addPlusButton}
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
