import { Container } from "react-bootstrap";
import logo from "../../assets/logos/logo-light-transparent-png.png";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: "#1e1b4b" }}>
            <footer className="py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md">
                        <a href="/index.html" classNameName="">
                            <img
                                src={logo}
                                alt=""
                                height="150rem"
                                style={{ stroke: "white", marginBottom: "1em" }}
                            />
                        </a>
                        <ul className="d-flex justify-content-center">
                            <li className="">
                                <a
                                    className="text-body-secondary"
                                    href="https://www.instagram.com/_zpaints/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContext.Provider
                                        value={{
                                            color: "white",
                                            size: "1.8em",
                                        }}
                                    >
                                        <AiOutlineInstagram />
                                    </IconContext.Provider>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a
                                    className="text-body-secondary"
                                    href="https://www.youtube.com/@zPaints"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContext.Provider
                                        value={{
                                            color: "white",
                                            size: "1.8em",
                                        }}
                                    >
                                        <AiOutlineYoutube />
                                    </IconContext.Provider>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a
                                    className="text-body-secondary"
                                    href="https://www.tiktok.com/@_zpaints"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContext.Provider
                                        value={{
                                            color: "white",
                                            size: "1.8em",
                                        }}
                                    >
                                        <PiTiktokLogo />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9 col-lg text-light py-5 heading-tertiary">
                        <p className="footer-address my-0">
                            123 Market St. #22B
                        </p>
                        <p className="footer-address my-0">
                            Ottawa, ON, Canada
                        </p>
                        <p className="footer-address">K1Y XXX</p>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a className="link-secondary text-decoration-none py-1">
                                    (434)546-4356
                                </a>
                            </li>
                            <li>
                                <a className="link-secondary text-decoration-none py-1">
                                    contact@lift.agency
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg justify-content-center text-light py-5 text-center d-none d-lg-block">
                        <h5
                            style={{
                                fontFamily: "Raleway, sans-serif",
                                color: "white",
                                textAlign: "start",
                            }}
                            className="mb-3"
                        >
                            HOURS
                        </h5>
                        <div className="d-flex align-items-center mb-2">
                            <h6 className="footer-address me-3 mb-1">
                                MON-FRI
                            </h6>
                            <p className="footer-address mb-1">11AM - 8PM</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <h6 className="footer-address me-3 mb-1">SAT</h6>
                            <p className="footer-address mb-1">11AM - 8PM</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <h6 className="footer-address me-3 mb-1">SUN</h6>
                            <p className="footer-address mb-1">11AM - 8PM</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;
