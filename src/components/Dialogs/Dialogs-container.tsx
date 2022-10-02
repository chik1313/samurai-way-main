import React from "react";
import {ActionTypes,StoreType} from "../../types";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { StoreContext } from "../../StoreContext";


type PropsType = {
    state: StoreType
    dispatch: (action: ActionTypes) => void
}

const DialogsContainer = (props: PropsType) => {
    let state = props.state.getState().messagesPage
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageTextCreator(body))
    }
    // let state = props.state.getState().messagesPage
    //
    // let onSendMessageClick = () => {
    //
    //     props.dispatch(sendMessageCreator())
    // }
    // let onNewMessageChange = (body: string) => {
    //     props.dispatch(updateNewMessageTextCreator(body))
    //
    // }
    return <StoreContext.Consumer>
        {() => <Dialogs state={state} updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick}/>}
    </StoreContext.Consumer>
}



export default DialogsContainer;
