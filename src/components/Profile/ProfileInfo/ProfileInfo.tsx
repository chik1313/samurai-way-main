import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {UserResponse} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/image.png"
import ProfileStatus from "./ProfileStatus";

import {Button} from "@mui/material";

type PropsType = {
    profile: UserResponse
    status: any
    updateStatus: (status: any) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}
const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (event.target.files.length) {
            // @ts-ignore
            props.savePhoto(event.target.files[0])
        }
    }
    return (
        <>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}
                     className={s.photoSize}/>
                {props.isOwner && <Button
                    variant="outlined"
                    component="label"
                    size="small"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={onMainPhotoSelected}
                    />
                </Button>}
                <div>
                    <div><b>Full name : </b> {props.profile.fullName} </div>
                    <div><b>Looking for a job </b>: {props.profile.lookingForAJob ? 'yes' : 'no'} </div>
                    {props.profile.lookingForAJob &&
                        <div><b>My professional skills : </b>{props.profile.lookingForAJobDescription} </div>
                    }
                    <div><b>About me </b>: {props.profile.aboutMe} </div>
                    <div><b>About me </b>: {props.profile.aboutMe} </div>
                </div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </>
    )
}
type PropsType = {
    contactTitle:string,
    contactValue:string
}
const Contact:React.FC<PropsType> = ({contactTitle , contactValue}) => {
    return {

    }
}
export default ProfileInfo;
