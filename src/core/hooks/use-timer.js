/* leny/pomanlo
 *
 * /src/core/hooks/use-timer.js - Custom hook: useTimer
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import {useState, useEffect} from "react";
import useInterval from "use-interval";

// eslint-disable-next-line no-empty-function
const noop = () => {};

export const useTimer = (
    initialSeconds,
    initialRunning = false,
    onFinished = noop,
) => {
    const [running, setRunning] = useState(initialRunning);
    const [seconds, setSeconds] = useState(initialSeconds);

    useInterval(() => running && setSeconds(Math.max(0, seconds - 1)), 1000);

    useEffect(() => {
        if (seconds === 0) {
            setRunning(false);
            onFinished();
        }
    }, [seconds, setRunning]);

    return [
        {running, seconds},
        {setRunning, setSeconds},
    ];
};
