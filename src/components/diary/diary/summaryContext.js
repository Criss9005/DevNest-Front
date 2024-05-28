import React, { createContext, useState } from 'react';

const SummaryContext = createContext();

function getLocalDate() {
  const today = new Date();

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const day = addZero(today.getDate());
  const month = addZero(today.getMonth() + 1);
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}

const SummaryProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);
  const [date, setDate] = useState(getLocalDate());
  const [idUser, setIdUser] = useState(null);

  return (
    <SummaryContext.Provider
      value={{ foodList, setFoodList, date, setDate, idUser, setIdUser }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export { SummaryContext, SummaryProvider };
