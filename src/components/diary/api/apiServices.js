import axios from 'axios';
import apiConfig from './apiConfig';
const userInfo = JSON.parse(localStorage.getItem('USER'));
console.log(userInfo);
const token = userInfo.accesToken;

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

const searchFood = async query => {
  const instance = axios.create({
    baseURL: 'http://localhost:5000/api/products',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/Json',
    },
    timeout: 6000,
  });
  const result = instance.get(`/search?query=${query}`);
  console.log(result);
  return result;
};

export { getConsumedFoods, addConsumedFood, removeFoodRegister, searchFood };
