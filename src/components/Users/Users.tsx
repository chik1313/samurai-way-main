import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/image.png";
import {UsersDataType} from "../../types";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../api/api";

type PropsUsersType = {
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    users: Array<UsersDataType>,
    onPageChange: (page: number) => void
    toggleFollowingInProgressAC:(isFetching:boolean , userId: number)=> void
    followingInProgress: number []

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
                    <div>{u.followed ?
                        <button
                            disabled={props.followingInProgress.some(id=>id===u.id)}
                            onClick={() => {
                                props.toggleFollowingInProgressAC(false , u.id)
                                usersAPI.unfollow(u.id)
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingInProgressAC(false , u.id)
                                    })

                            }}>unfollow</button>
                        :<button
                            disabled={props.followingInProgress.some(id=>id===u.id)}
                            onClick={() => {props.toggleFollowingInProgressAC(true , u.id)
                                usersAPI.follow(u.id)
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingInProgressAC(false , u.id)
                                    })


                            }}>follow</button>

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
