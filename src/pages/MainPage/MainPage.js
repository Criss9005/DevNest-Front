import styles from './MainPage.module.css';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Header from '../../components/Header/headerComponent.jsx';
function MainPage() {
  return (
    <div className={styles['main main__container']}>
      <div className={styles['main__content']}>
        <Header />
        <BackgroundM />
        <DailyCaloriesForm />
      </div>
    </div>
  );
}

export default MainPage;
