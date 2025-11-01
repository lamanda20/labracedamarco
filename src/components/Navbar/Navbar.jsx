import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
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
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [toggleMenu]);

  const handleLogoClick = () => {
    history.push('/');
    window.scrollTo(0, 0);
  };

  const handleMenuOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setToggleMenu(true);
  };

  const handleMenuClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={handleMenuOpen}
          onTouchStart={handleMenuOpen}
          style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={handleMenuClose}
              onTouchStart={handleMenuClose}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={handleMenuClose} onTouchStart={handleMenuClose}>
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleMenuClose} onTouchStart={handleMenuClose}>
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#menu" onClick={handleMenuClose} onTouchStart={handleMenuClose}>
                  {t.menu}
                </a>
              </li>
              <li>
                <a href="#awards" onClick={handleMenuClose} onTouchStart={handleMenuClose}>
                  {t.awards}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuClose} onTouchStart={handleMenuClose}>
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
