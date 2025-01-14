import React, { useState } from "react";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import ClientCalender from "./ClientCalender";


function ClientDiary() {


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

      {/* Contents Portion */}
      <Box sx={{ display: "flex", padding: 2,  gap: 2 }}>
        {/* Left Panel */}
        <ClientCalender/>

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

        </Paper>
      </Box>
    </LocalizationProvider>
  );
}

export default ClientDiary;
