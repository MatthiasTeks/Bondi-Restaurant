import Aos from 'aos';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cgu from "./pages/cgu/Cgu";
import Burger from './sections/burger/Burger';
import Filter from "./components/filter/Filter";
import ToTop from "./components/toTop/ToTop";
import Welcome from "./pages/welcome/Welcome";
import Footer from "./sections/footer/Footer";
import "aos/dist/aos.css";
import './style.css';

function App() {

    const [userScroll, setUserScroll] = useState(0);
    const [burgerOpen, setBurgerOpen] = useState(false);

    /* store scrolling value user when scrolling effect his using */
    const handleScroll = (e) => {
        setUserScroll(window.scrollY);
    }

    /* store all listener events */
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    /* init library for animations */
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        });
    }, [])

    return (
        <div className="mv-app">
            <Routes>
                <Route
                    path="/"
                    element={
                    <Welcome
                        burgerOpen={burgerOpen}
                        setBurgerOpen={setBurgerOpen}
                        userScroll={userScroll}
                        setUserScroll={setUserScroll}
                    />
                }
                />
                <Route path="/cgu" element={<Cgu />} />
            </Routes>
            <Footer />
            {/* UTILS IN ABSOLUTE POSITION */}
            {userScroll > 200 && <ToTop />}{/* TO TOP BUTTON */}
            {burgerOpen ? <Filter /> : ""}{/* BLACK FILTER WHEN BURGER OPEN */}
            <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>{/* BURGER DISPLAY */}
        </div>
);
}

export default App;
