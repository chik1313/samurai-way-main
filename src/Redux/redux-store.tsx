import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";

export type AllStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsReducer:dialogsReducer,
    profileReducer:profileReducer
});

let store = createStore(rootReducer)



export default store
