import React, {Component, ComponentType, ReactNode} from "react";
import s from './Profile.module.css'
import axios from "axios";
import {connect} from "react-redux";
import {AllStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import Profile from "./Profile";
import {setUserProfileAC} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";


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
        axios.get<UserResponse>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(responce => {
                this.props.setUserProfileAC(responce.data)
            })
        }

    render() {
        return (
            <div className={s.content}>
                <Profile profile={this.props.profile}/>
            </div>);
    }
}

let mapStateToProps = (state: AllStateType) => {
    return {
        profile:state.profilePage.profile
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default compose<ComponentType>(
connect(mapStateToProps , {setUserProfileAC})
) (WithUrlDataContainerComponent);
