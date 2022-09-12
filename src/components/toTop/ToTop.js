import { Link } from 'react-scroll';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import './toTop.css';

const ToTop = () => {
    return (
        <Link to="home" spy={true} smooth={true}>
            <div className="mv-scrollToTop">
                <BsFillArrowUpCircleFill />
            </div>
        </Link>
    )
}

export default ToTop