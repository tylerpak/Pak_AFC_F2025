import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar.jsx";
import Splash from "./pages/Splash.jsx";
import Menu from "./pages/Menu.jsx";
import Hiring from "./pages/Hiring.jsx";
import Error from "./pages/Error.jsx";

export default function App() {
    return (
        <>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/hiring" element={<Hiring />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}