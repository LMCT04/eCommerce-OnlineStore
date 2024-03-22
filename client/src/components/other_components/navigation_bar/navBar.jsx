import React, { useState, useEffect } from "react";
import style from "./navBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Menu, MenuItem } from "@mui/material";
import { Menu as IconMenu, Search } from "@mui/icons-material";
import logo from "../../../assets/LogoBag1.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    setUser(account);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("account");
    navigate("/");
  };

  return (
    <>
      <div className={style.background}>
        <AppBar
          sx={{
            backgroundColor: "#5A03D5",
            height: "70%",
            width: "100%",
            position: "static",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className={style.menuCont}>
            <button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={style.btn}
            >
              <IconMenu sx={{ fontSize: "2.5rem" }} />
            </button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}> Profile </MenuItem>
              <MenuItem onClick={handleClose}> Settings </MenuItem>
              {user.role === 'admin' && (
                <MenuItem onClick={handleDashboardClick}> Dashboard </MenuItem>
              )}
              {user && (
                <MenuItem onClick={handleLogout}> Logout </MenuItem>
              )}
            </Menu>
          </div>
          <div className={style.mark}>
            <div className={style.boxImg}>
              <img src={logo} alt="logo" className={style.img} />
            </div>
            <div className={style.title}>
              <h1>Online Store</h1>
            </div>
          </div>
          <div className={style.icons}>
            <Search sx={{ fontSize: "2.5rem" }} />
          </div>
        </AppBar>
        <nav className={style.nav}>
          <NavLink to="/home" className={style.link}>
            Home
          </NavLink>
          <NavLink to="/store" className={style.link}>
            Store
          </NavLink>
          <NavLink to="/offers" className={style.link}>
            Offers
          </NavLink>
          <NavLink to="/about" className={style.link}>
            About Us
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
