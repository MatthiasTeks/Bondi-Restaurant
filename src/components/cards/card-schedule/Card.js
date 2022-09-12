import './card.css';

const Card = (props) => {
    return (
        <div
            className="mv-card"
            data-aos={props.data}
            data-aos-duration={props.duration}
            data-aos-delay={props.delay}
            data-aos-easing={props.easing}
            data-aos-anchor=".mv-section-schedules"
        >
            <h4>{props.day}</h4>
            <div className="card-list">
                <p>{props.schedules}</p>
                <p>{props.schedulesSecond}</p>
            </div>
        </div>
    )
}

export default Card