import './contactLine.css';

const ContactLine = (props) => {
    return (
        <div className="mv-contact-line">
            {props.iconContact}
            <p>{props.text}</p>
        </div>
    )
}

export default ContactLine