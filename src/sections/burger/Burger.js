import { Link } from 'react-scroll';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';

import './burger.css';

const Burger = ({ burgerOpen, setBurgerOpen }) => {
    return (
        <div className={`mv-section-burger ${burgerOpen ? 'section-burger-open' : ''}`}>
            <ul id={burgerOpen ? "" : "burger-inactive"}>
                <Link to="merch" spy={true} smooth={true} offset={50} onClick={() => setBurgerOpen(!burgerOpen)}><li>RESTAURANT</li></Link>
                <Link to="schedules" spy={true} smooth={true} onClick={() => setBurgerOpen(!burgerOpen)}><li>HORAIRES</li></Link>
                <Link to="menu" spy={true} smooth={true} onClick={() => setBurgerOpen(!burgerOpen)}><li>MENU</li></Link>
                <Link to="contact" spy={true} smooth={true} onClick={() => setBurgerOpen(!burgerOpen)}><li>RESERVER</li></Link>
            </ul>
            <div className={burgerOpen ? "burger-holder-links" : "burger-inactive"}>
                <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                <a href="https://www.tripadvisor.fr/" target="_blank" rel="noreferrer"><FaTripadvisor /></a>
                <a href="https://www.thefork.fr/" target="_blank" rel="noreferrer"><GiKnifeFork /></a>
            </div>
        </div>
    )
}

export default Burger