import {PostsDataType, StateType, StoreType} from "../types";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi,how are you?", likesCount: 14},
                {id: 2, message: "Hello,it's my first post!", likesCount: 15}
            ],
            newPostText: 'it-kamasutra.com'

        },
        messagesPage: {
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
    },
    getState() {
        return this._state;
    },
    callSubscriber() {

    },
    subscribe(observer) {
        this.callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let addPost: PostsDataType = {
                id: 5,
                message: this._state.profilePage.newPostText = action.newPost,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(addPost)
            this._state.profilePage.newPostText = "";
            this.callSubscriber();

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.body;
            this.callSubscriber()
            console.log('state changed')
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.messagesData.push({id: 6, message: body})
           this._state.messagesPage.newMessageText = '';
            this.callSubscriber();
        }
    }
}

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        newPost: text
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
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
