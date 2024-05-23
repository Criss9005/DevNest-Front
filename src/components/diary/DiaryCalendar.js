import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import styles from './DiaryCalendar.module.css';
const today = new Date();

const DiaryCalendar = ({ setDate, setFoodList }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleDateChange = event => {
    setFoodList([]);
    const date = new Date(event.target.value + 'T00:00:00');
    setDate(formatDate(date));
    setSelectedDate(date);
  };

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div>
      <div className={styles.calendarSection}>
        <span className={styles.dateText}>{formatDate(selectedDate)}</span>
        <FaCalendarAlt
          size={24}
          className={styles.icon}
          onClick={() => document.getElementById('date-picker').showPicker()}
        />
        <input
          id="date-picker"
          type="date"
          onChange={handleDateChange}
          // max={new Date().toISOString().split('T')[0]}
          max={
            new Date(today.getTime() - today.getTimezoneOffset() * 60000)
              .toISOString()
              .split('T')[0]
          }
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default DiaryCalendar;
