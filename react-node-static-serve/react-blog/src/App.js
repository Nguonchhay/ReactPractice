import React, { useState } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import AboutPage from './views/pages/AboutPage';
import ContactPage from './views/pages/ContactPage';
import HomePage from "./views/pages/HomePage";
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
