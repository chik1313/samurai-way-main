import axios from "axios";
import {UserResponse} from "../Profile/ProfileContainer";
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d45af3fe-3be5-4464-9868-74aefd92e6fe"
    }
})

export const usersAPI = {
    getUsers:(currentPage: number, pageSize: number) => {
        return (
            instance.get(
                `users?page=${currentPage}&count=${pageSize} `,
                {
                    withCredentials: true

                })
                .then(response => {
                    return response.data;
                })
        )
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:number) {
        console.warn("Obsolete method . P `` ")
        return profileAPI.getProfile(userId)
    }

}
export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email:string , password:string , rememberMe = false) {
        return instance.post(`auth/login` , {email , password , rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId:number) {
        return instance.get(`profile/` + userId )
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:any) {
return instance.put(`profile/status` , {status:status})
    }
}


