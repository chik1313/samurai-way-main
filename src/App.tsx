import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";


let App:React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={"/Dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/Profile"} render={() => <Profile/>} />
                    <Route path={"/Users"} render={()=> <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
