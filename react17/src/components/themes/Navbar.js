import React from "react";
import {
    Navbar,
    NavbarText,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import Translation from "../../locales/Translate";

const CustomNavbar = () => {
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                    <NavLink href="/components/">
                        Components
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                    </NavItem>
                    <UncontrolledDropdown
                    inNavbar
                    nav
                    >
                    <LanguageSwitcher/>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                    <Translation langKey="nav_text" />
                </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;