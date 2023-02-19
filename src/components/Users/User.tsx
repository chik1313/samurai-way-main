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
        <div className={style.container}>
            <div className={style.userBlock}>
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
                </div>
                <div className={style.userDescription}>
                    <div  className={style.fontStyles}>
                    <div className={style.userName}>{props.user.name}</div><div>{props.user.status}</div>
                    <div>
                        <div className={style.fontPosition}>{"props.user.location.country"}</div>
                        <div className={style.fontPosition}>{"props.user.location.city"}</div>
                    </div>
                    </div>
                    <div className={style.status}>Here will be your status speech: user.status</div>
                </div>
            </div>
    )
}

export default User;
