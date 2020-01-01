import React from "react";
import ReactDOM from "react-dom";
import {compose} from "redux";
import App from "./components/App";
import Root from "./Root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store.subscribe(() => console.log("STORE: ", store.getState()));

ReactDOM.render(
    <Root enhancer={composeEnhancers()}>
        <App/>
    </Root>,
    document.getElementById("root")
);
