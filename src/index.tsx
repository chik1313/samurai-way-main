import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Redux/state";
import App from './App';
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)
