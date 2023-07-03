import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Navigation/styles.css";
import Reviews from "./Reviews";

function OffCanvasReviewList({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="dark"
                onClick={handleShow}
                className="me-2 mb-4 border-0 bg-white text-primary text-underline nav-item nav-item--underline"
            >
                {name}
            </Button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                {...props}
                className="py-2 px-2"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                        style={{ fontFamily: "Playfair Display, sans-serif" }}
                        className="fs-2"
                    >
                        Our Reviews
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ fontFamily: "Raleway, sans-serif" }}>
                    <Reviews />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasReviewList;
