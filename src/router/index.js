import React, { Component, Fragment } from "react";
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
const routersContext = require.context('@/pages', true, /router\.js$/);
const routersArray = routersContext.keys().map(key => routersContext(key).default);
export default class RenderRoute extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    {renderRoutes(routersArray)}
                </Fragment>
            </Router>
        )
    }
}