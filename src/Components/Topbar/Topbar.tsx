import React from 'react'
import "../../style/Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
const logo = require("../../assets/acamLogo.png")
const image = require("../../assets/logo3.png");
export default function Topbar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src={logo} alt="logo" className="logoImg"/>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={handleMenu}>
            <Person  />
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
          </div>
          <div className="topbarIconItem">
            <Chat />
          </div>
          <div className="topbarIconItem">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}