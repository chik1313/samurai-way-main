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
        return instance.get<UserResponse>(`profile/` + userId)
    }

}
export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}

