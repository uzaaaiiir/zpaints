import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Row,
    Col,
    Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// React Icons
import { IconContext } from "react-icons";
import { AiOutlineShopping } from "react-icons/ai";
import { IoShapesOutline } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import { BiPaint } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

// Styles
import logo from "../../assets/logos/logo-png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// i18n
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar
            collapseOnSelect
            expand="xl"
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
                            className="nav-link nav-item nav-item--underline d-xl-none"
                        >
                            {t("NavigationBar.ShopIslamicArt")}
                        </Link>
                        <NavDropdown
                            title={t("NavigationBar.ShopIslamicArt")}
                            className="nav-item nav-item--underline d-none d-xl-block"
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
                                            {t(
                                                "NavigationBar.MegaMenu.Titles.Calligraphy"
                                            )}
                                        </Dropdown.Header>
                                        <Link
                                            to="/search"
                                            className="nav-link"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.QuranicVerses"
                                            )}
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.Sayings"
                                            )}
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.PopularDuas"
                                            )}
                                        </Link>

                                        <Dropdown.Divider className="mt-3" />
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <FaMosque />
                                            {t(
                                                "NavigationBar.MegaMenu.Titles.Architecture"
                                            )}
                                        </Dropdown.Header>
                                        <Link
                                            to="/search"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.MiddleEastern"
                                            )}
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.Asian"
                                            )}
                                        </Link>
                                        <Dropdown.Divider className="d-md-none" />
                                    </Col>

                                    <Col xs="12" md="6" className="text-left">
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <IoShapesOutline />
                                            {t(
                                                "NavigationBar.MegaMenu.Titles.Geometry"
                                            )}
                                        </Dropdown.Header>
                                        <Link
                                            to="/search"
                                            className="nav-link dropdown-item"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.VegetalPatterns"
                                            )}
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link dropdown-item"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.GeometricShapes"
                                            )}
                                        </Link>
                                        <Dropdown.Divider className="mt-3" />
                                        <Dropdown.Header className="d-flex gap-2 align-items-center">
                                            <HiOutlineDotsCircleHorizontal />
                                            {"  "}
                                            {t(
                                                "NavigationBar.MegaMenu.Titles.Other"
                                            )}
                                        </Dropdown.Header>
                                        <Link
                                            to="/custom"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            {t("NavigationBar.CustomDesign")}
                                        </Link>
                                        <Link
                                            to="/search"
                                            className="nav-link text-wrap dropdown-item"
                                            role="button"
                                        >
                                            {t(
                                                "NavigationBar.MegaMenu.Items.ViewAll"
                                            )}
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </NavDropdown>
                        <Link
                            to="/custom"
                            className="nav-link nav-item nav-item--underline"
                        >
                            {t("NavigationBar.CustomDesign")}
                        </Link>
                        <Link
                            to="faqs"
                            className="nav-link nav-item nav-item--underline"
                        >
                            {t("NavigationBar.FAQs")}
                        </Link>
                        <Link
                            to="contact"
                            className="nav-link nav-item nav-item--underline"
                        >
                            {t("NavigationBar.Contact")}
                        </Link>
                        <Link
                            to="/search"
                            class="btn-nav-cta ms-5 px-4 py-3 rounded-0"
                        >
                            {t("NavigationBar.ShopAll")}
                        </Link>
                    </Nav>
                    <Nav className="justify-content-end align-items-center gap-3">
                        <div
                            className="vr align-self-center d-none d-xl-block me-3"
                            style={{ height: "2em" }}
                        ></div>
                        <NavDropdown
                            title={
                                <IconContext.Provider
                                    value={{ size: "1.5rem" }}
                                >
                                    <GrLanguage />
                                </IconContext.Provider>
                            }
                            id="basic-nav-dropdown"
                            className="rounded-0 w-50 px-0"
                        >
                            <NavDropdown.Item
                                onClick={() => changeLanguage("en")}
                            >
                                {t("Languages.English")}
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => changeLanguage("fr")}
                            >
                                {t("Languages.French")}
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => changeLanguage("ur")}
                            >
                                {t("Languages.Urdu")}
                            </NavDropdown.Item>
                        </NavDropdown>
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
