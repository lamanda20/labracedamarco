import images from './images';

// ENTRÉES ET SPÉCIALITÉS
const antipasti = [
  {
    title: 'Trio de Bruschettas',
    price: '95 dh',
    tags: 'Tomate | Caprese | Pistache',
    description: 'Spécialité italienne : pain grillé à la braise, assaisonné à l\'huile d\'olive. Tomate: tomates cerises, basilic frais. Caprese: tomates, mozzarella, basilic. Pistache: tomates gratinées, stracciatella, pistache',
  },
  {
    title: 'Rouleaux de Printemps',
    price: '90 dh',
    tags: 'Pâte de riz | Légumes frais | Croquants',
    description: 'Rouleaux croustillants préparés avec une fine pâte de riz, garnis de légumes frais et croquants',
  },
  {
    title: 'Salade Caprese',
    price: '100 dh',
    tags: 'Tomates | Mozzarella Fior di Latte | Basilic',
    description: 'Tomates fraîches du domaine royal, mozzarella italienne, basilic et huile d\'olive extra vierge',
  },
  {
    title: 'Burrata',
    price: '120 dh',
    tags: 'Burrata fraîche | Velouté tomate | Pesto roquette',
    description: 'Burrata fraîche sur lit de velouté de tomate maison, agrémentée de pesto à la roquette',
  },
  {
    title: 'Carpaccio de Roastbeef',
    price: '130 dh',
    tags: 'Roastbeef | Roquette | Grana Padano',
    description: 'Fines tranches de roastbeef sur lit de roquette, copeaux de Grana Padano affiné, huile d\'olive extra vierge et citron',
  },
  {
    title: 'Vitello Tonnato',
    price: '140 dh',
    tags: 'Veau | Sauce au thon | Câpres | Anchois',
    description: 'Fines tranches de veau cuit à basse température, sauce onctueuse au thon, câpres et anchois',
  },
];

// NOS PLATS SAVOUREUX
const primi = [
  {
    title: 'Filet de Poulet Grillé',
    price: '120 dh',
    tags: 'Poulet fermier | Salade | Tomates | Pommes vapeur',
    description: 'Poulet fermier grillé, accompagné de salade fraîche, tomates cerises et pommes de terre vapeur',
  },
  {
    title: 'Côtelette Milanaise aux Céréales',
    price: '140 dh',
    tags: 'Poulet pané 5 céréales | Frites | Salade',
    description: 'Authentique côtelette de poulet à la milanaise, pané avec 5 céréales, frites et salade fraîche',
  },
  {
    title: 'Salade César',
    price: '130 dh',
    tags: 'Poulet grillé | Croûtons céréales | Parmesan',
    description: 'Lanières de poulet fermier grillé, salade, croûtons aux céréales, parmesan, tomates cerises, noix et sauce César maison base yaourt',
  },
  {
    title: 'Salade Royal César',
    price: '150 dh',
    tags: 'Poulet pané 5 céréales | Parmesan | Noix',
    description: 'Lanières de poulet pané aux 5 céréales, croûtons, parmesan italien, tomates caramélisées, noix et sauce César maison',
  },
  {
    title: 'Cordon Bleu Gourmet',
    price: '160 dh',
    tags: 'Poulet | Fromage | Dinde fumée | Croquettes',
    description: 'Filet de poulet cuit sous vide à la valdôtaine, fromage fondant et dinde fumée. Servi avec croquettes de pommes de terre',
  },
];

// SPÉCIALITÉS MAROCAINES
const secondi = [
  {
    title: 'Salade Marocaine',
    price: '80 dh',
    tags: 'Tomates | Poivrons | Concombres | Oignons',
    description: 'Salade typique marocaine avec tomates d\'Agadir, poivrons multicolores, concombres, pétales d\'oignons rouges et huile d\'olive extra vierge',
  },
  {
    title: 'Couscous aux 7 Céréales Tabulé',
    price: '110 dh',
    tags: 'Couscous 7 céréales | Légumes vapeur | Menthe',
    description: 'Couscous aux 7 céréales accompagné de légumes frais de saison cuits vapeur et feuilles de menthe fraîche, huile d\'olive italienne',
  },
  {
    title: 'Falafel',
    price: '110 dh',
    tags: 'Falafel sésame | Tomate | Concombre | Sauce yaourt',
    description: 'Petits médaillons de falafel en croûte de sésame blanc faits maison, tomate et concombre, sauce yaourt nature maison',
  },
  {
    title: 'Tajine Végétarien',
    price: '110 dh',
    tags: 'Légumes de saison | Cuisson basse température',
    description: 'Légumes frais de saison cuits à basse température dans un tajine traditionnel',
  },
  {
    title: 'Tajine Kefta aux 5 Céréales',
    price: '140 dh',
    tags: 'Boulettes bœuf | Sauce tomate | Œufs | Céréales',
    description: 'Boulettes de viande de bœuf revisitées à l\'italienne, servies sur lit de sauce tomate, œufs à la marrakchie et céréales',
  },
  {
    title: 'Tajine de Poulet à l\'Orange',
    price: '150 dh',
    tags: 'Poulet fermier | Orange | Safran | Abricot | Noix',
    description: 'Poulet fermier mariné à l\'orange et safran avec abricot caramélisé et éclats de noix croquantes',
  },
  {
    title: 'Tajine de Bœuf aux Figues',
    price: '170 dh',
    tags: 'Côte de bœuf | Figues caramélisées | Pomme verte',
    description: 'Morceaux tendres de côte de bœuf accompagnés de figues caramélisées, pomme verte et sésame blanc croquant',
  },
];

// NOS BURGERS (Tous servis avec frites)
const dolci = [
  {
    title: 'Cheddar Suprême',
    price: '120 dh',
    tags: '100% Bœuf | Cheddar | Oignons caramélisés',
    description: 'Burger juteux 100% bœuf, cheddar fondu, salade, tomates, oignons caramélisés et sauce maison',
  },
  {
    title: 'Burger au Bacon',
    price: '140 dh',
    tags: 'Bœuf grillé | Bacon | Cheddar | Sauce spéciale',
    description: 'Burger de bœuf grillé, bacon fumé croustillant, cheddar, salade, tomates, oignons caramélisés et sauce spéciale',
  },
  {
    title: 'Burger Italien',
    price: '150 dh',
    tags: 'Bœuf 100% italien | Mozzarella | Pesto | Roquette',
    description: 'Pain artisanal, burger bœuf 100% italien, mozzarella Fior di Latte, tomates, roquette et pesto menthe-roquette',
  },
  {
    title: 'Burger César',
    price: '120 dh',
    tags: 'Poulet grillé | Scamorza fumée | Sauce yaourt',
    description: 'Filet de poulet grillé, tomates, salade, scamorza fumée et sauce César maison base yaourt',
  },
  {
    title: 'Famoso',
    price: '130 dh',
    tags: 'Poulet pané 5 céréales | Salade | Sauce yaourt',
    description: 'Pain burger avec filet de poulet pané aux cinq céréales, salade, tomate et sauce maison base yaourt',
  },
  {
    title: 'Burger Falafel',
    price: '120 dh',
    tags: '100% Végétal | Falafel | Mayonnaise végétale',
    description: 'Explosion de saveurs végétales ! Burger falafel moelleux, salade, tomate et mayonnaise végétalienne',
  },
  {
    title: 'Burger Pois Chiche',
    price: '120 dh',
    tags: 'Pois chiche | Salade | Tomate | Sauce yaourt',
    description: 'Burger croquant aux pois chiche, salade, tomate et sauce maison base yaourt',
  },
  {
    title: 'Délicieux Burger Végan',
    price: '130 dh',
    tags: 'Légumes frais | Chou | Sauce yaourt',
    description: 'Burger végan savoureux à base de légumes frais grillés, chou rouge et blanc, tomate, salade et sauce maison',
  },
];

// KEBABS MAISON (Tous servis avec frites)
const kebabs = [
  {
    title: 'Kebab au Poulet',
    price: '110 dh',
    tags: 'Tortilla 30cm | Poulet mariné 150g | Sauce yaourt',
    description: 'Tortilla géante de 30 cm, 150g de poulet mariné maison, salade, tomate royale et sauce maison base yaourt',
  },
  {
    title: 'Kafta-Kebab',
    price: '120 dh',
    tags: 'Viande hachée | Salade | Sauce blanche maison',
    description: 'Tortilla garnie de viande hachée assaisonnée, feuilles de chêne, tomate royale et sauce blanche maison',
  },
  {
    title: 'Kebab Mixte',
    price: '130 dh',
    tags: 'Poulet | Viande hachée | Sauce maison',
    description: 'Tortilla garnie de poulet fermier et viande hachée, feuilles de chêne, tomates royales et sauce maison',
  },
  {
    title: 'Kebab Croquant',
    price: '130 dh',
    tags: 'Escalope milanaise | Noix | Sauce maison',
    description: 'Tortilla garnie d\'escalope de poulet fermier à la milanaise, feuilles de chêne, tomates, noix royales et sauce maison',
  },
];

// BOISSONS
const cocktails = [
  {
    title: 'Thé glacé',
    price: '50 dh',
    tags: 'Cocktail sans alcool | Rafraîchissant',
  },
  {
    title: 'Virgin Mojito',
    price: '50 dh',
    tags: 'Cocktail sans alcool | Menthe | Citron vert',
  },
  {
    title: 'Virgin Moscow Mule',
    price: '50 dh',
    tags: 'Cocktail sans alcool | Ginger beer',
  },
  {
    title: 'Arizona Sunset',
    price: '50 dh',
    tags: 'Cocktail sans alcool | Fruité',
  },
  {
    title: 'La Brace Hibiscus',
    price: '60 dh',
    tags: 'Cocktail sans alcool | Hibiscus',
  },
];

const boissons = [
  {
    title: 'Eau 1/2L',
    price: '20 dh',
    tags: 'Eau minérale',
  },
  {
    title: 'Eau 1,5L',
    price: '30 dh',
    tags: 'Eau minérale',
  },
  {
    title: 'Eau pétillante 1,2L',
    price: '25 dh',
    tags: 'Eau gazeuse',
  },
  {
    title: 'Eau pétillante 1L',
    price: '35 dh',
    tags: 'Eau gazeuse',
  },
  {
    title: 'Sodas',
    price: '30 dh',
    tags: 'Coca Cola | Coca Zero | Sprite',
  },
  {
    title: 'Jus d\'orange',
    price: '40 dh',
    tags: 'Pressé frais',
  },
];

const boissonsChaudes = [
  {
    title: 'Thé à la menthe',
    price: '25 dh',
    tags: 'Thé marocain traditionnel',
  },
  {
    title: 'Tisane',
    price: '30 dh',
    tags: 'Infusion | Différents parfums',
  },
  {
    title: 'Espresso',
    price: '25 dh',
    tags: 'Café italien',
  },
  {
    title: 'Cappuccino',
    price: '30 dh',
    tags: 'Café | Mousse de lait',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Excellence Culinaire 2025',
    subtitle: 'Reconnu pour notre fusion maroco-italienne unique.',
  },
  {
    imgUrl: images.award01,
    title: 'Meilleur Restaurant Fusion',
    subtitle: 'Prix de la gastronomie maroco-italienne.',
  },
  {
    imgUrl: images.award05,
    title: 'Certificat d\'Excellence',
    subtitle: 'Pour notre service et qualité exceptionnels.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef de l\'Année',
    subtitle: 'Marco - Maître de la cuisine fusion.',
  },
];

export default { cocktails, antipasti, primi, secondi, dolci, kebabs, boissons, boissonsChaudes, awards };
