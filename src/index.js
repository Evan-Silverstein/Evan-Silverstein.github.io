import babel from "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { BrowserRouter } from 'react-router-dom';
import styles from "Src/assets/sass/global.scss";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById("root"));