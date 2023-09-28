import { Container, Button, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ onButtonClick, onBackClick, handleFormData, data }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className="pb-3 mb-5 heading-tertiary">
            <h2
                className="pt-3 pb-4 text-center font-weight-bold"
                style={{ fontFamily: "Playfair Display, sans-serif" }}
            >
                Confirmation Details
            </h2>
            <Container className="my-3 py-3">
                <Container className="d-flex gap-5">
                    <Col className="text-end">
                        <p>Name:</p>
                    </Col>
                    <Col className="text-start">{`${data.firstName} ${data.lastName}`}</Col>
                </Container>
                <Container className="d-flex gap-5">
                    <Col className="text-end">
                        <p>Phone Number:</p>
                    </Col>
                    <Col className="text-start">{`${data.phoneNumber}`}</Col>
                </Container>
                <Container className="d-flex gap-5">
                    <Col className="text-end">
                        <p>Email Address:</p>
                    </Col>
                    <Col className="text-start">{`${data.email}`}</Col>
                </Container>
                <Container className="d-flex gap-5">
                    <Col className="text-end">
                        <p>Date & Time:</p>
                    </Col>
                    <Col className="text-start">{`${data.date} ${data.time}`}</Col>
                </Container>
            </Container>
            <Button
                className="btn btn-dark px-4 py-3"
                style={{
                    fontFamily: "Raleway, sans-serif",
                    cursor: "pointer",
                }}
                onClick={() => navigate("/")}
            >
                Return Home
            </Button>
        </Container>
    );
};

export default Confirmation;
