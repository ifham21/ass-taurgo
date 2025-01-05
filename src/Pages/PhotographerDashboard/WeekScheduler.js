import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

function WeekScheduler() {
  return (
    <Paper elevation={3} sx={{ flex: 1, padding: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Week View</Typography>
        <Button variant="contained" color="success">
          Download CSV
        </Button>
      </Grid>
      <Box sx={{ height: "80%", marginTop: 2, border: "1px solid #ccc", borderRadius: 1 }}>
        {/* Placeholder for calendar week grid */}
        <Typography variant="h6" align="center" mt={10}>
          Calendar Placeholder
        </Typography>
      </Box>
    </Paper>
  );
}

export default WeekScheduler;
