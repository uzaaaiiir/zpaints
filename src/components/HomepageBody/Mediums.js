import { Container } from "react-bootstrap";
import {
    PiNumberOneLight,
    PiNumberTwoLight,
    PiNumberThreeLight,
    PiNumberFourLight,
} from "react-icons/pi";
import { IconContext } from "react-icons";

const Mediums = () => {
    return (
        <Container className="mb-5">
            <p className="mb-0 heading-tertiary text-start">
                OUR DELIVERY MEDIUMS
            </p>
            <h2 className="pb-2 heading-secondary text-start">WE OFFER</h2>
            <div className="container row g-4 py-5 row-cols-1 row-cols-lg-4">
                <Medium
                    numberIcon={<PiNumberOneLight />}
                    title="Poster"
                    description="Museum-quality print with matte finish. Delivered flat or rolled. Use your choice of frame."
                />
                <Medium
                    numberIcon={<PiNumberTwoLight />}
                    title="Frame"
                    description="Museum-quality print is custom framed with a white mount. Five frame colors available. Delivered ready-to-hang."
                />
                <Medium
                    numberIcon={<PiNumberThreeLight />}
                    title="Canvas"
                    description="Canvas is wrapped around a gallery style wooden frame. Delivered ready-to-hang."
                />
                <Medium
                    numberIcon={<PiNumberFourLight />}
                    title="Digital Copy"
                    description="Museum-quality digital copy is delivered. Can be printed in any desired size."
                />
            </div>
        </Container>
    );
};

const Medium = ({ numberIcon, title, description }) => {
    return (
        <div className="col d-flex align-items-start mb-4 text-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3 border border-dark rounded-1">
                <IconContext.Provider value={{ color: "black", size: "2.2em" }}>
                    {numberIcon}
                </IconContext.Provider>
            </div>
            <div>
                <h2 className="display-6">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Mediums;
