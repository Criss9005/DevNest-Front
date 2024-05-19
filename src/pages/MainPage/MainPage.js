

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

      
    </div>
  );
}

export default MainPage;