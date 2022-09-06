import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./types";


let state:StateType = {
   postsData: [
    {id: 1, message: "Hi,how are you?", likesCount: 14},
    {id: 2, message: "Hello,it's my first post!", likesCount: 15}
],
dialogsData: [
    {id:1, name: "Vladich"},
    {id:2, name: "Natali"},
    {id:3, name: "Alex"},
    {id:4, name: "Alex"},
    {id:5, name: "KaLkalych"}
],
 messagesData: [
    {id:1, message: "Hey"},
    {id:2, message: "How are you"},
    {id:3, message: "Kal kalych"},
    {id:4, message: "How are you"}
] }


ReactDOM.render(
    <App state={state} />,
  document.getElementById('root')
);
