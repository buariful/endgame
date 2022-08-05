import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="Please select a date"
                id='date'
                inline
            />
        </div>
    );
};

export default Calendar;