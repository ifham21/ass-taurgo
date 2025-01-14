import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import {
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import enLocale from "date-fns/locale/en-US";
import format from "date-fns/format";

import "./DatePicker.css";

const DatePickerUI = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePreviousMonth = () => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    setCurrentMonth(newDate);
    setSelectedDate(newDate); // Update the calendar to display the new month
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    setCurrentMonth(newDate);
    setSelectedDate(newDate); // Update the calendar to display the new month
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
      <div>
        {/* Custom Toolbar */}
        <div className="custom-toolbar">
          <IconButton onClick={handlePreviousMonth}>
            <NavigateBeforeIcon />
          </IconButton>
          <div className="month-year-display">
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <IconButton onClick={handleNextMonth}>
            <NavigateNextIcon />
          </IconButton>
        </div>

        {/* StaticDatePicker */}
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          view="day"
          onMonthChange={(date) => setCurrentMonth(date)}
          renderInput={(params) => <TextField {...params} />}
          dayOfWeekFormatter={(day) =>
            typeof day === "string" ? day.charAt(0).toUpperCase() : ""
          }
        />

        {/* "Today" Button */}
        <div className="today-button">
          <button
            onClick={() => {
              const today = new Date();
              setSelectedDate(today);
              setCurrentMonth(today);
            }}
            className="today-button-style"
          >
            Today
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DatePickerUI;
