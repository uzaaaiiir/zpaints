import { ProgressBar } from "react-bootstrap";

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

export default RatingDivision;
