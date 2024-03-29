import Header from "./Header";
import React from "react";
import {getAuthUsersData, logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";

type PropsType = {
    isAuth:boolean,
    login:string | null

    logout : () => void;
}
class HeaderContainer extends React.Component <PropsType> {


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
    }
}

export const mapStateToProps = (state: AllStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});
export default connect (mapStateToProps , { logout})(HeaderContainer)
