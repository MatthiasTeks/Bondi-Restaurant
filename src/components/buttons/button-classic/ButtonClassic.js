import './buttonClassic.css';

const ButtonClassic = (props) => {
    return (
        <div className={`mv-button-classic ${props.class && props.class}`} data-aos={props.data} data-delay={props.delay} data-aos-duration={props.duration} data-aos-easing={props.easing} data-aos-anchor={props.anchor}>
            <p>{props.text}</p>
        </div>
    )
}

export default ButtonClassic