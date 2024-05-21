import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import styles from './DiaryFoodList.module.css';

const DiaryFoodList = ({ foodList, addFoodToList, removeFoodFromList }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [grams, setGrams] = useState('');
  const [showAddFood, setShowAddFood] = useState(false);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(window.innerWidth >= 768);

  const handleAddFood = () => {
    if (selectedFood && grams) {
      const food = {
        name: selectedFood,
        grams: parseInt(grams),
        calories: 100, // Valor de ejemplo
      };
      addFoodToList(food);
      setSelectedFood('');
      setGrams('');
      if (!isTabletOrDesktop) {
        setShowAddFood(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {(isTabletOrDesktop || showAddFood) && (
        <div className={`${styles.addFoodSection} ${!isTabletOrDesktop && styles.fullScreen}`}>
          {!isTabletOrDesktop && (
            <div className={styles.backButtonContainer}>
              <FaChevronLeft className={styles.backButton} onClick={() => setShowAddFood(false)} />
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
        </tbody>
      </table>
      {!isTabletOrDesktop && !showAddFood && (
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} onClick={() => setShowAddFood(true)}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default DiaryFoodList;
