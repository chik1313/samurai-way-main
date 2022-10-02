import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";

let reducers = combineReducers({
    dialogsReducer:dialogsReducer,
    profileReducer:profileReducer
});

let store = createStore(reducers)

export default store
