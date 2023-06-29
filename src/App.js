import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/HomepageBody/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;
