import React, { useState } from "react";
import style from "./dashboard.module.css";
import { Btn } from "../../components/compounds_components";
import { UsersCont, ProductCont } from "../../components/dashboard_components";

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState(1);

    const renderComponent = (componentNumber) => {
        setActiveComponent(componentNumber);
    };

    return (
        <>
            <div className={style.background}>
                <div className={style.btnCont}>
                    <Btn
                        theme={activeComponent === 1 ? "" : "secondary"}
                        onClick={() => renderComponent(1)}
                    >
                        <Btn.Title text="Users" />
                    </Btn>
                    <Btn
                        theme={activeComponent === 2 ? "" : "secondary"}
                        onClick={() => renderComponent(2)}
                    >
                        <Btn.Title text="Products" />
                    </Btn>
                </div>
                <div className={style.adminCont}>
                    {activeComponent === 1 && <UsersCont />}
                    {activeComponent === 2 && <ProductCont />}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
