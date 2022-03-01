import React, { createContext, useState } from 'react';

export const LanguageContext = createContext({
    langCode: '',
    setLangCode: (updateLangCode) => {}
});

export const LanguageProvider = ({children}) => {
    const [langCode, setLangCode] = useState('en');

    return (
        <LanguageContext.Provider value={{langCode, setLangCode}}>
            {children}
        </LanguageContext.Provider>
    )
}