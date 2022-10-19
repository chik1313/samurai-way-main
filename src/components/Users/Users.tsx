import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/image.png"


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            props.setUsers(responce.data.items)

        });
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photos.small != null ? u.photos.small : userPhoto }
                               className={s.userPhoto}/></div>
                    <div>{u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>follow</button> : <button onClick={() => {
                        props.follow(u.id)
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


