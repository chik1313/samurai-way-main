import {ActionTypes, PostsDataType, profilePageType} from "../types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../components/api/api";
import {UserResponse} from "../components/Profile/ProfileContainer";
import {AllStateType, RootThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO = "SAVE_PHOTO"

let initialState:profilePageType = {
        postsData: [
            {id: 1, message: "Hi,how are you?", likesCount: 14},
            {id: 2, message: "Hello,it's my first post!", likesCount: 15},
            {id: 3, message: "Hey Hey ,it's my new post!", likesCount: 25},
            {id: 4, message: "Holla ,have a nice Day!", likesCount: 35},
        ],

     profile: null,
    status:""
};

const profileReducer = (state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let addPost: PostsDataType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData:[...state.postsData, addPost],
                newPostText: ''
            };
        }
        case "SET_USER_PROFILE": {
            return {...state,profile:action.profile}
        }
        case "SET_STATUS" : {
            return {
                ...state,
                status:action.status
            }
        }
        case "SAVE_PHOTO": {
            return {
                ...state,
            profile:{...state.profile ,photos:action.file}
            }
        }

        default :
            return state;
        }
    }

export const addPostActionCreator = (newPostText:string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfileAC = (profile:UserResponse | string) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatusAC = (status:any) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const savePhotoAC = (file:File) => {
    return {
        type: SAVE_PHOTO,
        file
    }
}
export const getProfileThunkCreator = (userId:number) => {
    return async (dispatch:Dispatch) => {
        let responce = await usersAPI.getProfile(userId)
                dispatch(setUserProfileAC(responce.data))
               }
}

export const getStatus = (userId:number) => {
    return (dispatch:Dispatch) => {
        profileAPI.getStatus(userId)
            .then((res)=>{
                dispatch(setStatusAC(res.data))
            })
    }
}

export const updateStatus = (status:any) => {
    return (dispatch:Dispatch) => {
        profileAPI.updateStatus(status)
            .then((res)=>{
                if (res.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}
export const savePhoto = (file:File) => async (dispatch:Dispatch) => {
    let res = await profileAPI.savePhoto(file)
    try {
        if (res.data.resultCode === 0) {
            dispatch(savePhotoAC(res.data.data.photos))
        }
    }
    finally {

    }
}
export const saveProfile = (profile:UserResponse): RootThunkType  => async (dispatch: ThunkDispatch<AllStateType, void, ActionTypes | FormAction>, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
            dispatch(getProfileThunkCreator(userId))
        } else {

            dispatch(stopSubmit("editProfile", {_error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
        }
}
export default profileReducer;
