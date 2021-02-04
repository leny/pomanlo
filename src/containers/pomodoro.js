/* leny/pomanlo
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import classnames from "classnames";

import {useTimer} from "../core/hooks/use-timer";
import {SESSION_DURATION} from "../core/constants";

import Display from "../components/display/display";
import Tools from "../components/tools/tools";

const Pomodoro = () => {
    const [{seconds, running}, {setRunning}] = useTimer(
        SESSION_DURATION,
        false,
    );

    const handleMinus = () => console.log("Remove one minute");
    const handleReset = () => console.log("Reset");
    const handleStartPause = () => setRunning(!running);
    const handlePlus = () => console.log("Add one minute");

    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("column", "is-half")}>
                <Display seconds={seconds} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onStartPause={handleStartPause}
                    onPlus={handlePlus}
                />
            </div>
        </div>
    );
};

export default Pomodoro;
