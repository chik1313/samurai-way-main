import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

export type DispatchPropsType = {
    onSendMessageClick: () => void,
    onNewMessageChange: (body: string) => void
}

export type MapStateToPropsType =  ReturnType<typeof mapStateToProps>
export type DialogsPropsType = DispatchPropsType & MapStateToPropsType

const mapStateToProps = (state:AllStateType) => {
    return {
messagesPage: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch:Dispatch):DispatchPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageTextCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
