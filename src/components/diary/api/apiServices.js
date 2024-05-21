import axios from 'axios';
import apiConfig from './apiConfig';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGFjNmYwMGE1NWM1NDU5ODg5ZmZiYiIsImlhdCI6MTcxNjE3NjYyNCwiZXhwIjoxNzE2MTgwMjI0fQ.mjYOn_yc-7KZblqgBc79sZNxVXzmAinGAf45EnrP6UA';

axios.defaults.baseURL = apiConfig;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const getConsumedFoods = async (idUser, date) => {
  const result = await axios.get(`/${idUser}/${date}`);
  // console.log(JSON.stringify(result) + 'dataaaa');
  const { data } = result;
  const foods = [];
  data.forEach(e => {
    const food = {
      id: e._id,
      name: e.productName,
      grams: e.grams,
      calories: 100,
    };
    // console.log(e._id);
    foods.push(food);
  });
  // console.log(foods + 'foods');
  return foods;
};

const addConsumedFood = async data => {
  const result = await axios.post('/addSummary', data);
  console.log(result);
  return result;
};

const removeFoodRegister = async id => {
  const result = await axios.delete(`/addSummary/${id}`);
  console.log(result);
  return result;
};

export { getConsumedFoods, addConsumedFood, removeFoodRegister };
