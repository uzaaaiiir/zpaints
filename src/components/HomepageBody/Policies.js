import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport, BiPaint } from "react-icons/bi";
import { IconContext } from "react-icons";

// i18n
import { useTranslation } from "react-i18next";

const Policies = () => {
    const { t } = useTranslation();

    return (
        <Container fluid className="mb-5 pb-5 py-4">
            <Row
                className="px-5 py-3 "
                style={{
                    backgroundColor: "#0a0a0a",
                    opacity: "90%",
                    filter: "grayscale(60%) brightness(0.9)",
                }}
            >
                <Policy
                    title={t("Homepage.Policies.FeaturedArtists")}
                    icon={<BiPaint aria-label="Icon of paint brush" />}
                />
                <Policy
                    title={t("Homepage.Policies.Shipping")}
                    icon={
                        <LiaShippingFastSolid aria-label="Icon of truck delivering items" />
                    }
                />
                <Policy
                    title={t("Homepage.Policies.Reviews")}
                    icon={<AiOutlineStar aria-label="Icon of star" />}
                />
                <Policy
                    title={t("Homepage.Policies.CustomerSupport")}
                    icon={
                        <BiSupport aria-label="Icon of headphones indicating Customer Support" />
                    }
                />
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
