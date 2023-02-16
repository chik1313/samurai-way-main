import React from 'react';
import {UsersDataType} from "../../types";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";
import {number} from "yup";

type PropsUsersType = {
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    users: Array<UsersDataType>,
    onPageChange: (page: number) => void
    followingInProgress: number []
    followThunkCreator:(userId:number) => void
    unfollowThunkCreator:(userId:number) => void

}

const Users = (props: PropsUsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let totalPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        totalPages.push(i);
    }

    return (
        <div>
            <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} currentPage={props.currentPage} onPageChange={props.onPageChange} portionSize={10}/>
            <div>
            {props.users.map(u =>
                <User key={u.id} user={u} followingInProgress={props.followingInProgress} followThunkCreator={props.followThunkCreator} unfollowThunkCreator={props.unfollowThunkCreator}/>)}
            </div>
        </div>
    )
}

export default Users;
