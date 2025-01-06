import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon,
  Settings as SettingsIcon,
  Payment as PaymentIcon,
  CalendarToday as CalendarIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import AvailableProjects from "./AvailableProjects";
import MyProjects from "./MyProjects";
import Diary from "./Diary";
import Payment from "./Payment";
import Settings from "./Settings";

const Dashboard = () => {
  const sidebarWidth = 240;
  const [activeComponent, setActiveComponent] = useState("AvailableProjects");

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "AvailableProjects":
        return <AvailableProjects />;
      case "MyProjects":
        return <MyProjects />;
      case "Diary":
        return <Diary />;
      case "Payment":
        return <Payment />;
      case "Settings":
        return <Settings />;
      default:
        return <Typography>Select a menu item</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: sidebarWidth,
          [`& .MuiDrawer-paper`]: {
            width: sidebarWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem>
            <Typography
              variant="h6"
              sx={{ pl: 2, fontWeight: "bold", textAlign: "center" }}
            >
              Unite Compliance
            </Typography>
          </ListItem>
          <ListItem
            button
            onClick={() => setActiveComponent("AvailableProjects")}
            selected={activeComponent === "AvailableProjects"}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Available Projects" />
          </ListItem>
          <ListItem
            button
            onClick={() => setActiveComponent("MyProjects")}
            selected={activeComponent === "MyProjects"}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="My Projects" />
          </ListItem>
          <ListItem
            button
            onClick={() => setActiveComponent("Diary")}
            selected={activeComponent === "Diary"}
          >
            <ListItemIcon>
              <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Diary" />
          </ListItem>
          <ListItem
            button
            onClick={() => setActiveComponent("Payment")}
            selected={activeComponent === "Payment"}
          >
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>
          <ListItem
            button
            onClick={() => setActiveComponent("Settings")}
            selected={activeComponent === "Settings"}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sidebarWidth}px)`, // Adjust width dynamically
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            ml: `${sidebarWidth}px`, // Match with Drawer width
            width: `calc(100% - ${sidebarWidth}px)`, // Adjust AppBar width
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "none",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              {activeComponent.replace(/([A-Z])/g, " $1").trim()}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f1f3f4",
                px: 2,
                borderRadius: "4px",
              }}
            >
              <SearchIcon />
              <InputBase placeholder="Search" />
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />

        {/* Render the active component */}
        <Box sx={{ mt: 2 }}>{renderComponent()}</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
