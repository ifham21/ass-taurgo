import React, { useState } from "react";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
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
      {/* Top Bar */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Diary
        </Typography>
        <Box>
          <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
            Book A Project
          </Button>
          <Button variant="outlined" color="primary">
            Download Diary
          </Button>
        </Box>
      </Box>

      <Divider />

      <Box sx={{ display: "flex", padding: 2, height: "calc(100vh - 64px)", gap: 2 }}>
        {/* Left Panel */}
        <Paper elevation={3} sx={{ padding: 2, width: "300px", display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" gutterBottom>
            Diary
          </Typography>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          />
          <Button variant="outlined" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Today
          </Button>

          <Typography variant="subtitle1" mt={2}>
            Events for {selectedDate.format("MMM DD, YYYY")}:
          </Typography>
          <Box sx={{ marginTop: 2, overflowY: "auto", flexGrow: 1 }}>
            {events.map((event, index) => (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <Typography variant="body2">{event.time}</Typography>
                <Typography variant="body1" fontWeight="bold">
                  {event.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {event.location}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Right Panel */}
        <Paper elevation={3} sx={{ flexGrow: 1, padding: 2, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
            <Box>
              <Button variant="text">&lt;</Button>
              <Button variant="text">Today</Button>
              <Button variant="text">&gt;</Button>
            </Box>
            <Box>
              <Button variant="text">Day</Button>
              <Button variant="text" sx={{ fontWeight: "bold" }}>
                Week
              </Button>
              <Button variant="text">Month</Button>
              <Button variant="text">Year</Button>
            </Box>
          </Box>

          {/* Week Scheduler Component */}
          <WeekScheduler />
        </Paper>
      </Box>
    </LocalizationProvider>
  );
}

export default Diary;
