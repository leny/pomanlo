/* leny/pomanlo
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import classnames from "classnames";

import {useCallback} from "react";
import {useTimer} from "../core/hooks/use-timer";
import {SESSION_DURATION} from "../core/constants";

import Display from "../components/display/display";
import Tools from "../components/tools/tools";

const Pomodoro = () => {
    const [{seconds, running}, {setSeconds, setRunning}] = useTimer(
        SESSION_DURATION,
        false,
    );

    const handleMinus = useCallback(
        () => setSeconds(val => Math.max(val - 60, 0)),
        [setSeconds],
    );
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [
        setSeconds,
    ]);
    const handleStartPause = useCallback(() => setRunning(val => !val), [
        setRunning,
    ]);
    const handlePlus = useCallback(() => setSeconds(val => val + 60), [
        setSeconds,
    ]);

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
