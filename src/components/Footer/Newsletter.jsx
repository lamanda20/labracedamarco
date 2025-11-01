import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './Newsletter.css';

const Newsletter = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">{t.newsletter}</h1>
        <p className="p__opensans">{t.newsletterText}</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Email" />
        <button type="button" className="custom__button">{t.subscribe}</button>
      </div>
    </div>
  );
};

export default Newsletter;
