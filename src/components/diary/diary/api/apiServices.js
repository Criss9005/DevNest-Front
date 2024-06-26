import axios from 'axios';
import apiConfig from './apiConfig';
const userInfo = JSON.parse(localStorage.getItem('USER')) || null;
let token;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = apiConfig;
if (userInfo) {
  token = userInfo.accesToken;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const getConsumedFoods = async (idUser, date) => {
  //console.log(  idUser + '.....iduser.................' + date + 'date............');
  const result = await axios.get(`todaySummary/${idUser}/${date}`);
  const { data } = result;
  const foods = [];
  data.forEach(e => {
    const food = {
      id: e._id,
      name: e.productName,
      grams: e.grams,
      calories: e.calories,
    };
    foods.push(food);
  });
  // const summaryLocal = {
  //   date,
  //   foods,
  // };
  // localStorage.setItem('SUMMARY', JSON.stringify(summaryLocal));
  //console.log(foods);
  return foods;
};

const addConsumedFood = async data => {
  const result = await axios.post('todaySummary/addSummary', data);
  return result;
};

const removeFoodRegister = async id => {
  const result = await axios.delete(`todaySummary/addSummary/${id}`);
  return result;
};

const searchFood = async query => {
  // const instance = axios.create({
  //   baseURL: 'https://devnest-back-1.onrender.com/api/products',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/Json',
  //   },
  //   timeout: 6000,
  // });
  // console.log(axios.baseURL);
  const result = await axios.get(`products/search?query=${query}`);
  return result;
};

export { getConsumedFoods, addConsumedFood, removeFoodRegister, searchFood };
