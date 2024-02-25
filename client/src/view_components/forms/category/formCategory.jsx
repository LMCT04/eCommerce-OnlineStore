// IMPORT DEPENDENCIES
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

// IMPORT STYLES AND COMPONENTS
import style from "./formCategory.module.css";
import { ArrowBackIosNew } from "@mui/icons-material";

// IMPORT FUNCTIONS
import { createCategory, getCategories } from "../../../redux/slices/category";

const FormCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categories = useSelector((state) => state.category.categories);

    return (
        <>
            <div className={style.header}>
                <a href="/dashboard" className={style.header__a}>
                    <ArrowBackIosNew className={style.header__icon} />
                </a>
                <h2 className={style.header__h2}> Create Category </h2>
            </div>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                    }}
                    validate={(values) => {
                        let errors = {};
                        // logic validate
                        // validate name
                        if (!values.name) {
                            errors.name = "The field is required";
                        } else {
                            const existingCategory = categories.find(
                                (category) => category.name === values.name
                            );
                            if (existingCategory) {
                                errors.name = "This category already exists";
                            }
                        }

                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        resetForm();

                        // logic create category
                        dispatch(createCategory(values));
                        navigate("/dashboard");
                    }}
                >
                    {({ errors }) => (
                        <Form className={style.form}>
                            <div className={style.form__div}>
                                <label
                                    htmlFor="name"
                                    className={style.form__label}
                                >
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
                            <button
                                type="submit"
                                className={style.form__button}
                            >
                                Create
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default FormCategory;
