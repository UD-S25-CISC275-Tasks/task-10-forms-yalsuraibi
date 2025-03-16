import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    function switchType(): void {
        if (question === "multiple_choice_question") {
            setQuestionType("short_answer_question");
        } else {
            setQuestionType("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={switchType}> Change Type </Button>
            {
                <div>
                    {question === "multiple_choice_question" ?
                        "Multiple Choice"
                    :   "Short Answer"}
                </div>
            }
        </span>
    );
}
