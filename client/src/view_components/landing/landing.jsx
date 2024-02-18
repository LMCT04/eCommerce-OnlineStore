import React, {useState} from "react";
import style from "./landing.module.css";
import Register from "../../components/other_components/register/register";
import SignIn from "../../components/other_components/sign_in/signIn";

const Landing = () => {
    const [activeComponent, setActiveComponent] = useState('register')
    
    const toggle = () => {
        setActiveComponent(activeComponent === 'register' ? 'signIn' : 'register')
    };

    const renderActiveComponent = () => {
        if (activeComponent === 'register') {
            return <Register />;
        } else {
            return <SignIn />;
        }
    }

    const btnText = activeComponent === 'register' ? 'Sign in' : 'Register';

    return (
        <>
            <div className={style.background}>
                <div className={style.contentForm}>
                    {renderActiveComponent()}
                    <div className={style.box1}>
                        <div className={style.btnCont}>
                            <button className={style.btn} onClick={toggle} >{btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
