import {StoreType} from "../types";
import ProfileReducer from "./ProfileReducer";


export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi,how are you?", likesCount: 14},
                {id: 2, message: "Hello,it's my first post!", likesCount: 15}
            ],
            profile: null,
            status: ""

        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Vladich"},
                {id: 2, name: "Natali"},
                {id: 3, name: "Romich"},
                {id: 4, name: "Alex"},
                {id: 5, name: "KaLkalych"}
            ],
            messagesData: [
                {id: 1, message: "Hey"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Kal kalych"},
                {id: 4, message: "How are you"}
            ],
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

        this._state.profilePage = ProfileReducer( this._state.profilePage,action)
        /*this._state.messagesPage = dialogsReducer( this._state.messagesPage,action)*/
        this.callSubscriber();
    }
}

