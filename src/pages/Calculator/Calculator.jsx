import React from 'react';
import CalculatorM from '../../components/Calculate/Calculate';
import MenuLogged from 'components/Menu/MenuLogged';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';

export default function Calculator() {
  return (
    <div>
      <div>
        <MenuLogged />
        <DailyCaloriesForm />
      </div>
      <div>
        <CalculatorM />
      </div>
    </div>
  );
}
