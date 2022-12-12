import React from 'react';
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {UsersPropsType} from "./UsersContainer";



class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage , this.props.pageSize)
    }
    onPageChange = (p: number) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize)
        }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingInProgressAC={this.props.toggleFollowingInProgressAC}
                    onPageChange={this.onPageChange} users={this.props.users}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    follow={this.props.followAC}
                    unfollow={this.props.unfollowAC}/>
            </>
        );
    }
}





export default UsersAPIComponent;
