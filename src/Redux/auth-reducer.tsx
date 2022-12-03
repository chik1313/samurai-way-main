import {ActionTypes, authPageType, UsersDataType, usersPageType} from "../types";

const SET_USER_DATA = "SET_USER_DATA"
const UNFOLLOW = "UNFOLLOW"


let initialState: authPageType = {
    id: null,
    email: null,
    login: null,
    isAuth:false


}
export type InitialStateType = typeof initialState;
export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default :
            return state;
    }
}

export const setAuthUserDataAC = (userId:string, email:string, login:string) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email , login }
    }
}

