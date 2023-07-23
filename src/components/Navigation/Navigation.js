import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Row,
    Col,
    Dropdown,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineShopping } from "react-icons/ai";
import { IoShapesOutline } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import { BiPaint } from "react-icons/bi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import logo from "../../assets/logos/logo-png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            bg="white"
            className=""
        >
            <Container>
                <Link to="/" className="me-4">
                    <img src={logo} alt="" width={245} />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" bg="dark" />
                <Navbar.Collapse
                    id="navbarScroll"
                    className="heading-tertiary bg-md-light"
                >
                    <Nav
                        className="justify-content-end align-items-center flex-grow-1 gap-3"
                        navbarScroll
                    >
                        <Link
                            to="/search"
                            className="nav-link nav-item nav-item--underline d-lg-none"
                        >
                            Shop Islamic Art
                        </Link>
                        <NavDropdown
                            title="Shop Islamic Art"
                            className="nav-item nav-item--underline d-none d-lg-block"
                            navbarScroll
                        >
                            <Container
                                className="eventsNav pt-0 mt-0"
                                style={{ minHeight: "100%" }}
                            >
                                <Row>
                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <BiPaint />
                                            Calligraphy
                                        </Dropdown.Header>
                                        <Link
                                            to="/search"
                                            className="nav-link"
                                            role="button"
                                        >
                                            Qur'anic Verses
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link"
                                            role="button"
                                        >
                                            Sayings
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link"
                                            role="button"
                                        >
                                            Popular Duas
                                        </Link>

                                        <Dropdown.Divider className="mt-3" />
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <FaMosque />
                                            Architecture
                                        </Dropdown.Header>
                                        <Link
                                            to="/search"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            Middle Eastern
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            Asian
                                        </Link>
                                        <Dropdown.Divider className="d-md-none" />
                                    </Col>

                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <IoShapesOutline />
                                            Geometry
                                        </Dropdown.Header>
                                        <Link
                                            to="/search"
                                            className="nav-link dropdown-item"
                                            role="button"
                                        >
                                            Vegetal Patterns
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link dropdown-item"
                                            role="button"
                                        >
                                            Geometric Shapes
                                        </Link>
                                        <Dropdown.Divider className="mt-3" />
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <HiOutlineDotsCircleHorizontal />
                                            {"  "}
                                            Other
                                        </Dropdown.Header>
                                        <Link
                                            to="/custom"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            Custom Design
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            {">>"} View All Paintings
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </NavDropdown>
                        <Link
                            to="/custom"
                            className="nav-link nav-item nav-item--underline"
                        >
                            Custom Design
                        </Link>
                        <Link
                            to="faqs"
                            className="nav-link nav-item nav-item--underline"
                        >
                            FAQs
                        </Link>
                        <Link
                            to="contact"
                            className="nav-link nav-item nav-item--underline"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/search"
                            class="btn-nav-cta ms-5 px-4 py-3 rounded-0"
                        >
                            SHOP ALL
                        </Link>
                    </Nav>
                    <Nav className="justify-content-end align-items-center gap-3">
                        <div
                            className="vr align-self-center d-none d-lg-block me-3"
                            style={{ height: "2em" }}
                        ></div>
                        <Link className="link-dark">
                            <IconContext.Provider value={{ size: "2rem" }}>
                                <AiOutlineShopping />
                            </IconContext.Provider>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
