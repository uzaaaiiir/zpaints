import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ onButtonClick, handleFormData, data }) => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        onButtonClick("pagetwo");
    };

    return (
        <Container>
            <h2
                className="pt-3 py-3 mb-2 text-center font-weight-bold"
                style={{ fontFamily: "Playfair Display, sans-serif" }}
            >
                User Details
            </h2>
            <Form
                style={{ fontFamily: "Raleway, sans-serif" }}
                onSubmit={(e) => onSubmit(e)}
            >
                <Row className="mb-4 py-2 mx-auto w-75 text-start">
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue={data.firstName}
                            autoFocus
                            className="rounded-0"
                            onChange={handleFormData("firstName")}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            placeholder="Last name"
                            defaultValue={data.lastName}
                            type="text"
                            className="rounded-0"
                            onChange={handleFormData("lastName")}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-4 py-2 mx-auto w-75 text-start">
                    <Form.Group
                        as={Col}
                        className="mb-3 w-75"
                        controlId="formPhoneNumber"
                    >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            required
                            placeholder="647-557-1021"
                            defaultValue={data.phoneNumber}
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            className="rounded-0"
                            onChange={handleFormData("phoneNumber")}
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
                            defaultValue={data.email}
                            type="email"
                            required
                            className="rounded-0"
                            onChange={handleFormData("email")}
                        />
                    </Form.Group>
                </Row>
                <Container className="d-flex w-75 px-3 py-3 mb-4 justify-content-center align-items-center gap-5">
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            fontFamily: "Raleway, sans-serif",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(-1)}
                    >
                        <BiArrowBack />
                        <p className="mb-0 ps-2">Back</p>
                    </div>
                    <Button
                        variant="btn btn-dark px-4 py-2 btn-style rounded-0"
                        type="submit"
                    >
                        Next
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default UserDetails;
