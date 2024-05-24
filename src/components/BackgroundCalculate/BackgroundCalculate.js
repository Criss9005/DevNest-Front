import React from 'react';
import leaves from '../../images/Background/leavesCalculate-desktop.png';
import leavesTablet from '../../images/Background/leavesCalculate-tablet.png';
import styles from './BackgroundCalculate.module.css';

const BackgroundM = () => {
  return (
    <div className={styles['backgroundCalculate__container']}>
      <img src={leavesTablet} className={styles['backgroungCalculate__leavesTablet']} alt="leaves" />
      <img src={leaves} className={styles['backgroungCalculate__leaves']} alt="leaves" />
    </div>
);
};

export default BackgroundM;