import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';

import Logo from "../logo/Logo";

export default function Navbar(){
    const { pathname } = useLocation();
    const [ open , set_open ] = useState(false);

    useEffect(()=> {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 1099){
                set_open(false);
            }
        });
    }, []);

    return (
        <nav className={`app__navbar ${open ? "-open" : ""}`} id="nav">
            <div className={`app__navbar-bg`}></div>
            <div className="app__navbar-fill"></div>
            <div className="app__navbar-toggle">
                <button className="app__navbar-toggle_menu" onClick={()=> set_open(!open)}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="app__navbar-content">
                <div className="app__navbar-container app__container">
                    <div className="app__navbar-container_row d-flex item-center gap-2 justify-between">
                        <div className="app__navbar-container_col left d-flex item-center gap-4">
                            <div className="app__navbar-logo -static">
                                <Logo />
                            </div>

                            <ul className="app__navbar-nav d-flex gap-2 item-center">
                                <li className="app__navbar-navItem">
                                    <Link to="/apartments" className={`${pathname === "/apartments" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                        <span> Apartments </span>
                                    </Link>
                                </li>
                                <li className="app__navbar-navItem">
                                    <Link to="/agents" className={`${pathname === "/agents" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                        <span> Agents </span>
                                    </Link>
                                </li>
                                <li className="app__navbar-navItem">
                                    <Link to="/about-us" className={`${pathname === "/about-us" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                        <span> About us </span>
                                    </Link>
                                </li>
                                <li className="app__navbar-navItem">
                                    <Link to="/how-it-works" className={`${pathname === "/how-it-works" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                        <span> How it works </span>
                                    </Link>
                                </li>
                                <li className="app__navbar-navItem">
                                    <Link to="/faqs" className={`${pathname === "/faqs" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                        <span> FAQs </span>
                                    </Link>
                                </li>
                                <li className="app__navbar-navItem">
                                    <Link to="/contact-us" className={`${pathname === "/contact-us" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                        <span> Contact </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="app__navbar-container_col right">
                            <div className="app__navbar-btns d-flex gap-1 item-center">
                                <Link to="/login" className="app__navbar-btn -outline-btn">
                                    <span> Login </span>
                                </Link>
                                <Link to="/register" className="app__navbar-btn -thick-btn">
                                    <span> Join us </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}