import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'it', name: 'IT', flag: '🇮🇹' },
    { code: 'pt', name: 'PT', flag: '🇵🇹' },
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={`language-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-label={`Switch to ${lang.name}`}
        >
          <span className="flag">{lang.flag}</span>
          <span className="lang-code">{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
