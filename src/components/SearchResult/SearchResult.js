import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { data } from "../data.js";
import { BiArrowBack } from "react-icons/bi";
import RatingDivision from "./RatingDivision.js";
import Ratings from "./Ratings.js";
import ImageComponent from "./ImageComponent.js";
import ItemDetails from "./ItemDetails.js";
import Reviews from "./Reviews.js";
import OffCanvasReviewList from "./OffCanvasReviewList.js";

const SearchResult = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Dynamic Data
    const { result } = useParams();
    const item = data.find((item) => item.id === parseInt(result));

    const navigate = useNavigate();

    return (
        <Container
            className="container col-xxl-8 px-4 py-3 background-container"
            style={{ fontFamily: "Raleway,sans-serif" }}
        >
            <div
                className="container d-flex align-items-center justify-content-start"
                style={{ fontFamily: "Raleway, sans-serif", cursor: "pointer" }}
                onClick={() => navigate(-1)}
            >
                <BiArrowBack />
                <p className="mb-0 ps-2">Back</p>
            </div>
            <div className="row justify-content-center flex-lg-row align-items-center g-5 py-5 mb-4">
                <ImageComponent image={item.img} />
                <ItemDetails item={item} />
            </div>
            <div className="container">
                <hr className="hr mt-4 mb-4 pt-5 pb-3" />
                <p className="mb-0 heading-tertiary text-start">
                    CUSTOMER REVIEWS
                </p>
                <h2 className="pb-2 heading-secondary text-start">
                    SEE WHAT OUR CUSTOMERS HAVE TO SAY
                </h2>
                <div className="container my-5 pb-3 w-75 d-md-flex justify-content-center gap-3 align-items-center">
                    <div className=" pb-4 mb-3 ">
                        <Ratings item={item} align="center" />
                        <OffCanvasReviewList
                            name="Read Reviews"
                            className="mb-4"
                            placement="end"
                        />
                        <Reviews />
                    </div>
                    <RatingDivision rating={item.rating} className="" />
                </div>
            </div>
        </Container>
    );
};

export default SearchResult;
