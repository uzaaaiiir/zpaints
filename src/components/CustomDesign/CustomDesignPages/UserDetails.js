import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ onButtonClick }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Form style={{ fontFamily: "Raleway, sans-serif" }}>
                <Row className="mb-3 w-75 text-start">
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            autoFocus
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            placeholder="Last name"
                            type="text"
                            className="rounded-0"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3 w-75 text-start">
                    <Form.Group
                        as={Col}
                        className="mb-3 w-75"
                        controlId="formPhoneNumber"
                    >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            placeholder="647-557-1021"
                            type="tel"
                            required
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className="mb-3 w-75"
                        controlId="formEmailAddress"
                    >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            placeholder="zpaints@gmail.com"
                            type="email"
                            required
                            className="rounded-0"
                        />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Button
                class="btn btn-dark btn-bg px-4 py-3 me-md-2 btn-style rounded-0"
                style={{
                    fontFamily: "Raleway, sans-serif",
                }}
                onClick={() => onButtonClick("pagetwo")}
            >
                Next
            </Button>
            <div
                className="container d-flex align-items-center justify-content-start"
                style={{ fontFamily: "Raleway, sans-serif", cursor: "pointer" }}
                onClick={() => null}
            >
                <BiArrowBack />
                <p className="mb-0 ps-2">Back</p>
            </div>
        </Container>
    );
};

export default UserDetails;
