/**
 * Catalogue des Reliques & Artefacts - L'Antre des Âmes Perdues
 * Base de données des produits d'Halloween avec lore, malédictions et prix en FCFA
 */

const HALLOWEEN_PRODUCTS = [
  {
    id: "relic-01",
    name: "Grimoire de Nécromancie Antique",
    subtitle: "Reliure en cuir d'outre-tombe & fermoir d'argent spectral",
    category: "grimoires",
    categoryName: "Grimoires & Rituels",
    price: 125000,
    oldPrice: 165000,
    curseLevel: "Mortel",
    curseLevelClass: "curse-deadly",
    rating: 4.9,
    reviewsCount: 66,
    badge: "Banni du Vatican",
    inStock: 3,
    description: "Rédigé au XIVe siècle par un mage noir anonyme, ce grimoire murmure des psaumes oubliés dès que la lune franchit son zénith. Ses pages en parchemin d'origine contiennent 77 incantations pour invoquer les ombres et dialoguer avec les défunts.",
    warnings: "Ne pas ouvrir un soir de pleine lune sans un cercle de sel protecteur.",
    details: [
      "Pages en vélin véritable aux bords brûlés",
      "Encre à base de sang de corbeau et suie d'encens",
      "Fermoir gravé de runes de scellement arcaniques",
      "Émet un léger chuchotement nocturne perceptible à moins de 2 mètres"
    ],
    iconType: "grimoire",
    reviews: [
      { author: "Bartholomé L. (Médium)", date: "Il y a 3 nuits", comment: "Le livre a commencé à léviter dès que j'ai éteint ma bougie. Absolument terrifiant et authentique !", stars: 5 },
      { author: "Dame Morbide", date: "Il y a 1 semaine", comment: "Les murmures sont devenus mes compagnons de sommeil. Emballage soigné avec poussière de crypte.", stars: 5 }
    ]
  },
  {
    id: "relic-02",
    name: "Potion 'Élixir Spectral de Minuit'",
    subtitle: "Flasque en verre de crâne & fumée verdâtre perpétuelle",
    category: "potions",
    categoryName: "Potions & Poisons",
    price: 32500,
    oldPrice: 45000,
    curseLevel: "Dangereux",
    curseLevelClass: "curse-danger",
    rating: 4.8,
    reviewsCount: 114,
    badge: "Bioluminescent",
    inStock: 12,
    description: "Distillée dans les cryptes des marais brumeux, cette fiole de verre soufflé en forme de crâne renferme un liquide émeraude luminescent produisant une vapeur glaciale continue. Idéale pour les autels d'Halloween et les rituels de clairvoyance.",
    warnings: "Strictement décoratif et rituel. Ne jamais consommer.",
    details: [
      "Verre artisanal vieilli avec craquelures contrôlées",
      "Bouchon en liège calciné scellé à la cire noire de suif",
      "Brille dans le noir le plus complet (lueur spectrale verte)",
      "Effet de bouillonnement intérieur statique hypnotisant"
    ],
    iconType: "potion",
    reviews: [
      { author: "Corbeau_Noir", date: "Il y a 5 jours", comment: "La lueur verte dans mon salon projette des ombres vivantes sur le plafond. Effet garanti !", stars: 5 }
    ]
  },
  {
    id: "relic-03",
    name: "Masque d'Invocateur Démoniaque",
    subtitle: "Porcelaine fissurée, cornes de bouc & larmes d'ébène",
    category: "masques",
    categoryName: "Masques d'Épouvante",
    price: 85000,
    oldPrice: 110000,
    curseLevel: "Interdit",
    curseLevelClass: "curse-forbidden",
    rating: 5.0,
    reviewsCount: 89,
    badge: "Pièce Unique",
    inStock: 2,
    description: "Inspiré des processions ésotériques vénitiennes du XVIe siècle, ce masque d'effroi s'adapte au visage de son porteur en épousant sa température corporelle jusqu'à donner l'illusion d'une seconde peau démoniaque.",
    warnings: "Peut provoquer des visions cauchemardesques lors d'un port prolongé.",
    details: [
      "Porcelaine composite ultra-résistante à finition ivoire funéraire",
      "Cornes sculptées à la main avec patine d'os ancien",
      "Doublure intérieure en velours pourpre capitonné",
      "Attache par sangles de cuir patiné et boucles en fer forgé"
    ],
    iconType: "mask",
    reviews: [
      { author: "Lord_Malice", date: "Hier", comment: "Mes invités ont hurlé en me voyant apparaître dans le vestibule sombre. Une œuvre d'art morbide !", stars: 5 }
    ]
  },
  {
    id: "relic-04",
    name: "Lanterne aux Âmes Tourmentées",
    subtitle: "Fer forgé gothique & flamme bleue d'ectoplasme",
    category: "reliques",
    categoryName: "Reliques Maudites",
    price: 56000,
    oldPrice: 75000,
    curseLevel: "Faible",
    curseLevelClass: "curse-low",
    rating: 4.7,
    reviewsCount: 42,
    badge: "Flamme Éternelle",
    inStock: 7,
    description: "Forgée dans un cimetière oublié sous un orage d'équinoxe, cette lanterne gothique projette une flamme bleu cobalt sans combustion ni chaleur, ondulant comme un spectre emprisonné cherchant à s'échapper des barreaux.",
    warnings: "Éviter d'approcher des miroirs anciens pour ne pas libérer l'esprit.",
    details: [
      "Fer forgé artisanal rouillé et traité anti-oxydation",
      "Vitres gravées de chauves-souris et arabesques funéraires",
      "Système LED spectral avec vacillement réaliste et autonomie infinie",
      "Poignée de suspension robuste pour perchoir ou marche nocturne"
    ],
    iconType: "lantern",
    reviews: [
      { author: "Sœur Ténébreuse", date: "Il y a 2 semaines", comment: "La flamme vacille exactement comme une vraie lueur d'outre-monde. Ambiance crypte instantanée !", stars: 5 }
    ]
  },
  {
    id: "relic-05",
    name: "Dague Rituelle d'Os d'Obsidienne",
    subtitle: "Lame de verre volcanique taillée & manche sculpté",
    category: "reliques",
    categoryName: "Reliques Maudites",
    price: 95000,
    oldPrice: 120000,
    curseLevel: "Mortel",
    curseLevelClass: "curse-deadly",
    rating: 4.9,
    reviewsCount: 53,
    badge: "Relique Sacrée",
    inStock: 4,
    description: "Taillée dans un unique bloc d'obsidienne noire aux reflets pourpres, cette lame d'apparat rituelle capte la moindre once de lumière pour la refléter sous forme d'éclats sanglants. Utilisée pour tracer les cercles de conjuration.",
    warnings: "Lame rituelle non aiguisée mais tranchant métaphysique garanti.",
    details: [
      "Véritable obsidienne naturelle et manche en résine d'os fossilisé",
      "Runes gravées incrustées de pigments rouge carmin luisants",
      "Fourreau de velours noir brodé de fils d'argent vieilli",
      "Livrée dans son coffret en chêne brûlé tapissé de soie"
    ],
    iconType: "dagger",
    reviews: [
      { author: "Ignis_Umbra", date: "Il y a 4 jours", comment: "Le poids en main est hypnotisant. La boîte sent la cire et l'encens antique.", stars: 5 }
    ]
  },
  {
    id: "relic-06",
    name: "Poupée Vaudou 'L'Affligée'",
    subtitle: "Toile de jute cousue main, yeux boutons & épingles noires",
    category: "reliques",
    categoryName: "Reliques Maudites",
    price: 26000,
    oldPrice: 38000,
    curseLevel: "Dangereux",
    curseLevelClass: "curse-danger",
    rating: 4.6,
    reviewsCount: 78,
    badge: "Possédée",
    inStock: 9,
    description: "Chaque poupée est confectionnée à la main au son de chants occultes. Elle est livrée avec sept épingles à tête d'onyx et une amulette protectrice pour diriger ou absorber les énergies malveillantes de votre demeure.",
    warnings: "Ne jamais planter d'aiguille dans le cœur un vendredi 13.",
    details: [
      "Toile de lin rustique teintée au thé noir et brou de noix",
      "Boutons d'os vintage disparates avec coutures rouges croisées",
      "7 épingles rituelles en acier noirci incluses",
      "Rembourrage aromatique de sauge blanche, armoise et sel noir"
    ],
    iconType: "doll",
    reviews: [
      { author: "Madame Samedi", date: "Il y a 6 jours", comment: "Son regard en bouton vous suit dans toute la pièce. Un must-have pour mon autel.", stars: 5 }
    ]
  },
  {
    id: "relic-07",
    name: "Couronne d'Épines du Roi Citrouille",
    subtitle: "Ronce calcinée, fleurs fanées & gemmes d'ambre ardente",
    category: "costumes",
    categoryName: "Costumes & Parures",
    price: 52000,
    oldPrice: 68000,
    curseLevel: "Faible",
    curseLevelClass: "curse-low",
    rating: 4.9,
    reviewsCount: 31,
    badge: "Royauté d'Halloween",
    inStock: 6,
    description: "Tressée avec des sarments de ronces séchées prélevées au cœur des champs de citrouilles maudits de Salem. Ornée de cristaux d'ambre capturant la lueur des flammes pour couronner le souverain de la nuit d'épouvante.",
    warnings: "Prendre garde aux pointes fines lors de l'ajustement.",
    details: [
      "Structure malléable s'adaptant à tout tour de tête",
      "Finitions laquées sombres résistantes aux intempéries",
      "Petites LED micro-cristallines cachées dans les roses noires",
      "Effet braises ardentes flamboyant dans l'obscurité"
    ],
    iconType: "crown",
    reviews: [
      { author: "Reine_Des_Ombres", date: "Il y a 1 semaine", comment: "Portée pour le gala de l'horreur. J'ai remporté le premier prix sans contestation !", stars: 5 }
    ]
  },
  {
    id: "relic-08",
    name: "Calice Vampire en Argent d'Ébène",
    subtitle: "Calice d'apparat gothique orné d'un rubis sang de pigeon",
    category: "reliques",
    categoryName: "Reliques Maudites",
    price: 45500,
    oldPrice: 60000,
    curseLevel: "Dangereux",
    curseLevelClass: "curse-danger",
    rating: 4.8,
    reviewsCount: 64,
    badge: "Sang Royal",
    inStock: 8,
    description: "Inspiré des banquets de la noblesse transylvanienne de 1782. Ce calice massif en alliage d'argent vieilli présente des chauves-souris en bas-relief enserrant une gemme carmine éclatante au pied du verre.",
    warnings: "Donne un goût troublant de nectar aux boissons les plus communes.",
    details: [
      "Alliage lourd de qualité alimentaire avec insert en acier inoxydable",
      "Gravures baroques fines et patine noire ombrée",
      "Contenance généreuse de 350ml",
      "Pied lesté feutré évitant toute rayure sur votre nappe de velours"
    ],
    iconType: "chalice",
    reviews: [
      { author: "Comte_V", date: "Il y a 3 jours", comment: "Le poids est parfait, les détails gothiques sont saisissants de majesté.", stars: 5 }
    ]
  },
  {
    id: "relic-09",
    name: "Boîte à Musique de l'Orphelinat Hanté",
    subtitle: "Mélodie grinçante inversée & ballerine spectrale brisée",
    category: "reliques",
    categoryName: "Reliques Maudites",
    price: 75000,
    oldPrice: 98000,
    curseLevel: "Interdit",
    curseLevelClass: "curse-forbidden",
    rating: 5.0,
    reviewsCount: 97,
    badge: "Phénomène Paranormal",
    inStock: 1,
    description: "Retrouvée dans les ruines d'un manoir victorien incendié. Lorsqu'on actionne sa manivelle rouillée, elle diffuse une berceuse enfantine ralentie et hypnotique accompagnée du rire étouffé d'une fillette invisible.",
    warnings: "Se remonte parfois toute seule à 3h33 du matin.",
    details: [
      "Mécanisme d'horlogerie suisse du XIXe siècle restauré et altéré",
      "Bois de noyer noirci sculpté de visages en pleurs",
      "Ballerine en porcelaine peinte à la main qui danse par saccades",
      "Fermoir avec clé squelette d'époque"
    ],
    iconType: "musicbox",
    reviews: [
      { author: "Chasseur_de_Fantomes", date: "Il y a 2 jours", comment: "Tous nos détecteurs EMF ont explosé en jouant la mélodie. Frissons absolus garantis !", stars: 5 }
    ]
  },
  {
    id: "relic-10",
    name: "Miroir d'Âmes aux Reflets Tardifs",
    subtitle: "Glace biseautée où votre reflet tarde d'une demi-seconde",
    category: "reliques",
    categoryName: "Reliques Maudites",
    price: 130000,
    oldPrice: 175000,
    curseLevel: "Interdit",
    curseLevelClass: "curse-forbidden",
    rating: 4.9,
    reviewsCount: 45,
    badge: "Anomalie Temporelle",
    inStock: 3,
    description: "Ce miroir baroque à cadre doré terni par les siècles crée une angoisse viscérale immédiate : le reflet de la personne qui le regarde cligne des yeux ou sourit avec un décalage d'une fraction de seconde perceptible.",
    warnings: "Ne pas fixer le regard de votre reflet plus de 3 minutes consécutives.",
    details: [
      "Cadre en résine dorée patinée à la feuille d'or usée et toiles d'araignées incrustées",
      "Miroir optique à effet de profondeur spectrale troublant",
      "Dimensions : 65cm x 45cm avec attache murale renforcée",
      "Certificat d'exorcisme non garanti fourni sous scellé"
    ],
    iconType: "mirror",
    reviews: [
      { author: "Victor_M", date: "Il y a 4 jours", comment: "J'ai failli lâcher mon verre quand j'ai vu mon reflet sourire avant moi. Une prouesse visuelle !", stars: 5 }
    ]
  },
  {
    id: "relic-11",
    name: "Balai de Sorcière 'Vol de Minuit'",
    subtitle: "Bois de saule pleureur centenaire & brindilles de bruyère noire",
    category: "costumes",
    categoryName: "Costumes & Parures",
    price: 62000,
    oldPrice: 82000,
    curseLevel: "Dangereux",
    curseLevelClass: "curse-danger",
    rating: 4.7,
    reviewsCount: 38,
    badge: "Artisanat Sabbat",
    inStock: 5,
    description: "Récolté lors d'un sabbat sous la lune noire, le manche en bois de saule torsadé porte des symboles d'alchimie pyrogravés. Les brindilles sont liées avec des lanières de cuir teinté de suie et d'huiles de belladone.",
    warnings: "Ne pas tenter de léviter sans pommade de vol appropriée.",
    details: [
      "Longueur totale : 135cm de bois massif poli et huilé",
      "Plumes de corbeau et fétiches d'os suspendus au manche",
      "Poids équilibré pour parade ou décoration de salon gothique",
      "Dégage une douce odeur de feu de bois et d'épices d'automne"
    ],
    iconType: "broom",
    reviews: [
      { author: "Morgana_Raven", date: "Il y a 1 semaine", comment: "La finition est authentique, rien à voir avec les babioles en plastique des magasins ordinaires !", stars: 5 }
    ]
  },
  {
    id: "relic-12",
    name: "Crâne d'Écho aux Yeux de Rubis",
    subtitle: "Os fossilisé & cavité crânienne résonnante de chuchotements",
    category: "decorations",
    categoryName: "Décorations Macabres",
    price: 58000,
    oldPrice: 78000,
    curseLevel: "Dangereux",
    curseLevelClass: "curse-danger",
    rating: 4.8,
    reviewsCount: 72,
    badge: "Capteur Sonore",
    inStock: 8,
    description: "Réplique anatomique hyper-réaliste vieillie dans de la tourbe acide. Ses orbites sont serties de faux rubis sang qui s'illuminent discrètement dès qu'un visiteur chuchote à proximité, émettant un grondement rauque d'outre-tombe.",
    warnings: "Capteurs de mouvement et de son sensibles : peut effrayer vos animaux.",
    details: [
      "Résine dense texturée reproduisant le toucher exact d'un os séculaire",
      "Machoire inférieure articulée manuellement",
      "Module audio autonome dissimulé avec 5 répliques macabres aléatoires",
      "Alimentation par batterie rechargeable USB-C discrètement cachée sous la base"
    ],
    iconType: "skull",
    reviews: [
      { author: "Cimetière_Lover", date: "Hier", comment: "Posé sur le buffet d'entrée, il a fait sursauter tous mes collègues lors de la soirée !", stars: 5 }
    ]
  }
];

// Cartes du Tarot de l'Infortune (Mini-jeu interactif)
const TAROT_CARDS = [
  {
    name: "L'Arcane Sans Nom (La Mort)",
    symbol: "💀",
    prophecy: "Votre âme est réclamée... mais le fossoyeur vous accorde un répit : 20% de remise avec le code MORTEL20 !",
    code: "MORTEL20",
    discount: 20
  },
  {
    name: "La Lune Éclipsée",
    symbol: "🌕",
    prophecy: "Les loups hurlent à votre passage. La fiole de poison spectral vous accorde 15% de réduction : LUNE15 !",
    code: "LUNE15",
    discount: 15
  },
  {
    name: "Le Diable Cornu",
    symbol: "👹",
    prophecy: "Un pacte impie a été signé dans le sang ! Profitez d'une remise démoniaque de 25% : CODE666 !",
    code: "CODE666",
    discount: 25
  },
  {
    name: "La Tour Foudroyée",
    symbol: "⚡",
    prophecy: "Les esprits ont ravagé la crypte ! Frais de livraison offerts sur votre première relique : ESPRITFREE !",
    code: "ESPRITFREE",
    discount: 10
  }
];

// Chuchotements aléatoires pour l'ambiance sonore et visuelle
const CREEPY_WHISPERS = [
  "Ils savent que tu es là...",
  "Ne te retourne pas...",
  "Le pacte doit être scellé avant minuit...",
  "L'esprit du grimoire te surveille...",
  "Une âme pour une relique...",
  "Sens-tu le souffle glacé dans ton cou ?"
];
