import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import MultiStepProgressBar from "./MultiStepProgressBar/MultiStepProgressBar";
import UserDetails from "./CustomDesignPages/UserDetails";
import LogisticDetails from "./CustomDesignPages/LogisticDetails";
import ArtDetails from "./CustomDesignPages/ArtDetails";
import MeetingSchedule from "./CustomDesignPages/MeetingSchedule";

const Questionnaire = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        image: null,
        category: "",
        additionalDetails: "",
        priceRange: "",
        medium: "",
    });

    const handleInput = (input) => (e) => {
        const { value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value,
        }));
    };

    /** MULTI PAGE PROGRESS BAR CONTROL */
    const [page, setPage] = useState("pageone");

    const nextPage = (page) => {
        setPage(page);
    };

    const prevPage = (page) => {
        setPage(page);
    };

    return (
        <Container className="my-5">
            <h2 className="py-5 heading-secondary text-center">
                Custom Design Questionnaire
            </h2>

            <MultiStepProgressBar page={page} />
            {
                {
                    pageone: <UserDetails onButtonClick={nextPage} />,
                    pagetwo: (
                        <LogisticDetails
                            onButtonClick={nextPage}
                            onBackClick={prevPage}
                        />
                    ),
                    pagethree: (
                        <ArtDetails
                            onButtonClick={nextPage}
                            onBackClick={prevPage}
                        />
                    ),
                    pagefour: (
                        <MeetingSchedule
                            onButtonClick={nextPage}
                            onBackClick={prevPage}
                        />
                    ),
                }[page]
            }
        </Container>
    );
};

export default Questionnaire;
