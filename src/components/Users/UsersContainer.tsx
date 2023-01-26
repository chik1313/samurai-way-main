import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {AllStateType} from "../../Redux/redux-store";
import {
    followAC,
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingInProgressAC,
    unfollowAC,
    unfollowThunkCreator
} from "../../Redux/UsersReducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

type DispatchPropsType = {
    followAC: (userID: number) => void,
    unfollowAC: (userID: number) => void,
    setCurrentPageAC: (currentPage: number) => void,
    getUsersThunkCreator:(currentPage:number , pageSize:number) => void
    followThunkCreator:(userId:number) => void
    unfollowThunkCreator:(userId:number) => void

}
export type MapStateToPropsType = ReturnType<typeof mapStateToPropsType>
export type UsersPropsType = DispatchPropsType & MapStateToPropsType


const mapStateToPropsType = (state: AllStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose<ComponentType>(
    connect(mapStateToPropsType, {
        followAC,
        unfollowAC,
        setCurrentPageAC,
        toggleFollowingInProgressAC,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    }))(UsersAPIComponent)
