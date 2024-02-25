// IMPORT DEPENDENCIES
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

// IMPORT STYLES AND COMPONENTS
import style from "./formSubcategory.module.css";
import { ArrowBackIosNew } from "@mui/icons-material";

// IMPORT FUNCTIONS
import {
    createSubCategory,
    getSubCategories,
} from "../../../redux/slices/subcategory";
import { getCategories } from "../../../redux/slices/category";

const FormSubCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSubCategories());
        dispatch(getCategories());
    }, []);

    const subcategories = useSelector(
        (state) => state.subcategory.subcategories
    );

    const categories = useSelector((state) => state.category.categories);

    return (
        <>
            <div className={style.header}>
                <a href="/dashboard" className={style.header__a}>
                    <ArrowBackIosNew className={style.header__icon} />
                </a>
                <h2 className={style.header__h2}> Create Subcategory </h2>
            </div>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        CategoryId: "",
                    }}
                    validate={(values) => {
                        let errors = {};
                        // logic validate
                        // validate name
                        if (!values.name) {
                            errors.name = "The field is required";
                        } else {
                            const existingSubcategory = subcategories.find(
                                (subcategory) =>
                                    subcategory.name === values.name
                            );
                            if (existingSubcategory) {
                                errors.name = "The subcategory already exists";
                            }
                        }

                        // validate category
                        if (values.CategoryId === "") {
                            errors.CategoryId = "The field is required";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        resetForm();

                        // logic create subcategory
                        dispatch(createSubCategory(values));
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
                            <div className={style.form__div}>
                                <label
                                    htmlFor="CategoryId"
                                    className={style.form__label}
                                >
                                    Category
                                </label>
                                <div className={style.form__div_select}>
                                    <Field
                                        className={style.form__select}
                                        id="CategoryId"
                                        name="CategoryId"
                                        as="select"
                                    >
                                        <option
                                            className={style.form__option}
                                            value=""
                                        ></option>
                                        {categories.map((category) => (
                                            <option
                                                className={style.form__option}
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <ErrorMessage
                                    name="CategoryId"
                                    component={() => (
                                        <div className={style.form__error}>
                                            {errors.CategoryId}
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

export default FormSubCategory;
