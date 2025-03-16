import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttemptsNumber] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const [progressVaue, setprogressLive] = useState<string>("Not In Progress");
    function attemptDown(): void {
        setAttemptsNumber(attempts - 1);
        setProgress(true);
        setprogressLive("In Progress");
    }

    function attemptUp(): void {
        setAttemptsNumber(attempts + 1);
    }
    function stopQuiz(): void {
        setProgress(false);
        setprogressLive("Not In Progress");
    }
    return (
        <div>
            <div>
                current Attempts: {attempts}, Current Progress: {progressVaue}
            </div>
            <div>
                {" "}
                <Button
                    onClick={attemptDown}
                    disabled={progress || attempts === 0}
                >
                    {" "}
                    Start Quiz{" "}
                </Button>
                <Button onClick={attemptUp} disabled={progress}>
                    {" "}
                    Mulligan{" "}
                </Button>
                <Button onClick={stopQuiz} disabled={!progress}>
                    {" "}
                    Stop Quiz{" "}
                </Button>
            </div>
            <div></div>
        </div>
    );
}
