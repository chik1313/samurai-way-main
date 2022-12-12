import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import {authReducer} from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"

export type AllStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth: authReducer

});

let store = legacy_createStore(rootReducer , applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store

export default store
