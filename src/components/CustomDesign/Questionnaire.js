import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import MultiStepProgressBar from "./MultiStepProgressBar/MultiStepProgressBar";
import UserDetails from "./CustomDesignPages/UserDetails";
import LogisticDetails from "./CustomDesignPages/LogisticDetails";
import ArtDetails from "./CustomDesignPages/ArtDetails";
import MeetingSchedule from "./CustomDesignPages/MeetingSchedule";
import Confirmation from "./CustomDesignPages/Confirmation";

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
        category: "Calligraphy",
        additionalDetails: "",
        priceRange: "$100-$200",
        medium: "Canvas",
        date: "",
        time: "",
    });

    const handleInput = (input) => (e) => {
        const { value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value,
        }));

        console.log(formData);
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
        <Container className="my-2">
            <h2 className="py-5 heading-secondary text-center">
                {page !== "pagefive"
                    ? "Custom Design Questionnaire"
                    : "Design Meeting Confirmed"}
            </h2>

            <MultiStepProgressBar page={page} />
            {
                {
                    pageone: (
                        <UserDetails
                            onButtonClick={nextPage}
                            handleFormData={handleInput}
                            data={formData}
                        />
                    ),
                    pagetwo: (
                        <ArtDetails
                            onButtonClick={nextPage}
                            onBackClick={prevPage}
                            handleFormData={handleInput}
                            data={formData}
                        />
                    ),
                    pagethree: (
                        <LogisticDetails
                            onButtonClick={nextPage}
                            onBackClick={prevPage}
                            handleFormData={handleInput}
                            data={formData}
                        />
                    ),
                    pagefour: (
                        <MeetingSchedule
                            onButtonClick={nextPage}
                            onBackClick={prevPage}
                            handleFormData={handleInput}
                            data={formData}
                        />
                    ),
                    pagefive: <Confirmation data={formData} />,
                }[page]
            }
        </Container>
    );
};

export default Questionnaire;
