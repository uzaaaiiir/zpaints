import { Container } from "react-bootstrap";
import Dropdowns from "./Dropdowns";
import "./styles.css";
import { useState } from "react";
import { data } from "../data.js";
import Badges from "./Badges";
import ArtResults from "./ArtResults";

const FacetedSearch = () => {
    const [appliedFilters, setAppliedFilters] = useState([]);
    const [dataset, setDataset] = useState(data);

    const handleChange = (category, checked) => {
        /* Instantiate filters */
        let filters = [...appliedFilters];
        console.log(filters);

        /* If a checkbox is checked, add it to filters array */
        if (checked) {
            filters.push(category);
        } else {
            filters = filters.filter((filter) => filter !== category);
        }

        // dataToFilter;
        console.log(filters);

        setAppliedFilters(filters);
    };

    console.log(appliedFilters);

    return (
        <Container className="my-5">
            <h2 className="py-5 heading-secondary text-center">
                SHOP MODERN ISLAMIC ART
            </h2>
            <Dropdowns
                handleChange={handleChange}
                filtersApplied={appliedFilters}
                editFilters={setAppliedFilters}
            />
            <hr className="hr my-5 pt-5 pb-0" />
            <div className="container d-flex gap-3 align-items-center">
                <p className="heading-tertiary fs-6 fw-normal m-0">
                    Your Filters:
                </p>
                <Badges className="col" filtersApplied={appliedFilters} />
            </div>
            <ArtResults dataToPresent={dataset} filterResults={setDataset} />
        </Container>
    );
};

export default FacetedSearch;
