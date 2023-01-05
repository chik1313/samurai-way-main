import React from "react";
import {sendMessageCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type DispatchPropsType = {
    onSendMessageClick: (newMessageBody: string) => void,

}

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type DialogsPropsType = DispatchPropsType & MapStateToPropsType

const mapStateToProps = (state: AllStateType) => {
    return {
        messagesPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
