import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import {ActionTypes, dialogsDataType, messagesDataType, StateType} from "../../types";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/state";

type PropsType = {
    dialogsData: dialogsDataType[]
    messagesData: messagesDataType[]
    newMessageText: string
    dispatch: (action: ActionTypes) => void
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody = props.newMessageText;
    let onSendMessageClick = () => {
        let text = props.newMessageText
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageTextCreator(body))

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea placeholder='Enter your message'
                              value={newMessageBody}
                              onChange={onNewMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;
