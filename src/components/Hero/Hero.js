import heroImg from "../../assets/img/hero.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
    return (
        <main className="container col-xxl-8 px-4 py-1">
            <div className="row justify-content-center flex-lg-row align-items-center g-5 py-5 mb-4">
                <div className="col-lg-6 d-flex-column align-items-start">
                    <h1 className="fw-bold lh-md mb-4 heading-primary">
                        zpaints
                    </h1>
                    <p className="mb-5 heading-tertiary">
                        Offering High-Quality Modern Islamic Art Pieces
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <a
                            href="/pages/book.html"
                            class="btn btn-dark btn-bg px-4 py-3 me-md-2 btn-style rounded-0"
                            style={{
                                fontFamily: "Raleway, sans-serif",
                            }}
                        >
                            BOOK NOW
                        </a>
                        <a
                            href="/pages/services.html"
                            className="btn btn-outline-dark px-4 py-3 btn-style rounded-0"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            SERVICES
                        </a>
                    </div>
                </div>
                <div class="col-10 col-sm-8 col-lg-6 hero-img d-flex justify-content-center">
                    <img
                        src={heroImg}
                        className="d-block mx-lg-auto img-fluid"
                        style={{
                            filter: "brightness(60%)",
                            filter: "grayscale(80%)",
                        }}
                        alt=""
                        width="600"
                        height="400"
                        loading="lazy"
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;
