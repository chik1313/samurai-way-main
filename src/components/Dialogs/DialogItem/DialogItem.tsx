import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {dialogsDataType} from "../../../Redux/dialogsReducer";


const DialogItem = (props: dialogsDataType) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialogs + " " + s.active}>
            <a href={''}>{props.name}</a>
        </div>
    )
}


export default DialogItem;
