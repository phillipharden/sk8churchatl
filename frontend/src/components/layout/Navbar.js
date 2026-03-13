import React, { useState } from "react";
import "../../styles/layout.css";
import { Link, useLocation } from "react-router-dom";
import { IoShareSocial } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { socialLinks } from "../../data/socialLinks";

const Navbar = () => {
    const location = useLocation();
    const isUnrthdx = location.pathname === "/unrthdx";


    const [showSocialMenu, setShowSocialMenu] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false);

    const toggleSocialMenu = () => setShowSocialMenu((prev) => !prev);
    const toggleNavMenu = () => setShowNavMenu((prev) => !prev);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className={`main-nav ${showNavMenu ? "active" : ""}`}>
                                     
                    <li>
                        <Link to={isUnrthdx ? "/" : "/unrthdx"} className="btn switch-link">
                            {isUnrthdx ? "Skate Church" : "Unrthdx"}
                        </Link>
                    </li>

                   
                </ul>
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
            <div>
                <div
                    className="hamburger nav-toggle"
                    onClick={toggleNavMenu}
                    aria-label="Toggle navigation menu"
                >
                    <GiHamburgerMenu />
                </div>
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