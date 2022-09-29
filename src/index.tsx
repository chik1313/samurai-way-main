import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Redux/state";
import App from './App';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)
