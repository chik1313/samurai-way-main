import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


let App:React.FC = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>} />
                        <Route path="/profile/:userId" element={<ProfileContainer/>} />
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>);
}


export default App;
