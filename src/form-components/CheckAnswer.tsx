import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswerInput">
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={handleChange}
                    placeholder="Enter your answer"
                />
            </Form.Group>
            <div className="mt-3">{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
