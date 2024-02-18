import React from "react";
import style from "./register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import {createUser} from '../../../redux/slices/user'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    lastname: "",
                    userName: "",
                    image: "https://www.hersheyland.com/content/dam/Hersheyland_Mexico/es_mx/recipes/recipe-images/Pastel-de-reeses.jpg",
                    mail: "",
                    password: "",
                }}
                validate={(values) => {
                    // validate logic here
                    let errors = {};

                    // validate name
                    if (!values.name) {
                        errors.name = "This field is required";
                    }

                    // validate lastname
                    if (!values.lastname) {
                        errors.lastname = "This field is required";
                    }

                    // validate userName
                    if (!values.userName) {
                        errors.userName = "This field is required";
                    }

                    // validate mail
                    if (!values.mail) {
                        errors.mail = "This field is required";
                    }

                    // validate password
                    if (!values.password) {
                        errors.password = "This field is required";
                    }

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();

                    // logic create user
                    dispatch(createUser(values));
                    navigate("/home");
                }}
            >
                {({ errors }) => (
                    <Form className={style.form}>
                        <div className={style.form__title}>
                            <h1 className={style.form__h1}> Register </h1>
                        </div>
                        <div className={style.form__div}>
                            <label htmlFor="name" className={style.form__label}>
                                Name
                            </label>
                            <Field
                                className={style.form__input}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                            />
                            <ErrorMessage
                                name="name"
                                component={() => (
                                    <div className={style.form__error}>
                                        {errors.name}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={style.form__div}>
                            <label
                                htmlFor="lastname"
                                className={style.form__label}
                            >
                                Lastname
                            </label>
                            <Field
                                className={style.form__input}
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="Lastname"
                            />
                            <ErrorMessage
                                name="lastname"
                                component={() => (
                                    <div className={style.form__error}>
                                        {errors.lastname}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={style.form__div}>
                            <label
                                htmlFor="userName"
                                className={style.form__label}
                            >
                                Username
                            </label>
                            <Field
                                className={style.form__input}
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder="Username"
                            />
                            <ErrorMessage
                                name="userName"
                                component={() => (
                                    <div className={style.form__error}>
                                        {errors.userName}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={style.form__div}>
                            <label
                                htmlFor="mail"
                                className={style.form__label}
                            >
                                Email
                            </label>
                            <Field
                                className={style.form__input}
                                type="email"
                                name="mail"
                                id="mail"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                name="mail"
                                component={() => (
                                    <div className={style.form__error}>
                                        {errors.mail}
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
                            Create Account
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Register;
