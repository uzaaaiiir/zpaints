// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/HomepageBody/Homepage";
import Footer from "./components/Footer/Footer";

// Custom Designs
import "./App.css";

// React Router dom
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Homepage />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
