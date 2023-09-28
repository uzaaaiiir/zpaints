import { Container, Button, Form, Col } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";

const UserDetails = ({ onButtonClick, onBackClick, handleFormData, data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        onButtonClick("pagethree");
    };

    const onBack = () => {
        onBackClick("pageone");
    };
    return (
        <Container className="pb-3 mb-3">
            <h2
                className="pt-3 pb-4 text-center font-weight-bold"
                style={{ fontFamily: "Playfair Display, sans-serif" }}
            >
                Art Details
            </h2>
            <Form
                style={{ fontFamily: "Raleway, sans-serif" }}
                onSubmit={(e) => onSubmit(e)}
            >
                <Form.Group
                    as={Col}
                    className="mb-4 py-2 w-75 mx-auto text-start"
                    controlId="formPhoneNumber"
                >
                    <Form.Label>
                        Please select a category of painting you are looking for{" "}
                        <span style={{ color: "#AAA" }}>(Required)</span>
                    </Form.Label>
                    <Form.Select
                        className="rounded-0"
                        autofocus
                        defaultValue={data.category}
                        onChange={handleFormData("category")}
                        required
                    >
                        <option className="rounded-0" value="Calligraphy">
                            Calligraphy
                        </option>
                        <option value="Architecture" className="rounded-0">
                            Architecture
                        </option>
                        <option value="Geometric">Geometric Shapes</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group
                    as={Col}
                    controlId="formFile1"
                    className="mb-4 py-2 w-75 mx-auto text-start"
                >
                    <Form.Label>
                        Upload an Image{" "}
                        <span style={{ color: "#AAA" }}>(Optional)</span>
                    </Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFormData("image")}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3 mb-4 py-2 w-75 mx-auto text-start"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>
                        Please provide any additional details which would help
                        us understand your design requirements{" "}
                        <span style={{ color: "#AAA" }}>(Optional)</span>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        className="rounded-0"
                        placeholder="Enter details here"
                        defaultValue={data.additionalDetails}
                        onChange={handleFormData("additionalDetails")}
                    />
                </Form.Group>
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
                        Next
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default UserDetails;
