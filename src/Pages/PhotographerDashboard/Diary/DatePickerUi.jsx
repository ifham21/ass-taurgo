import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import format from "date-fns/format";
import enLocale from "date-fns/locale/en-US";

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
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        {/* Custom Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          {/* Previous Month Button */}
          <IconButton onClick={handlePreviousMonth} style={{ color: "#035C59" }}>
            <NavigateBeforeIcon />
          </IconButton>

          {/* Month Picker */}
          <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#035C59" }}>
            {format(currentMonth, "MMMM yyyy")}
          </div>

          {/* Next Month Button */}
          <IconButton onClick={handleNextMonth} style={{ color: "#035C59" }}>
            <NavigateNextIcon />
          </IconButton>
        </div>

        {/* Custom Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "16px",
          }}
        >

        {/* Date Display */}
        <div
            style={{
              border: "1px solid",
              padding: "8px 52px",
              borderRadius: "4px",
              fontSize: "1.2rem",
              color: "#035C59",
            }}
          >
            {format(selectedDate, "MMM dd, yyyy")}
          </div>

        {/* Today Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={() => {
              const today = new Date();
              setSelectedDate(today);
              setCurrentMonth(today);
            }}
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              border: "1px solid",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            Today
          </button>
        </div>

        </div>

        {/* Calendar */}
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          showDaysOutsideCurrentMonth
          // slots={{
          //   toolbar: () => null, // This removes the default toolbar
          // }}
          sx={{
            // Hide the header containing month and navigation
        "& .MuiDatePickerToolbar-root": {
          display: "none",
        },
        // Optionally adjust the height if needed after removing the header
        "& .MuiDatePickerViewTransitionContainer-root": {
          marginTop: 0,
        },
            "& .MuiDayPicker-header": {
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              fontWeight: "bold",
              backgroundColor: "#FFFFFF",
              color: "#035C59",
            },
            "& .MuiDayPicker-weekContainer": {
              gridTemplateColumns: "repeat(7, 1fr)",
            },
            "& .MuiPickersDay-dayOutsideMonth": {
              opacity: 0.5,
            },
            "& .MuiPickersDay-root": {
              height: "40px",
              width: "40px",
              margin: "2px",
              color: "#035C59",
              borderRadius: "50%",
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
