import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Header from '../../components/Header/Header';

function MainPage() {
  document.body.classList.remove('menu-open')
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('USER');
    if (user) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div className={styles['main main__container']}>
      <div className={styles['main__content']}>
        <Header isLogged={isLogged} />
        <BackgroundM />
        <DailyCaloriesForm />
      </div>
    </div>
  );
}

export default MainPage;
