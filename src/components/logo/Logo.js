import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

import { AiOutlineHome } from "react-icons/ai";

const Logo = () => {
    return (
        <Link to="/" className="app__logo d-flex gap-0 item-center">
            <AiOutlineHome />
            <div>
                <h4> Rent Yo <br /> <span> Apartment </span> </h4>
            </div>
        </Link>
    )
}

export default Logo;
