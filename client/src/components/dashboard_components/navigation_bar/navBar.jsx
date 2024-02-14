import React from "react";
import style from "./navBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Menu, MenuItem } from "@mui/material";
import { Menu as IconMenu, Search } from "@mui/icons-material";
import logo from "../../../assets/LogoBag1.png";
import { useState } from "react";

const NavBarDashboard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toDashboard = () => {
        navigate('/dashboard');
        setAnchorEl(null);
    };

    const toHome = () => {
        navigate('/home');
        setAnchorEl(null);
    }

    return (
        <>
            <div className={style.background}>
                <AppBar
                    sx={{
                        backgroundColor: "#5A03D5",
                        height: "100%",
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
                            <IconMenu sx={{fontSize:'2.5rem'}} />
                        </button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}> Profile </MenuItem>
                            <MenuItem onClick={handleClose}> Settings </MenuItem>
                            <MenuItem onClick={toDashboard}> Dashboard </MenuItem>
                            <MenuItem onClick={toHome}> Home </MenuItem>
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
                </AppBar>
            </div>
        </>
    );
};

export default NavBarDashboard;