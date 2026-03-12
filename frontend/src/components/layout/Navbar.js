import React, { useState } from "react";
import "../../styles/layout.css";
import Logo from "../../assets/images/sk8-logo.png";

import { IoShareSocial } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { socialLinks } from "../../data/socialLinks";

const Navbar = () => {
    const [showSocialMenu, setShowSocialMenu] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false);

    const toggleSocialMenu = () => setShowSocialMenu((prev) => !prev);
    const toggleNavMenu = () => setShowNavMenu((prev) => !prev);

    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Skate Church ATL logo" />
                </div>

                {/* Main Navigation */}
                <ul className={`main-nav ${showNavMenu ? "active" : ""}`}>
                    <li>
                        <a href="#music">Music</a>
                    </li>

                    <li>
                        <a href="#videos">Videos</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#events">Events</a>
                    </li>

                    <li>
                        <a
                            href="https://13thdesciple.bandcamp.com/merch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Merch
                        </a>
                    </li>
                </ul>

                {/* Social Links (dynamic) */}
                <ul className={`social-links ${showSocialMenu ? "active" : ""}`}>
                    {socialLinks
                        .filter((link) => link.url)
                        .map((link) => {
                            const Icon = link.icon;

                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        aria-label={link.name}
                                        {...(!link.url.startsWith("mailto:")
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            );
                        })}
                </ul>
            </div>

            {/* Mobile toggles */}
            <div>
                {/* Nav menu toggle */}
                <div
                    className="hamburger nav-toggle"
                    onClick={toggleNavMenu}
                    aria-label="Toggle navigation menu"
                >
                    <GiHamburgerMenu />
                </div>

                {/* Social menu toggle */}
                <div
                    className="hamburger social-toggle"
                    onClick={toggleSocialMenu}
                    aria-label="Toggle social menu"
                >
                    <IoShareSocial />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;