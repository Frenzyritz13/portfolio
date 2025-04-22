import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

interface DateRangePickerProps {
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);
    onDateChange(update[0], update[1]);
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-white dark:bg-navy-700 rounded-lg overflow-hidden shadow-sm border border-navy-200 dark:border-navy-600">
        <span className="pl-3 text-navy-500 dark:text-beige-200">
          <Calendar size={20} />
        </span>
        <ReactDatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          placeholderText="Filter by date range"
          className="w-full p-2 bg-transparent border-none focus:ring-0 text-navy-700 dark:text-beige-100 placeholder-navy-400 dark:placeholder-beige-300"
          wrapperClassName="w-full"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;