import { Container, Button, Form, Col } from "react-bootstrap";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

const UserDetails = ({ onButtonClick, onBackClick, handleFormData, data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        onButtonClick("pagefour");
    };

    const onBack = () => {
        onBackClick("pagetwo");
    };
    return (
        <Container className="pb-3 mb-3">
            <h2
                className="pt-3 pb-4 text-center font-weight-bold"
                style={{ fontFamily: "Playfair Display, sans-serif" }}
            >
                Logistic Details
            </h2>
            <Form
                style={{ fontFamily: "Raleway, sans-serif" }}
                onSubmit={(e) => onSubmit(e)}
            >
                <Form.Group
                    as={Col}
                    className="mb-4 py-2 w-75 mx-auto text-start"
                    controlId="formPriceRange"
                >
                    <Form.Label>
                        Please select a price range you are searching for{" "}
                        <span style={{ color: "#AAA" }}>(Required)</span>
                    </Form.Label>
                    <Form.Select
                        className="rounded-0"
                        defaultValue={data.priceRange}
                        onChange={handleFormData("priceRange")}
                        required
                    >
                        <option className="rounded-0" value="<$50">
                            {"<$50"}
                        </option>
                        <option value="$50-$100" className="rounded-0">
                            {"$50-$100"}
                        </option>
                        <option selected value="$100-$200">
                            {"$100-$200"}
                        </option>
                        <option value="$200+">{"$200+"}</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="mb-4 py-2 w-75 mx-auto text-start"
                    controlId="formMedium"
                >
                    <Form.Label>
                        Please select one of our delivery mediums{" "}
                        <span style={{ color: "#AAA" }}>(Required)</span>
                    </Form.Label>
                    <Form.Select
                        className="rounded-0"
                        defaultValue={data.medium}
                        onChange={handleFormData("medium")}
                        required
                    >
                        <option className="rounded-0" value="Poster">
                            Poster
                        </option>
                        <option value="Frame" className="rounded-0">
                            Frame
                        </option>
                        <option value="Canvas" selected>
                            Canvas
                        </option>
                        <option value="Digital Copy">Digital Copy</option>
                    </Form.Select>
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
