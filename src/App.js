// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/HomepageBody/Homepage";
import FacetedSearch from "./components/FacetedSearch/FacetedSearch";
import Footer from "./components/Footer/Footer";

// Custom Designs
import "./App.css";

// React Router dom
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route exact path="/" Component={Homepage} />
                    <Route path="/search" Component={FacetedSearch} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
