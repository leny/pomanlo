/* leny/pomanlo
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import classnames from "classnames";

import {useCallback, useState} from "react";
import {useTimer} from "../core/hooks/use-timer";
import {SESSION_DURATION} from "../core/constants";

import Display from "../components/display/display";
import Tools from "../components/tools/tools";
import Modal from "../components/modal/modal";

const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);
    const [
        {seconds, running},
        {setSeconds, setRunning},
    ] = useTimer(SESSION_DURATION, false, () => setShowModal(true));

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

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setShowModal, handleReset]);

    const handleRestart = useCallback(() => {
        handleCloseModal();
        handleStartPause();
    }, [handleCloseModal, handleStartPause]);

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
            {showModal && (
                <Modal onClose={handleCloseModal} onRestart={handleRestart} />
            )}
        </div>
    );
};

export default Pomodoro;
