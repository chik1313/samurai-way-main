import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./types";
import DialogsContainer from "./components/Dialogs/Dialogs-container";


let App:React.FC = (props) => {
   // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path={"/Dialogs"} render={() => <DialogsContainer />}/>

                    <Route path={"/Profile"} render={() => <Profile  />} />
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
