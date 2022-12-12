import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {AllStateType} from "../../Redux/redux-store";
import {
    followAC,
    getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingInProgressAC,
    unfollowAC
} from "../../Redux/UsersReducer";
import {UsersDataType} from "../../types";
import {compose} from "redux";

type DispatchPropsType = {
    followAC: (userID: number) => void,
    unfollowAC: (userID: number) => void,
    setCurrentPageAC: (currentPage: number) => void,
    toggleFollowingInProgressAC: (isFetching: boolean, userId: number) => void,
    getUsersThunkCreator:(currentPage:number , pageSize:number) => void

}
export type MapStateToPropsType = ReturnType<typeof mapStateToPropsType>
export type UsersPropsType = DispatchPropsType & MapStateToPropsType


const mapStateToPropsType = (state: AllStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

export default compose<ComponentType>(
    connect(mapStateToPropsType, {
        followAC,
        unfollowAC,
        setCurrentPageAC,
        toggleFollowingInProgressAC,
        getUsersThunkCreator
    }))(UsersAPIComponent)
