import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./types";

import DialogsContainer from "./components/Dialogs/Dialogs-container";


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

                           render={() => <DialogsContainer state={props.store} dispatch={props.store.dispatch.bind(props.store)}/>}/>

                    <Route path={"/Profile"}
                           render={() => <Profile store={props.store} postsData={state.profilePage.postsData}  newPostText={state.profilePage.newPostText} dispatch={props.store.dispatch.bind(props.store)} />} />
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
