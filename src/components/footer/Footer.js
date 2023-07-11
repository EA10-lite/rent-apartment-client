import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import "./footer.css";

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import FormButton from "../forms/FormButton";
import FormField from "../forms/FormField";
import Logo from "../logo/Logo";

import subscribe from "../../schema/subscribe";

const Footer = () => {
    const [ loading, setLoading ] = useState(false);
    const subscribeToNewsLetter = (values) => {
        try {
            
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }

    return (
        <footer className="app__footer">
            <div className="app__footer-container app__container">
                <div className="app__footer-row -grid_container">
                    <div className="app__footer-col -left">
                        <div className="app__footer-logo">
                            <Logo />
                        </div>
                        <div>
                            <p> Rent Yo Apartment is an ideal platform where people looking for apartment, and agents who have apartment for lease meet, and go into contract together. </p>
                            <div className="-socials d-flex item-center gap-2">
                                <a href="https://facebook.com">
                                    <BsFacebook />
                                </a>
                                <a href="https://instagram.com">
                                    <BsInstagram />
                                </a>
                                <a href="https://twitter.com">
                                    <BsTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="app__footer-col -center">
                        <div className="app__footer-links_container">
                            <h4 className="-header-text"> Quick Links </h4>
                            <ul className="app__footer-links">
                                <li className="app__footer-link">
                                    <Link to="/">
                                        <span> Home </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="/apartments">
                                        <span> Apartments </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="/agents">
                                        <span> Agents </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="/how-it-works">
                                        <span> How it works </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="/faqs">
                                        <span> FAQs </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="app__footer-links_container">
                            <h4 className="-header-text"> Company </h4>
                            <ul className="app__footer-links">
                                <li className="app__footer-link">
                                    <Link to="">
                                        <span> About us </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="/privacy-policy">
                                        <span> Privacy Policy </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="/terms-and-conditions">
                                        <span> Terms & Condtions </span>
                                    </Link>
                                </li>
                                <li className="app__footer-link">
                                    <Link to="">
                                        <span> Contact us </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="app__footer-col -right">
                        <div className="app__footer-form">
                            <Formik
                                initialValues={{ email: "" }}
                                onSubmit={(values) => subscribeToNewsLetter(values)}
                                validationSchema={subscribe}
                            >
                                {()=> (
                                    <>
                                        <FormField 
                                            name="email"
                                            placeholder="Enter Your email"
                                            type="email"
                                        />
                                        <FormButton 
                                            loading={loading}
                                            title={"Subscribe"}
                                        />
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

                <div className="app__footer-row">
                    <p> 2023. All Rights Reserved </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;