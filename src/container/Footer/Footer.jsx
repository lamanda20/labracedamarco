import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const locationTitles = {
    fr: 'Notre Localisation',
    en: 'Our Location',
    es: 'Nuestra Ubicación',
    de: 'Unser Standort',
    it: 'La Nostra Posizione',
    pt: 'Nossa Localização',
  };

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">{t.contact}</h1>
          <p className="p__opensans">{t.address}</p>
          <p className="p__opensans">{t.phone}</p>
          <p className="p__opensans">{t.email}</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">&quot;{t.quote}&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">{t.hours}</h1>
          <p className="p__opensans">{t.weekdays}</p>
          <p className="p__opensans">{t.weekdaysTime}</p>
          <p className="p__opensans">{t.weekend}</p>
          <p className="p__opensans">{t.weekendTime}</p>
        </div>
      </div>

      <div className="app__footer-map">
        <h1 className="app__footer-headtext" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          {locationTitles[language] || locationTitles.en}
        </h1>
        <div className="app__footer-map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.123456789012!2d-7.9833633!3d31.6282652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef5214979103%3A0x5ac47f3943592aa8!2sLa%20Brace%20da%20Marco!5e0!3m2!1sen!2s!4v1697123456789!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Brace da Marco - Marrakech"
          />
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">
          2025 La Brace da Marco.{' '}
          {(() => {
            if (language === 'fr') return 'Tous droits réservés';
            if (language === 'es') return 'Todos los derechos reservados';
            if (language === 'de') return 'Alle Rechte vorbehalten';
            return 'Todos os direitos reservados';
          })()}
          .
        </p>
      </div>

    </div>
  );
};

export default Footer;
