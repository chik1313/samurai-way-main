import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/image.png";
import {UsersDataType} from "../../types";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type PropsUsersType = {
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    users: Array<UsersDataType>,
    onPageChange: (page: number) => void

}

const Users = (props: PropsUsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let totalPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        totalPages.push(i);
    }
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
                    <div>{u.followed ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "d45af3fe-3be5-4464-9868-74aefd92e6fe"
                            }
                        })
                            .then(responce => {
                                if (responce.data.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                            })


                    }}>follow</button> : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                            headers: {
                                "API-KEY": "d45af3fe-3be5-4464-9868-74aefd92e6fe"
                            }
                        })
                            .then(responce => {
                                if (responce.data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                            })

                    }}>unfollow</button>}

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
