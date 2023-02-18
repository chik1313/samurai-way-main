import React from 'react';
import {UserResponse} from "../ProfileContainer";
import {EditTwoTone} from "@ant-design/icons";
import {Contact} from "./Contact";
import {Input} from "../../common/FormsControlls/FormsControls";
import {Field, reduxForm} from "redux-form";

type PropsType = {
    profile: UserResponse
}

const ProfileDataForm  = (props:PropsType) => {
    return (
        <form>
                <EditTwoTone onClick={()=>{}}  style={{marginLeft:"10px"}}
                />
            <div><b>Full name : </b> <Field placeholder={"Full name"} name={"fullName"} validate={[]} component={Input}/> </div>
            <div><b>Looking for a job </b>: {props.profile.lookingForAJob ? 'yes' : 'no'} </div>
            {props.profile.lookingForAJob &&
                <div><b>My professional skills : </b>{props.profile.lookingForAJobDescription} </div>
            }
            <div><b>About me </b>: {props.profile.aboutMe} </div>
            <div><b>Contacts </b>: {Object.entries(props.profile.contacts).map(elements => {
                let keys = elements[0];
                let value = elements[1];
                return <Contact key={keys} contactTitle={keys} contactValue={value}/>
            })} </div>
        </form>
    );
};
// const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
//
// export default ProfileDataFormReduxForm;
