import {ActionTypes, PostsDataType, profilePageType} from "../types";
import {Contacts, Photos} from "../components/Profile/ProfileContainer";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"


let initialState:profilePageType = {
        postsData: [
            {id: 1, message: "Hi,how are you?", likesCount: 14},
            {id: 2, message: "Hello,it's my first post!", likesCount: 15}
        ],
        newPostText: 'it-kamasutra.com',
     profile: null
};

const profileReducer = (state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let addPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData:[...state.postsData, addPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {...state,
            newPostText: action.newText
            };
        }
        case "SET_USER_PROFILE": {
            return {...state,profile:action.profile}
        }
        default :
            return state;
        }
    }

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfileAC = (profile:string) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default profileReducer;
