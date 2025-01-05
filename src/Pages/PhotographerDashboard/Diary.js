import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import WeekScheduler from "./WeekScheduler";

function Diary() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const events = [
    { time: "8:30 - 9:00 AM", title: "Photo capture", location: "78 Court Street Tonypandy, CF 2RL, GB" },
    { time: "10:30 - 11:00 AM", title: "Photo capture", location: "78 Court Street Tonypandy, CF 2RL, GB" },
    { time: "12:30 - 1:00 PM", title: "Photo capture", location: "78 Court Street Tonypandy, CF 2RL, GB" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", padding: 2, height: "100vh", gap: 2 }}>
        {/* Left Panel */}
        <Paper elevation={3} sx={{ padding: 2, width: "300px" }}>
          <Typography variant="h6" gutterBottom>
            Diary
          </Typography>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          />
          <Typography variant="subtitle1" mt={2}>
            Events for {selectedDate.format("MMM DD, YYYY")}:
          </Typography>
          {events.map((event, index) => (
            <Box key={index} sx={{ marginBottom: 1 }}>
              <Typography variant="body2">{event.time}</Typography>
              <Typography variant="body1" fontWeight="bold">
                {event.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {event.location}
              </Typography>
            </Box>
          ))}
        </Paper>

        {/* Right Panel */}
        <WeekScheduler />
      </Box>
    </LocalizationProvider>
  );
}

export default Diary;
