import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
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

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
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
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>{t.home}</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>{t.about}</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>{t.menu}</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>{t.awards}</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>{t.contact}</a></li>
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
