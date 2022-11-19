import {combineReducers, createStore, legacy_createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";

export type AllStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
});

let store = legacy_createStore(rootReducer)



export default store
