import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPosts-container";
import {UserResponse} from "./ProfileContainer";

type PropsType = {
   profile:UserResponse
}

let Profile = (props:PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
             <MyPostsContainer />
        </div>);
}

export default Profile;


