import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";
import {DialogsPropsType} from "./Dialogs-container";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import Textarea from "../common/FormsControlls/FormsControls";
import {Button} from "@mui/material";

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message}/>)

    let addMessageBody = (values:InputType) => {
        props.onSendMessageClick(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addMessageBody}/>
            </div>
        </div>
    )
}
type InputType = {
    newMessageBody: string
}
const maxField50 = maxLengthCreator(50)
const AddMessageForm:React.FC<InjectedFormProps<InputType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message'
                       name="newMessageBody"
                       validate={[requiredField , maxField50]}
                />
                <div>
                    <Button variant='outlined' size='small'>Send </Button>
                </div>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<InputType>({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
