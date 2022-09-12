import { Element } from 'react-scroll';
import ButtonClassic from "../../components/buttons/button-classic/ButtonClassic";
import Scroll from "../../components/scroll/Scroll";
import LogoWhite from '../../assets/logo-white.webp';
import './home.css';

const Home = () => {
    return (
        <Element name="home">
            <div className="mv-section-home">
                <div className="home-content">
                    <img src={LogoWhite} alt="logo de Bondi Restaurant, il représente la fleur du Cambodge"/>
                    <h2>ASIAN FOOD - WOK CUISINE - BASSENS CENTRE </h2>
                    <ButtonClassic text="RÉSERVER"/> {/* Component button make reservation */}
                </div>
                <Scroll /> {/* Component arrow scroll bottom */}
            </div>
        </Element>
    )
}

export default Home