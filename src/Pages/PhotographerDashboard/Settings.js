import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const days = [
  { name: "Monday", enabled: true },
  { name: "Tuesday", enabled: true },
  { name: "Wednesday", enabled: true },
  { name: "Thursday", enabled: true },
  { name: "Friday", enabled: true },
  { name: "Saturday", enabled: false },
  { name: "Sunday", enabled: false },
];

export default function SettingsPage() {
  const [availability, setAvailability] = useState(
    days.map((day) => ({
      ...day,
      startTime: "08:30 AM",
      endTime: "07:30 PM",
    }))
  );

  const handleToggleDay = (index) => {
    const updated = [...availability];
    updated[index].enabled = !updated[index].enabled;
    setAvailability(updated);
  };

  const handleTimeChange = (index, timeType, value) => {
    const updated = [...availability];
    updated[index][timeType] = value;
    setAvailability(updated);
  };

  return (
    <Box sx={{ p: 3, maxWidth: "800px", margin: "auto" }}>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Settings
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Create inspection for new property here
      </Typography>

      {/* Personal Information */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              fullWidth
              value="Pathum"
              InputProps={{
                endAdornment: (
                  <Typography sx={{ color: "gray", fontSize: 14 }}>
                    ✎
                  </Typography>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              value="Pathum"
              InputProps={{
                endAdornment: (
                  <Typography sx={{ color: "gray", fontSize: 14 }}>
                    ✎
                  </Typography>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              value="Pathum@email.com"
              InputProps={{
                endAdornment: (
                  <Typography sx={{ color: "gray", fontSize: 14 }}>
                    ✎
                  </Typography>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              fullWidth
              value="0779999999"
              InputProps={{
                endAdornment: (
                  <Typography sx={{ color: "gray", fontSize: 14 }}>
                    ✎
                  </Typography>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Availability */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Set Availability
        </Typography>
        {availability.map((day, index) => (
          <Grid
            container
            alignItems="center"
            spacing={2}
            key={index}
            sx={{ mb: 1 }}
          >
            <Grid item xs={1}>
              <Checkbox
                checked={day.enabled}
                onChange={() => handleToggleDay(index)}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography>{day.name}</Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                {/* <InputLabel></InputLabel> */}
                <Select
                  value={day.startTime}
                  onChange={(e) =>
                    handleTimeChange(index, "startTime", e.target.value)
                  }
                  input={<OutlinedInput />}
                  disabled={!day.enabled}
                >
                  <MenuItem value="08:30 AM">8:30 AM</MenuItem>
                  <MenuItem value="09:00 AM">9:00 AM</MenuItem>
                  <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                {/* <InputLabel>End Time</InputLabel> */}
                <Select
                  value={day.endTime}
                  onChange={(e) =>
                    handleTimeChange(index, "endTime", e.target.value)
                  }
                  input={<OutlinedInput />}
                  disabled={!day.enabled}
                >
                  <MenuItem value="07:30 PM">7:30 PM</MenuItem>
                  <MenuItem value="08:00 PM">8:00 PM</MenuItem>
                  <MenuItem value="09:00 PM">9:00 PM</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">
                {day.enabled
                  ? `${calculateHours(day.startTime, day.endTime)} Hours`
                  : "Not Available"}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

function calculateHours(start, end) {
  // Calculate total hours between start and end
  const [startTime, startPeriod] = start.split(" ");
  const [endTime, endPeriod] = end.split(" ");
  const [startHour, startMinutes] = startTime.split(":").map(Number);
  const [endHour, endMinutes] = endTime.split(":").map(Number);

  let startInMinutes =
    (startHour % 12) * 60 + startMinutes + (startPeriod === "PM" ? 720 : 0);
  let endInMinutes =
    (endHour % 12) * 60 + endMinutes + (endPeriod === "PM" ? 720 : 0);

  if (endInMinutes < startInMinutes) {
    endInMinutes += 1440; // Adjust for overnight shifts
  }

  const totalMinutes = endInMinutes - startInMinutes;
  return (totalMinutes / 60).toFixed(1); // Return hours as a string
}
