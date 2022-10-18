import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import {DialogsPropsType} from "./Dialogs-container";


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody = props.messagesPage.newMessageText;


    let onSendMessageClick = () => {
        //let text = props.state.newMessageText
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.onNewMessageChange(body);

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
