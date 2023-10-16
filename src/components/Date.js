import React, { useState } from 'react';
import '../components/Date.css'

const DateComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="selectedDate">When to go:</label>
      <input
        className='date'
        type="date"
        id="selectedDate"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>Selected Date: </p>
      <p>{selectedDate}</p>
    </div>
  );
};

export default DateComponent;
