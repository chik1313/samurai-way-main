import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state, subscribe} from "./state";
import App from './App';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree)
