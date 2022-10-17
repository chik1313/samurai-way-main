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
            let copyState = {...state};
            copyState.postsData = [...state.postsData];
            copyState.postsData.push(addPost)
            copyState.newPostText = "";
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            copyState.newPostText = action.newText;
            return copyState
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
