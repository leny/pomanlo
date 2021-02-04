/* leny/pomanlo
 *
 * /src/components/tools/button.js - Tools Component: Button
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        className={classnames(
            "button",
            "is-primary",
            "is-medium",
            "is-fullwidth",
        )}
        disabled={disabled}
        type={"button"}
        title={title || label}
        onClick={onClick}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Button;
