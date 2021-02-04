/* leny/pomanlo
 *
 * /src/app.js - Main entry point
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import React from "react";
import ReactDOM from "react-dom";

import "bulma";

import Pomodoro from "./containers/pomodoro";

ReactDOM.render(<Pomodoro />, document.querySelector("#app"));
