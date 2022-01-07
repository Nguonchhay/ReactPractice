import React, { useContext } from "react";
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import { LanguageContext } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
    const { setLangCode } = useContext(LanguageContext);
    return (
        <>
            <DropdownToggle
                caret
                nav
            >
                Language
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem onClick={() => setLangCode('en')}>EN</DropdownItem>
                <DropdownItem onClick={() => setLangCode('kh')}> KH</DropdownItem>
            </DropdownMenu>
        </>
    )
}

export default LanguageSwitcher;