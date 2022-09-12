import './cardMerch.css';

const CardMerch = (props) => {
    return (
        <div
            className={`merch-card ${props.borderLeft ? 'border-left' : props.borderRight ? 'border-right' : ''}`}
            data-aos={props.data}
            data-aos-duration={props.duration}
            data-aos-easing={props.easing}
            data-aos-delay={props.delay}
        >
            <p>{props.text}</p>
        </div>
    )
}

export default CardMerch