import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import { getMenuDescription, getMenuTags, getMenuTitle } from '../../constants/menuTranslations';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [activeCategory, setActiveCategory] = React.useState('antipasti');
  const { language } = useLanguage();
  const t = translations[language].menu;

  // Mapping des titres de menu vers les clés de traduction
  const menuKeys = {
    'Trio de Bruschettas': 'triobruschetta',
    'Rouleaux de Printemps': 'rouleaux',
    'Salade Caprese': 'caprese',
    Burrata: 'burrata',
    'Carpaccio de Roastbeef': 'carpaccio',
    'Vitello Tonnato': 'vitello',
    'Filet de Poulet Grillé': 'pouletgrille',
    'Côtelette Milanaise aux Céréales': 'cotelette',
    'Cotoletta à la Milanaise avec Céréales': 'cotelette',
    'Salade César': 'saladecesar',
    'Salade Royal César': 'saladeroyal',
    'Cordon Bleu Gourmet': 'cordonbleu',
    'Salade Marocaine': 'salademarocaine',
    'Couscous aux 7 Céréales Tabulé': 'couscous',
    'Couscous aux 7 Céréales Revisité': 'couscous',
    Falafel: 'falafel',
    'Tajine Végétarien': 'tajineveg',
    'Tajine Kefta aux 5 Céréales': 'tajinekefta',
    'Tajine Kefta': 'tajinekefta',
    'Tajine de Poulet à l\'Orange': 'tajinepoulet',
    'Tajine de Bœuf aux Figues': 'tajineboeuf',
    'Tajine de Bœuf aux Figues Caramélisées et Pomme Verte': 'tajineboeuf',
    'Cheddar Suprême': 'cheddarsupreme',
    'Burger au Bacon': 'bacon',
    'Burger Italien': 'italien',
    'Burger César': 'cesar',
    'Burger Végan au Falafel': 'falafelburger',
    'Burger Falafel': 'falafelburger',
    'Burger aux Pois Chiches': 'pois',
    'Burger Pois Chiche': 'pois',
    'Burger Famoso': 'famoso',
    Famoso: 'famoso',
    'Burger Délicieux': 'delicieux',
    'Délicieux Burger Végan': 'delicieux',
    'Kebab au Poulet': 'poulet',
    'Kebab Poulet': 'poulet',
    'Kafta-Kebab': 'kefta',
    'Kefta-Kebab': 'kefta',
    'Kebab Mixte': 'mixte',
    'Kebab Croustillant': 'croustillant',
    'Kebab Croquant': 'croustillant',
  };

  const categories = {
    antipasti: { title: t.categories.antipasti.title, subtitle: t.categories.antipasti.subtitle, data: data.antipasti },
    primi: { title: t.categories.primi.title, subtitle: t.categories.primi.subtitle, data: data.primi },
    secondi: { title: t.categories.secondi.title, subtitle: t.categories.secondi.subtitle, data: data.secondi },
    dolci: { title: t.categories.dolci.title, subtitle: t.categories.dolci.subtitle, data: data.dolci },
    kebabs: { title: t.categories.kebabs.title, subtitle: t.categories.kebabs.subtitle, data: data.kebabs },
    boissons: { title: t.categories.boissons.title, subtitle: t.categories.boissons.subtitle, data: data.boissons },
    boissonsChaudes: { title: t.categories.boissonsChaudes.title, subtitle: t.categories.boissonsChaudes.subtitle, data: data.boissonsChaudes },
    cocktails: { title: t.categories.cocktails.title, subtitle: t.categories.cocktails.subtitle, data: data.cocktails },
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={t.subtitle} />
        <h1 className="headtext__cormorant">{t.title}</h1>
      </div>

      {/* Menu Category Tabs */}
      <div className="app__specialMenu-tabs">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            type="button"
            className={`app__specialMenu-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            <span className="tab-title">{categories[key].title}</span>
            <span className="tab-subtitle">{categories[key].subtitle}</span>
          </button>
        ))}
      </div>

      {/* Menu Items Display */}
      <div className="app__specialMenu-menu_full">
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_items-grid">
          {categories[activeCategory].data.map((item, index) => {
            const itemKey = menuKeys[item.title];
            const translatedDescription = language === 'fr'
              ? item.description
              : getMenuDescription(itemKey, language) || item.description;
            const translatedTags = getMenuTags(item.tags, language);
            const translatedTitle = getMenuTitle(item.title, language);

            return (
              <MenuItem
                key={item.title + index}
                title={translatedTitle}
                tags={translatedTags}
                description={translatedDescription}
              />
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <p className="p__opensans" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {t.footer}
        </p>
        <button type="button" className="custom__button">{t.reserveButton}</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
