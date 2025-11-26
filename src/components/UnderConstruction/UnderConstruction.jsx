import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: 20,
  background: 'linear-gradient(135deg, #f8fafc 0%, #fff 100%)',
};

const headingStyle = { fontSize: 40, margin: 0 };
const paragraphStyle = { fontSize: 18, color: '#555', marginTop: 12 };
const langBarStyle = {
  position: 'absolute',
  top: 16,
  right: 16,
  display: 'flex',
  gap: 8,
};
const langButtonStyle = (active) => ({
  padding: '6px 10px',
  borderRadius: 4,
  border: active ? '2px solid #333' : '1px solid #ccc',
  background: active ? '#fff' : '#f6f6f6',
  cursor: 'pointer',
  fontSize: 14,
});

const texts = {
  fr: {
    title: 'Site en construction',
    message: 'Nous travaillons activement sur ce site. Revenez bientôt !',
  },
  en: {
    title: 'Site under construction',
    message: "We're actively working on this site. Please check back soon!",
  },
  it: {
    title: 'Sito in costruzione',
    message: 'Stiamo lavorando attivamente su questo sito. Torna a trovarci presto!',
  },
};

const UnderConstruction = () => {
  const { language, changeLanguage } = useLanguage();
  const t = texts[language] || texts.fr;

  return (
    <div style={containerStyle}>
      <div style={langBarStyle}>
        <button
          type="button"
          onClick={() => changeLanguage('fr')}
          style={langButtonStyle(language === 'fr')}
          aria-label="Français"
        >
          FR
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          style={langButtonStyle(language === 'en')}
          aria-label="English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('it')}
          style={langButtonStyle(language === 'it')}
          aria-label="Italiano"
        >
          IT
        </button>
      </div>

      <h1 style={headingStyle}>{t.title}</h1>
      <p style={paragraphStyle}>{t.message}</p>
    </div>
  );
};

export default UnderConstruction;
