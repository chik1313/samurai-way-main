import {ActionTypes, messagesPageType} from "../types";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState:messagesPageType = {
    dialogsData: [
        {id: 1, name: "Vladich"},
        {id: 2, name: "Natali"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Alex"},
        {id: 5, name: "KaLkalych"}
    ],
    messagesData: [
        {id: 1, message: "Hey"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Kal kalych"},
        {id: 4, message: "How are you"}
    ],
    newMessageText: ""
}


const dialogsReducer = (state=initialState, action:ActionTypes) => {
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
