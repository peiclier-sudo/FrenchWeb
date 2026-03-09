/* ============================================================
   CONFIG.JS — NeoLearning
   Cours de français (FLE, FLI, FOS) & Boutique en ligne
   ============================================================ */

window.SITE_CONFIG = {

  /* ----------------------------------------------------------
     IDENTITY
     ---------------------------------------------------------- */
  identity: {
    name:     "NeoLearning",
    tagline:  "Apprenez le français, vivez vos passions",
    category: "Formation & E-commerce",
    locale:   "fr_FR",
    year:     2020,
    icon:     "🎓",
    logo:     null,
  },

  /* ----------------------------------------------------------
     CONTACT
     ---------------------------------------------------------- */
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "contact@neolearning.fr",
    address: {
      street:  "",
      city:    "Paris",
      zip:     "",
      country: "FR",
    },
    mapEmbed: null,
    socials: {
      instagram: "https://instagram.com/neolearning",
      facebook:  "https://facebook.com/neolearning",
      linkedin:  "https://linkedin.com/company/neolearning",
    },
  },

  /* ----------------------------------------------------------
     SEO
     ---------------------------------------------------------- */
  seo: {
    title:       "NeoLearning — Cours de français & Boutique en ligne",
    description: "Formations FLE, FLI, FOS, français professionnel, hôtesse d'accueil et de caisse. Boutique mode et high-tech en ligne. Apprenez le français et vivez vos passions.",
    keywords:    "cours français, FLE, FLI, FOS, français professionnel, formation hôtesse accueil, formation hôtesse caisse, prêt à porter, high tech, boutique en ligne",
    ogImage:     "./assets/og-image.jpg",
    gaId:        null,
    gtmId:       null,
    schemaType:  "EducationalOrganization",
  },

  /* ----------------------------------------------------------
     CONTENT
     ---------------------------------------------------------- */
  content: {

    /* Hero */
    hero: {
      tag:      "Formation · E-commerce · Innovation",
      title:    "Le français,\nc'est maintenant",
      subtitle: "Formations FLE, FLI, FOS et français professionnel pour booster votre carrière. Découvrez aussi notre boutique mode & high-tech.",
      cta: {
        primary:   { label: "Découvrir nos formations", href: "#services" },
        secondary: { label: "Visiter la boutique", href: "#gallery" },
      },
      image: null,
    },

    /* Services — 6 formations */
    services: {
      enabled:  true,
      title:    "Nos Formations",
      subtitle: "Des parcours certifiants adaptés à vos objectifs professionnels et personnels.",
      items: [
        {
          icon: "🎓",
          name: "FLE — Français Langue Étrangère",
          desc: "Maîtrisez le français au quotidien avec nos cours progressifs du niveau A1 au C2. Méthodes immersives et interactives.",
        },
        {
          icon: "🌍",
          name: "FLI — Français Langue d'Intégration",
          desc: "Programmes certifiants pour l'intégration en France. Compréhension de la culture, des institutions et de la vie quotidienne.",
        },
        {
          icon: "💼",
          name: "FOS — Français sur Objectifs Spécifiques",
          desc: "Français adapté à votre secteur d'activité : tourisme, affaires, médical, juridique. Formations sur mesure.",
        },
        {
          icon: "🎀",
          name: "Formation Hôtesse d'accueil",
          desc: "Accueil, communication professionnelle, posture et savoir-être. Préparez-vous aux métiers de l'accueil et du service.",
        },
        {
          icon: "🛒",
          name: "Formation Hôtesse de caisse",
          desc: "Techniques de vente, encaissement, relation client et gestion de caisse. Une formation complète pour l'emploi.",
        },
        {
          icon: "💡",
          name: "Coaching professionnel",
          desc: "Accompagnement personnalisé pour votre évolution de carrière. Prise de parole, entretien, rédaction professionnelle.",
        },
      ],
    },

    /* Gallery — Boutique e-commerce */
    gallery: {
      enabled: true,
      title:   "Notre Boutique",
      images: [
        "👗",
        "📱",
        "👟",
        "💻",
        "👜",
        "⌚",
      ],
    },

    /* About */
    about: {
      enabled: true,
      title:   "Qui sommes-nous ?",
      text:    "NeoLearning, c'est la conviction que l'apprentissage du français ouvre toutes les portes. Nous accompagnons chaque apprenant vers la réussite avec des méthodes modernes, bienveillantes et efficaces. En parallèle, notre boutique en ligne vous propose une sélection tendance de prêt-à-porter et de produits high-tech, parce que bien apprendre, c'est aussi bien vivre.",
      image:   null,
      stats: [
        { value: "2 000+",  label: "Apprenants formés" },
        { value: "98%",     label: "Taux de réussite" },
        { value: "6",       label: "Formations certifiantes" },
        { value: "24/7",    label: "Boutique en ligne" },
      ],
    },

    /* Testimonials */
    testimonials: {
      enabled: true,
      items: [
        {
          name:  "Amina K.",
          role:  "Étudiante FLE — Niveau B2",
          stars: 5,
          text:  "Grâce à NeoLearning, j'ai obtenu mon DELF B2 en 6 mois. Les cours sont dynamiques, les profs passionnés. Je recommande à 100% !",
        },
        {
          name:  "Marc D.",
          role:  "Directeur RH — Groupe Hôtelier",
          stars: 5,
          text:  "Nous avons formé 15 collaborateurs en FOS tourisme. Résultat : un service client bilingue impeccable. NeoLearning comprend les besoins des entreprises.",
        },
        {
          name:  "Sophie L.",
          role:  "Cliente boutique",
          stars: 4,
          text:  "J'ai découvert la boutique en cherchant des cours de français. Livraison rapide, produits de qualité. Le combo formation + shopping, j'adore le concept !",
        },
      ],
    },

    /* Hours */
    hours: {
      enabled: true,
      items: [
        { day: "Lundi",    time: "9h00 – 18h00" },
        { day: "Mardi",    time: "9h00 – 18h00" },
        { day: "Mercredi", time: "9h00 – 18h00" },
        { day: "Jeudi",    time: "9h00 – 18h00" },
        { day: "Vendredi", time: "9h00 – 18h00" },
        { day: "Samedi",   time: "9h00 – 13h00" },
        { day: "Dimanche", time: "Fermé" },
      ],
    },

    /* Contact */
    contact: {
      enabled:      true,
      title:        "Contactez-nous",
      subtitle:     "Une question sur nos formations ou notre boutique ? Écrivez-nous, on vous répond sous 24h !",
      formEndpoint: "",
      btnLabel:     "Envoyer mon message",
      showPhone:    true,
    },

  },

  /* ----------------------------------------------------------
     DESIGN TOKENS
     ---------------------------------------------------------- */
  design: {
    colors: {
      primary:   "#111827",
      accent:    "#2563eb",
      bg:        "#ffffff",
      bgAlt:     "#f9fafb",
      text:      "#111827",
      textMuted: "#6b7280",
      surface:   "#ffffff",
    },
    fonts: {
      display: "Plus Jakarta Sans",
      body:    "Plus Jakarta Sans",
    },
    shape: {
      radius:  "10px",
      spacing: "normal",
    },
  },

};
