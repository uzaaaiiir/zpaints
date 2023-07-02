import Container from "react-bootstrap/Container";
import CategoryCard from "./CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <Container className="mb-5">
            <p class="mb-0 heading-tertiary text-start">SHOP NOW</p>
            <h2 class="pb-2 heading-secondary text-start">
                DESIGN TO REVIVE ISLAMIC ART
            </h2>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <Link
                    to="/search"
                    style={{ textDecoration: "none" }}
                    className="d-block"
                >
                    <CategoryCard
                        title="Shop All Islamic Art"
                        imgCategory="all"
                    />
                </Link>
                <Link
                    to="/custom"
                    style={{ textDecoration: "none" }}
                    className="d-block"
                >
                    <CategoryCard
                        title="Request Custom Design"
                        imgCategory="custom"
                    />
                </Link>
                <Link
                    to="/workshops"
                    style={{ textDecoration: "none" }}
                    className="d-block"
                >
                    <CategoryCard title="Workshops" imgCategory="workshops" />
                </Link>
            </div>
        </Container>
    );
};

export default Categories;
