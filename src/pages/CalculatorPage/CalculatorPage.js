import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Calculator from 'components/Calculate/Calculate';
import style from 'components/Calculate/calculato.module.css';
// import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";
import Header from 'components/Header/Header';
import MenuLogged from 'components/MenuLogged/MenuLogged';
import css from './CalculatorPage.module.css';
import { useEffect, useContext } from 'react';
import { SummaryContext } from '../../components/diary/diary/summaryContext';
import { getConsumedFoods } from '../../components/diary/diary/api/apiServices';

function getLocalDate() {
  const today = new Date();

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const day = addZero(today.getDate());
  const month = addZero(today.getMonth() + 1);
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}
//import { useEffect, useState } from "react";

export default function DailyAddCalculator() {
  const { idUser, setFoodList, setDate, date } = useContext(SummaryContext);

  /* const [data, setData] = useState

  useEffect(() => { 
    const newData = localStorage.getItem('CAL_NO_USER');
    if (newData) { 
      setData(JSON.parse(newData))
    }
  },[]) */

  useEffect(() => {
    setDate(getLocalDate());
    const fetchDataCalculate = async () => {
      if (idUser) {
        try {
          const result = await getConsumedFoods(idUser, date);
          // console.log(result);
          // setFoodList([]);
          setFoodList(result);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchDataCalculate();
  }, [idUser, setFoodList, date, setDate]);

  return (
    <div className={style['main__container']}>
      <div className={style['main__content']}>
        <div className={css.headerContainer}>
          <Header />
          <MenuLogged />
        </div>
        <DailyCaloriesForm />
      </div>
      <div className={style['calculate__container']}>
        <Calculator />
        {/* <BackgroundCalculate/> */}
      </div>
    </div>
  );
}
