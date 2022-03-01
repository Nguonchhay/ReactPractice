import React, { useContext } from 'react';

import enTrans from './en.json';
import khTrans from './kh.json';
import { LanguageContext } from './../contexts/LanguageContext';


const locales = {
    en: enTrans,
    kh: khTrans
}

export const translate = (tranKey, curLang = 'en') => {
    if (!locales[curLang]) {
        return '';
    }

    return locales[curLang][tranKey];
}

export const Translate = ({transKey}) => {
    const { langCode } = useContext(LanguageContext);

    return (
        <span>{translate(transKey, langCode)}</span>
    )
}