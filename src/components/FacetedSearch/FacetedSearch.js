import { Container } from "react-bootstrap";
import Dropdowns from "./Dropdowns";
import "./styles.css";
import { useState, useEffect } from "react";
import { data } from "../data.js";
import Badges from "./Badges";
import ArtResults from "./ArtResults";

const FacetedSearch = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /* FACETED SEARCH filters */
    const [appliedFilters, setAppliedFilters] = useState([]);

    /* Mock data */
    const initialData = [...data];
    const [dataset, setDataset] = useState(data);

    const handleChange = (category, checked) => {
        /* Instantiate filters */
        let filters = [...appliedFilters];

        if (checked) {
            filters.push(category);
        } else {
            filters = filters.filter((filter) => filter !== category);
        }

        setAppliedFilters(filters);
        handleImageFiltering(filters);
    };

    const handleImageFiltering = (filters) => {
        if (filters.length === 0) {
            setDataset([...initialData]);
        } else {
            let dataFiltered = [...initialData];

            dataFiltered = dataFiltered.filter((data) => {
                let filterResult;
                filters.forEach((filter) => {
                    filterResult = true;
                    if (!data.categories.includes(filter)) {
                        filterResult = false;
                    }
                });
                return filterResult;
            });

            setDataset(dataFiltered);
        }
    };

    const handleFilterClose = (e, filter) => {
        const [elem] = [
            ...document.getElementsByClassName("form-check-input"),
        ].filter((item) => item.value === filter);
        elem.checked = false;

        let filters = [...appliedFilters];
        filters = filters.filter((filt) => filt !== filter);
        setAppliedFilters(filters);
        handleImageFiltering(filters);
    };

    return (
        <Container className="my-5">
            <h2 className="py-5 heading-secondary text-center">
                SHOP MODERN ISLAMIC ART
            </h2>
            <Dropdowns handleChange={handleChange} />
            <hr className="hr mt-5 mb-3 pt-5 pb-0" />
            <div className="container d-flex gap-3 align-items-center">
                <p className="heading-tertiary fs-6 fw-normal m-0">
                    Your Filters:
                </p>
                <Badges
                    className="col"
                    filtersApplied={appliedFilters}
                    handleFilterClose={handleFilterClose}
                />
            </div>
            <ArtResults dataToPresent={dataset} />
        </Container>
    );
};

export default FacetedSearch;
