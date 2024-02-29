import React from "react";
import style from "./accordion.module.css";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Switch,
} from "@mui/material";

const Acn = ({ children, nameProduct, checked, onChange, ...props }) => {
    return (
        <>
            <Accordion className={style.acc}>
                <AccordionSummary className={style.summary}>
                    <h2 className={style.name}> {nameProduct} </h2>
                </AccordionSummary>
                <AccordionDetails className={style.details}>
                    {children}
                    <Switch  checked={checked} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
        </>
    );
};

const ImgBox = ({ children, src, ...props }) => (
    <>
        <div className={style.imgBox}>
            <img src={src} alt="Product Img" className={style.img} />
        </div>
    </>
);

const Description = ({ children, info, ...props }) => (
    <>
        <div className={style.descriptionCont}>
            <div className={style.description}>
                {info}
            </div>
        </div>
    </>
);

const Data = ({ children, data, ...props }) => (
    <>
        <div className={style.data}>
            {data}
        </div>
    </>
);

Acn.ImgBox = ImgBox;
Acn.Description = Description;
Acn.Data = Data;

export default Acn;
