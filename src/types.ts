

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
type profilePageType = {
    postsData:Array<PostsDataType>,
    newPostText:string
}
type messagesPageType = {
    dialogsData:Array<dialogsDataType>,
    messagesData:Array<messagesDataType>
}

export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}

export type addMessageType = {
    addPost: () => void,
    updateNewPostText: (newText:string) => void
}
