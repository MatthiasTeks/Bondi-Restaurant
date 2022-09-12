import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Element } from 'react-scroll';
import { BiMapAlt } from 'react-icons/bi'
import ContactLine from "../../components/contact/ContactLine";
import './contact.css';

const Contact = () => {

    const position = [44.8982258, -0.5188395]

    return (
        <Element name="contact" className="contact">
            <div className="mv-section-contact">
                <div className="contact-header">
                    <h2><span id="text-white">Appelez nous</span> et réservez votre table pour ce soir</h2>
                    <p>+33769119942 ou envoyer-nous directement un message sur Whatsapp</p>
                </div>
                <div className="contact-card">
                    <div className="card-column">
                        <form>
                            <h1>Faire une réservation</h1>
                                <input type="text" placeholder="Nom"/>
                                <input type="number" placeholder="Téléphone"/>
                                <input type="number" placeholder="Personne"/>
                                <input type="date" placeholder="Date"/>
                                <input type="time" placeholder="Heure"/>
                                <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="card-column" style={{background: "#302f38"}}>
                        <ContactLine iconContact={<BiMapAlt />} text="53 Avenue Jean Jaurès, 33150 Bassens" />
                        <MapContainer center={position} zoom={14}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={position}>
                                <Popup>
                                    Bondi Restaurant
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact