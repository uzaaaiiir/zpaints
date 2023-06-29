import Categories from "./Categories";
import Hero from "./Hero";
import Policies from "./Policies";
import Mediums from "./Mediums";
import Bestsellers from "./Bestsellers";

const Homepage = () => {
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
