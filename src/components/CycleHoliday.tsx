import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Celebrations = "🎄" | "🥚🐇" | "🎃" | "🦃" | "🎆";

export function CycleHoliday(): React.JSX.Element {
    const [currentCelebration, setCelebration] = useState<Celebrations>("🎄");

    function cycleAlphabetically(): void {
        let celebration: string = currentCelebration;
        if (celebration === "🎄") {
            setCelebration("🥚🐇");
        } else if (celebration === "🥚🐇") {
            setCelebration("🎆");
        } else if (celebration === "🎆") {
            setCelebration("🎃");
        } else if (celebration === "🎃") {
            setCelebration("🦃");
        } else {
            setCelebration("🎄");
        }
    }

    function cycleByDate(): void {
        let celebration: string = currentCelebration;
        if (celebration === "🎄") {
            setCelebration("🥚🐇");
        } else if (celebration === "🥚🐇") {
            setCelebration("🎆");
        } else if (celebration === "🎆") {
            setCelebration("🎃");
        } else if (celebration === "🎃") {
            setCelebration("🦃");
        } else {
            setCelebration("🎄");
        }
    }

    return (
        <div>
            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>
            Holiday: {currentCelebration}
            <Button onClick={cycleByDate}>Advance by Year</Button>
        </div>
    );
}
