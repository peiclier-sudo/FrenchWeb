/* ============================================================
   CONFIG.JS — Le Belge
   Reference client: Belgian brasserie in Brussels
   All sections enabled (restaurant — full feature set)
   ============================================================ */

window.SITE_CONFIG = {

  /* ----------------------------------------------------------
     IDENTITY
     ---------------------------------------------------------- */
  identity: {
    name:     "Le Belge",
    tagline:  "Brasserie authentique depuis 1987",
    category: "Restaurant",
    locale:   "fr_BE",
    year:     1987,
    icon:     "🍺",
    logo:     null,
  },

  /* ----------------------------------------------------------
     CONTACT
     ---------------------------------------------------------- */
  contact: {
    phone: "+32 2 512 34 56",
    email: "bonjour@lebelge.be",
    address: {
      street:  "Rue des Bouchers 42",
      city:    "Bruxelles",
      zip:     "1000",
      country: "BE",
    },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.0!2d4.3517!3d50.8485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBruxelles!5e0!3m2!1sfr!2sbe!4v1",
    socials: {
      instagram: "https://instagram.com/lebelge_bxl",
      facebook:  "https://facebook.com/lebelgebrasserie",
      linkedin:  null,
    },
  },

  /* ----------------------------------------------------------
     SEO
     ---------------------------------------------------------- */
  seo: {
    title:       "Le Belge — Brasserie authentique depuis 1987 | Bruxelles",
    description: "Brasserie belge au cœur de Bruxelles. Moules-frites, carbonnade flamande, vol-au-vent et bières artisanales dans un cadre chaleureux depuis 1987.",
    keywords:    "brasserie bruxelles, restaurant belge, moules-frites, carbonnade, vol-au-vent, bières belges, rue des bouchers",
    ogImage:     "./assets/og-image.jpg",
    gaId:        null,   // À remplir par l'opérateur
    gtmId:       null,   // À remplir par l'opérateur
    schemaType:  "Restaurant",
  },

  /* ----------------------------------------------------------
     CONTENT
     ---------------------------------------------------------- */
  content: {

    /* Hero */
    hero: {
      tag:      "Brasserie belge · Bruxelles",
      title:    "Le goût de la\nBelgique authentique",
      subtitle: "Moules-frites, carbonnades et bières d'abbaye — notre cuisine de brasserie célèbre les saveurs belges depuis plus de 35 ans, au cœur du centre historique.",
      cta: {
        primary:   { label: "Réserver une table", href: "#contact" },
        secondary: { label: "Voir la carte", href: "#services" },
      },
      image: null,
    },

    /* Services (menu categories for a restaurant) */
    services: {
      enabled:  true,
      title:    "Notre Carte",
      subtitle: "Des classiques belges préparés avec des produits frais du marché, chaque jour.",
      items: [
        {
          icon: "🦪",
          name: "Moules de Zélande",
          desc: "Moules fraîches de saison, marinière, à la crème ou provençale, servies avec nos frites maison croustillantes.",
        },
        {
          icon: "🍖",
          name: "Carbonnade Flamande",
          desc: "Bœuf braisé lentement à la bière brune, pain d'épices et sirop de Liège. Le classique des classiques.",
        },
        {
          icon: "🍗",
          name: "Vol-au-Vent",
          desc: "Croûte feuilletée, poulet fermier, boulettes de veau et champignons dans une sauce crémeuse.",
        },
        {
          icon: "🧀",
          name: "Croquettes aux Crevettes",
          desc: "Croquettes croustillantes garnies de crevettes grises de la Mer du Nord, persil frit et citron.",
        },
        {
          icon: "🍫",
          name: "Dame Blanche",
          desc: "Glace vanille artisanale, sauce chocolat belge chaude et crème fouettée maison.",
        },
        {
          icon: "🍺",
          name: "Bières d'Abbaye",
          desc: "Sélection de 24 bières belges à la pression et en bouteille : Chimay, Orval, Westmalle, Rochefort…",
        },
      ],
    },

    /* Gallery */
    gallery: {
      enabled: true,
      title:   "Ambiance & Saveurs",
      images: [
        "🍽️",  // PLACEHOLDER — remplacer par ./assets/gallery/01.jpg
        "🍺",  // PLACEHOLDER — remplacer par ./assets/gallery/02.jpg
        "🏠",  // PLACEHOLDER — remplacer par ./assets/gallery/03.jpg
        "🍟",  // PLACEHOLDER — remplacer par ./assets/gallery/04.jpg
        "🕯️",  // PLACEHOLDER — remplacer par ./assets/gallery/05.jpg
        "👨‍🍳", // PLACEHOLDER — remplacer par ./assets/gallery/06.jpg
      ],
    },

    /* About */
    about: {
      enabled: true,
      title:   "Notre Histoire",
      text:    "Fondé en 1987 par la famille Vandenberghe, Le Belge perpétue la tradition des grandes brasseries bruxelloises. Nos recettes sont transmises de génération en génération, préparées avec des produits locaux sélectionnés chaque matin au marché. Notre salle voûtée en briques, notre terrasse sur la rue piétonne et notre équipe passionnée font de chaque repas un moment de convivialité à la belge.",
      image:   null,
      stats: [
        { value: "1987",  label: "Année de fondation" },
        { value: "24",    label: "Bières à la carte" },
        { value: "12 000", label: "Kilos de moules par an" },
        { value: "4.7★",  label: "Note Google" },
      ],
    },

    /* Testimonials */
    testimonials: {
      enabled: true,
      items: [
        // PLACEHOLDER — remplacer par de vrais avis clients
        {
          name:  "Marie D.",
          role:  "Cliente régulière",
          stars: 5,
          text:  "Les meilleures moules-frites de Bruxelles, sans exagérer. L'ambiance est chaleureuse, le service attentionné. On y revient chaque semaine depuis des années.",
        },
        {
          name:  "Thomas L.",
          role:  "Touriste français",
          stars: 5,
          text:  "Découvert lors d'un week-end à Bruxelles. La carbonnade flamande est un pur bonheur. Le patron nous a conseillé une bière d'abbaye parfaite pour accompagner le plat.",
        },
        {
          name:  "Sophie V.",
          role:  "Blog culinaire",
          stars: 4,
          text:  "Un vrai morceau de patrimoine bruxellois. Les croquettes aux crevettes sont divines et les prix restent très raisonnables pour le quartier. Terrasse agréable en été.",
        },
      ],
    },

    /* Hours */
    hours: {
      enabled: true,
      items: [
        { day: "Lundi",    time: "Fermé" },
        { day: "Mardi",    time: "12h00 – 14h30 / 18h30 – 22h30" },
        { day: "Mercredi", time: "12h00 – 14h30 / 18h30 – 22h30" },
        { day: "Jeudi",    time: "12h00 – 14h30 / 18h30 – 22h30" },
        { day: "Vendredi", time: "12h00 – 14h30 / 18h30 – 23h00" },
        { day: "Samedi",   time: "12h00 – 23h00" },
        { day: "Dimanche", time: "12h00 – 22h00" },
      ],
    },

    /* Contact */
    contact: {
      enabled:      true,
      title:        "Réservez Votre Table",
      subtitle:     "Pour les groupes de plus de 8 personnes, merci de nous contacter par téléphone.",
      formEndpoint: "",  // À remplir par l'opérateur — ex: https://formspree.io/f/xABCDEFG
      btnLabel:     "Envoyer ma demande",
      showPhone:    true,
    },

  },

  /* ----------------------------------------------------------
     DESIGN TOKENS
     ---------------------------------------------------------- */
  design: {
    colors: {
      primary:   "#1a1410",
      accent:    "#d4a052",
      bg:        "#0f0d0a",
      bgAlt:     "#1a1712",
      text:      "#f0e6d6",
      textMuted: "#a89880",
      surface:   "#252018",
    },
    fonts: {
      display: "Playfair Display",
      body:    "Source Sans 3",
    },
    shape: {
      radius:  "4px",
      spacing: "normal",
    },
  },

};
