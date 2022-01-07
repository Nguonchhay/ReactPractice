import React, { useState, createContext } from 'react';

export const LanguageContext = createContext({
    langCode: 'en',
    setLangCode: (langCode) => {}
});

export const LanguageProvider = ({children}) => {
    const [langCode, setLangCode] = useState('en');
 
    return (
        <LanguageContext.Provider value={{langCode, setLangCode}}>
            {children}
        </LanguageContext.Provider>
    )
}