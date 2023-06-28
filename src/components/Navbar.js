const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container">
                    <a href="/" class="navbar-brand">
                        <img
                            src="/assets/logos/logo-transparent-png.png"
                            alt=""
                            width="245"
                            class="nav-logo"
                        />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-dark navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse flex-grow-0"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav">
                            <a
                                href="/pages/services.html"
                                class="nav-item nav-item--underline nav-link me-4"
                            >
                                Services
                            </a>
                            <a
                                href="/pages/faqs.html"
                                class="nav-item nav-item--underline nav-link me-4"
                            >
                                FAQs
                            </a>
                            <a
                                href="/pages/contact.html"
                                class="nav-item nav-item--underline nav-link"
                            >
                                Contact
                            </a>
                        </div>
                        <a
                            href="/pages/book.html"
                            class="btn-nav-cta ms-5 px-4 py-3 rounded-0"
                        >
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
