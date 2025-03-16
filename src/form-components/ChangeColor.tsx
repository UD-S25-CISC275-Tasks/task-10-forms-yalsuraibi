import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [selectedColor, setSelectedColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>

            {/* Radio Buttons for Colors */}
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => {
                        setSelectedColor(color);
                    }}
                    style={{
                        backgroundColor: color,
                        color: color === "black" ? "white" : "black",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                />
            ))}

            {/* Statement with Highlighted Word */}
            <div className="mt-3">
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        color: selectedColor === "black" ? "white" : "black",
                        padding: "2px 6px",
                        borderRadius: "4px",
                    }}
                >
                    {selectedColor}
                </span>
                .
            </div>
        </div>
    );
}
