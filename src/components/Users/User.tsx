import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/image.png";
import {UsersDataType} from "../../types";
import {NavLink} from 'react-router-dom';
import {Button} from "@mui/material";

type PropsUsersType = {
    user: UsersDataType,
    followingInProgress: number []
    followThunkCreator:(userId:number) => void
    unfollowThunkCreator:(userId:number) => void

}

const User = (props: PropsUsersType) => {
    return (
        <div>
            <span>
                    <div>
                        <NavLink to={'/Profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={style.userPhoto} alt=''/>
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                        ?
                        <Button variant='outlined' size='small'
                            disabled={props.followingInProgress.some(id=>id===props.user.id)}
                            onClick={() => {props.unfollowThunkCreator(props.user.id)}}
                        >
                            UNFOLLOW
                        </Button>
                        :
                        <Button variant='outlined' size='small'
                            disabled={props.followingInProgress.some(id=>id===props.user.id)}
                            onClick={() => {props.followThunkCreator(props.user.id)}}
                        >
                            FOLLOW
                        </Button>

                    }
                        </div>
                </span>
                <span>
                    <span><div>{props.user.name}</div><div>{props.user.status}</div></span>
                    <span><div>{"props.user.location.country"}</div><div>{"props.user.location.city"}</div></span>
                </span>
            </div>
    )
}

export default User;
