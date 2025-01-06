import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  Button,
} from "@mui/material";

const Payment = () => {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const data = [
    {
      address: "78 Court Street",
      client: "Aktons",
      city: "Birmingham",
      assignee: "Chamod",
      payment: "Paid",
      deadline: "2024-12-12",
      status: "Completed",
    },
    {
      address: "78 Court Street",
      client: "Aktons",
      city: "Aktons",
      assignee: "Chamod",
      payment: "Pending",
      deadline: "2024-12-12",
      status: "Pending",
    },
    {
      address: "78 Court Street",
      client: "Aktons",
      city: "Birmingham",
      assignee: "Unassign",
      payment: "Unassign",
      deadline: "2024-12-12",
      status: "Unassign",
    },
    // Add more rows as necessary
  ];

  const columns = ["Address", "Client", "City", "Assignee", "Payment", "Deadline", "Status"];

  return (
    <Box sx={{ p: 3 }}>
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="Permission Tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
            },
          }}
        >
          <Tab label="Photographers" />
          <Tab label="Designers" />
          <Tab label="Inventory Clerk" />
          <Tab label="RICS Surveyor/Valuer" />
        </Tabs>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column} sx={{ fontWeight: "bold", textAlign: "left" }}>
                  {column} <span style={{ fontSize: "0.8em", color: "#888" }}>▼</span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.assignee}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: row.payment === "Paid" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {row.payment}
                  </Typography>
                </TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: row.status === "Completed" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
        <Button
          variant="outlined"
          disabled={page === 0}
          onClick={() => handleChangePage(null, page - 1)}
        >
          Previous
        </Button>
        <Typography>
          Page {page + 1} of {Math.ceil(data.length / rowsPerPage)}
        </Typography>
        <Button
          variant="outlined"
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          onClick={() => handleChangePage(null, page + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
