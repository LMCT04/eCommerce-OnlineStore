import React from "react";
import style from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";

const NavBar = () => {
    return (
        <>
            <div className={style.background}>
                <AppBar
                    sx={{
                        backgroundColor: "red",
                        height: "70%",
                        width: "100%",
                        position: "static",
                        display: "flex",
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-around'
                    }}
                >
                    <div className={style.boxImg}>
                        LOGO
                    </div>
                    <div className={style.title}>
                        <h1>
                            Online Store
                        </h1>
                    </div>
                    <div className={style.icons}>
                        <Search fontSize="large" />
                        <Menu fontSize="large" />
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
