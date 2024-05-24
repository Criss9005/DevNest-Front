
import Calculator from "components/Calculate/Calculate";
import style from 'components/Calculate/calculato.module.css';
import MenuLogged from 'components/Menu/MenuLogged';
import Diary from 'components/diary/Diary';
import BackgroundCalculate from "components/BackgroundCalculate/BackgroundCalculate";

export default function DiaryAddCalculator(){

    return(
            <div className={style['main__container']}>
                <div className={style['main__content']}>
                <MenuLogged/>
                    <Diary/>
                </div>
                <div className={style['calculate__container']}>
                    <Calculator/>
                    <BackgroundCalculate/>
                </div>
            </div>        
    );
}