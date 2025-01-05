import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
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
    <>
      <div>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
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
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.client}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination count={10} color="primary" />
        </Box>
      </div>
    </>
  );
};

export default AvailableProjects;
