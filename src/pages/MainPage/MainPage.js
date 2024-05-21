import styles from './MainPage.module.css';

import DailyCaloriesForm from '../../components/DailyCaloriesForm';

function MainPage() {
  return (
    <div className={styles['main main__container']}>
      <div className={styles['main__content']}>
  
        <DailyCaloriesForm />
      </div>
    </div>
  );
}

export default MainPage;
