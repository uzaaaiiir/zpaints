import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
        </div>
    );
}

export default App;
