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
import { AiOutlineShopping, AiOutlineBell } from "react-icons/ai";
import { BiPaint } from "react-icons/bi";
import logo from "../../assets/logos/logo-png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="white">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" width={245} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" bg="dark" />
                <Navbar.Collapse
                    id="navbarScroll"
                    className="heading-tertiary bg-md-light"
                >
                    <Nav
                        className="justify-content-end align-items-center flex-grow-1 gap-3"
                        navbarScroll
                    >
                        <NavDropdown
                            title="Shop Islamic Art"
                            className="nav-item nav-item--underline"
                            navbarScroll
                        >
                            <Container className="eventsNav pt-0 mt-0">
                                <Row>
                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <BiPaint />
                                            Calligraphy
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link"
                                                role="button"
                                            >
                                                Qur'anic Verses
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link"
                                                role="button"
                                            >
                                                Sayings
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link"
                                                role="button"
                                            >
                                                Popular Duas
                                            </a>
                                        </Dropdown.Item>

                                        <Dropdown.Divider className="mt-3" />
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <AiOutlineBell />
                                            {"  "}
                                            Architecture
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link text-wrap dropdown-item-double"
                                                role="button"
                                            >
                                                Middle Eastern
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link text-wrap"
                                                role="button"
                                            >
                                                Asian
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="d-md-none" />
                                    </Col>

                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <AiOutlineBell />
                                            Geometric Designs
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link"
                                                role="button"
                                            >
                                                Vegetal Patterns
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link"
                                                role="button"
                                            >
                                                Geometric Shapes
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="mt-3" />
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <AiOutlineBell />
                                            {"  "}
                                            Other
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link text-wrap"
                                                role="button"
                                            >
                                                Custom Design
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="/"
                                                className="nav-link text-wrap"
                                                role="button"
                                            >
                                                {">>"} View All Paintings
                                            </a>
                                        </Dropdown.Item>
                                    </Col>
                                </Row>
                            </Container>
                        </NavDropdown>
                        <Nav.Link className="nav-item nav-item--underline">
                            Workshops
                        </Nav.Link>
                        <Nav.Link className="nav-item nav-item--underline">
                            FAQs
                        </Nav.Link>
                        <Nav.Link className="nav-item nav-item--underline">
                            Contact
                        </Nav.Link>
                        <a
                            href="/pages/book.html"
                            class="btn-nav-cta ms-5 px-4 py-3 rounded-0"
                        >
                            SHOP ALL
                        </a>
                    </Nav>
                    <Nav className="justify-content-end align-items-center gap-3">
                        <div
                            className="vr align-self-center d-none d-lg-block me-3"
                            style={{ height: "2em" }}
                        ></div>

                        <IconContext.Provider value={{ size: "2rem" }}>
                            <AiOutlineShopping />
                        </IconContext.Provider>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
