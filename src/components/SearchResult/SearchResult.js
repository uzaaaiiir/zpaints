import { useParams, Link, useNavigate } from "react-router-dom";
import { data } from "../data.js";
import {
    Container,
    DropdownButton,
    ButtonGroup,
    Form,
    ProgressBar,
} from "react-bootstrap";
import { Rating } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";

const SearchResult = () => {
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
                    <div className="">
                        <Ratings item={item} align="center" />
                        <p>Read Reviews</p>
                        <button className="btn btn-outline-dark">
                            Write a Review
                        </button>
                    </div>
                    <RatingDivision rating={item.rating} className="" />
                </div>
            </div>
        </Container>
    );
};

const ImageComponent = ({ image }) => {
    return (
        <div class="col-10 col-sm-8 col-lg-6 hero-img d-flex justify-content-center">
            <img
                src={image}
                className="d-block mx-lg-auto img-fluid  "
                alt=""
                width="600"
                height="400"
                loading="lazy"
            />
        </div>
    );
};

const ItemDetails = ({ item }) => {
    console.log(item);
    return (
        <div
            className="col-lg-6 d-flex-column justify-content-start text-start"
            style={{ fontFamily: "Raleway, sans-serif" }}
        >
            <h1
                style={{ fontFamily: "Playfair Display" }}
                className="px-2 py-2 mb-2"
            >
                {item.title}
            </h1>
            <p className="px-2 py-2 ">from ${item.price}</p>
            <hr className="hr mt-3 mb-1 pt-5 pb-0" />
            <div className="ms-3 d-flex justify-content-start gap-5">
                <MediumsDropdown
                    items={["Poster", "Frame", "Canvas", "Digital Copy"]}
                    title="Style"
                />
                <MediumsDropdown
                    items={[
                        'S 8X10"',
                        'R 11X15"',
                        'M 16X20"',
                        'L 20X30"',
                        'XL 24X36"',
                        'XXL 30X40"',
                        'XXXL 40X60"',
                    ]}
                    title="Size"
                />
            </div>
            <Ratings item={item} align="start" className="mb-4" />
            <button className="ms-3 mt-4 btn btn-outline-dark">
                ADD TO CART
            </button>
        </div>
    );
};

const MediumsDropdown = ({ title, items, name }) => {
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
            <Form variant="flush" style={{ zIndex: "9999" }}>
                {items.map((item, i) => (
                    <div>
                        <Form.Check
                            type="radio"
                            id={`default-radio-${i + 1}`}
                            name={title}
                            label={item}
                            className="d-flex gap-3 mb-2"
                        />
                    </div>
                ))}
            </Form>
        </DropdownButton>
    );
};

const Reviews = () => {};

const RatingDivision = ({ rating }) => {
    return (
        <div
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="container w-100 row g-2 px-5"
        >
            <div className="d-flex justify-content-between align-items-center gap-2">
                <p className="mb-0 ">5 star</p>
                <ProgressBar
                    label="84%"
                    variant="dark"
                    now={84}
                    visuallyHidden
                    className="flex-grow-1 me-2"
                />
                <p className="mb-0">84%</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <p className="mb-0 ">4 star</p>
                <ProgressBar
                    label="9%"
                    variant="dark"
                    now={9}
                    visuallyHidden
                    className="flex-grow-1 me-2"
                />
                <p className="mb-0">9%</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <p className="mb-0 ">3 star</p>
                <ProgressBar
                    label="4%"
                    variant="dark"
                    now={4}
                    visuallyHidden
                    className="flex-grow-1 me-2"
                />
                <p className="mb-0">4%</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <p className="mb-0 ">2 star</p>
                <ProgressBar
                    label="2%"
                    variant="dark"
                    now={2}
                    visuallyHidden
                    className="flex-grow-1 me-2"
                />
                <p className="mb-0">2%</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <p className="mb-0 ">1 star</p>
                <ProgressBar
                    label="1%"
                    variant="dark"
                    now={1}
                    visuallyHidden
                    className="flex-grow-1 me-2"
                />
                <p className="mb-0">1%</p>
            </div>
        </div>
    );
};

const Ratings = ({ item, align }) => {
    return (
        <div className={`d-flex ms-3  gap-2 medium justify-content-${align}`}>
            <Rating
                name="read-only"
                value={item.rating}
                precision={0.1}
                readOnly
            />
            <p className="me-2">{item.rating}</p>
            <p>({item.numOfReviews})</p>
        </div>
    );
};

export default SearchResult;
