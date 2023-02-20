import {ActionTypes, authPageType, getCaptchaUrlType} from "../types";
import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../components/api/api";
import {ThunkDispatch} from "redux-thunk";
import {AllStateType, RootThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL"


let initialState: authPageType = {
    id: 26367,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null


}
export type InitialStateType = typeof initialState;
export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.payload.userId,
                ...action.payload,

            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl:action.captchaUrl
            }

        default :
            return state;
    }
}
export const getCaptchaUrlSuccess = (captchaUrl: string):getCaptchaUrlType => {
    return {
        type: GET_CAPTCHA_URL,
        captchaUrl
    }
}
export const setAuthUserDataAC = (userId: number, email: string | null, login: string | null, isAuth: boolean ) => {

    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

export const getAuthUsersData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha:string) => async (dispatch: ThunkDispatch<AllStateType, void, ActionTypes | FormAction>) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUsersData())
    } else if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
    else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error "
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, null, null, false))
    }
}

export const getCaptchaUrl = (): RootThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
