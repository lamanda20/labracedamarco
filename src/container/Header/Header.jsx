import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './Header.css';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language].header;

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={t.subtitle} />
        <h1 className="app__header-h1">{t.title}</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>{t.description}</p>
        <button type="button" className="custom__button" onClick={scrollToMenu}>{t.button}</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
