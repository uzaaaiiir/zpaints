import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/HomepageBody/Homepage";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Homepage />
        </div>
    );
}

export default App;
