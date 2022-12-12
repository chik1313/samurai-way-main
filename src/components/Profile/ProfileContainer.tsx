import React, {Component, ComponentType} from "react";
import s from './Profile.module.css'
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import Profile from "./Profile";
import {getProfileThunkCreator} from "../../Redux/ProfileReducer";
import {Navigate, useParams} from "react-router-dom";


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
    photos: Photos;
}
type PropsType = {
    setUserProfileAC:(profile:UserResponse)=>void
    profile:UserResponse
    params:{userId:number } | undefined
    getProfileThunkCreator:(userId:number) => void
    isAuth:boolean
}

export function withRouter(Children:any){
    return(props:any)=>{
        const params = useParams()
        return <Children {...props}  params={params}/>
    }
}

class ProfileContainer extends Component<PropsType> {
    componentDidMount() {
        let userId = this.props.params?.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileThunkCreator(userId)
        }

    render() {
        if (this.props.isAuth === false) return <Navigate to={"/login"}/>
        return (
            <div className={s.content}>
                <Profile profile={this.props.profile}/>
            </div>);
    }
}

let mapStateToProps = (state: AllStateType) => {
    return {
        profile:state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default compose<ComponentType>(
connect(mapStateToProps , {getProfileThunkCreator})
) (WithUrlDataContainerComponent);
