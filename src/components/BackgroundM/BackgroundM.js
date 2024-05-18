import React from 'react';
import leaves from '../../images/Background/leaves_desktop.png';
import leavesTablet from '../../images/Background/leaves_tablet.png';
import mainVector from '../../images/Background/main_vector.svg';
import strawberry from '../../images/Background/strawberry.png';
import banana from '../../images/Background/banana.png';
import styles from './BackgroundM.module.css';

const BackgroundM = () => {
  return (
      <div className={styles['backgroung__img-wrapper']}>
      <img src={leavesTablet} className={styles['backgroung__leavesTablet']} alt="leaves" />
    <img src={leaves} className={styles['backgroung__leaves']} alt="leaves" />
    <div id={styles['banana']}>
      <img src={banana} className={styles['backgroung__banana']} alt="banana" />
    </div>
    <img
      src={strawberry}
      className={styles['backgroung__strawberry']}
      alt="strawberry"
    />
    <img
      src={mainVector}
      className={styles['backgroung__vector']}
      alt="backround-vector"
    />
      </div>
);
};

export default BackgroundM;