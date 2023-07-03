import { useParams, Link, useNavigate } from "react-router-dom";
import { data } from "../data.js";
import { Container, DropdownButton, ButtonGroup, Form } from "react-bootstrap";
import { Rating } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";

const SearchResult = () => {
    // Dynamic Data
    const { result } = useParams();
    const item = data.find((item) => item.id === parseInt(result));

    const navigate = useNavigate();
    console.log(typeof item.rating);
    console.log(item.rating);

    return (
        <Container className="container col-xxl-8 px-4 py-3 background-container">
            <div
                className="container d-flex align-items-center justify-content-start"
                style={{ fontFamily: "Raleway, sans-serif", cursor: "pointer" }}
                onClick={() => navigate(-1)}
            >
                <BiArrowBack />
                <p className="mb-0 ps-2">Back</p>
            </div>
            <div className="row justify-content-center flex-lg-row align-items-center g-5 py-5 mb-4">
                <div class="col-10 col-sm-8 col-lg-6 hero-img d-flex justify-content-center">
                    <img
                        src={item.img}
                        className="d-block mx-lg-auto img-fluid  "
                        alt=""
                        width="600"
                        height="400"
                        loading="lazy"
                    />
                </div>
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
                            items={[
                                "Poster",
                                "Frame",
                                "Canvas",
                                "Digital Copy",
                            ]}
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
                    <div className="d-flex ms-3 mb-4 gap-2 justify-content-start medium">
                        <Rating
                            name="read-only"
                            value={item.rating}
                            precision={0.1}
                            readOnly
                        />
                        <p className="me-2">{item.rating}</p>
                        <p>({item.numOfReviews})</p>
                    </div>
                    <button className="ms-3 btn btn-outline-dark">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </Container>
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

export default SearchResult;
