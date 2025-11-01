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
  const [scrollPosition, setScrollPosition] = React.useState(0);
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
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (toggleMenu) {
      const currentScroll = window.pageYOffset;
      setScrollPosition(currentScroll);

      document.documentElement.classList.add('body-no-scroll');
      document.body.classList.add('body-no-scroll');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';

      document.body.addEventListener('touchmove', preventScroll, { passive: false });
      document.body.addEventListener('scroll', preventScroll, { passive: false });
    } else {
      document.documentElement.classList.remove('body-no-scroll');
      document.body.classList.remove('body-no-scroll');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';

      document.body.removeEventListener('touchmove', preventScroll);
      document.body.removeEventListener('scroll', preventScroll);

      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.documentElement.classList.remove('body-no-scroll');
      document.body.classList.remove('body-no-scroll');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';

      document.body.removeEventListener('touchmove', preventScroll);
      document.body.removeEventListener('scroll', preventScroll);
    };
  }, [toggleMenu, scrollPosition]);

  const handleLogoClick = () => {
    history.push('/');
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
          <div className="app__navbar-smallscreen_overlay flex__center">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>{t.home}</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>{t.about}</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>{t.menu}</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>{t.awards}</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>{t.contact}</a></li>
              <li style={{ marginTop: '1rem' }}><LanguageSelector /></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
