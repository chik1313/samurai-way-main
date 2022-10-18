import {ActionTypes, usersPageType} from "../types";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let initialState:usersPageType = {
        users: [],


}
export type InitialStateType = typeof initialState;
export const usersReducer = (state:InitialStateType=initialState, action:ActionTypes):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false } : u)
            }
        case SET_USERS: {
            return { ...state,users: [...state.users, ...action.users]}
        }
        default :
            return state;
        }
    }

export const followAC = (userID:number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export const unfollowAC = (userID:number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsersAC = (users:usersPageType) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;
