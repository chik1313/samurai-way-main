import {ActionTypes} from "../types";

export type messagesDataType = {
    id: number,
    message: string
}
export type dialogsDataType = {
    id: number,
    name: string
}

const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogsData: [
        {id: 1, name: "Vladich"},
        {id: 2, name: "Natali"},
        {id: 3, name: "Romich"},
        {id: 4, name: "Alex"},
        {id: 5, name: "KaLkalych"}
    ] as Array<dialogsDataType>,
    messagesData: [
        {id: 1, message: "Hey"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Kal kalych"},
        {id: 4, message: "How are you"}
    ] as Array<messagesDataType>,

}

export type InitialStateType = typeof initialState;
const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }
        default :
            return state;
    }
}
export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}

export default dialogsReducer;
