import React from 'react';

import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './AboutUs.css';

const AboutUs = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.logo} alt="logo_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">{t.title}</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">{t.content1}</p>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.logo} alt="about_logo" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">{t.subtitle}</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">{t.content2}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
