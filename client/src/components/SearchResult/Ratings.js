import { Rating } from "@mui/material";

const Ratings = ({ item, align }) => {
    return (
        <div className={`d-flex ms-3 gap-2 medium justify-content-${align}`}>
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

export default Ratings;
