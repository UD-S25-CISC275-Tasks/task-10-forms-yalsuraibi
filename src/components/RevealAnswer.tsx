import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);

    function revealA(): void {
        setReveal(!reveal);
    }
    return (
        <span>
            <Button onClick={revealA}> Reveal Answer </Button>
            {reveal && <div>42</div>}
        </span>
    );
}
