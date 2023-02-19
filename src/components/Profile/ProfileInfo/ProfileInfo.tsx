import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css"
import {UserResponse} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/image.png"
import ProfileStatus from "./ProfileStatus";
import {Button} from "@mui/material";
import ProfileData from "./ProfileData";
import ProfileDataFormReduxForm from "./ProfileDataForm";


type PropsType = {
    profile: UserResponse
    status: any
    updateStatus: (status: any) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile:(profile:UserResponse)=>void
}

const ProfileInfo = (props: PropsType) => {
    const [editMode , setEditMode] = useState(false)

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
    const onSubmit = (formData:UserResponse) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return (
        <>
            <div className={s.DescriptionBlock}>
                <img alt={'userPhoto'} src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}
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
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </>
    )
}

export default ProfileInfo;
