import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { Translate } from '../../locales/Translation';
import { LanguageContext } from '../../contexts/LanguageContext';

const Nav = () => {
    const { setLangCode } = useContext(LanguageContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-lg-3 py-3 py-lg-4">
                                <Translate transKey="nav_home"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link px-lg-3 py-3 py-lg-4">
                                <Translate transKey="nav_about"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link px-lg-3 py-3 py-lg-4">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link px-lg-3 py-3 py-lg-4">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <a href="#!" onClick={() => setLangCode('en')} className="nav-link px-lg-3 py-3 py-lg-4">English</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" onClick={() => setLangCode('kh')} className="nav-link px-lg-3 py-3 py-lg-4">Khmer</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;