import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const { language } = useLanguage();
  const t = translations[language].laurels;
  const awardsT = translations[language].awards;

  const translatedAwards = [
    { imgUrl: images.award02, ...awardsT.award1 },
    { imgUrl: images.award01, ...awardsT.award2 },
    { imgUrl: images.award05, ...awardsT.award3 },
    { imgUrl: images.award03, ...awardsT.award4 },
  ];

  return (
    <div className="app__laurels app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title={t.subtitle} />
        <h1 className="headtext__cormorant">{t.title}</h1>

        <div className="app__laurels_awards">
          {translatedAwards.map((award, index) => <AwardCard award={award} key={`award-${index}`} />)}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  );
};

export default Laurels;
