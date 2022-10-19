
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number,

}
export type UsersDataType = {
    id: number,
    photos: { small: string, large: string }
    followed:boolean,
    name: string,
    status: string,
    location : {city: string, country: string}
}
 type messagesDataType = {
    id: number,
    message: string
}
 type dialogsDataType = {
    id: number,
    name: string
}
export type profilePageType = {
    postsData: Array<PostsDataType>,
    newPostText: string
}
export type usersPageType = {
    users: Array<UsersDataType>,
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
type followType = {
    type: "FOLLOW",
    userID:number
}
type unfollowType = {
    type: "UNFOLLOW",
    userID:number
}
type setusersType = {
    type: "SET_USERS",
    users:any
}

export type ActionTypes = AddPostType | UpdateNewPostTextType | UpdateNewMessageTextType | SendMessageType | followType | unfollowType | setusersType ;


export type addMessageType = {
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}
