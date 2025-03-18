import { AccountCircle, Notifications, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { userInfor } from "../hooks/useUserInfor"; // Import the hook properly

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const userInformation = userInfor(); // Call the userInfor hook correctly

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );

  const handleUserProfileClick = (event) => {
    setAnchorEl(event.currentTarget); // Use currentTarget instead of target
  };

  return (
    <div>
      <AppBar color="white" position="static" className="py-4">
        <Toolbar className="justify-between !min-h-fit">
          <div className="flex gap-4 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="" className="w-8 h-8" />
            <div className="flex items-center gap-4">
              <TextField
                name="search"
                placeholder="Search"
                variant="standard"
                className="border rounded-lg"
                slotProps={{
                  input: {
                    className: "h-12 px-4 py-2 border rounded-lg focus:ring-2",
                  },
                  htmlInput: { className: "p-0" },
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <IconButton size="medium">
                <Badge badgeContent={4} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton size="medium" onClick={handleUserProfileClick}>
                <Avatar className="!bg-[#246AA3]">
                {userInformation?.fullName?.[0]?.toUpperCase() ?? "U"} {/* Default "U" for unknown user */}
                </Avatar>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default Header;
