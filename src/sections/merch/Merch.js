import { Element } from 'react-scroll';
import { GiHealthNormal } from 'react-icons/gi';
import { MdOutlineLocalFlorist, MdFoodBank } from 'react-icons/md';
import CardMerch from "../../components/cards/card-merch/CardMerch";
import CambodgianTemple from '../../assets/cambodgia.webp';
import './merch.css';
import ButtonClassic from "../../components/buttons/button-classic/ButtonClassic";

const Merch = () => {
    return (
        <Element name="merch">
            <div className="mv-section-merch">
                {/* MERCH SENTENCE */}
                <h2>La meilleure cuisine asiatique de <span id="text">Bassens</span> avec des produits locaux</h2>
                {/* CARDS */}
                <div className="merch-holder-cards">
                    <CardMerch borderLeft={true} text="Ingrédients frais" data={"fade-up"} duration={"1000"} easing={"linear"} delay={"100"}/>
                    <CardMerch text="20 ans d'expérience" data={"fade-down"} duration={"1000"} easing={"linear"} delay={"500"}/>
                    <CardMerch borderRight={true} text="Recettes traditionnelles" data={"fade-up"} duration={"1000"} easing={"linear"} delay={"100"}/>
                </div>
                {/* CONTENT */}
                <div className="merch-content">
                    <div className="content-holder">
                        <h3>Des saveurs mémorables et exotiques préparées dans le respect des <span id="text-white">traditions</span> et avec <span id="text-white">amour</span></h3>
                        <p className="content-resume" data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="linear">
                            Nous cuisinons des repas traditionnels asiatiques, principalement cambodgiens, thaïlandais, vietnamiens et chinois.
                            Nous veillons à ce que tous nos plats soient préparés avec des ingrédients locaux et/ou issus de l'agriculture biologiques.
                        </p>
                        <ul>
                            <li data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor=".content-resume"><GiHealthNormal /> Healthy Food</li>
                            <li data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor=".content-resume"><MdOutlineLocalFlorist /> Local Food</li>
                            <li data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor=".content-resume"><MdFoodBank /> Traditional Food</li>
                        </ul>
                        <ButtonClassic class="button-merch" text="RESERVER" data="fade-up" delay="1500" duration="1000" easing="ease-in-out" anchor=".content-resume"/>
                    </div>
                    <img src={CambodgianTemple} alt="nature région Gironde"/>
                </div>
            </div>
        </Element>
    )
}

export default Merch