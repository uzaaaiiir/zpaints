import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineTrophy, AiOutlineStar } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IconContext } from "react-icons";

const Policies = () => {
    return (
        <Container fluid className="mb-5">
            <Row
                className="px-5 py-3 "
                style={{
                    backgroundColor: "#0a0a0a",
                    opacity: "80%",
                    filter: "grayscale(60%) brightness(0.9)",
                }}
            >
                <Policy title="Featured Artists" icon={<AiOutlineTrophy />} />
                <Policy
                    title="Free Worldwide Shipping"
                    icon={<LiaShippingFastSolid />}
                />
                <Policy title="5 Star Reviews" icon={<AiOutlineStar />} />
                <Policy title="Fast Customer Support" icon={<BiSupport />} />
            </Row>
        </Container>
    );
};

const Policy = ({ title, icon }) => {
    return (
        <Col
            md={6}
            lg={3}
            className="d-flex gap-2 align-items-center justify-content-center py-3"
            style={{
                color: "white",
                opacity: "80%",
                fontFamily: "Raleway, sans-serif",
            }}
        >
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                {icon}
            </IconContext.Provider>
            <p className="mb-0" style={{ fontWeight: "400" }}>
                {title}
            </p>
        </Col>
    );
};

export default Policies;
