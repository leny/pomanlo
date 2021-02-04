/* leny/pomanlo
 *
 * /src/components/modal/modal.js - Modal Component: Modal
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import {useCallback} from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

import {NBSP, BREAK_DURATION} from "../../core/constants";
import {useTimer} from "../../core/hooks/use-timer";

import Button from "../tools/button";
import Display from "../display/display";

const styles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    const [{running, seconds}, {setRunning}] = useTimer(
        BREAK_DURATION,
        true,
        onRestart,
    );

    const stopThen = useCallback(
        next => () => {
            setRunning(false);
            next();
        },
        [setRunning],
    );

    return createPortal(
        <div style={styles}>
            <div className={"box"}>
                <h4>{"It's over!"}</h4>
                <p>{"Please, take a short break!"}</p>
                <Display seconds={seconds} running={running} />
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={stopThen(onClose)} />
                    {NBSP}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;
