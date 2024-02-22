import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {
    Landing,
    Home,
    Store,
    Dashboard,
    About,
    Offers,
    FormProduct,
} from "./view_components/index.js";
import NavBar from "./components/other_components/navigation_bar/navBar.jsx";
import NavBarDashboard from "./components/dashboard_components/navigation_bar/navBar.jsx";
import Footer from "./components/other_components/footer/footer.jsx";

function App() {
    const location = useLocation();

    const showNavBar =
        location.pathname !== "/" &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard/create-product";

    const NavDashboard = location.pathname === "/dashboard";

    const ShowFooter =
        location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard/create-product";

    return (
        <div className="App">
            <header>{showNavBar && <NavBar />}</header>
            <header>{NavDashboard && <NavBarDashboard />}</header>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/dashboard/create-product"
                    element={<FormProduct />}
                />
            </Routes>
            <footer>{ShowFooter && <Footer />}</footer>
        </div>
    );
}
export default App;
