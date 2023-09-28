import Container from "react-bootstrap/Container";
import Mediums from "../HomepageBody/Mediums";
import { useEffect } from "react";

const FAQs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className="">
            <h1 class="align-self-center text-center px-5 py-5 mb-4 heading-primary">
                HELP CENTER
            </h1>
            <ShippingPolicies />
            <Mediums />
        </Container>
    );
};

const ShippingPolicies = () => {
    return (
        <div class="policies mb-5 pb-4">
            <div className="mb-4">
                <p class="mb-0 heading-tertiary text-start">POLICIES</p>
                <h2 class="pb-2 heading-secondary text-start">
                    SHIPPING POLICIES
                </h2>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                            class="accordion-button heading-tertiary"
                            style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            RETURN POLICY
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body text-start">
                            We accept returns within <strong>7 days</strong> of
                            receiving the painting. Please let us know the
                            reason for the return so we can improve our service
                            in the future.
                            <p className="mt-3">
                                To return, email us and we'll send you a return
                                slip. Please retain the original packaging and
                                drop the painting off at your nearest shipping
                                depot.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button
                            class="accordion-button collapsed heading-tertiary"
                            style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            CANCELLATION POLICY
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body text-start">
                            <p>
                                You can cancel any orders within{" "}
                                <strong>24 hours</strong> of placing your order.
                                We ship our orders within the first 24 hours, as
                                such nothing can be done after 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
