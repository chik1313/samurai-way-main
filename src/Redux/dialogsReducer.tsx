import {ActionTypes, messagesPageType} from "../types";

export type messagesDataType = {
    id: number,
    message: string
}
export type dialogsDataType = {
    id: number,
    name: string
}

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogsData: [
        {id: 1, name: "Vladich"},
        {id: 2, name: "Natali"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Alex"},
        {id: 5, name: "KaLkalych"}
    ] as Array<dialogsDataType>,
    messagesData: [
        {id: 1, message: "Hey"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Kal kalych"},
        {id: 4, message: "How are you"}
    ] as Array<messagesDataType>,
    newMessageText: ""
}

export type InitialStateType = typeof initialState;
const dialogsReducer = (state:InitialStateType=initialState, action:ActionTypes):InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.messagesData.push({id: 6, message: body})
            state.newMessageText = '';
            return state
        default :
            return state;
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,

    } as const
}
export const updateNewMessageTextCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: text
    } as const
}
export default dialogsReducer;
