import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

const UserDetails = ({ onButtonClick, onBackClick, handleFormData, data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        onButtonClick("pagefive");
    };

    const onBack = () => {
        onBackClick("pagethree");
    };
    return (
        <Container className="pb-3 mb-3">
            <h2
                className="pt-3 pb-4 text-center font-weight-bold"
                style={{ fontFamily: "Playfair Display, sans-serif" }}
            >
                Book a time to discuss with a Professional
            </h2>
            <Form
                style={{ fontFamily: "Raleway, sans-serif" }}
                onSubmit={(e) => onSubmit(e)}
            >
                <Row className="mb-4 py-2 mx-auto w-75 text-start gap-3">
                    <Form.Group as={Col} className="" controlId="formCalendar">
                        <Form.Label>
                            Select a date{" "}
                            <span style={{ color: "#AAA" }}>(Required)</span>
                        </Form.Label>
                        <Form.Control
                            type="date"
                            required
                            min="2023-07-23"
                            max="2023-08-31"
                            className="rounded-0"
                            defaultValue={data.date}
                            onChange={handleFormData("date")}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTime">
                        <Form.Label>
                            Select a time{" "}
                            <span style={{ color: "#AAA" }}>(Required)</span>
                        </Form.Label>
                        <Form.Control
                            type="time"
                            required
                            className="rounded-0"
                            min="8:00"
                            max="17:00"
                            defaultValue={data.time}
                            onChange={handleFormData("time")}
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
                        onClick={() => onBack()}
                    >
                        <BiArrowBack />
                        <p className="mb-0 ps-2">Back</p>
                    </div>
                    <Button
                        variant="btn btn-dark px-4 py-2 btn-style rounded-0"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default UserDetails;
