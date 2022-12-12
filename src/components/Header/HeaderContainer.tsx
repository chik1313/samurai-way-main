import Header from "./Header";
import React from "react";
import {getAuthUsersData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";

type PropsType = {
    isAuth:boolean,
    login:string | null
    getAuthUsersData: () => void
}
class HeaderContainer extends React.Component <PropsType> {
    componentDidMount() {
        this.props.getAuthUsersData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

export const mapStateToProps = (state: AllStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});
export default connect (mapStateToProps , {getAuthUsersData})(HeaderContainer)
