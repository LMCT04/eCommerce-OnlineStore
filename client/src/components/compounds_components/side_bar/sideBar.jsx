import React, { useState } from "react";
import style from "./sideBar.module.css";
import {
    Settings,
    ShoppingBag,
    PlaylistAddCheck,
    Logout,
    SpaceDashboard,
    Person,
    Menu,
    Close,
    Storefront
} from "@mui/icons-material";
import logo from '../../../assets/LogoBag1.png'

const SideBar = ({ children, onClick, ...props }) => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    const handleButtonClick = (componentNumber) => {
        onClick(componentNumber);
    };


    return (
        <>
            <div className={`${style["sidebar"]} ${open ? style["sidebar-active"] : ""}`}>
                <div className={style["sidebar__top"]}>
                    <div className={`${style["sidebar__logo"]} ${open ? style["sidebar-active__logo"] : ""}`}>
                        <div className={style["sidebar__logo-containerImg"]}>
                            <img src={logo} className={style["sidebar__logo-img"]} />
                        </div>
                        <div className={style["sidebar__logo-containerH1"]}>
                            <h1 className={style["sidebar__logo-h1"]}>Online Store</h1>
                        </div>
                    </div>
                    <div className={`${style["sidebar__container-btn"]} ${open ? style["sidebar-active__container-btn"] : ""}`}>
                        {open ? (
                            <button onClick={toggleSidebar} className={style["sidebar__btn-close"]}>
                                <Close className={style["sidebar__icon-close"]} />
                            </button>
                        ) : (
                            <button onClick={toggleSidebar} className={style["sidebar__btn-open"]} >
                                <Menu className={style["sidebar__icon-open"]} />
                            </button>
                        )}
                    </div>
                </div>
                <div className={style["sidebar__user"]}>
                    <button className={style["sidebar__a"]} onClick={() => handleButtonClick(2)}>
                        <span className={style["sidebar__a-span"]}>
                            <Person className={style["sidebar__icon"]} />
                        </span>
                        <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                            Admin
                        </span>
                    </button>
                </div>
                <ul className={style["sidebar__ul"]}>
                    <li className={style["sidebar__li"]}>
                        <button className={style["sidebar__a"]} onClick={() => handleButtonClick(1)}>
                            <span className={style["sidebar__a-span"]}>
                                <SpaceDashboard className={style["sidebar__icon"]} />
                            </span>
                            <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                                Dashboard
                            </span>
                        </button>
                    </li>
                    <li className={style["sidebar__li"]}>
                        <button className={style["sidebar__a"]} onClick={() => handleButtonClick(3)}>
                            <span className={style["sidebar__a-span"]}>
                                <ShoppingBag className={style["sidebar__icon"]} />
                            </span>
                            <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                                Products
                            </span>
                        </button>
                    </li>
                    <li className={style["sidebar__li"]}>
                        <button className={style["sidebar__a"]} onClick={() => handleButtonClick(5)}>
                            <span className={style["sidebar__a-span"]}>
                                <PlaylistAddCheck className={style["sidebar__icon"]} />
                            </span>
                            <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                                Categories
                            </span>
                        </button>
                    </li>
                    <li className={style["sidebar__li"]}>
                        <button className={style["sidebar__a"]} onClick={() => handleButtonClick(4)}>
                            <span className={style["sidebar__a-span"]}>
                                <PlaylistAddCheck className={style["sidebar__icon"]} />
                            </span>
                            <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                                SubCategories
                            </span>
                        </button>
                    </li>
                    <li className={style["sidebar__li"]}>
                        <a href="/home" className={style["sidebar__a"]}>
                            <span className={style["sidebar__a-span"]}>
                                <Storefront className={style["sidebar__icon"]} />
                            </span>
                            <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                                WebPage
                            </span>
                        </a>
                    </li>
                    <li className={style["sidebar__li"]}>
                        <a href="#" className={style["sidebar__a"]}>
                            <span className={style["sidebar__a-span"]}>
                                <Settings className={style["sidebar__icon"]} />
                            </span>
                            <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                                Settings
                            </span>
                        </a>
                    </li>
                </ul>
                <div className={style["sidebar__bottom"]}>
                    <a href="/" className={style["sidebar__a"]}>
                        <span className={style["sidebar__a-span"]}>
                            <Logout className={style["sidebar__icon"]} />
                        </span>
                        <span className={`${style["sidebar__nav-item"]} ${open ? style["sidebar-active__nav-item"] : ""}`}>
                            Logout
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default SideBar;
