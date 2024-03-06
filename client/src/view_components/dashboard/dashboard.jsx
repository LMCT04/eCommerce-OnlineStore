import React, {useState} from "react";
import style from "./dashboard.module.css";
import { SpaceDashboard } from "@mui/icons-material";
import { SideBar } from "../../components/dashboard_components";
import { UsersCont, ProductCont, SubcategoryCont, CategoryCont } from "../../components/dashboard_components";

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState(1);

    const handleSidebar = (componenteNum) => {
        setActiveComponent(componenteNum);
    };

    return (
        <>
            <div className={style["dashboard"]}>
                    <SideBar onClick={handleSidebar}/>
                <div className={style["dashboard__container"]}>
                    {activeComponent === 1 &&
                        <div className={style["dashboard__title"]}>
                        <span className={style["dashboard__title-span"]}>
                            <SpaceDashboard className={style["dashboard__title-dashboardIcon"]}/>
                        </span>
                        <h1 className={style["dashboard__title-h1"]}>
                            Dashboard
                        </h1>
                    </div>}
                    {activeComponent === 2 && <UsersCont />}
                    {activeComponent === 3 && <ProductCont />}
                    {activeComponent === 4 && <SubcategoryCont />}
                    {activeComponent === 5 && <CategoryCont />}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
