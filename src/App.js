// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/HomepageBody/Homepage";
import Footer from "./components/Footer/Footer";

// Custom Designs
import "./App.css";

// React Router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
