import React from 'react';
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {UsersPropsType} from "./UsersContainer";

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
            .then(responce => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(responce.data.items)
                this.props.setTotalUsersCountAC(responce.data.totalCount)
            })

    }

    onPageChange = (p: number) => {
        this.props.setCurrentPageAC(p)
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize} `).then(responce => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(responce.data.items)
        })

    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onPageChange={this.onPageChange} users={this.props.users} currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       follow={this.props.followAC} unfollow={this.props.unfollowAC}/>
            </>
        );
    }
}





export default UsersAPIComponent;
