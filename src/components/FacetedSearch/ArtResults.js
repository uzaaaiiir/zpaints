import { Rating } from "@mui/material";
import { useState } from "react";
import ArtPagination from "./ArtPagination";
import { Link } from "react-router-dom";
import "./art-results-styles.css";

const ArtResults = ({ dataToPresent }) => {
    const result = dataToPresent.map((data) => <ArtItemCard data={data} />);

    // States used for Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage] = useState(6);

    // Used for managing pagination
    const pages = Math.ceil(result.length / resultsPerPage);
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = result.slice(indexOfFirstResult, indexOfLastResult);

    return (
        <div class="container album py-5">
            <div class="container justify-content-center">
                <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 pb-3"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                >
                    {currentResults}
                </div>
                <ArtPagination
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

const ArtItemCard = ({ data }) => {
    return (
        <Link
            to={`/search/${data.id}`}
            class="col card-group result--hover"
            style={{ textDecoration: "none" }}
        >
            <div class="card border-0 rounded-0 shadow-sm">
                <img
                    src={data.img}
                    alt=""
                    className="card-img-top rounded-0"
                    role="img"
                />
                <div class="card-body">
                    <p class="card-text fs-5 fw-bold">{data.title}</p>
                    <div className="d-flex gap-2 justify-content-center small">
                        <Rating
                            name="read-only"
                            value={data.rating}
                            precision={0.1}
                            readOnly
                        />
                        <p className="me-2">{data.rating}</p>
                        <p>({data.numOfReviews})</p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>from ${data.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtResults;
