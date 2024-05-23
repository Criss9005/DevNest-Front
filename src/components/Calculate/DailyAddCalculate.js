
import DailyCaloriesForm from "../DailyCaloriesForm/DailyCaloriesForm";
import Calculator from "../Calculate/Calculate";
import style from '../Calculate/calculato.module.css';


export default function DailyAddCalculator(){

    return(
            <div className={style['main__container']}>
                <div className={style['main__content']}>
                    <DailyCaloriesForm/>
                </div>
                <div className={style['calculate__container']}>
                    <Calculator/>
                </div>
            </div>        
    );
}