import React from 'react';
import userPhoto from "../../assets/images/image.png";
import s from "./Users.module.css";
import axios from "axios";
import {UsersDataType} from "../../types";

type PropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: any) => void,
    users: Array<UsersDataType>,
}

class Users extends React.Component<PropsType> {
     componentDidMount() {
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
             this.props.setUsers(responce.data.items)
         })}
    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photos.small != null ? u.photos.small : userPhoto }
                               className={s.userPhoto} alt=''/></div>
                    <div>{u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>follow</button> : <button onClick={() => {
                        this.props.follow(u.id)
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
    }
}

export default Users;
