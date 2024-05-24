
import Calculator from "components/Calculate/Calculate";
import style from 'components/Calculate/calculato.module.css';

import Diary from 'components/diary/Diary';
import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";
import Header from "components/Header/headerComponent";

export default function DiaryAddCalculator(){

    return(
            <div className={style['main__container']}>
                <div className={style['main__content']}>
                    <Header/>
                    <Diary/>
                </div>
                <div className={style['calculate__container']}>
                    <Calculator/>
                    <BackgroundCalculate/>
                </div>
            </div>        
    );
}