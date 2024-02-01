import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Landing, Home, Store, Dashboard } from "./view_components/index.js";
import NavBar from "./components/other_components/navigation_bar/navBar.jsx";
import Footer from "./components/other_components/footer/footer.jsx";

function App() {
    const location = useLocation();
    const showNavBar = location.pathname !== "/";
    return (
        <div className="App">
            <header>{showNavBar && <NavBar />}</header>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <footer>{<Footer />}</footer>
        </div>
    );
}
export default App;
