export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type messagesDataType = {
    id: number,
    message: string
}

export type dialogsDataType = {
    id: number,
    name: string
}
export type StateType = {
    dialogsData:Array<dialogsDataType>,
    messagesData:Array<messagesDataType>
    postsData: Array<PostsDataType>

}
