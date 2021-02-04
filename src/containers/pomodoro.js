/* leny/pomanlo
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import classnames from "classnames";

import Display from "../components/display/display";

const seconds = 300;

const Pomodoro = () => (
    <div className={classnames("columns", "is-mobile", "is-centered")}>
        <div className={classnames("column", "is-half")}>
            <Display seconds={seconds} />
        </div>
    </div>
);

export default Pomodoro;
