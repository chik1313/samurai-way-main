import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
          <MyPosts />
        </div>);
}

export default Profile;
