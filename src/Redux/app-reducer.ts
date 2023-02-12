import {ActionTypes} from "../types";
import {Dispatch} from "redux";
import {getAuthUsersData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AllStateType} from "./redux-store";
import {FormAction} from "redux-form";

const INITIALIZED = "SET_INITIALIZED"

const initialState = {
    initialized: false
}
type initialStateType = {initialized: boolean}

export const appReducer = (state: initialStateType = initialState, action: ActionTypes):initialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedAC = () => {
    return  {
        type: INITIALIZED
    }as const
}
export const initializedApp = () => (dispatch:ThunkDispatch<AllStateType, void, ActionTypes | FormAction >) => {
    dispatch(getAuthUsersData())
        .then((reds)=> {
            console.log(reds)
            dispatch(initializedAC())
        })
}
