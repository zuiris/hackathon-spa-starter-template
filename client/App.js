import React from "react";
import {render} from "react-dom";
import {createBrowserHistory} from "history";
import {Router} from "react-router";
import * as RoutesModule from "./Routes.js";

let routes = RoutesModule.routes;

const history = createBrowserHistory();

function renderApp() {
    render(
        <Router history={history} children={routes}/>,
        document.getElementById("app")
    );
}

renderApp();
