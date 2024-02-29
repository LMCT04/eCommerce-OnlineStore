import React, { useState } from "react";
import style from "./dashboard.module.css";
import { Btn } from "../../components/compounds_components";
import { UsersCont, ProductCont, SubcategoryCont, CategoryCont } from "../../components/dashboard_components";

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
                        styles={{margin: "0 1dvh"}}
                    >
                        <Btn.Title text="Users" />
                    </Btn>
                    <Btn
                        theme={activeComponent === 2 ? "" : "secondary"}
                        onClick={() => renderComponent(2)}
                        styles={{margin: "0 2dvh"}}
                    >
                        <Btn.Title text="Products" />
                    </Btn>
                    <Btn
                        theme={activeComponent === 3 ? "" : "secondary"}
                        onClick={() => renderComponent(3)}
                        styles={{margin: "0 2dvh"}}
                    >
                        <Btn.Title text="Subcategories" />
                    </Btn>
                    <Btn
                        theme={activeComponent === 4 ? "" : "secondary"}
                        onClick={() => renderComponent(4)}
                        styles={{margin: "0 2dvh"}}
                    >
                        <Btn.Title text="Categories" />
                    </Btn>
                </div>
                <div className={style.adminCont}>
                    {activeComponent === 1 && <UsersCont />}
                    {activeComponent === 2 && <ProductCont />}
                    {activeComponent === 3 && <SubcategoryCont />}
                    {activeComponent === 4 && <CategoryCont />}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
