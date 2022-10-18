import {ActionTypes, PostsDataType, profilePageType} from "../types";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState:profilePageType = {
        postsData: [
            {id: 1, message: "Hi,how are you?", likesCount: 14},
            {id: 2, message: "Hello,it's my first post!", likesCount: 15}
        ],
        newPostText: 'it-kamasutra.com'
}

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

export default profileReducer;
