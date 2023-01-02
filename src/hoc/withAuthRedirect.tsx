import React, {Component, ComponentType} from "react";
import { Navigate } from "react-router-dom";
import {connect} from "react-redux";
import {AllStateType} from "../Redux/redux-store";

type MstpType = {
    isAuth: boolean
}
const mapStateToProps= (state:AllStateType):MstpType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedirect  <T>(Component: ComponentType<T>)  {
    const RedirectComponent = (props:MstpType) => {
        let {isAuth , ...restProps} = props
        if (!isAuth ) return <Navigate to={"/login"}/>
        return <Component {...restProps as T }/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent;
}
