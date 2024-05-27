import React, { useEffect } from 'react';
import styles from './MainPage.module.css';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';

function MainPage() {
  useEffect(() => {
    localStorage.clear();
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
