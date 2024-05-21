import React, { useState } from 'react';
import { FaTimes, FaChevronLeft } from 'react-icons/fa';
import styles from './DiaryFoodList.module.css';
import { addConsumedFood } from './api/apiServices';

const DiaryFoodList = ({ foodList, addFoodToList, removeFoodFromList }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [grams, setGrams] = useState('');
  const [showAddFood, setShowAddFood] = useState(false);

  const handleAddFood = async () => {
    if (selectedFood && grams) {
      const food = {
        productName: selectedFood,
        grams: parseInt(grams),
        idUser: '123456asd',
        // Aquí deberías obtener las calorías reales del backend
        // calories: 100, // Valor de ejemplo
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

  return (
    <div className={showAddFood ? styles.fullScreen : ''}>
      <table>
        <thead>
          <tr>
            <th>Alimento</th>
            <th>Gramos</th>
            <th>Calorías</th>
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
          {!showAddFood && (
            <tr>
              <td colSpan="4">
                <button
                  className={styles.addButton}
                  onClick={() => setShowAddFood(true)}
                >
                  +
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showAddFood && (
        <div className={`${styles.addFoodSection} ${styles.fullScreen}`}>
          <input
            type="text"
            value={selectedFood}
            onChange={e => setSelectedFood(e.target.value)}
            placeholder="Alimento"
          />
          <input
            type="text"
            value={grams}
            onChange={e => setGrams(e.target.value)}
            placeholder="Gramos"
          />
          <button onClick={handleAddFood}>Agregar</button>
          <button
            className={styles.backButton}
            onClick={() => setShowAddFood(false)}
          >
            <FaChevronLeft />
          </button>
        </div>
      )}
    </div>
  );
};

export default DiaryFoodList;
