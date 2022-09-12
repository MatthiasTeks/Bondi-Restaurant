import { Link } from 'react-scroll';
import { BsArrowDownShort } from "react-icons/bs";
import './scroll.css';

const Scroll = () => {
    return (
        <Link to="merch" spy={true} smooth={true} offset={50}>
            <div className="mv-scroll">
                <p>scroll</p>
                <BsArrowDownShort />
            </div>
        </Link>
    )
}

export default Scroll