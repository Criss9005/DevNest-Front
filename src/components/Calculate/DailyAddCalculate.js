
import DailyCaloriesForm from "../DailyCaloriesForm/DailyCaloriesForm";
import Calculator from "../Calculate/Calculate";
import style from '../Calculate/calculato.module.css';
import Header from "components/Header/headerComponent";

export default function DailyAddCalculator(){

    return(
            <div>
                <div className={style['main__container']}>
                        <Header/>
                
                    <div className={style['main__content']}>
                        <DailyCaloriesForm/>
                    </div>               
                </div>   
             
                <div className={style['calculate__container']}>
                        <Calculator/>
                </div> 
            </div>
            
           
    );
}