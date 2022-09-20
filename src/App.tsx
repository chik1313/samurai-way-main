import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./types";
import {addPost, updateNewPostText} from "./state";

type PropsType = {
    state: StateType
}

let App:React.FC<PropsType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={"/Dialogs"} render={() => <Dialogs dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData}/>}/>
                    <Route path={"/Profile"} render={() => <Profile postsData={state.profilePage.postsData} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>} />
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
