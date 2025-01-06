import React from "react";
import {
  Box,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Typography,
} from "@mui/material";

const AvailableProjects = () => {
  // Sample data
  const rows = Array(10).fill({
    address: "78 Court Street Tonypandy",
    client: "Aktons",
    city: "Birmingham",
    payment: "£250",
    deadline: "2024-12-12",
  });

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Title and Subtitle */}
        <Box>
          <Typography variant="h6" gutterBottom>
            All Available Projects
          </Typography>
          <Typography variant="body2" color="textSecondary">
            View property available
          </Typography>
        </Box>

        {/* Search Bar */}
        <InputBase
          placeholder="Search"
          sx={{
            px: 2,
            py: 1,
            border: "1px solid #ccc",
            borderRadius: 1,
            width: "250px",
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Total Payment</TableCell>
              <TableCell>Deadline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography fontWeight="bold">
                    {row.address.split(" ")[0]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {row.address}
                  </Typography>
                </TableCell>
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.payment}</TableCell>
                <TableCell>{row.deadline}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default AvailableProjects;
