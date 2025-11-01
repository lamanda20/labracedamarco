import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './FindUs.css';

const FindUs = () => {
  const { language } = useLanguage();
  const t = translations[language].findUs;

  return (
    <div className="app__findus app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title={t.subtitle} />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>{t.title}</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{t.address}</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>{t.hours}</p>
          <p className="p__opensans">{t.weekdays}</p>
          <p className="p__opensans">{t.weekend}</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>{t.button}</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
