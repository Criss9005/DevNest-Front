import axios from 'axios';
import apiConfig from './apiConfig';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGFjNmYwMGE1NWM1NDU5ODg5ZmZiYiIsImlhdCI6MTcxNjE3NjYyNCwiZXhwIjoxNzE2MTgwMjI0fQ.mjYOn_yc-7KZblqgBc79sZNxVXzmAinGAf45EnrP6UA';

axios.defaults.baseURL = apiConfig;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const getConsumedFoods = async (idUser, date) => {
  const { data } = await axios.get(`/${idUser}/${date}`);
  // console.log(data + 'dataaaa');
  const foods = [];
  data.forEach(e => {
    const food = {
      name: e.productName,
      grams: e.grams,
      calories: 100,
    };
    // console.log(food);
    foods.push(food);
  });
  // console.log(foods + 'foods');
  return foods;
};

export { getConsumedFoods };
