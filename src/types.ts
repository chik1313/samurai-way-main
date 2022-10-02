
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number,

}
export type messagesDataType = {
    id: number,
    message: string
}
export type dialogsDataType = {
    id: number,
    name: string
}
export type profilePageType = {
    postsData: Array<PostsDataType>,
    newPostText: string
}
export type messagesPageType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>,
    newMessageText: string
}

export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}
export type StoreType = {
    _state: StateType,
    // addPost: () => void,
    // updateNewPostText: (newText: string) => void,
    callSubscriber: () => void,
    subscribe: (observer:  () => void) => void,
    getState: () => StateType,
    dispatch: (action:ActionTypes) => void

}

type AddPostType = {
    type:'ADD-POST',
    newPost:string

}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
type UpdateNewMessageTextType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    body: string
}

type SendMessageType = {
    type:"SEND-MESSAGE",

}


export type ActionTypes = AddPostType | UpdateNewPostTextType | UpdateNewMessageTextType | SendMessageType


export type addMessageType = {
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}
