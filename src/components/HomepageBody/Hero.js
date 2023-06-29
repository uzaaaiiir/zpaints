import heroImg from "../../assets/img/hero.jpg";
import "./hero-styles.css";

const Hero = () => {
    return (
        <main className="container col-xxl-8 px-4 py-1 background-container">
            <div className="row justify-content-center flex-lg-row align-items-center g-5 py-5 mb-4">
                <div className="col-lg-6 d-flex-column align-items-start">
                    <h1 className="fw-bold lh-md mb-4 heading-primary">
                        zpaints
                    </h1>
                    <p className="mb-5 heading-tertiary fs-5">
                        Offering High-Quality Modern Islamic Art Pieces
                    </p>
                    <div className="d-grid d-md-flex justify-content-center gap-3">
                        <a
                            href="/pages/book.html"
                            class="btn btn-dark btn-bg px-4 py-3 me-md-2 btn-style rounded-0"
                            style={{
                                fontFamily: "Raleway, sans-serif",
                            }}
                        >
                            SHOP ALL
                        </a>

                        <a
                            href="/pages/services.html"
                            className="btn btn-outline-dark px-4 py-3 btn-style rounded-0"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            CUSTOM DESIGNS
                        </a>
                    </div>
                </div>
                <div class="col-10 col-sm-8 col-lg-6 hero-img d-flex justify-content-center">
                    <img
                        src={heroImg}
                        className="d-block mx-lg-auto img-fluid hero-img-filter "
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
