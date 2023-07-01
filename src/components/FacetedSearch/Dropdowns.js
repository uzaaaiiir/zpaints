import { DropdownButton, ButtonGroup, ListGroup } from "react-bootstrap";
import "./styles.css";

const Dropdowns = ({ handleChange }) => {
    return (
        <div className="container d-flex gap-3">
            <p className="heading-tertiary fs-5 fw-normal m-0">Filter:</p>
            <div className="container row g-4 row-cols-3 row-cols-md-5">
                <FilterDropdown
                    title="Category"
                    filters={["Calligraphy", "Architecture", "Geometric"]}
                    clickFn={handleChange}
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
                    clickFn={handleChange}
                    className="col"
                />
                <FilterDropdown
                    title="Sets"
                    filters={["Single", "Dual", "Triple", "Quad"]}
                    clickFn={handleChange}
                    className="col"
                />
                <FilterDropdown
                    title="Colors"
                    filters={[
                        "Red",
                        "Green",
                        "Blue",
                        "Yellow",
                        "Orange",
                        "Black",
                    ]}
                    clickFn={handleChange}
                    className="col"
                />
                <FilterDropdown
                    title="Price"
                    filters={["<$50", "$50 - $100", "$200+"]}
                    clickFn={handleChange}
                    className="col"
                />
            </div>
        </div>
    );
};

const FilterDropdown = ({ title, filters, clickFn }) => {
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
                            value=""
                            onChange={(event) =>
                                clickFn(filter, event.target.checked)
                            }
                        />
                        {filter}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </DropdownButton>
    );
};

export default Dropdowns;
