import DailyCaloriesForm from "components/DailyCaloriesForm/DailyCaloriesForm";
import Calculator from "components/Calculate/Calculate";
import MenuLogged from 'components/Menu/MenuLogged';
import style from 'components/Calculate/calculato.module.css';
import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";

export default function DailyAddCalculator() {
  return (
    <div className={style['main__container']}>
                <div className={style['main__content']}>
                    <MenuLogged/>
                    <DailyCaloriesForm/>
                </div>
                <div className={style['calculate__container']}>
                    <Calculator/>
                    <BackgroundCalculate/>
                </div>
            </div> 
  );
}
