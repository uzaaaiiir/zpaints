import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import { Rating } from "@mui/material";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Reviews = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(0);

    const handleClose = (e) => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="btn btn-outline-dark" onClick={handleShow}>
                Write a Review
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                centered={true}
                contentClassName="rounded-0 px-2 py-2"
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{ fontFamily: "Playfair Display, sans-serif" }}
                    >
                        Please Share Your Experience
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ fontFamily: "Raleway, sans-serif" }}>
                        <Form.Group className="d-flex justify-content-between align-items-center pe-3 mb-3">
                            <Form.Label>
                                Overall Rating{" "}
                                <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                required
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    autoFocus
                                />
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Last name"
                                    type="text"
                                />
                            </Col>
                        </Row>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                minLength={10}
                                required
                            />
                            <div
                                style={{ color: "grey" }}
                                className="px-1 d-flex gap-2 justify-content-center"
                            >
                                <IconContext.Provider
                                    value={{
                                        size: "2em",
                                    }}
                                >
                                    <AiOutlineInfoCircle size="1.6rem" />
                                </IconContext.Provider>
                                <p
                                    style={{ fontSize: "0.8em" }}
                                    className="mb-0"
                                >
                                    Make your review great: Describe what your
                                    liked, what you don't like, and other key
                                    things shoppers should know (minimum 10
                                    characters).
                                </p>
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Review Title</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                minLength={2}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3 pb-4">
                            <Form.Label>Upload an Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Modal.Footer className="justify-content-center">
                            <Button
                                variant="dark"
                                type="submit"
                                onSubmit={(e) => handleClose(e)}
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Reviews;
