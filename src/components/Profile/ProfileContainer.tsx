import React, {Component} from "react";
import s from './Profile.module.css'
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";
import Profile from "./Profile";
import {getProfileThunkCreator, getStatus, savePhoto, saveProfile, updateStatus} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export interface Contacts {
    facebook: string;
    website?: any;
    vk: string;
    twitter: string;
    instagram: string;
    youtube?: any;
    github: string;
    mainLink?: any;
}

export interface Photos {
    small: string;
    large: string;
}

export type UserResponse = {
    aboutMe: string;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos?: any;
}
type PropsType = {
    setUserProfileAC: (profile: UserResponse) => void
    profile: UserResponse
    params: { userId: number } | undefined
    getProfileThunkCreator: (userId: number) => void
    getStatus: (userId: number) => void
    status: any
    updateStatus: (status: any) => void
    authorizedUserId: number
    history: [string]
    savePhoto: (file:File) => void
    saveProfile:(data:UserResponse)=>void

}

export function withRouter(Children: any) {
    return (props: any) => {
        const params = useParams()
        return <Children {...props} params={params}/>
    }
}


class ProfileContainer extends Component<PropsType> {
    refreshProfile() {
        let userId = this.props.params?.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if (!userId) {
            this.props.history.push("/login")
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatus(userId);
    }


    componentDidMount() {
        this.refreshProfile()
    }

   componentDidUpdate(prevProps: Readonly<PropsType>) {
        if (this.props.params?.userId !== prevProps.params?.userId) {
            this.refreshProfile()
        }
   }


    render() {

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         isOwner={!this.props.params?.userId}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                />
            </div>);
    }
}

let mapStateToProps = (state: AllStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator, getStatus, updateStatus,savePhoto,saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
