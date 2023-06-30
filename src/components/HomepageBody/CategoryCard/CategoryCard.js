import viewAllCategory from "../../../assets/img/calligraphy-category.png";
import customDesignCategory from "../../../assets/img/custom-design-category.jpg";
import workshopCategory from "../../../assets/img/workshop-category.jpg";
import "../hero-styles.css";

const CategoryCard = ({ title, imgCategory }) => {
    let category = null;
    if (imgCategory === "all") {
        category = viewAllCategory;
    } else if (imgCategory === "custom") {
        category = customDesignCategory;
    } else {
        category = workshopCategory;
    }

    return (
        <div className="col">
            <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg"
                style={{
                    backgroundImage: `url(${category})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "20rem",
                }}
            >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 lh-1 fw-bold heading-tertiary fs-1">
                        {title}
                    </h3>
                    {/* <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center">
                            <svg
                                className="bi me-2"
                                width="1em"
                                height="1em"
                            ></svg>
                            <small>4d</small>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
