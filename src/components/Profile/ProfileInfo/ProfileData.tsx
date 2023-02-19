import React from 'react';
import {UserResponse} from "../ProfileContainer";
import {Contact} from "./Contact";
import {EditTwoTone} from "@ant-design/icons";


type PropsType = {
    profile: UserResponse
    isOwner: boolean
    goToEditMode: ()=> void
}

const ProfileData = (props:PropsType) => {
    return (
        <div>
            {props.isOwner &&  <div>
                <EditTwoTone onClick={props.goToEditMode}  style={{marginLeft:"10px"}}
                />
            </div>}
            <div><b>Full name : </b> {props.profile.fullName} </div>
            <div><b>Looking for a job </b>: {props.profile.lookingForAJob ? 'yes' : 'no'} </div>

                <div><b>My professional skills : </b>{props.profile.lookingForAJobDescription} </div>

            <div><b>About me </b>: {props.profile.aboutMe} </div>
            <div><b>Contacts </b>: {Object.entries(props.profile.contacts).map(elements => {
                let keys = elements[0];
                let value = elements[1];
                return <Contact key={keys} contactTitle={keys} contactValue={value}/>
            })} </div>
        </div>
    );
};

export default ProfileData;
