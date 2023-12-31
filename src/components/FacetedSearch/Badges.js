import { AiOutlineCloseCircle } from "react-icons/ai";

const Badges = ({ filtersApplied, handleFilterClose }) => {
    return (
        <div className=" d-flex gap-2 justify-content-center align-items-center">
            {filtersApplied &&
                filtersApplied.map((filter) => (
                    <span
                        className="badge d-flex align-items-center justify-content-center p-1 px-2 text-primary-emphasis bg-light-subtle border border-dark-subtle rounded-pill"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        key={filter}
                    >
                        {filter}
                        <span className="vr mx-2"></span>
                        <button
                            className="border-0 bg-light-subtle fs-6"
                            onClick={(e) =>
                                handleFilterClose(e.target.parentNode, filter)
                            }
                        >
                            <AiOutlineCloseCircle />
                        </button>
                    </span>
                ))}
        </div>
    );
};

export default Badges;
