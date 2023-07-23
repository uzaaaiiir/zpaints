import { Container, Button } from "react-bootstrap";

const UserDetails = ({ onButtonClick, onBackClick }) => {
    return (
        <Container>
            <div>
                <h1>Step 4</h1>
            </div>
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
                onClick={() => onBackClick("pagethree")}
            >
                Back
            </Button>
        </Container>
    );
};

export default UserDetails;
