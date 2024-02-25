import React from "react";
import style from "./navBar.module.css";
import logo from "../../../assets/LogoBag1.png";
import { Btn } from "../../compounds_components";
import { Menu, MenuItem } from "@mui/material";
import {Menu as IconMenu} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'

const NavBarDashboard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const navigate = useNavigate()

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClick2 = (e) => {
        setAnchorEl2(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClose2 = () => {
        setAnchorEl2(null);
    }

    const toCreateProduct = () => {
        navigate('/dashboard/create-product')
        setAnchorEl2(null);
    }

    const toCreateCategory = () => {
        navigate('/dashboard/create-category')
        setAnchorEl2(null);
    }

    const toCreateSubcategory = () => {
        navigate('/dashboard/create-subcategory')
        setAnchorEl2(null);
    }

    const toHome = () => {
        navigate('/home')
        setAnchorEl(null)
    }

    return (
        <>
            <div className={style.header}>
                <div className={style.header__div_left}>
                    <button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        className={style.header__button}
                    >
                        <IconMenu sx={{fontSize:'2rem'}} />
                    </button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} > Profile </MenuItem>
                        <MenuItem onClick={toHome} > Home </MenuItem>
                        <MenuItem onClick={handleClose} > Settings </MenuItem>
                    </Menu>
                </div>
                <div className={style.header__div_center}>
                    <div className={style.header__div_img}>
                        <img src={logo} className={style.header__img} />
                    </div>
                    <div className={style.header__title}>
                        <h1 className={style.header__h1}>Online Store</h1>
                    </div>
                </div>
                <div className={style.header__div_right}>
                    <Btn 
                        theme="circle"
                        ariaControls='create-menu'
                        ariaHaspopup='true'
                        onClick={handleClick2}
                    >
                        <Btn.Icon size="medium" />
                    </Btn>
                    <Menu
                        id="create-menu"
                        anchorEl={anchorEl2}
                        open={Boolean(anchorEl2)}
                        onClose={handleClose2}
                    >
                        <MenuItem> Create... </MenuItem>
                        <hr />
                        <MenuItem onClick={toCreateProduct} > Product </MenuItem>
                        <MenuItem onClick={toCreateCategory} > Category </MenuItem>
                        <MenuItem onClick={toCreateSubcategory} > SubCategory </MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    );
};

export default NavBarDashboard;
