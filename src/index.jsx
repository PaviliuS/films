import './index.less'
import React from 'react'
import { render } from 'react-dom'
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux";
import { HashRouter } from 'react-router-dom';

render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root")
)