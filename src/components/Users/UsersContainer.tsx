import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {AllStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../Redux/UsersReducer";
import {UsersDataType} from "../../types";
import {compose} from "redux";

type DispatchPropsType = {
    followAC: (userID: number) => void,
    unfollowAC: (userID: number) => void,
    setUsersAC: (users: Array<UsersDataType>) => void,
    setCurrentPageAC: (currentPage: number) => void,
    setTotalUsersCountAC: (totalCount:number) => void,
    toggleIsFetchingAC:(isFetching:boolean) => void
}
export type MapStateToPropsType = ReturnType<typeof mapStateToPropsType>
export type UsersPropsType = DispatchPropsType & MapStateToPropsType


const mapStateToPropsType = (state: AllStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default compose<ComponentType>(
    connect(mapStateToPropsType,{
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
    })) (UsersAPIComponent)
