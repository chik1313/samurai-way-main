import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import {dialogsDataType, messagesDataType, StateType} from "../../types";

type PropsType ={
    dialogsData:dialogsDataType[]
    messagesData:messagesDataType[]
}

const Dialogs = (props:PropsType) => {

    let dialogsElements = props.dialogsData.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map(m=><Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;
