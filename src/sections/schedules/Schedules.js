import { Element } from 'react-scroll';
import Card from "../../components/cards/card-schedule/Card";
import './schedules.css';

const Schedules = () => {
    return (
        <Element name="schedules">
            <div className="mv-section-schedules">
                <div className="schedules-content">
                    <h2>Horaires d'<span id="text">ouverture</span></h2>
                    <div className="schedules-cards">
                        <Card day="LUN - MAR" schedules="11:30 - 14:30" schedulesSecond="18:30 - 22:00" data={"flip-left"} duration={600} delay={100} easing={"ease-in-out"}/>
                        <Card day="MER - JEU" schedules="11:30 - 14:30" schedulesSecond="18:30 - 22:00" data={"flip-left"} duration={600} delay={400} easing={"ease-in-out"}/>
                        <Card day="VEN - SAM" schedules="11:30 - 14:30" schedulesSecond="18:30 - 22:00" data={"flip-left"} duration={600} delay={800} easing={"ease-in-out"}/>
                        <Card day="DIMANCHE" schedules="11:30 - 14:30" schedulesSecond="18:30 - 22:00" data={"flip-left"} duration={600} delay={1200} easing={"ease-in-out"}/>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Schedules