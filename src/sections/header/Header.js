import { Link } from 'react-scroll';
import Logo from '../../assets/logo-black-yellow.webp';
import './header.css';

const Header = ({ burgerOpen, setBurgerOpen, userScroll, setUserScroll }) => {

    const handleClickHome = () => {
        setBurgerOpen(false)
        setUserScroll(0)
    }

    return (
        // This section is open only when user scrolling for first time or when burger is opened
        <div className={`mv-section-header ${userScroll > 200 ? "header-opened" : burgerOpen ? "header-opened" : ""}`}>
            <Link to="home" spy={true} smooth={true} onClick={() => handleClickHome()}><img src={Logo} alt="asian food logo" /></Link>
            <button className={`header-burger ${burgerOpen ? 'opened' : ""}`} onClick={() => setBurgerOpen(!burgerOpen)} aria-label="Main Menu" aria-expanded={burgerOpen}>
                {/* This is my burger button */}
                <svg width="50" height="50" viewBox="0 0 100 100">
                    <path className="burger-line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                    <path className="burger-line line2" d="M 20,50 H 80"/>
                    <path className="burger-line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
                </svg>
            </button>
        </div>
    )
}

export default Header