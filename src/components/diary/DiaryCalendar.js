import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './DiaryCalendar.module.css';

const DiaryCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleDateChange = event => {
    const date = new Date(event.target.value + 'T00:00:00');
    setSelectedDate(date);
  };

  const formatDate = date => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaCalendarAlt
          size={24}
          style={{ cursor: 'pointer', marginRight: '10px' }}
          onClick={() => document.getElementById('date-picker').showPicker()}
        />
        <input
          id="date-picker"
          type="date"
          onChange={handleDateChange}
          max={new Date().toISOString().split('T')[0]}
          style={{ display: 'none' }}
        />
        <span style={{ marginLeft: '10px' }}>{formatDate(selectedDate)}</span>
      </div>
    </div>
  );
};

export default DiaryCalendar;
