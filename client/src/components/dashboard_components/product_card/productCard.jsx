import React, { useEffect, useState } from "react";
import style from "./productCard.module.css";
import { Acn } from "../../compounds_components";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../redux/slices/category";
import { getSubCategories } from "../../../redux/slices/subcategory";
import { putStatus } from "../../../redux/slices/product";
import { Formik, Form, Field } from 'formik';
import { Dlg } from '../../compounds_components'

const ProductCard = ({ elements }) => {
    const {
        id,
        name,
        image,
        description,
        price,
        CategoryId,
        SubCategoryId,
        isActive,
    } = elements;

    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(isActive);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState({
        editName: false,
        editDescription: false,
    });
    const categories = useSelector((state) => state.category.categories);
    const subcategories = useSelector(
        (state) => state.subcategory.subcategories
    );

    const handleToggle = (event) => {
        event.stopPropagation()
        dispatch(putStatus(id, !isChecked))
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSubCategories());
    }, [dispatch]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (inputType) => {
        setEditMode(prevState => ({
            ...prevState,
            [inputType]: !prevState[inputType]
        }))
    }

    const getCategoryName = (id) => {
        const category = categories.find((cat) => cat.id === id);
        return category ? category.name : "unknown category";
    };

    const getSubCategoryName = (id) => {
        const subcategory = subcategories.find((subCat) => subCat.id === id);
        return subcategory ? subcategory.name : "unknown subcategory";
    };

    return (
        <>
            <Acn text={name} status={isActive}>
                <Acn.Content>
                    <Acn.Content.Top productId={id}>
                        <Dlg
                            open={open}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            typeButton='text-icon'
                            btnTxt='Edit Product'
                            title='Edit Form'
                            btnStyle={{fontSize: '.5rem'}}
                            btnIStyle={{fontSize: '1.1rem', marginLeft: '3%'}}
                        >
                            <Formik
                                initialValues={{
                                    name: name,
                                    description: description,
                                }}
                                onSubmit={(values) => {
                                    alert('Send', values)
                                    handleClose()
                                }}
                            >
                                {() => (
                                    <Form>
                                        <div>
                                            <Field as='input' disabled={!editMode.editName} name='name'/>
                                            { <button type="button" onClick={() => handleEdit('editName')}>
                                                edit
                                            </button> }
                                        </div>
                                        <div>
                                            <Field as='textarea' disabled={!editMode.editDescription} name='description'/>
                                            { <button type="button" onClick={() => handleEdit('editDescription')}>
                                                edit
                                            </button> }
                                        </div>
                                        <button type="submit">
                                            Send
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </Dlg>
                    </Acn.Content.Top>
                    <Acn.Content.Central>
                        <Acn.Content.Central.Img src={image} styles={{width:'35%', margin:'2%'}}/>
                        <Acn.Content.Central.Info text={`$ ${price}`} styles={{fontSize: '1.5rem', fontWeight: '500'}}/>
                    </Acn.Content.Central>
                    <Acn.Content.Bottom>
                        <Acn.Content.Bottom.SwitchItem checked={isChecked} onChange={handleToggle}/>
                    </Acn.Content.Bottom>
                </Acn.Content>
            </Acn>
        </>
    );
};

export default ProductCard;
