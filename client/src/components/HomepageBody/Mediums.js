import { Container } from "react-bootstrap";
import {
    PiNumberOneLight,
    PiNumberTwoLight,
    PiNumberThreeLight,
    PiNumberFourLight,
} from "react-icons/pi";
import { IconContext } from "react-icons";

// i18n
import { useTranslation } from "react-i18next";

const Mediums = () => {
    const { t } = useTranslation();

    return (
        <Container className="mb-5">
            <p
                className="mb-0 heading-tertiary text-start"
                style={{ textTransform: "uppercase" }}
            >
                {t("Homepage.Mediums.MediumsSubheading")}
            </p>
            <h2
                className="pb-2 heading-secondary text-start"
                style={{ textTransform: "uppercase" }}
            >
                {t("Homepage.Mediums.MediumsHeading")}
            </h2>
            <div className="container row g-4 py-5 row-cols-1 row-cols-lg-4">
                <Medium
                    numberIcon={
                        <PiNumberOneLight aria-label="Number one icon" />
                    }
                    title={t("Homepage.Mediums.Poster")}
                    description={t("Homepage.Mediums.PosterDescription")}
                />
                <Medium
                    numberIcon={
                        <PiNumberTwoLight aria-label="Number two icon" />
                    }
                    title={t("Homepage.Mediums.Frame")}
                    description={t("Homepage.Mediums.FrameDescription")}
                />
                <Medium
                    numberIcon={
                        <PiNumberThreeLight aria-label="Number three icon" />
                    }
                    title={t("Homepage.Mediums.Canvas")}
                    description={t("Homepage.Mediums.CanvasDescription")}
                />
                <Medium
                    numberIcon={
                        <PiNumberFourLight aria-label="Number four icon" />
                    }
                    title={t("Homepage.Mediums.DigitalCopy")}
                    description={t("Homepage.Mediums.DigitalCopyDescription")}
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
