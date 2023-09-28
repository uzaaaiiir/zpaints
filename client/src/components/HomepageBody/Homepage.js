import Categories from "./Categories";
import Hero from "./Hero";
import Policies from "./Policies";
import Mediums from "./Mediums";
import Bestsellers from "./Bestsellers";
import { useEffect } from "react";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <Categories />
            <Policies />
            <Mediums />
            <Bestsellers />
        </main>
    );
};

export default Homepage;
