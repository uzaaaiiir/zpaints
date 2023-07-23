import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="container my-5 pb-4">
            <h2 className="py-5 heading-secondary text-center">
                This page is a work in progress...
            </h2>
            <p className="heading-tertiary">Please visit again later. :)</p>
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{ fontFamily: "Raleway, sans-serif", cursor: "pointer" }}
                onClick={() => navigate(-1)}
            >
                <BiArrowBack />
                <p className="mb-0 ps-2">Go Back</p>
            </div>
        </div>
    );
};

export default NotFound;
