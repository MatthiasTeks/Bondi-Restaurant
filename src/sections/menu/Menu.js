import { Element } from 'react-scroll';
import { Entree, Plats, Desserts } from "../../utils/menu";
import AsianEntree from '../../assets/asiantest.webp';
import AsianMain from '../../assets/asiantest2.webp';
import AsianDesert from '../../assets/asiantest3.webp';
import SushiRoll from '../../assets/sushi-roll.webp';
import Ramen from '../../assets/ramen.webp';
import Dessert from '../../assets/dessert.webp';
import './menu.css';

const Menu = () => {
    return (
        <Element name="menu" className="menu">
            <div className="menu-holder-shape">
                <div className="shape-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <p>MENU</p>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M 0, 53 C 0, 13.25 13.25, 0 53, 0 S 106, 13.25 106, 53 92.75, 106 53, 106 0, 92.75 0, 53"
                            fill="#f8cc1b"
                            transform="rotate(-45, 100, 100) translate(47 47)"
                        />
                    </svg>
                </div>
            </div>
            <div className="mv-section-menu">
                {/* IMG LEFT */}
                <div className="menu-column menu-column-side menu-desktop menu-side-left">
                    <img id="menu-picture-top" className="menu-img" src={AsianEntree} alt=""/>
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" style={{padding: "10vh 0"}}>
                        <path
                            fill="#f8cc1b"
                            d="M21.5,-35C25.2,-31,23.8,-20.6,25.4,-12.9C27,-5.1,31.5,0,32.8,6.1C34.1,12.2,32.1,19.1,28.3,25.6C24.4,32.2,18.7,38.2,12.3,38.4C6,38.6,-1,32.9,-7.4,29.2C-13.8,25.5,-19.5,23.7,-25,20.1C-30.4,16.5,-35.6,11.2,-36.9,5C-38.2,-1.2,-35.7,-8.2,-30.9,-12.1C-26,-16.1,-18.8,-17,-13.2,-20.2C-7.7,-23.5,-3.8,-29,2.5,-32.9C8.9,-36.8,17.7,-39.1,21.5,-35Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            strokeWidth="0"
                            style={{transition: "all 0.3s ease 0s"}}>
                        </path>
                    </svg>
                    <img id="menu-picture-bottom" className="menu-img" src={AsianDesert} alt=""/>
                </div>
                {/* MENU */}
                <div className="menu-column">
                    <div className="menu-block">
                        <img className="menu-icon" src={SushiRoll} alt=""/>
                        <h3>ENTRÉES</h3>
                        { Entree.map((plat, index) => {
                            return (
                                <div className="menu-plat" key={`${plat.title}${index}`}>
                                    <div className="plat-row">
                                        <h4>{plat.title}</h4>
                                        <p>€{plat.price}</p>
                                    </div>
                                    <p>{plat.ingredients}</p>
                                </div>
                            )
                        })}
                        <img className="menu-img-mobile" src={AsianEntree} alt=""/>
                    </div>
                    <div className="menu-block">
                        <img className="menu-icon" src={Ramen} alt=""/>
                        <h3>PLATS</h3>
                        { Plats.map((plat, index) => {
                            return (
                                <div className="menu-plat" key={`${plat.title}${index}`}>
                                    <div className="plat-row">
                                        <h4>{plat.title}</h4>
                                        <p>€{plat.price}</p>
                                    </div>
                                    <p>{plat.ingredients}</p>
                                </div>
                            )
                        })}
                        <img className="menu-img-mobile" src={AsianMain} alt=""/>
                    </div>
                    <div className="menu-block">
                        <img className="menu-icon" src={Dessert} alt=""/>
                        <h3>DESSERT</h3>
                        { Desserts.map((plat, index) => {
                            return (
                                <div className="menu-plat" key={`${plat.title}${index}`}>
                                    <div className="plat-row">
                                        <h4>{plat.title}</h4>
                                        <p>€{plat.price}</p>
                                    </div>
                                    <p>{plat.ingredients}</p>
                                </div>
                            )
                        })}
                        <img className="menu-img-mobile" src={AsianDesert} alt=""/>
                    </div>
                </div>
                {/* IMG RIGHT */}
                <div className="menu-column menu-column-side menu-desktop menu-side-right">
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100">
                        <path
                            fill="#f8cc1b"
                            d="M21.5,-35C25.2,-31,23.8,-20.6,25.4,-12.9C27,-5.1,31.5,0,32.8,6.1C34.1,12.2,32.1,19.1,28.3,25.6C24.4,32.2,18.7,38.2,12.3,38.4C6,38.6,-1,32.9,-7.4,29.2C-13.8,25.5,-19.5,23.7,-25,20.1C-30.4,16.5,-35.6,11.2,-36.9,5C-38.2,-1.2,-35.7,-8.2,-30.9,-12.1C-26,-16.1,-18.8,-17,-13.2,-20.2C-7.7,-23.5,-3.8,-29,2.5,-32.9C8.9,-36.8,17.7,-39.1,21.5,-35Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            strokeWidth="0"
                            style={{transition: "all 0.3s ease 0s"}}>
                        </path>
                    </svg>
                    <img className="menu-img" src={AsianMain} alt="" style={{alignSelf: "flex-end"}}/>
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" style={{transform: "translateX(50%) scale(1.2) rotate(120deg)"}}>
                        <path
                            fill="#f8cc1b"
                            d="M21.5,-35C25.2,-31,23.8,-20.6,25.4,-12.9C27,-5.1,31.5,0,32.8,6.1C34.1,12.2,32.1,19.1,28.3,25.6C24.4,32.2,18.7,38.2,12.3,38.4C6,38.6,-1,32.9,-7.4,29.2C-13.8,25.5,-19.5,23.7,-25,20.1C-30.4,16.5,-35.6,11.2,-36.9,5C-38.2,-1.2,-35.7,-8.2,-30.9,-12.1C-26,-16.1,-18.8,-17,-13.2,-20.2C-7.7,-23.5,-3.8,-29,2.5,-32.9C8.9,-36.8,17.7,-39.1,21.5,-35Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            strokeWidth="0"
                            style={{transition: "all 0.3s ease 0s"}}>
                        </path>
                    </svg>
                </div>
            </div>
        </Element>





















/*                <div className="menu-row">

                    <div className="menu-block"/>
                </div>
                <div className="menu-row row-right">
                    <div className="menu-block"/>

                    <img className="large-img large-img-desktop" src={AsianTest2} alt=""/>
                </div>
                <div className="menu-row">

                    <div className="menu-block"/>
                </div>*/
    )
}

export default Menu