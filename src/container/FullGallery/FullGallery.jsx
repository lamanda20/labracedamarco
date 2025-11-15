import React, { useEffect } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { images } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Navbar, ScrollToTop } from '../../components';
import { Footer } from '..';
import './FullGallery.css';

const FullGallery = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      image: images.gallery05,
      title: {
        fr: 'Vitello Tonnato',
        en: 'Vitello Tonnato',
        es: 'Vitello Tonnato',
        de: 'Vitello Tonnato',
        it: 'Vitello Tonnato',
        pt: 'Vitello Tonnato',
      },
      description: {
        fr: 'Fines tranches de veau rosé, délicatement nappées d\'une sauce onctueuse au thon et aux câpres. Un classique de la gastronomie piémontaise, servi avec de la roquette fraîche et des tomates cerises pour une entrée pleine de finesse et de saveur.',
        en: 'Thin slices of pink veal, delicately covered with a creamy tuna and caper sauce. A classic of Piedmontese gastronomy, served with fresh arugula and cherry tomatoes for a refined and flavorful starter.',
        es: 'Finas lonchas de ternera rosada, delicadamente cubiertas con una salsa cremosa de atún y alcaparras. Un clásico de la gastronomía piamontesa, servido con rúcula fresca y tomates cherry para una entrada llena de delicadeza y sabor.',
        de: 'Dünne Scheiben rosa Kalbfleisch, zart bedeckt mit einer cremigen Thunfisch-Kapern-Sauce. Ein Klassiker der piemontesischen Küche, serviert mit frischem Rucola und Kirschtomaten für eine feine und geschmackvolle Vorspeise.',
        it: 'Sottili fette di vitello rosa, delicatamente ricoperte da una salsa cremosa al tonno e capperi. Un classico della gastronomia piemontese, servito con rucola fresca e pomodorini per un antipasto ricco di finezza e sapore.',
        pt: 'Fatias finas de vitela rosada, delicadamente cobertas com um molho cremoso de atum e alcaparras. Um clássico da gastronomia piemontesa, servido com rúcula fresca e tomates-cereja para uma entrada cheia de requinte e sabor.',
      },
      category: 'antipasti',
    },
    {
      id: 2,
      image: images.gallery06,
      title: {
        fr: 'Burger Végétarien au Chou Rouge & Sauce Crémeuse',
        en: 'Vegetarian Burger with Red Cabbage & Creamy Sauce',
        es: 'Hamburguesa Vegetariana con Col Roja y Salsa Cremosa',
        de: 'Vegetarischer Burger mit Rotkohl & Cremiger Sauce',
        it: 'Burger Vegetariano con Cavolo Rosso e Salsa Cremosa',
        pt: 'Hambúrguer Vegetariano com Repolho Roxo & Molho Cremoso',
      },
      description: {
        fr: 'Découvrez notre burger végétarien audacieux et coloré ! Un délicieux steak végétal croustillant, généreusement garni de chou rouge ciselé, de tomates fraîches et d\'une sauce blanche onctueuse, le tout enveloppé dans un bun moelleux aux graines de sésame. Une explosion de saveurs et de textures, fraîche et gourmande.',
        en: 'Discover our bold and colorful vegetarian burger! A delicious crispy plant-based patty, generously topped with shredded red cabbage, fresh tomatoes, and a creamy white sauce, all wrapped in a soft sesame seed bun. An explosion of fresh and gourmet flavors and textures.',
        es: '¡Descubre nuestra hamburguesa vegetariana atrevida y colorida! Una deliciosa hamburguesa vegetal crujiente, generosamente cubierta con col roja picada, tomates frescos y una salsa blanca cremosa, todo envuelto en un panecillo suave con semillas de sésamo. Una explosión de sabores y texturas frescas y gourmet.',
        de: 'Entdecken Sie unseren mutigen und farbenfrohen vegetarischen Burger! Ein köstliches, knuspriges pflanzliches Patty, großzügig belegt mit fein geschnittenem Rotkohl, frischen Tomaten und einer cremigen weißen Sauce, alles in einem weichen Sesambrötchen. Eine Explosion frischer und köstlicher Aromen und Texturen.',
        it: 'Scopri il nostro audace e colorato burger vegetariano! Una deliziosa polpetta vegetale croccante, generosamente farcita con cavolo rosso tagliato, pomodori freschi e una salsa bianca cremosa, il tutto racchiuso in un soffice panino ai semi di sesamo. Un\'esplosione di sapori e consistenze, fresca e golosa.',
        pt: 'Descubra o nosso hambúrguer vegetariano ousado e colorido! Um delicioso hambúrguer vegetal crocante, generosamente recheado com repolho roxo fatiado, tomates frescos e um molho branco cremoso, tudo envolto em um pão macio com sementes de sésamo. Uma explosão de sabores e texturas, fresca e deliciosa.',
      },
      category: 'primi',
    },
    {
      id: 3,
      image: images.gallery07,
      title: {
        fr: 'Salade Caprese',
        en: 'Caprese Salad',
        es: 'Ensalada Caprese',
        de: 'Caprese-Salat',
        it: 'Insalata Caprese',
        pt: 'Salada Caprese',
      },
      description: {
        fr: 'L\'incontournable classique italien. De généreuses tranches de tomates mûres et de mozzarella di bufala onctueuse, délicatement posées sur un lit de roquette et parsemées de basilic frais. Un simple filet d\'huile d\'olive extra vierge, quelques croûtons dorés et des tomates cerises pour une entrée pleine de fraîcheur et de soleil.',
        en: 'The essential Italian classic. Generous slices of ripe tomatoes and creamy buffalo mozzarella, delicately placed on a bed of arugula and sprinkled with fresh basil. A simple drizzle of extra virgin olive oil, a few golden croutons, and cherry tomatoes for a starter full of freshness and sunshine.',
        es: 'El clásico italiano imprescindible. Generosas rodajas de tomates maduros y cremosa mozzarella de búfala, delicadamente dispuestas sobre una cama de rúcula y espolvoreadas con albahaca fresca. Un simple chorrito de aceite de oliva virgen extra, algunos picatostes dorados y tomates cherry para una entrada llena de frescura y sol.',
        de: 'Der unverzichtbare italienische Klassiker. Großzügige Scheiben reifer Tomaten und cremiger Büffelmozzarella, zart auf einem Rucolabett angerichtet und mit frischem Basilikum bestreut. Ein Schuss extra natives Olivenöl, einige goldene Croutons und Kirschtomaten für eine Vorspeise voller Frische und Sonnenschein.',
        it: 'L\'immancabile classico italiano. Fette generose di pomodori maturi e mozzarella di bufala cremosa, adagiate delicatamente su un letto di rucola e cosparse di basilico fresco. Un semplice filo d\'olio extravergine d\'oliva, qualche crostino dorato e pomodorini per un antipasto ricco di freschezza e sole.',
        pt: 'O clássico italiano indispensável. Fatias generosas de tomates maduros e mozzarella de búfala cremosa, delicadamente dispostas sobre uma cama de rúcula e polvilhadas com manjericão fresco. Um simples fio de azeite extra virgem, alguns croutons dourados e tomates-cereja para uma entrada cheia de frescor e sol.',
      },
      category: 'antipasti',
    },

  ];

  const getCategoryName = (category) => {
    const categories = {
      antipasti: {
        fr: 'Entrées',
        en: 'Appetizers',
        es: 'Entrantes',
        de: 'Vorspeisen',
        it: 'Antipasti',
        pt: 'Entradas',
      },
      primi: {
        fr: 'Premiers Plats',
        en: 'First Courses',
        es: 'Primeros Platos',
        de: 'Erste Gänge',
        it: 'Primi Piatti',
        pt: 'Primeiros Pratos',
      },
      secondi: {
        fr: 'Plats Principaux',
        en: 'Main Courses',
        es: 'Platos Principales',
        de: 'Hauptgerichte',
        it: 'Secondi Piatti',
        pt: 'Pratos Principais',
      },
      dolci: {
        fr: 'Desserts',
        en: 'Desserts',
        es: 'Postres',
        de: 'Desserts',
        it: 'Dolci',
        pt: 'Sobremesas',
      },
    };
    return categories[category][language] || categories[category].fr;
  };

  const pageTitle = {
    fr: 'Notre Galerie Gastronomique',
    en: 'Our Gastronomic Gallery',
    es: 'Nuestra Galería Gastronómica',
    de: 'Unsere Gastronomische Galerie',
    it: 'La Nostra Galleria Gastronomica',
    pt: 'Nossa Galeria Gastronômica',
  };

  const pageSubtitle = {
    fr: 'Découvrez nos créations culinaires italiennes authentiques',
    en: 'Discover our authentic Italian culinary creations',
    es: 'Descubre nuestras auténticas creaciones culinarias italianas',
    de: 'Entdecken Sie unsere authentischen italienischen kulinarischen Kreationen',
    it: 'Scopri le nostre autentiche creazioni culinarie italiane',
    pt: 'Descubra nossas autênticas criações culinárias italianas',
  };

  const backButton = {
    fr: 'Retour',
    en: 'Back',
    es: 'Volver',
    de: 'Zurück',
    it: 'Indietro',
    pt: 'Voltar',
  };

  return (
    <div className="app__fullgallery">
      <Navbar />

      <div className="app__fullgallery-header app__bg">
        <h1 className="headtext__cormorant fade-in-up">{pageTitle[language]}</h1>
        <p className="p__opensans fade-in-up delay-200">{pageSubtitle[language]}</p>
        <button
          type="button"
          className="custom__button fade-in-up delay-300"
          onClick={() => window.history.back()}
        >
          {backButton[language]}
        </button>
      </div>

      <div className="app__fullgallery-content section__padding">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`app__fullgallery-item ${index % 2 === 0 ? 'reverse' : ''} fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="app__fullgallery-item_image hover-zoom">
              <img src={item.image} alt={item.title[language]} />
              <div className="app__fullgallery-item_overlay">
                <BsInstagram className="gallery__image-icon" />
              </div>
            </div>

            <div className="app__fullgallery-item_content">
              <span className="app__fullgallery-category">
                {getCategoryName(item.category)}
              </span>
              <h2 className="headtext__cormorant">{item.title[language]}</h2>
              <div className="app__fullgallery-divider">
                <img src={images.spoon} alt="spoon" className="spoon__img" />
              </div>
              <p className="p__opensans">{item.description[language]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="app__fullgallery-footer section__padding">
        <p className="p__opensans" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {language === 'fr' && 'Réservez votre table pour une expérience culinaire inoubliable'}
          {language === 'en' && 'Book your table for an unforgettable culinary experience'}
          {language === 'es' && 'Reserve su mesa para una experiencia culinaria inolvidable'}
          {language === 'de' && 'Reservieren Sie Ihren Tisch für ein unvergessliches kulinarisches Erlebnis'}
          {language === 'it' && 'Prenota il tuo tavolo per un\'esperienza culinaria indimenticabile'}
          {language === 'pt' && 'Reserve sua mesa para uma experiência culinária inesquecível'}
        </p>
        <button type="button" className="custom__button">
          {language === 'fr' && 'Réserver Maintenant'}
          {language === 'en' && 'Book Now'}
          {language === 'es' && 'Reservar Ahora'}
          {language === 'de' && 'Jetzt Reservieren'}
          {language === 'it' && 'Prenota Ora'}
          {language === 'pt' && 'Reservar Agora'}
        </button>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FullGallery;
