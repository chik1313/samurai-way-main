import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"


const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10878218-stock-photo-brown-young-goat-lying-down.jpg",
                followed: true,
                fullName: "Vladich",
                status: "I'm fine",
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 2,
                photoUrl: "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10878218-stock-photo-brown-young-goat-lying-down.jpg",
                followed: true,
                fullName: "Romich",
                status: "I'm front-end developer",
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 3,
                photoUrl: "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10878218-stock-photo-brown-young-goat-lying-down.jpg",
                followed: true,
                fullName: "Vladyslav K",
                status: "I'm fine-five",
                location: {city: "Bakhmut", country: "Ukraine"}
            },
            {
                id: 4,
                photoUrl: "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10878218-stock-photo-brown-young-goat-lying-down.jpg",
                followed: false,
                fullName: "Sanich",
                status: "I'm very fine all time",
                location: {city: "undefined", country: "Ukraine"}
            },
        ])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photoUrl}
                               className={s.userPhoto}/></div>
                    <div>{u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>follow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>unfollow</button>}
                        </div>
                </span>
                <span>
                    <span><div>{u.fullName}</div><div>{u.status}</div></span>
                    <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;
