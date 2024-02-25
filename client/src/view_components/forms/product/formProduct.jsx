import React from "react";
import style from "./formProduct.module.css";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../redux/slices/product";

const FormProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <div className={style.header}>
                <a href="/dashboard" className={style.header__a}>
                    <ArrowBackIosNew className={style.header__icon} />
                </a>
                <h2 className={style.header__h2}> Create Product </h2>
            </div>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        image: [],
                        description: "",
                        price: "",
                        category: "",
                        subcategory: "",
                    }}
                    validate={(values) => {
                        let errors = {};

                        // validate name
                        if (!values.name) {
                            errors.name = "The field is required";
                        }

                        // validate image

                        // validate description
                        if (!values.description) {
                            errors.description = "The field is required";
                        }

                        // validate price
                        if (!values.price) {
                            errors.price = "The field is required";
                        }

                        // validate category
                        if (!values.category) {
                            errors.category = "The field is required";
                        }

                        // validate subcategory
                        if (!values.subcategory) {
                            errors.subcategory = "The field is required";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        resetForm();
                        const product = {
                            ...values,
                            image: Array.isArray(values.image) ? values.image : [values.image]
                        };
                        // logic create product
                        dispatch(createProduct(product));
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
                                    htmlFor="image"
                                    className={style.form__label}
                                >
                                    Image
                                </label>
                                <Field
                                    className={style.form__input}
                                    type="text"
                                    name="image"
                                    id="image"
                                    placeholder="Image"
                                />
                                <ErrorMessage
                                    name="image"
                                    component={() => (
                                        <div className={style.form__error}>
                                            {errors.image}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={style.form__div}>
                                <label
                                    htmlFor="description"
                                    className={style.form__label}
                                >
                                    Description
                                </label>
                                <Field
                                    className={style.form__input}
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                />
                                <ErrorMessage
                                    name="description"
                                    component={() => (
                                        <div className={style.form__error}>
                                            {errors.description}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={style.form__div}>
                                <label
                                    htmlFor="price"
                                    className={style.form__label}
                                >
                                    Price
                                </label>
                                <Field
                                    className={style.form__input}
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Price"
                                    min="0"
                                />
                                <ErrorMessage
                                    name="price"
                                    component={() => (
                                        <div className={style.form__error}>
                                            {errors.price}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={style.form__div}>
                                <label
                                    htmlFor="category"
                                    className={style.form__label}
                                >
                                    Category
                                </label>
                                <Field
                                    className={style.form__input}
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Category"
                                />
                                <ErrorMessage
                                    name="category"
                                    component={() => (
                                        <div className={style.form__error}>
                                            {errors.category}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={style.form__div}>
                                <label
                                    htmlFor="subcategory"
                                    className={style.form__label}
                                >
                                    Subcategory
                                </label>
                                <Field
                                    className={style.form__input}
                                    type="text"
                                    name="subcategory"
                                    id="subcategory"
                                    placeholder="Subcategory"
                                />
                                <ErrorMessage
                                    name="subcategory"
                                    component={() => (
                                        <div className={style.form__error}>
                                            {errors.subcategory}
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

export default FormProduct;
