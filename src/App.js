// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/HomepageBody/Homepage";
import Contact from "./components/Contact/Contact";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";

// Search Related Components
import FacetedSearch from "./components/FacetedSearch/FacetedSearch";
import SearchResult from "./components/SearchResult/SearchResult";

// Custom Design
import CustomDesign from "./components/CustomDesign/CustomDesign";
import Questionnaire from "./components/CustomDesign/Questionnaire.js";

// Not Found Component
import NotFound from "./components/NotFound/NotFound";
import Progress from "./components/NotFound/Progress";

// Custom Designs
import "./App.css";

// React Router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Imports

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route exact path="/" Component={Homepage} />
                    <Route path="/search" Component={FacetedSearch} />
                    <Route path="/search/:result" Component={SearchResult} />
                    <Route path="/custom" Component={CustomDesign} />
                    <Route path="/questionnaire" Component={Questionnaire} />
                    <Route path="/faqs" Component={FAQs} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/progress" Component={Progress} />
                    <Route path="/*" Component={NotFound} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
