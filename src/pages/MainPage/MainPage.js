import styles from './MainPage.module.css';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Menu from '../../components/Menu/Menu'
function MainPage() {
  return (
    
    <div className={styles['main main__container']}>
      <div className={styles['main__content']}>
        <Menu/>
      <BackgroundM />
      <DailyCaloriesForm />
      </div>
    </div>
  );
}

export default MainPage;
