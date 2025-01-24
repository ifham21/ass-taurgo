import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import format from "date-fns/format";
// import enLocale from "date-fns/locale/en-US";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePreviousMonth = () => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    setCurrentMonth(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    setCurrentMonth(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        style={{
          maxWidth: "310px",
          margin: "auto",
          padding: "20px",
          textAlign: "center",
          border: "1px solid #035C59",
          borderRadius: "8px",
        }}
      >
        {/* Custom Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2px",
          }}
        >
          {/* Previous Month Button */}
          <IconButton
            onClick={handlePreviousMonth}
            style={{ color: "#035C59" }}
          >
            <NavigateBeforeIcon />
          </IconButton>

          {/* Month Picker */}
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#035C59",
            }}
          >
            {format(currentMonth, "MMMM yyyy")}
          </div>

          {/* Next Month Button */}
          <IconButton onClick={handleNextMonth} style={{ color: "#035C59" }}>
            <NavigateNextIcon />
          </IconButton>
        </div>

        {/* Date Display and Today Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2px",
          }}
        >
          {/* Date Display */}
          <div
            style={{
              border: "1px solid #035C59",
              padding: "6px 8px",
              borderRadius: "4px",
              fontSize: "1rem",
              color: "#035C59",
              flex: "1",
              textAlign: "center",
              marginRight: "4px",
            }}
          >
            {format(selectedDate, "MMM dd, yyyy")}
          </div>

          {/* Today Button */}
          <button
            onClick={() => {
              const today = new Date();
              setSelectedDate(today);
              setCurrentMonth(today);
            }}
            style={{
              backgroundColor: "#035C59",
              color: "#FFFFFF",
              border: "none",
              padding: "6px 8px",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Today
          </button>
        </div>

        {/* Calendar */}
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={currentMonth}
          onChange={(newValue) => setSelectedDate(newValue)}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          sx={{
            "& .MuiPickersCalendarHeader-root": {
              display: "none", // Hide the header
            },
            "& .MuiDayPicker-weekContainer": {
              gridTemplateColumns: "repeat(7, 0.5fr)",
            },
            "& .MuiPickersDay-root:hover": {
              backgroundColor: "#035C59",
              color: "#FFFFFF",
            },
            "& .MuiPickersDay-today": {
              border: "1px solid #035C59",
              fontWeight: "bold",
            },
            "& .MuiPickersDay-selected": {
              backgroundColor: "#035C59",
              color: "#FFFFFF",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
