import React from 'react';
import {UserResponse} from "../ProfileContainer";
import {Input} from "../../common/FormsControlls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";


const ProfileDataForm:React.FC<InjectedFormProps<UserResponse>>  = ({handleSubmit,initialValues,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <button>save</button>

            <div>
                <b>Full name : </b>
                <Field placeholder={"Full name"} name={"fullName"} validate={[]} component={Input}/>
            </div>
            <div>
                <b>Looking for a job </b>:
                <Field placeholder={""} name={"lookingForAJob"} validate={[]} component={Input} type={'checkbox'}/>
            </div>
                <div>
                    <b>My professional skills : </b>
                    <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"} validate={[]} component={Input}/>
                </div>
            <div>
                <b>About me </b>:
                <Field placeholder={"aboutMe"} name={"aboutMe"} validate={[]} component={Input} />
            </div>
            <div>
                <b>Contacts </b>: {initialValues.contacts && Object.entries(initialValues.contacts).map(elements => {

                    let keys = elements[0];
                // let value = elements[1];
                return <div className={s.contacts}>
                    <b>{keys}:<Field placeholder={keys} name={"contacts."+keys} validate={[]} component={Input}/></b>
                </div>
            })}
            </div>

            {error && <div>{error}</div>}
        </form>
    );
};
const ProfileDataFormReduxForm = reduxForm<UserResponse>({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
