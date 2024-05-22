
import Calculator from "../Calculate/Calculate";
import style from '../Calculate/calculato.module.css';
import Diary from '../diary/Diary';

export default function DiaryAddCalculator(){

    return(
            <div className={style['main__container']}>
                <div className={style['main__content']}>
                    <Diary/>
                </div>
                <div className={style['calculate__container']}>
                    <Calculator/>
                </div>
            </div>        
    );
}