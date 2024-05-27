import DailyCaloriesForm from "components/DailyCaloriesForm/DailyCaloriesForm";
import Calculator from "components/Calculate/Calculate";
import style from 'components/Calculate/calculato.module.css';
// import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";
import Header from "components/Header/Header";
import MenuLogged from "components/MenuLogged/MenuLogged";
import css from './CalculatorPage.module.css'

//import { useEffect, useState } from "react";



export default function DailyAddCalculator() {
  
  /* const [data, setData] = useState

  useEffect(() => { 
    const newData = localStorage.getItem('CAL_NO_USER');
    if (newData) { 
      setData(JSON.parse(newData))
    }
  },[]) */
  
  return (
    <div className={style['main__container'] }>
      <div className={style['main__content']}>
        <div className={css.headerContainer }>
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
