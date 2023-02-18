import {ActionTypes, UsersDataType, usersPageType} from "../types";
import {usersAPI} from "../components/api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"


let initialState: usersPageType = {
    users: [],
    pageSize:  10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

export type InitialStateType = typeof initialState;
export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "FOLLOWING_IN_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state;
    }
}

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsersAC = (users: Array<UsersDataType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingInProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsersThunkCreator = (currentPage:number , pageSize:number) => {
   return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage , pageSize).then(data => {
            dispatch(setCurrentPageAC(currentPage));
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        });
    }
}
export const followThunkCreator = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowingInProgressAC(false, userId))
            })
    }
}
export const unfollowThunkCreator = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgressAC(false, userId))
        usersAPI.unfollow(userId)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowingInProgressAC(false, userId))
            })
    }
}
export default usersReducer;
