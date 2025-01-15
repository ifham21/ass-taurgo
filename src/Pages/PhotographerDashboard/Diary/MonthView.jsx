import React, { useState } from "react";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export const MonthView = () => {
    const daysInMonth = dayjs().daysInMonth();
    const firstDayOfMonth = dayjs().startOf("month").day();
    const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
    const days = [];
  
    for (let i = 0; i < weeks * 7; i++) {
      if (i < firstDayOfMonth || i >= firstDayOfMonth + daysInMonth) {
        days.push(null);
      } else {
        days.push(i - firstDayOfMonth + 1);
      }
    }
  
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          padding: 1,
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Typography
            key={day}
            sx={{ textAlign: "center", fontWeight: "bold", padding: "4px" }}
          >
            {day}
          </Typography>
        ))}
        {days.map((day, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              height: "100px",
              padding: 1,
              textAlign: "center",
              backgroundColor: day ? "white" : "transparent",
            }}
          >
            {day}
          </Paper>
        ))}
      </Box>
    );
  }