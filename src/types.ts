export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number,

}
export type UsersDataType = {
    id: number,
    photos: { small: string, large: string }
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
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
    profile: any,
    status: any
}
export type usersPageType = {
    users: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type authPageType = {
    id: number
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
export type messagesPageType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>,

}

export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}
export type StoreType = {
    _state: StateType,
    callSubscriber: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => StateType,
    dispatch: (action: ActionTypes) => void
}

type AddPostType = {
    type: 'ADD-POST',
    newPostText: string

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
    type: "SEND-MESSAGE",
    newMessageBody: string
}
type followType = {
    type: "FOLLOW",
    userID: number
}
type unfollowType = {
    type: "UNFOLLOW",
    userID: number
}
type setusersType = {
    type: "SET_USERS",
    users: any
}
type setCurrentPageType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type setTotalUsersCountType = {
    type: "SET_TOTAL_USERS_COUNT",
    totalCount: number
}
type ToggleIsFetchinType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
type FollowingInProgress = {
    type: "FOLLOWING_IN_PROGRESS",
    isFetching: boolean
    userId: number

}
type setUserProfileType = {
    type: "SET_USER_PROFILE",
    profile: string
}

type setUsersDataType = {
    type: "auth/SET_USER_DATA",
    payload: {
        userId: number,
        email: string,
        login: string
        isAuth: boolean
    }
}
type setStatusType = {
    type: "SET_STATUS",
    status: any
}
type InitializedType = {
    type: "SET_INITIALIZED"
}
type setPhotoType = {
    type: "SAVE_PHOTO",
    file: File
}
export type getCaptchaUrlType = {
    type: "auth/GET-CAPTCHA-URL",
    captchaUrl: string | null
}
export type ActionTypes =
    AddPostType |
    UpdateNewPostTextType |
    UpdateNewMessageTextType |
    SendMessageType |
    followType |
    unfollowType |
    setusersType |
    setCurrentPageType |
    setTotalUsersCountType |
    ToggleIsFetchinType |
    setUserProfileType |
    setUsersDataType |
    FollowingInProgress |
    setStatusType |
    InitializedType |
    setPhotoType |
    getCaptchaUrlType;


export type addMessageType = {
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}
