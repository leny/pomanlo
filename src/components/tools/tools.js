/* leny/pomanlo
 *
 * /src/components/tools/tools.js - Tools Component: Tools Bar
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import PropTypes from "prop-types";

import {NBSP} from "../../core/constants";

import Button from "./button";

const Tools = ({running = false, onMinus, onReset, onStartPause, onPlus}) => (
    <div className={"is-flex"}>
        <Button
            label={"-"}
            title={"Remove one minute"}
            disabled={running}
            onClick={onMinus}
        />
        {NBSP}
        <Button label={"reset"} disabled={running} onClick={onReset} />
        {NBSP}
        <Button
            label={running ? "pause" : "start"}
            title={`${running ? "Pause" : "Start"} the timer`}
            onClick={onStartPause}
        />
        {NBSP}
        <Button
            label={"+"}
            title={"Add one minute"}
            disabled={running}
            onClick={onPlus}
        />
    </div>
);

Tools.propTypes = {
    running: PropTypes.bool,
    onMinus: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onStartPause: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
};

export default Tools;
