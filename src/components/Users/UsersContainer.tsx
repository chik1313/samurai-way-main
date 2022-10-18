import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AllStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/UsersReducer";

export type DispatchPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: any) => void
}
export type MapStateToPropsType = ReturnType<typeof mapStateToPropsType>
export type UsersPropsType = DispatchPropsType & MapStateToPropsType


const mapStateToPropsType = (state: AllStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch):DispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }

}

const UsersContainer = connect(mapStateToPropsType, mapDispatchToProps)(Users)


export default UsersContainer;
