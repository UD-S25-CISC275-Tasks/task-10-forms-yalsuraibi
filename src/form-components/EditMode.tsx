import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function handleEditModeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <Container className="text-center">
            <h3>Edit Mode</h3>

            <Row className="justify-content-center">
                <Col xs="auto">
                    <Form.Check
                        type="switch"
                        id="edit-mode-switch"
                        label="Edit Mode"
                        checked={isEditMode}
                        onChange={handleEditModeChange}
                    />
                </Col>
            </Row>

            {isEditMode ?
                <div>
                    <Form.Group controlId="formName" className="mt-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>

                    <Row className="justify-content-center mt-3">
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                id="student-check"
                                label="Student"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                        </Col>
                    </Row>
                </div>
            :   <p className="mt-3">
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </Container>
    );
}
