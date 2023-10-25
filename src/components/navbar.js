import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import Logo from "./assets/logo.png";

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img src={Logo} alt="Logo" className="logo" />
                </a>
            </div>
            <div id="navbar_nav_items">
                <div className="navbar-center">
                    <Link
                        className="navbar_link"
                        activeClass="navbar_link_active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-100}
                    >
                        Emotions
                    </Link>
                    <Link
                        className="navbar_link"
                        activeClass="navbar_link_active"
                        to="EventsPage"
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-100}
                    >
                        Manifesto
                    </Link>
                    <Link
                        className="navbar_link"
                        activeClass="navbar_link_active"
                        to="Members"
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-100}
                    >
                        Self- awareness test
                    </Link>
                    <Link
                        className="navbar_link"
                        activeClass="navbar_link_active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-100}
                    >
                        Work With Us
                    </Link>
                </div>
            </div>

            <Link
                className="navbar_link"
                activeClass="navbar_link_active"
                to="/"
                spy={true}
                smooth={true}
                duration={200}
                offset={-100}
            >
                <button
                    type="button"
                    className="btn custom-button"
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "56px",
                        padding: "10px",
                    }}
                >
                    Download App
                </button>
            </Link>
        </div>
    );
};

export default Navbar;