import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAmount, setRequestAmount] = useState<string>("");

    function updateRequestAmount(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestAmount(event.target.value);
    }

    function useAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function gainAttempts() {
        const amount = parseInt(requestAmount);
        if (amount > 0) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>

            <Form.Group controlId="formRequestAmount">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAmount}
                    onChange={updateRequestAmount}
                    placeholder="Enter number of attempts"
                />
            </Form.Group>

            <Button
                onClick={useAttempt}
                disabled={attemptsLeft === 0}
                className="m-1"
            >
                use
            </Button>

            <Button onClick={gainAttempts} className="m-1">
                gain
            </Button>
        </div>
    );
}
