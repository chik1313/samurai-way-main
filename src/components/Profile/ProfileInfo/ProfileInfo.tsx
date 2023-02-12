import React from "react";
import s from "./ProfileInfo.module.css"
import {UserResponse} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/image.png"
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profile:UserResponse
    status: any
    updateStatus: (status:any)=> void
}
const ProfileInfo = (props:PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div className={s.DescriptionBlock}>
                {<img src={props.profile.photos.large !== null ?props.profile.photos.large : userPhoto } />}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </>
    )
}

export default ProfileInfo;
