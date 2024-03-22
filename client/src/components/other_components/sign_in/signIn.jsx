import React, { useEffect } from "react";
import style from "./signIn.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getUsers } from "../../../redux/slices/user";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleSignIn = (values, { resetForm }) => {
        // Reset the form
        resetForm();

        const userFound = users.find(user =>
            user.mail === values.email &&
            user.password === values.password)
        if (userFound) {
            localStorage.setItem('account', JSON.stringify(userFound))
            alert("Welcome");
            navigate("/home");
        } else {
            alert("user not found");
        }
    }
    


    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={(values) => {
                    // validate logic here
                    let errors = {};

                    // validate email
                    if (!values.email) {
                        errors.email = "This field is required";
                    } else if (
                        !/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }

                    // validate password
                    if (!values.password) {
                        errors.password = "This field is required";
                    } else if (!/^\d{8,15}$/.test(values.password)) {
                        errors.password = "Invalid password";
                    }

                    return errors;
                }}
                onSubmit={handleSignIn}
            >
                {({ errors }) => (
                    <Form className={style.form}>
                        <div className={style.form__title}>
                            <h1 className={style.form__h1}> Sign In </h1>
                        </div>
                        <div className={style.form__div}>
                            <label
                                htmlFor="email"
                                className={style.form__label}
                            >
                                Email
                            </label>
                            <Field
                                className={style.form__input}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                name="email"
                                component={() => (
                                    <div className={style.form__error}>
                                        {errors.email}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={style.form__div}>
                            <label
                                htmlFor="password"
                                className={style.form__label}
                            >
                                Password
                            </label>
                            <Field
                                className={style.form__input}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <ErrorMessage
                                name="password"
                                component={() => (
                                    <div className={style.form__error}>
                                        {errors.password}
                                    </div>
                                )}
                            />
                        </div>
                        <button type="submit" className={style.form__button}>
                            Join
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SignIn;
