import leaves from './images/leaves_desktop_2.png';
import leavesTablet from './images/leaves_tablet_2.png';
import mainVector from './images/main_vector.svg';
import strawberry from './images/strawberry.png';
import banana from './images/banana.png';

import styles from './MainPage.module.css';

import DailyCaloriesForm from '../../components/DailyCaloriesForm';

function MainPage() {
  return (
    <div className={styles['main main__container']}>
      <div className={styles['main__content']}>
        <h1 className={styles['main__title']}>
        Calculate your daily calorie intake right now
        </h1>
        <DailyCaloriesForm />
      </div>

      <div className={styles['main__img-wrapper']}>
        

        <img src={leavesTablet} className={styles['main__leavesTablet']} alt="leaves" />
        <img src={leaves} className={styles['main__leaves']} alt="leaves" />
        <div id={styles['banana']}>
          <img src={banana} className={styles['main__banana']} alt="banana" />
        </div>
        <img
          src={strawberry}
          className={styles['main__strawberry']}
          alt="strawberry"
        />
        <img
          src={mainVector}
          className={styles['main__vector']}
          alt="backround-vector"
        />
      </div>
    </div>
  );
}

export default MainPage;