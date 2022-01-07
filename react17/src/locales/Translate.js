import React, { useContext } from "react";

import enTrans from "./en.json";
import khTrans from "./kh.json";
import { LanguageContext } from "../context/LanguageContext";

const locales = {
    'en': enTrans,
    'kh': khTrans
}

export const translate = (key, lang = 'en') => {
    if (!locales[lang]) {
        return '';
    }

    if (lang !== 'en') {
        if (!locales[lang][key]) {
            return locales['en'][key];
        }
    }

    return locales[lang][key];
}

const Translation = ({langKey}) => {
    const { langCode } = useContext(LanguageContext);

    return (
        <span>{translate(langKey, langCode)}</span>
    )
}

export default Translation;

