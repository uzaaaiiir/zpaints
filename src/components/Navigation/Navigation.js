import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IconContext } from "react-icons";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../../assets/logos/logo-png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" width={245} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="heading-tertiary"
                >
                    <Nav className="justify-content-end align-items-center flex-grow-1 gap-3">
                        <NavDropdown
                            title="Shop Islamic Art"
                            className="nav-item nav-item--underline"
                        >
                            <Container className="eventsNav pt-0 mt-0">
                                <Row>
                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header>
                                            <FontAwesomeIcon
                                                color="black"
                                                icon={"concierge-bell"}
                                                size="1x"
                                                className="pr-1"
                                            />
                                            {"  "}
                                            Catering
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Corporate
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Private
                                                </a>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Divider />
                                        <Dropdown.Header>
                                            <FontAwesomeIcon
                                                color="black"
                                                icon={"chalkboard-teacher"}
                                                size="1x"
                                                className="pr-1"
                                            />
                                            {"  "}
                                            Classes
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Barista 101
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    History of Coffee
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Intro to Cafe Snobbery
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="d-md-none" />
                                    </Col>

                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header>
                                            <FontAwesomeIcon
                                                color="black"
                                                icon={"building"}
                                                size="1x"
                                                className="pr-1"
                                            />
                                            {"  "}
                                            Rentals
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Fireside Room
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Roasting Room
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Header>
                                            <FontAwesomeIcon
                                                color="black"
                                                icon={"sun"}
                                                size="1x"
                                                className="pr-1"
                                            />
                                            {"  "}
                                            Seasonal
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    Coldbrew Night
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/">
                                                <a
                                                    className="nav-link text-wrap"
                                                    role="button"
                                                >
                                                    Campfire Coffee Class
                                                </a>
                                            </Link>
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
