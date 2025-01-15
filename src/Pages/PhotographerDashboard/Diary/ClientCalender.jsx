import React, { useState } from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import DatePickerUI from "./DatePickerUi";
// import CustomCalendar from "./CustomCalendar";

const ClientCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const events = [
    { time: "8:30 - 9:00 AM", title: "Photo capture", location: "78 Court Street Tonypandy, CF 2RL, GB" },
    // { time: "10:30 - 11:00 AM", title: "Photo capture", location: "78 Court Street Tonypandy, CF 2RL, GB" },
    // { time: "12:30 - 1:00 PM", title: "Photo capture", location: "78 Court Street Tonypandy, CF 2RL, GB" },
  ];
  

  return (
    <Paper
      sx={{
        padding: 2,
        width: "350px",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
      }}
    >
      {/* Date Picker Section */}
      <DatePickerUI />
      {/* <CustomCalendar/> */}

      {/* Selected Date Display */}
      <Typography variant="subtitle2" mt={2} gutterBottom>
        {`Today ${selectedDate.format("MM/DD/YYYY")}`}:
      </Typography>
      
      <Divider sx={{ marginY: 2 }} />

      {/* Events Section */}
      <Box sx={{ maxHeight: "200px", overflowY: "auto" }}>
        {events.map((event, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {event.time}
            </Typography>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              {event.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {event.location}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ClientCalendar;
