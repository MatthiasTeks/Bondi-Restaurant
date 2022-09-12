import { Link } from "react-router-dom";
import { Element } from 'react-scroll'
import Logo from '../../assets/png/logo1/logo-white.png';
import Flower from '../../assets/flowerwhite.webp'
import './footer.css';
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import {GiKnifeFork} from "react-icons/gi";

const Footer = () => {

    return (
        <Element name="footer">
            <div className="mv-section-footer">
                <img src={Flower} alt="fleur représentant le Cambodge"/>
                <div className="footer-logo">
                    <img src={Logo} alt="logo représentant le restaurant Bondi"/>
                </div>
                <div className="footer-nav">
                    <ul>
                        <Link to="/cgu"><li>RGPD</li></Link>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                    <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                    <a href="https://www.tripadvisor.fr/" target="_blank" rel="noreferrer"><FaTripadvisor /></a>
                    <a href="https://www.thefork.fr/" target="_blank" rel="noreferrer"><GiKnifeFork /></a>
                </div>
                <div className="footer-copyright">
                    <p>
                        © Copyright 2022 - Bondi Restaurant - Réalisé par <a href="https://matthiasvimbert.com/" target="_blank" rel="noreferrer">Matthias Vimbert</a>  - Tous droits réservés
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default Footer