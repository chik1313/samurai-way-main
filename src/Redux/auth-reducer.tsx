import {ActionTypes, authPageType, UsersDataType, usersPageType} from "../types";
import {Dispatch} from "redux";
import {authAPI} from "../components/api/api";
import {ThunkDispatch} from "redux-thunk";
import {AllStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

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
                ...action.payload,

            }

        default :
            return state;
    }
}

export const setAuthUserDataAC = (userId:string | null, email:string | null, login:string | null, isAuth:boolean) => {
    return {
        type: SET_USER_DATA,
        payload: { userId, email , login , isAuth }
    }
}

export const getAuthUsersData = () => {
    return (dispatch:Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id , email , login } = response.data.data;
                    dispatch(setAuthUserDataAC(id , email , login , true))
                }
            })
    }
}

export const login = (email:string , password:string , rememberMe:boolean) => {
    return (dispatch: ThunkDispatch<AllStateType, void, ActionTypes | FormAction >) => {
        authAPI.login(email, password, rememberMe)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUsersData())
                }
                else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error "
                    dispatch(stopSubmit('login' , {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch:Dispatch) => {
       authAPI.logout()
           .then((res)=>{
               if (res.data.resultCode === 0) {
                   dispatch(setAuthUserDataAC(null, null, null, false))
               }
           })
    }
}


