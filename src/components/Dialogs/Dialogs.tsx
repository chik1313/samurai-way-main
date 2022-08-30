import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

type DialogItemType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemType) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <DialogItem name={"Vladich"} id={1}/>
                    <DialogItem name={"Natali"} id={2}/>
                    <DialogItem name={"Alex"} id={3}/>
                    <DialogItem name={"Romych"} id={4}/>
                    <DialogItem name={"KaLkalych"} id={5}/>
                </div>
            </div>
            <div className={s.messages}>

                <Message message="Hey"/>
                <Message message="How are you"/>
                <Message message="Kal kalych?"/>
                <Message message="How are you"/>
            </div>
        </div>
    )
}


export default Dialogs;
