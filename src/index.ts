import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./AppContainer";

// Finally, wrap App with ThirdwebWeb3Provider.
ReactDOM.render(
    React.createElement(AppContainer),
    document.getElementById('root')
);
