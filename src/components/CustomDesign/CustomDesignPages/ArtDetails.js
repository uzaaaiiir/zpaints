import { Container, Button } from "react-bootstrap";

const UserDetails = ({ onButtonClick, onBackClick, handleFormData, data }) => {
    return (
        <Container>
            <div>
                <h2
                    className="pt-3 pb-4 text-center font-weight-bold"
                    style={{ fontFamily: "Playfair Display, sans-serif" }}
                >
                    Art Details
                </h2>
                <Button
                    class="btn btn-dark btn-bg px-4 py-3 me-md-2 btn-style rounded-0"
                    style={{
                        fontFamily: "Raleway, sans-serif",
                    }}
                    onClick={() => onButtonClick("pagethree")}
                >
                    Next
                </Button>
                <Button
                    class="btn btn-dark btn-bg px-4 py-3 me-md-2 btn-style rounded-0"
                    style={{
                        fontFamily: "Raleway, sans-serif",
                    }}
                    onClick={() => onBackClick("pageone")}
                >
                    Back
                </Button>
            </div>
        </Container>
    );
};

export default UserDetails;
