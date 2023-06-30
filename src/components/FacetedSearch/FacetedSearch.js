import {
    Container,
    Row,
    DropdownButton,
    ButtonGroup,
    ListGroup,
} from "react-bootstrap";
import "./styles.css";

const FacetedSearch = () => {
    return (
        <Container className="my-5">
            <h2 className="py-5 heading-secondary text-center">
                SHOP MODERN ISLAMIC ART
            </h2>
            <AllDropdowns />
            <hr className="hr my-5 py-5" />
        </Container>
    );
};

const AllDropdowns = () => {
    return (
        <div className="container row g-2 row-cols-3 row-cols-lg-6 align-items-center justify-content-center">
            <p className="heading-tertiary fs-5 fw-normal m-0">Filter:</p>
            <FilterDropdown
                title="Category"
                filters={["Calligraphy", "Architecture", "Geometric"]}
                className="col rounded-0"
            />
            <FilterDropdown
                title="Content"
                filters={[
                    "Islamic Verses",
                    "Sayings",
                    "Popular Duas",
                    "Vegetal Patterns",
                    "Geometric Shapes",
                    "Middle Eastern Architecture",
                    "Asian Architecture",
                ]}
                className="col"
            />
            <FilterDropdown
                title="Sets"
                filters={["Single", "Dual", "Triple", "Quad"]}
                className="col"
            />
            <FilterDropdown
                title="Colors"
                filters={["Red", "Green", "Blue", "Yellow", "Orange", "Black"]}
                className="col"
            />
            <FilterDropdown
                title="Price"
                filters={["<$50", "$50 - $100", "$200+"]}
                className="col"
            />
        </div>
    );
};

const FilterDropdown = ({ title, filters }) => {
    return (
        <DropdownButton
            id="dropdown-basic-button"
            className="list-group bg-dark-outline my-dropdown mb-4"
            style={{ fontFamily: "Raleway,sans-serif" }}
            title={title}
            as={ButtonGroup}
            variant="dark"
            autoClose="outside"
        >
            <ListGroup variant="flush">
                {filters.map((filter) => (
                    <ListGroup.Item className="d-flex gap-3" eventKey={filter}>
                        <input
                            className="form-check-input flex-shrink-0"
                            type="checkbox"
                            value={filter}
                        />
                        {filter}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </DropdownButton>
    );
};

export default FacetedSearch;
