/* ============================================================
   CONFIG.JS — MAG-M2C PARTNERS
   Client: Cabinet de conseil en stratégie et management
   Sections: services, about, testimonials, contact
   Disabled: gallery, hours, map (profil consultant)
   ============================================================ */

window.SITE_CONFIG = {

  /* ----------------------------------------------------------
     IDENTITY
     ---------------------------------------------------------- */
  identity: {
    name:     "MAG-M2C PARTNERS",
    tagline:  "Conseil en stratégie, management et transformation",
    category: "Conseil",
    locale:   "fr_FR",
    year:     null,
    icon:     "◆",
    logo:     null,
  },

  /* ----------------------------------------------------------
     CONTACT
     ---------------------------------------------------------- */
  contact: {
    phone: null,       // À remplir par l'opérateur
    email: null,       // À remplir par l'opérateur
    address: {
      street:  "",     // À remplir par l'opérateur
      city:    "Paris",
      zip:     "",
      country: "FR",
    },
    mapEmbed: null,
    socials: {
      instagram: null,
      facebook:  null,
      linkedin:  null, // À remplir par l'opérateur
    },
  },

  /* ----------------------------------------------------------
     SEO
     ---------------------------------------------------------- */
  seo: {
    title:       "MAG-M2C PARTNERS — Conseil en stratégie, management et transformation",
    description: "Cabinet de conseil spécialisé en stratégie, management de transition, gestion de crise et accompagnement au changement pour entreprises publiques et privées.",
    keywords:    "conseil stratégie, management transition, gestion de crise, formation entreprise, accompagnement changement, consultant management, transformation digitale",
    ogImage:     "./assets/og-image.jpg",
    gaId:        null,  // À remplir par l'opérateur
    gtmId:       null,  // À remplir par l'opérateur
    schemaType:  "Person",
  },

  /* ----------------------------------------------------------
     CONTENT
     ---------------------------------------------------------- */
  content: {

    /* Hero */
    hero: {
      tag:      "Conseil · Stratégie · Transformation",
      title:    "Structurer la décision.\nAccélérer la transformation.",
      subtitle: "MAG-M2C PARTNERS accompagne les dirigeants d'entreprises publiques et privées dans leurs décisions stratégiques, leurs transitions managériales et leurs situations de crise.",
      cta: {
        primary:   { label: "Nous contacter", href: "#contact" },
        secondary: { label: "Nos expertises", href: "#services" },
      },
      image: null,
    },

    /* Services */
    services: {
      enabled:  true,
      title:    "Expertises",
      subtitle: "Des interventions ciblées, adaptées à la complexité de chaque situation.",
      items: [
        {
          icon: "01",
          name: "Conseil en stratégie",
          desc: "Diagnostic stratégique, positionnement concurrentiel, élaboration de plans de développement et pilotage de la performance à moyen et long terme.",
        },
        {
          icon: "02",
          name: "Management de transition",
          desc: "Mise à disposition de dirigeants opérationnels expérimentés pour piloter vos phases de transformation, de restructuration ou de croissance rapide.",
        },
        {
          icon: "03",
          name: "Gestion de crise",
          desc: "Analyse de situation, cellule de crise, plan de continuité d'activité et communication de crise. Réactivité et discrétion garanties.",
        },
        {
          icon: "04",
          name: "Formation & développement",
          desc: "Programmes sur mesure en leadership, conduite du changement, gouvernance et management d'équipe pour vos cadres et dirigeants.",
        },
        {
          icon: "05",
          name: "Accompagnement au changement",
          desc: "Cadrage, mobilisation des parties prenantes, gestion des résistances et ancrage des nouvelles pratiques pour des transformations durables.",
        },
      ],
    },

    /* Gallery — disabled for consulting */
    gallery: {
      enabled: false,
      title:   "",
      images:  [],
    },

    /* About */
    about: {
      enabled: true,
      title:   "Approche",
      text:    "MAG-M2C PARTNERS réunit des consultants seniors issus du monde de l'entreprise — anciens dirigeants, managers de transition et experts sectoriels. Notre force : une approche pragmatique, ancrée dans le réel, loin des modèles théoriques standardisés. Chaque mission commence par une écoute approfondie de votre contexte, de vos contraintes et de vos ambitions. Nous intervenons là où les décisions comptent, avec la rigueur et la discrétion que vos enjeux exigent.",
      image:   null,
      stats: [
        { value: "150+",   label: "Missions réalisées" },
        { value: "12",     label: "Consultants seniors" },
        { value: "95%",    label: "Taux de satisfaction" },
        { value: "8 pays", label: "Zones d'intervention" },
      ],
    },

    /* Testimonials */
    testimonials: {
      enabled: true,
      items: [
        // PLACEHOLDER — remplacer par de vrais témoignages clients
        {
          name:  "Directeur Général",
          role:  "ETI industrielle — 800 collaborateurs",
          stars: 5,
          text:  "MAG-M2C a piloté notre restructuration avec une efficacité remarquable. En six mois, la nouvelle organisation était opérationnelle et les équipes pleinement engagées dans le projet.",
        },
        {
          name:  "Directrice des Opérations",
          role:  "Groupe de services — secteur public",
          stars: 5,
          text:  "Leur manager de transition a pris les rênes de notre direction supply chain en 48 heures. Compétence, discrétion et une capacité d'adaptation exceptionnelle.",
        },
        {
          name:  "Président du Directoire",
          role:  "PME technologique — 200 collaborateurs",
          stars: 5,
          text:  "Le plan stratégique élaboré avec MAG-M2C nous a permis de doubler notre chiffre d'affaires en trois ans. Un accompagnement exigeant mais transformateur.",
        },
      ],
    },

    /* Hours — disabled for consulting */
    hours: {
      enabled: false,
      items:   [],
    },

    /* Contact */
    contact: {
      enabled:      true,
      title:        "Contact",
      subtitle:     "Décrivez-nous votre situation. Un consultant senior vous recontacte sous 24 heures.",
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
      primary:   "#0a0a0a",
      accent:    "#e85d04",
      bg:        "#faf7f2",
      bgAlt:     "#f0ede8",
      text:      "#171717",
      textMuted: "#71717a",
      surface:   "#ffffff",
    },
    fonts: {
      display: "Syne",
      body:    "Inter",
    },
    shape: {
      radius:  "0px",
      spacing: "airy",
    },
  },

};
