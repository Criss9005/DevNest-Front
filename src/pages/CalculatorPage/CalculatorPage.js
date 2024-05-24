import DailyCaloriesForm from "components/DailyCaloriesForm/DailyCaloriesForm";
import Calculator from "components/Calculate/Calculate";
import style from 'components/Calculate/calculato.module.css';
import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";

export default function DailyAddCalculator() {
  return (
    <div className={style['main__container']}>
                <div className={style['main__content']}>
                    
                    <DailyCaloriesForm/>
                </div>
                <div className={style['calculate__container']}>
                    <Calculator/>
                    <BackgroundCalculate/>
                </div>
            </div> 
  );
}
