import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

export type AllStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});

// let store = legacy_createStore(rootReducer , applyMiddleware(thunkMiddleware))

const composeEnhancers =
    //@ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        //@ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);



// @ts-ignore
window.store = store

export default store
