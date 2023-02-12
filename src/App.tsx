import React from 'react';
import './App.css';
import Nav from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/app-reducer";
import {AllStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type PropsType = {
    getAuthUsersData: () => void,
    initialized: boolean,
    initializedApp:()=>void

}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>);
    }
}


const mapStateToProps = (state: AllStateType) => ({
    initialized: state.app.initialized
})
export default compose (withRouter,connect (mapStateToProps , {initializedApp}))(App)
