import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, StoreType} from "./types";
import {store} from "./Redux/state";


type PropsType = {
    store: StoreType,

}

let App:React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path={"/Dialogs"}

                           render={() => <Dialogs dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData} dispatch={props.store.dispatch.bind(props.store)}  newMessageText={state.messagesPage.newMessageText}/>}/>

                    <Route path={"/Profile"}
                           render={() => <Profile postsData={state.profilePage.postsData}  newPostText={state.profilePage.newPostText} dispatch={props.store.dispatch.bind(props.store)} />} />
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
