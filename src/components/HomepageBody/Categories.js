import Container from "react-bootstrap/Container";
import CategoryCard from "./CategoryCard/CategoryCard";

const Categories = () => {
    return (
        <Container>
            <p class="mb-0 heading-tertiary text-start">SHOP NOW</p>
            <h2 class="pb-2 heading-secondary text-start">
                DESIGN TO REVIVE ISLAMIC ART
            </h2>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <a href="/" style={{ textDecoration: "none" }}>
                    <CategoryCard
                        title="Shop All Islamic Art"
                        imgCategory="all"
                    />
                </a>
                <a href="/">
                    <CategoryCard
                        title="Request Custom Design"
                        imgCategory="custom"
                    />
                </a>
                <a href="/">
                    <CategoryCard title="Workshops" imgCategory="workshops" />
                </a>
            </div>
        </Container>
    );
};

export default Categories;
