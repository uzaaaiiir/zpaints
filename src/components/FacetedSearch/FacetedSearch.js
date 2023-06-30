import { Container, Badge, CloseButton } from "react-bootstrap";
import Dropdowns from "./Dropdowns";
import "./styles.css";
import { useState } from "react";

const FacetedSearch = () => {
    const [appliedFilters, setAppliedFilters] = useState(null);

    return (
        <Container className="my-5">
            <h2 className="py-5 heading-secondary text-center">
                SHOP MODERN ISLAMIC ART
            </h2>
            <Dropdowns
                filtersApplied={appliedFilters}
                editFilters={setAppliedFilters}
            />
            <hr className="hr my-5 py-5" />
            <div>
                <p>Your Filters: </p>
                <Badge pill bg="dark">
                    Dark
                    <CloseButton variant="white" />
                </Badge>
            </div>
        </Container>
    );
};

export default FacetedSearch;
