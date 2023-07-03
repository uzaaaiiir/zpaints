import Ratings from "./Ratings";
import MediumsDropdown from "./MediumsDropdown";

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

export default ItemDetails;
