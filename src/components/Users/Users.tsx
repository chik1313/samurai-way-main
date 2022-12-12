import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/image.png";
import {UsersDataType} from "../../types";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../api/api";
import {followThunkCreator} from "../../Redux/UsersReducer";

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
    console.log(props.followingInProgress)
    return (
        <div>
            <div>
                {totalPages.map(page => {
                    return (
                        <span className={props.currentPage === page ? style.selectedPage : ""}
                              onClick=
                                  {(e) => {
                                      props.onPageChange(page)
                                  }}> {page} </span>
                    )
                })}

            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={style.userPhoto} alt=''/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                        ?
                        <button
                            disabled={props.followingInProgress.some(id=>id===u.id)}
                            onClick={() => {props.unfollowThunkCreator(u.id)}}
                        >
                            UNFOLLOW
                        </button>
                        :
                        <button
                            disabled={props.followingInProgress.some(id=>id===u.id)}
                            onClick={() => {props.followThunkCreator(u.id)}}
                        >
                            FOLLOW
                        </button>

                    }
                        </div>
                </span>
                <span>
                    <span><div>{u.name}</div><div>{u.status}</div></span>
                    <span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;
