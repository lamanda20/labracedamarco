import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './Chef.css';

const Chef = () => {
  const { language } = useLanguage();
  const t = translations[language].chef;

  return (
    <div className="app__chef app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={t.subtitle} />
        <h1 className="headtext__cormorant">{t.title}</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">{t.quote}</p>
          </div>
        </div>

        <div className="app__chef-sign">
          <p>{t.name}</p>
          <p className="p__opensans">{t.role}</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
