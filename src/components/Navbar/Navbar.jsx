import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

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
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [toggleMenu]);

  const handleLogoClick = () => {
    history.push('/');
    window.scrollTo(0, 0);
  };

  const handleMenuOpen = () => {
    setToggleMenu(true);
  };

  const handleMenuClose = () => {
    setToggleMenu(false);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
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
          onClick={handleMenuOpen}
          type="button"
          aria-label="Ouvrir le menu"
        >
          <span />
          <span />
          <span />
        </button>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <button
              className="menu-close-btn"
              onClick={handleMenuClose}
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
              <li style={{ marginTop: '1rem' }}><LanguageSelector /></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
