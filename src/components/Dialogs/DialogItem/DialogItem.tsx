import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {dialogsDataType} from "../../../types";



const DialogItem = (props: dialogsDataType) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
