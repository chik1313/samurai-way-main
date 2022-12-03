import Header from "./Header";
import React from "react";
import axios from "axios";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";

type PropsType = {
    setAuthUserDataAC:(id:string , email:string , login:string)=> void,
    isAuth:boolean,
    login:string | null
}
class HeaderContainer extends React.Component <PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id , email , login } = response.data.data;
                    this.props.setAuthUserDataAC(id , email , login);
                }

            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

export const mapStateToProps = (state: AllStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});
export default connect (mapStateToProps , {setAuthUserDataAC})(HeaderContainer)
