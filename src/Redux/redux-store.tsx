import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";

export type AllStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
});

let store = createStore(rootReducer)



export default store
