import { Link } from "react-router-dom";
import "./404.css";
import desert from "../../assets/desert.jpg";

const NotFound = () => {
    return (
        <div className="app__404">
            <div className="app__404-container section__container">
                <div className="app__404-content">
                    <div className="-overlay" />
                    <div className="-img">
                        <img src={desert} alt="desert" />
                    </div>
                    <div className="-text d-flex flex-column item-center">
                        <h1> 4<span>0</span><span className="-light">4</span> </h1>
                        <h3> Nothing to see here! </h3>
                        <Link to="/">
                            <span> Back to Home </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;