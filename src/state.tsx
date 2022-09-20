import {PostsDataType, StateType} from "./types";



let rerenderEntireTree = () => {

}

export let state: StateType = {
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
        ]
    }

}
export let addPost = () => {
    let newMessage: PostsDataType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newMessage)
    state.profilePage.newPostText = "";
    rerenderEntireTree();
}
export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: ()=> void ) => {
    rerenderEntireTree = observer
}
