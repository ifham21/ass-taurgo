import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { format, addMonths, subMonths } from "date-fns";

const CustomCalendarHeaderRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "8px 16px",
  alignItems: "center",
});

const CalendarHeaderComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => subMonths(prevMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
  };

  const CustomCalendarHeader = () => (
    <CustomCalendarHeaderRoot>
      {/* Existing month navigation UI */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack spacing={1} direction="row">
          <IconButton onClick={handlePreviousMonth} title="Previous month">
            <ChevronLeft />
          </IconButton>
        </Stack>
        <Typography variant="body2">
          {format(currentMonth, "MMMM yyyy")}
        </Typography>
        <Stack spacing={1} direction="row">
          <IconButton onClick={handleNextMonth} title="Next month">
            <ChevronRight />
          </IconButton>
        </Stack>
      </div>

      {/* Additional UI for date display and "Today" button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #035C59",
            padding: "6px 8px",
            borderRadius: "4px",
            fontSize: "1rem",
            color: "#035C59",
            flex: "1",
            textAlign: "center",
            marginRight: "8px",
          }}
        >
          {format(selectedDate, "MMM dd, yyyy")}
        </div>
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
    </CustomCalendarHeaderRoot>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        style={{
          maxWidth: "310px",
          margin: "auto",
          padding: "15px",
          textAlign: "center",
          border: "1px solid #035C59",
          borderRadius: "8px",
        }}
      >
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={currentMonth}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={7}
          onChange={(newDate) => setSelectedDate(newDate)}
          slots={{ calendarHeader: CustomCalendarHeader }}
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

export default CalendarHeaderComponent;
