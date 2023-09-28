import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const CustomDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className="my-5">
            <h2
                className="py-5 heading-primary text-center"
                style={{ textTransform: "uppercase" }}
            >
                Request a Custom Design
            </h2>

            <p
                className="my-3 mb-5 fs-5"
                style={{ fontFamily: "Raleway, sans-serif" }}
            >
                Fill out the form below to answer a few questions about the
                design are seeking. This will provide our artists a better
                understanding of what you're looking for. Once you fill out the
                form, we will get in touch within <strong>24 hours</strong>.
                Click below to get started!
            </p>

            <Link
                to="/questionnaire"
                class="btn btn-dark px-4 py-3 mb-5 me-md-2 btn-style rounded-0"
                style={{
                    fontFamily: "Raleway, sans-serif",
                }}
            >
                START QUESTIONNAIRE
            </Link>
        </Container>
    );
};

export default CustomDesign;
