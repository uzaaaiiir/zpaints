import React from "react";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Container } from "react-bootstrap";

const MultiStepProgressBar = ({ page }) => {
    var stepPercentage = 0;
    if (page === "pageone") {
        stepPercentage = 16;
    } else if (page === "pagetwo") {
        stepPercentage = 49.5;
    } else if (page === "pagethree") {
        stepPercentage = 82.5;
    } else if (page === "pagefour") {
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }

    return (
        <Container className="my-5">
            <ProgressBar percent={stepPercentage}>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${
                                accomplished ? "accomplished" : null
                            }`}
                        >
                            {index + 1}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${
                                accomplished ? "accomplished" : null
                            }`}
                        >
                            {index + 1}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${
                                accomplished ? "accomplished" : null
                            }`}
                        >
                            {index + 1}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${
                                accomplished ? "accomplished" : null
                            }`}
                        >
                            {index + 1}
                        </div>
                    )}
                </Step>
            </ProgressBar>
        </Container>
    );
};

export default MultiStepProgressBar;
