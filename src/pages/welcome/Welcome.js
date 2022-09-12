import Home from "../../sections/home/Home";
import Merch from "../../sections/merch/Merch";
import Schedules from "../../sections/schedules/Schedules";
import Menu from "../../sections/menu/Menu";
import Contact from "../../sections/contact/Contact";
import Header from "../../sections/header/Header";

const Welcome = ({ burgerOpen, setBurgerOpen, userScroll, setUserScroll }) => {
    return (
        <>
            <Header burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} userScroll={userScroll} setUserScroll={setUserScroll}/>
            <Home />
            <Merch />
            <Schedules />
            <Menu />
            <Contact />
        </>
    )
}

export default Welcome