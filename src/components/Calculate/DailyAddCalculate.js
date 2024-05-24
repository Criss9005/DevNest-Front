
import DailyCaloriesForm from "components/DailyCaloriesForm/DailyCaloriesForm";
import CalculatorM from "components/Calculate/Calculate";
import MenuLogged from 'components/Menu/MenuLogged';
import style from './calculato.module.css';
import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";


export default function DailyAddCalculator(){

    return(
            <div className={style['main__container']}>
                <div className={style['main__content']}>
                    <MenuLogged/>
                    <DailyCaloriesForm/>
                </div>
                <div className={style['calculate__container']}>
                    <CalculatorM/>
                    <BackgroundCalculate/>
                </div>
            </div>        
    );
}