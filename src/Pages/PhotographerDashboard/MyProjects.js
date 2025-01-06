import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  MenuItem,
  Select,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const rows = [
  {
    address: "78 Court Street",
    client: "Aktons",
    projectType: "Birmingham",
    payments: "Paid",
    status: "Uploaded",
  },
  {
    address: "78 Court Street",
    client: "Aktons",
    projectType: "Birmingham",
    payments: "Pending",
    status: "Awaiting Capture",
  },
  // Add more rows as needed
];

const paymentColors = {
  Paid: "success",
  Pending: "error",
};

const statusOptions = ["Awaiting Capture", "Captured", "Uploaded"];

export default function MyProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!statusFilter || row.status === statusFilter)
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          p: 2,
        }}
      >
        {/* Title and Subtitle */}
        <Box>
          <Typography variant="h6" gutterBottom>
            My Projects
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
        <Button variant="contained" color="success">
          Download CSV
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Address
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Client
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Project Type
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Payments
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight="bold">
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography>
                    {row.address}
                    <br />
                    <Typography variant="caption" color="textSecondary">
                      {`${row.address}, 10000`}
                    </Typography>
                  </Typography>
                </TableCell>
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.projectType}</TableCell>
                <TableCell>
                  <Chip
                    label={row.payments}
                    color={paymentColors[row.payments]}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={row.status}
                    onChange={handleStatusChange}
                    variant="standard"
                    disableUnderline
                  >
                    {statusOptions.map((status, i) => (
                      <MenuItem key={i} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
