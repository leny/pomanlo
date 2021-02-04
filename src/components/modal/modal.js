/* leny/pomanlo
 *
 * /src/components/modal/modal.js - Modal Component: Modal
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import {createPortal} from "react-dom";
import PropTypes from "prop-types";

import Button from "../tools/button";
import {NBSP} from "../../core/constants";

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

    return createPortal(
        <div style={styles}>
            <div className={"box"}>
                <h4>{"It's over!"}</h4>
                <p>{"Please, take a short break!"}</p>

                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={onClose} />
                    {NBSP}
                    <Button label={"Restart"} onClick={onRestart} />
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
