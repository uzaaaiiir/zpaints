import { useState, useEffect } from "react";

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        console.log(formSubmitted);
    };

    return (
        <section class="container mb-4">
            <div class="container px-0">
                <div class="row justify-content-center g-5">
                    <h1 class="align-self-center text-center px-5 py-3 heading-primary">
                        CONTACT US
                    </h1>
                    <ContactForm
                        onSubmit={onSubmit}
                        formSubmitted={formSubmitted}
                    />
                    <Location style={{ fontFamily: "Raleway,sans-serif" }} />
                </div>
            </div>
        </section>
    );
};

const ContactForm = ({ onSubmit, formSubmitted }) => {
    return (
        <div class={`col-lg-6 mb-4 align-self-center`}>
            {!formSubmitted && (
                <div class="container py-4">
                    <form id="contactForm" onSubmit={(e) => onSubmit(e)}>
                        <div class="mb-3">
                            <label
                                class="form-label heading-tertiary"
                                for="name"
                            >
                                Name
                            </label>
                            <input
                                class="form-control heading-tertiary rounded-0"
                                required
                                id="name"
                                type="text"
                                placeholder="Name"
                                data-sb-validations="required"
                            />
                        </div>

                        <div class="mb-3">
                            <label
                                class="form-label heading-tertiary"
                                for="emailAddress"
                            >
                                Email Address
                            </label>
                            <input
                                class="form-control heading-tertiary rounded-0"
                                required
                                id="emailAddress"
                                type="email"
                                placeholder="Email Address"
                                data-sb-validations="required, email"
                            />
                        </div>

                        <div class="mb-3">
                            <label
                                class="form-label heading-tertiary"
                                for="message"
                            >
                                Message
                            </label>
                            <textarea
                                class="form-control heading-tertiary rounded-0"
                                required
                                id="message"
                                type="text"
                                placeholder="Message"
                                style={{ height: "10rem" }}
                                data-sb-validations="required"
                            ></textarea>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button
                                class="btn btn-dark btn-lg py-2 px-4 heading-tertiary rounded-0"
                                style={{ fontFamily: "Raleway, sans-serif" }}
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {formSubmitted && (
                <p
                    style={{ fontFamily: "Raleway, sans-serif" }}
                    className="fs-4 align-top"
                >
                    Thanks for getting in touch with us! We will be in touch
                    with you within <strong>24 hours</strong>.
                </p>
            )}
        </div>
    );
};

const Location = () => {
    return (
        <div className="col-lg-6 mb-5 pb-3">
            <div className="container">
                <div
                    className="row mb-4"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                >
                    <div class="col text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            class="bi bi-geo-alt-fill mb-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p className="footer-address text-dark my-0">
                            123 Market St. #22B
                        </p>
                        <p className="footer-address text-dark my-0">
                            Ottawa, ON, Canada
                        </p>
                        <p className="footer-address text-dark">K1Y XXX</p>
                    </div>
                    <div class="col text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            class="bi bi-clock-fill mb-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        </svg>
                        <div class="d-flex justify-content-center gap-3">
                            <p class="footer-address text-dark my-0">MON-FRI</p>
                            <p class="footer-address text-dark my-0 align-self-end">
                                11AM - 8PM
                            </p>
                        </div>
                        <div class="d-flex justify-content-center gap-3">
                            <p class="footer-address text-dark my-0">SAT</p>
                            <p class="footer-address text-dark my-0 align-self-end">
                                11AM - 8PM
                            </p>
                        </div>
                        <div class="d-flex gap-3 flex-grow-1 justify-content-center">
                            <p class="footer-address text-dark my-0">SUN</p>
                            <p class="footer-address text-dark my-0 align-self-end">
                                11AM - 8PM
                            </p>
                        </div>
                    </div>
                    <div class="col text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            class="bi bi-person-circle mb-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                        </svg>
                        <p class="footer-address text-dark my-0">
                            contact@zpaints.ca
                        </p>
                        <p class="footer-address text-dark my-0">
                            (434)548-4356
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11204.999164773284!2d-75.72407132703768!3d45.40430225265343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce043620d11b8b%3A0x8b45713777348f91!2sLittle%20Italy%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1686185411972!5m2!1sen!2sca"
                        width="500"
                        height="350"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="align-items-center"
                        title="Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
