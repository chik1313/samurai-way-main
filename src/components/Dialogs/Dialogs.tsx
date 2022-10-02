import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import {messagesPageType} from "../../types";



type PropsType = {
    state: messagesPageType
    // dialogsData: dialogsDataType[]
    // messagesData: messagesDataType[]
    // newMessageText: string
    updateNewMessage: (body:string) =>void
    sendMessage: ()=>void

}

const Dialogs = (props: PropsType) => {
    //let state = props.state.messagesPage
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody = props.state.newMessageText;


    let onSendMessageClick = () => {
        //let text = props.state.newMessageText
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessage(body);

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
