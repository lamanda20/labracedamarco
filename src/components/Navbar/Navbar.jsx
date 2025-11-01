import React from 'react';
import images from '../../constants/images';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'relative';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
    };
  }, [toggleMenu]);

  const handleLogoClick = () => {
    window.location.href = '/';
    window.scrollTo(0, 0);
  };

  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Petit délai pour permettre la navigation avant de fermer
    setTimeout(() => {
      setToggleMenu(false);
    }, 100);
  };

  return (
    <nav className={`app__navbar ${scrolled ? 'scrolled' : ''} ${toggleMenu ? 'menu-open' : ''}`}>
      <div className="app__navbar-logo">
        <button
          type="button"
          onClick={handleLogoClick}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Retour à l'accueil"
        >
          <img src={images.gericht} alt="app__logo" />
        </button>
        <LanguageSelector />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">{t.home}</a></li>
        <li className="p__opensans"><a href="#about">{t.about}</a></li>
        <li className="p__opensans"><a href="#menu">{t.menu}</a></li>
        <li className="p__opensans"><a href="#awards">{t.awards}</a></li>
        <li className="p__opensans"><a href="#contact">{t.contact}</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">{t.reservation}</a>
        <div />
      </div>
      <div className="app__navbar-smallscreen">
        <button
          className="hamburger-menu"
          onClick={handleMenuToggle}
          type="button"
          aria-label={toggleMenu ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span />
          <span />
          <span />
        </button>
        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay"
            onClick={(e) => {
              // Fermer si on clique sur l'overlay lui-même
              if (e.target.classList.contains('app__navbar-smallscreen_overlay')) {
                setToggleMenu(false);
              }
            }}
          >
            <button
              className="menu-close-btn"
              onClick={() => setToggleMenu(false)}
              type="button"
              aria-label="Fermer le menu"
            >
              ✕
            </button>
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={handleLinkClick}>
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleLinkClick}>
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#menu" onClick={handleLinkClick}>
                  {t.menu}
                </a>
              </li>
              <li>
                <a href="#awards" onClick={handleLinkClick}>
                  {t.awards}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleLinkClick}>
                  {t.contact}
                </a>
              </li>
              <li style={{ marginTop: '1rem' }}>
                <LanguageSelector />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
