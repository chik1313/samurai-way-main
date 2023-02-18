import React from 'react';
import {UsersDataType} from "../../types";
import { Pagination } from 'antd';
import User from "./User";


type PropsUsersType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    users: Array<UsersDataType>,
    onPageChange: (page: number) => void
    followingInProgress: number []
    followThunkCreator:(userId:number) => void
    unfollowThunkCreator:(userId:number) => void

}

const Users = (props: PropsUsersType) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let totalPages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     totalPages.push(i);
    // }

    return (
        <div>
            <Pagination showSizeChanger={false} defaultCurrent={props.currentPage} total={props.totalUsersCount} onChange={props.onPageChange}/>
            <div>
            {props.users.map(u =>
                <User key={u.id} user={u} followingInProgress={props.followingInProgress} followThunkCreator={props.followThunkCreator} unfollowThunkCreator={props.unfollowThunkCreator}/>)}
            </div>
        </div>
    )
}

export default Users;
