import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAnswer(event.target.value);
    }

    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <Container className="text-center">
            <h3>Multiple Choice Question</h3>

            <Row className="justify-content-center">
                <Col xs={8}>
                    <Form.Group controlId="multipleChoiceSelect">
                        <Form.Label>Select your answer:</Form.Label>
                        <Form.Select
                            value={selectedAnswer}
                            onChange={handleChange}
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <div
                className="mt-3"
                style={{ fontSize: "2rem", color: isCorrect ? "green" : "red" }}
            >
                {isCorrect ? "✔️" : "❌"}
            </div>
        </Container>
    );
}
