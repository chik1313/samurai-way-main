import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My posts/MyPosts";
import myPosts from "./My posts/MyPosts";
import {PostsDataType} from "../../types";

type PropsType = {
    postsData: Array<PostsDataType>
}

let Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
             <MyPosts  postsData={props.postsData}/>
        </div>);
}

export default Profile;


