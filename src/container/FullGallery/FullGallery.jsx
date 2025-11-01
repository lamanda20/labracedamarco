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
        fr: 'Bruschetta Classique',
        en: 'Classic Bruschetta',
        es: 'Bruschetta Clásica',
        de: 'Klassische Bruschetta',
        it: 'Bruschetta Classica',
        pt: 'Bruschetta Clássica',
      },
      description: {
        fr: 'Pain grillé à l\'ail garni de tomates fraîches, basilic et huile d\'olive extra vierge. Un classique italien intemporel qui éveille les papilles avec sa fraîcheur méditerranéenne.',
        en: 'Grilled garlic bread topped with fresh tomatoes, basil and extra virgin olive oil. A timeless Italian classic that awakens the taste buds with Mediterranean freshness.',
        es: 'Pan tostado con ajo cubierto con tomates frescos, albahaca y aceite de oliva virgen extra. Un clásico italiano atemporal que despierta el paladar con frescura mediterránea.',
        de: 'Geröstetes Knoblauchbrot mit frischen Tomaten, Basilikum und nativem Olivenöl extra. Ein zeitloser italienischer Klassiker mit mediterraner Frische.',
        it: 'Pane tostato all\'aglio guarnito con pomodori freschi, basilico e olio extravergine d\'oliva. Un classico italiano senza tempo che risveglia il palato con freschezza mediterranea.',
        pt: 'Pão torrado com alho coberto com tomates frescos, manjericão e azeite virgem extra. Um clássico italiano atemporal que desperta com frescura mediterrânea.',
      },
      category: 'antipasti',
    },
    {
      id: 2,
      image: images.gallery06,
      title: {
        fr: 'Risotto aux Champignons Sauvages',
        en: 'Wild Mushroom Risotto',
        es: 'Risotto de Hongos Silvestres',
        de: 'Wildes Pilz-Risotto',
        it: 'Risotto ai Funghi Selvatici',
        pt: 'Risoto de Cogumelos Selvagens',
      },
      description: {
        fr: 'Riz crémeux Arborio aux champignons porcini, pleurotes et chanterelles, enrichi de parmesan Parmigiano Reggiano et truffe blanche d\'Alba. Une expérience gastronomique raffinée du Nord de l\'Italie qui célèbre les saveurs de la forêt.',
        en: 'Creamy Arborio rice with porcini, oyster mushrooms and chanterelles, enriched with Parmigiano Reggiano and white Alba truffle. A refined Northern Italian gastronomic experience celebrating forest flavors.',
        es: 'Arroz Arborio cremoso con porcini, setas ostra y rebozuelos, enriquecido con Parmigiano Reggiano y trufa blanca de Alba. Una experiencia gastronómica refinada del norte de Italia.',
        de: 'Cremiger Arborio-Reis mit Steinpilzen, Austernpilzen und Pfifferlingen, angereichert mit Parmigiano Reggiano und weißem Alba-Trüffel.',
        it: 'Riso Arborio cremoso con funghi porcini, pleurotus e finferli, arricchito con Parmigiano Reggiano e tartufo bianco d\'Alba. Un\'esperienza gastronomica raffinata del Nord Italia che celebra i sapori del bosco.',
        pt: 'Arroz Arborio cremoso com porcini, cogumelos ostra e cantarelos, enriquecido com Parmigiano Reggiano e trufa branca de Alba.',
      },
      category: 'primi',
    },
    {
      id: 3,
      image: images.gallery07,
      title: {
        fr: 'Osso Buco alla Milanese',
        en: 'Milanese-Style Osso Buco',
        es: 'Osso Buco a la Milanesa',
        de: 'Osso Buco nach Mailänder Art',
        it: 'Osso Buco alla Milanese',
        pt: 'Osso Buco à Milanesa',
      },
      description: {
        fr: 'Jarret de veau braisé lentement pendant 4 heures dans un bouillon de vin blanc, tomates San Marzano et légumes aromatiques. Servi avec une gremolata fraîche (persil, citron, ail) et un risotto milanais au safran doré. Un plat emblématique de la Lombardie.',
        en: 'Veal shank slowly braised for 4 hours in white wine broth, San Marzano tomatoes and aromatic vegetables. Served with fresh gremolata (parsley, lemon, garlic) and golden saffron Milanese risotto. An iconic dish from Lombardy.',
        es: 'Jarrete de ternera estofado lentamente durante 4 horas en caldo de vino blanco, tomates San Marzano y verduras aromáticas. Servido con gremolata fresca y risotto milanés con azafrán.',
        de: 'Kalbshaxe 4 Stunden langsam geschmort in Weißweinbrühe, San Marzano Tomaten und aromatischem Gemüse. Mit frischer Gremolata und goldenem Safran-Risotto serviert.',
        it: 'Stinco di vitello brasato lentamente per 4 ore in brodo di vino bianco, pomodori San Marzano e verdure aromatiche. Servito con gremolata fresca (prezzemolo, limone, aglio) e risotto milanese allo zafferano dorato. Un piatto emblematico della Lombardia.',
        pt: 'Jarrete de vitela cozido lentamente por 4 horas em caldo de vinho branco, tomates San Marzano e legumes aromáticos. Servido com gremolata fresca e risoto milanês com açafrão.',
      },
      category: 'secondi',
    },
    {
      id: 4,
      image: images.gallery08,
      title: {
        fr: 'Tiramisu Traditionnel',
        en: 'Traditional Tiramisu',
        es: 'Tiramisú Tradicional',
        de: 'Traditionelles Tiramisu',
        it: 'Tiramisù Tradizionale',
        pt: 'Tiramisu Tradicional',
      },
      description: {
        fr: 'Le dessert italien par excellence : biscuits Savoiardi imbibés de café espresso italien, mascarpone onctueux battu avec des jaunes d\'œufs et sucre, saupoudré de cacao pur. Préparé selon la recette traditionnelle vénitienne, c\'est une finale douce et inoubliable.',
        en: 'The ultimate Italian dessert: Savoiardi ladyfingers soaked in Italian espresso, creamy mascarpone whipped with egg yolks and sugar, dusted with pure cocoa. Prepared according to traditional Venetian recipe, it\'s a sweet and unforgettable finale.',
        es: 'El postre italiano por excelencia: bizcochos Savoiardi empapados en café espresso italiano, mascarpone cremoso batido con yemas de huevo y azúcar, espolvoreado con cacao puro.',
        de: 'Das ultimative italienische Dessert: Savoiardi-Löffelbiskuits in italienischem Espresso getränkt, cremiges Mascarpone mit Eigelb und Zucker geschlagen, mit reinem Kakao bestäubt.',
        it: 'Il dessert italiano per eccellenza: biscotti Savoiardi imbevuti di caffè espresso italiano, mascarpone cremoso montato con tuorli d\'uovo e zucchero, spolverato di cacao puro. Preparato secondo la ricetta tradizionale veneziana, è un finale dolce e indimenticabile.',
        pt: 'A sobremesa italiana por excelência: biscoitos Savoiardi embebidos em café expresso italiano, mascarpone cremoso batido com gemas e açúcar, polvilhado com cacau puro.',
      },
      category: 'dolci',
    },
    {
      id: 5,
      image: images.gallery09,
      title: {
        fr: 'Carpaccio di Manzo',
        en: 'Beef Carpaccio',
        es: 'Carpaccio de Res',
        de: 'Rindfleisch-Carpaccio',
        it: 'Carpaccio di Manzo',
        pt: 'Carpaccio de Carne',
      },
      description: {
        fr: 'Fines tranches de bœuf cru de première qualité, arrosées d\'huile d\'olive, jus de citron, copeaux de parmesan et roquette fraîche. Créé en 1950 au Harry\'s Bar de Venise, ce plat délicat incarne l\'élégance italienne.',
        en: 'Thin slices of premium raw beef, drizzled with olive oil, lemon juice, parmesan shavings and fresh arugula. Created in 1950 at Harry\'s Bar in Venice, this delicate dish embodies Italian elegance.',
        es: 'Finas lonchas de carne cruda premium, rociadas con aceite de oliva, jugo de limón, virutas de parmesano y rúcula fresca. Creado en 1950 en el Harry\'s Bar de Venecia.',
        de: 'Dünne Scheiben von Premium-Rohrindfleisch, beträufelt mit Olivenöl, Zitronensaft, Parmesanspänen und frischer Rucola. 1950 in der Harry\'s Bar in Venedig kreiert.',
        it: 'Fettine sottili di manzo crudo di prima qualità, condite con olio d\'oliva, succo di limone, scaglie di parmigiano e rucola fresca. Creato nel 1950 all\'Harry\'s Bar di Venezia, questo piatto delicato incarna l\'eleganza italiana.',
        pt: 'Fatias finas de carne crua premium, regadas com azeite, suco de limão, lascas de parmesão e rúcula fresca. Criado em 1950 no Harry\'s Bar em Veneza.',
      },
      category: 'antipasti',
    },
    {
      id: 6,
      image: images.gallery10,
      title: {
        fr: 'Pasta Carbonara Authentique',
        en: 'Authentic Carbonara Pasta',
        es: 'Pasta Carbonara Auténtica',
        de: 'Authentische Carbonara-Pasta',
        it: 'Pasta Carbonara Autentica',
        pt: 'Pasta Carbonara Autêntica',
      },
      description: {
        fr: 'Spaghetti al dente enrobés d\'une sauce crémeuse aux œufs, pecorino romano DOP, guanciale croustillant et poivre noir fraîchement moulu. Sans crème ! La vraie recette romaine qui fait fondre.',
        en: 'Al dente spaghetti coated in a creamy sauce of eggs, pecorino romano DOP, crispy guanciale and freshly ground black pepper. No cream! The authentic Roman recipe that melts in your mouth.',
        es: 'Espaguetis al dente cubiertos con una salsa cremosa de huevos, pecorino romano DOP, guanciale crujiente y pimienta negra recién molida. ¡Sin crema! La auténtica receta romana.',
        de: 'Al dente Spaghetti mit einer cremigen Sauce aus Eiern, Pecorino Romano DOP, knusprigem Guanciale und frisch gemahlenem schwarzem Pfeffer. Keine Sahne!',
        it: 'Spaghetti al dente avvolti in una salsa cremosa di uova, pecorino romano DOP, guanciale croccante e pepe nero appena macinato. Senza panna! La vera ricetta romana che si scioglie in bocca.',
        pt: 'Espaguete al dente coberto com molho cremoso de ovos, pecorino romano DOP, guanciale crocante e pimenta-do-reino moída na hora. Sem creme!',
      },
      category: 'primi',
    },
    {
      id: 7,
      image: images.gallery11,
      title: {
        fr: 'Saltimbocca alla Romana',
        en: 'Roman-Style Saltimbocca',
        es: 'Saltimbocca a la Romana',
        de: 'Römisches Saltimbocca',
        it: 'Saltimbocca alla Romana',
        pt: 'Saltimbocca à Romana',
      },
      description: {
        fr: 'Fines escalopes de veau tendres garnies de prosciutto di Parma et sauge fraîche, dorées au beurre et déglaçées au vin blanc. Le nom signifie "saute en bouche" - et pour cause ! Un classique de la cuisine romaine qui éveille tous les sens.',
        en: 'Tender thin veal cutlets topped with Parma prosciutto and fresh sage, pan-fried in butter and deglazed with white wine. The name means "jump in the mouth" - and for good reason! A Roman classic that awakens all senses.',
        es: 'Finas escalopas de ternera tiernas cubiertas con prosciutto di Parma y salvia fresca, doradas en mantequilla y desglazeadas con vino blanco. ¡Un clásico romano que despierta todos los sentidos!',
        de: 'Zarte dünne Kalbsschnitzel mit Parma-Prosciutto und frischem Salbei, in Butter angebraten und mit Weißwein abgelöscht. Der Name bedeutet "spring in den Mund"!',
        it: 'Sottili scaloppine di vitello tenere guarnite con prosciutto di Parma e salvia fresca, dorate nel burro e sfumate con vino bianco. Il nome significa "salta in bocca" - e per una buona ragione! Un classico della cucina romana che risveglia tutti i sensi.',
        pt: 'Escalopes finos de vitela cobertos com prosciutto di Parma e sálvia fresca, dourados na manteiga e deglaçados com vinho branco. O nome significa "pular na boca"!',
      },
      category: 'secondi',
    },
    {
      id: 8,
      image: images.gallery12,
      title: {
        fr: 'Panna Cotta aux Fruits Rouges',
        en: 'Panna Cotta with Red Berries',
        es: 'Panna Cotta con Frutos Rojos',
        de: 'Panna Cotta mit roten Beeren',
        it: 'Panna Cotta ai Frutti di Bosco',
        pt: 'Panna Cotta com Frutas Vermelhas',
      },
      description: {
        fr: 'Crème onctueuse à la vanille de Madagascar, délicatement prise avec de la gélatine, accompagnée d\'un coulis de fruits rouges maison (framboises, fraises, mûres). Originaire du Piémont, ce dessert délicat fond sur la langue.',
        en: 'Silky smooth Madagascar vanilla cream, delicately set with gelatin, accompanied by homemade red berry coulis (raspberries, strawberries, blackberries). Originating from Piedmont, this delicate dessert melts on the tongue.',
        es: 'Crema sedosa de vainilla de Madagascar, delicadamente cuajada con gelatina, acompañada de coulis casero de frutos rojos. Originario de Piamonte, este postre delicado se derrite en la lengua.',
        de: 'Seidig glatte Madagaskar-Vanillecreme, zart mit Gelatine gesetzt, begleitet von hausgemachtem roten Beerencoulis. Aus dem Piemont stammend, schmilzt dieses zarte Dessert auf der Zunge.',
        it: 'Crema vellutata alla vaniglia del Madagascar, delicatamente solidificata con gelatina, accompagnata da coulis di frutti di bosco fatto in casa (lamponi, fragole, more). Originario del Piemonte, questo dessert delicato si scioglie sulla lingua.',
        pt: 'Creme sedoso de baunilha de Madagascar, delicadamente definido com gelatina, acompanhado de coulis caseiro de frutas vermelhas. Originário do Piemonte, esta sobremesa delicada derrete na língua.',
      },
      category: 'dolci',
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
