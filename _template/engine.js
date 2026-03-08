/* ============================================================
   ENGINE.JS — Site Factory runtime engine
   Single entry point: initSite(window.SITE_CONFIG)
   Builds entire page from config: SEO, navbar, hero, sections,
   footer, analytics, contact form, scroll behaviors.
   Never modified per client.
   ============================================================ */


/* ------------------------------------------------------------
   1. APPLY DESIGN TOKENS
   Writes CSS custom properties to :root from config.design
   Global — also used by mentions-legales.html
   ------------------------------------------------------------ */

function applyDesignTokens(design) {
  var root = document.documentElement.style;
  var c = design.colors;
  var s = design.shape;

  root.setProperty("--color-primary",    c.primary);
  root.setProperty("--color-accent",     c.accent);
  root.setProperty("--color-bg",         c.bg);
  root.setProperty("--color-bg-alt",     c.bgAlt);
  root.setProperty("--color-text",       c.text);
  root.setProperty("--color-text-muted", c.textMuted);
  root.setProperty("--color-surface",    c.surface);
  root.setProperty("--radius",           s.radius);

  /* Spacing scale based on shape.spacing */
  var spacingMap = {
    compact: { sm: "0.375rem", md: "0.75rem", lg: "1.5rem", xl: "3rem", "2xl": "4.5rem" },
    normal:  { sm: "0.5rem",   md: "1rem",    lg: "2rem",   xl: "4rem", "2xl": "6rem" },
    airy:    { sm: "0.75rem",  md: "1.25rem", lg: "2.5rem", xl: "5rem", "2xl": "8rem" },
  };
  var sp = spacingMap[s.spacing] || spacingMap.normal;
  root.setProperty("--space-sm",  sp.sm);
  root.setProperty("--space-md",  sp.md);
  root.setProperty("--space-lg",  sp.lg);
  root.setProperty("--space-xl",  sp.xl);
  root.setProperty("--space-2xl", sp["2xl"]);
}


/* ------------------------------------------------------------
   2. LOAD FONTS
   Injects Google Fonts <link> into <head>
   Global — also used by mentions-legales.html
   ------------------------------------------------------------ */

function loadFonts(fonts) {
  var families = [];
  if (fonts.display) families.push(fonts.display.replace(/ /g, "+") + ":wght@400;700");
  if (fonts.body)    families.push(fonts.body.replace(/ /g, "+") + ":wght@400;600");

  if (families.length === 0) return;

  var href = "https://fonts.googleapis.com/css2?family=" + families.join("&family=") + "&display=swap";

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);

  /* Set font CSS properties */
  var root = document.documentElement.style;
  if (fonts.display) root.setProperty("--font-display", '"' + fonts.display + '", serif');
  if (fonts.body)    root.setProperty("--font-body", '"' + fonts.body + '", sans-serif');
}


/* ------------------------------------------------------------
   3. BUILD SEO
   Meta tags, Open Graph, Twitter Card, JSON-LD
   ------------------------------------------------------------ */

function buildSEO(C) {
  var seo = C.seo;
  var id  = C.identity;
  var ct  = C.contact;

  /* Title and meta description */
  document.title = seo.title;
  setMeta("description", seo.description);
  setMeta("keywords", seo.keywords);

  /* Open Graph */
  setMetaProperty("og:title",       seo.title);
  setMetaProperty("og:description", seo.description);
  setMetaProperty("og:type",        "website");
  setMetaProperty("og:locale",      id.locale);
  if (seo.ogImage) setMetaProperty("og:image", seo.ogImage);

  /* Twitter Card */
  setMeta("twitter:card",        "summary_large_image");
  setMeta("twitter:title",       seo.title);
  setMeta("twitter:description", seo.description);
  if (seo.ogImage) setMeta("twitter:image", seo.ogImage);

  /* JSON-LD Structured Data */
  var schema = {
    "@context": "https://schema.org",
    "@type":    seo.schemaType || "LocalBusiness",
    "name":     id.name,
    "description": seo.description,
  };

  if (ct.phone)   schema.telephone = ct.phone;
  if (ct.email)   schema.email = ct.email;
  if (id.tagline) schema.slogan = id.tagline;

  if (ct.address) {
    schema.address = {
      "@type":           "PostalAddress",
      "streetAddress":   ct.address.street,
      "addressLocality": ct.address.city,
      "postalCode":      ct.address.zip,
      "addressCountry":  ct.address.country,
    };
  }

  if (seo.ogImage) schema.image = seo.ogImage;
  if (id.year)     schema.foundingDate = String(id.year);

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/* Meta helpers */
function setMeta(name, content) {
  var el = document.querySelector('meta[name="' + name + '"]');
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaProperty(prop, content) {
  var el = document.querySelector('meta[property="' + prop + '"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", prop);
    document.head.appendChild(el);
  }
  el.content = content;
}


/* ------------------------------------------------------------
   4. BUILD NAVBAR
   Logo, nav links (only enabled sections), mobile burger
   ------------------------------------------------------------ */

function buildNavbar(C) {
  var id   = C.identity;
  var cont = C.content;

  /* Brand */
  var iconEl = document.querySelector(".navbar-icon");
  var nameEl = document.querySelector(".navbar-name");
  if (iconEl) iconEl.textContent = id.logo ? "" : id.icon;
  if (nameEl) nameEl.textContent = id.name;

  /* If logo image provided */
  if (id.logo) {
    var img = document.createElement("img");
    img.src = id.logo;
    img.alt = id.name + " — logo";
    img.className = "navbar-logo-img";
    if (iconEl) iconEl.replaceWith(img);
  }

  /* Nav links — only for enabled sections */
  var menu = document.getElementById("nav-menu");
  var sections = [
    { key: "services",     label: cont.services.title     || "Services",     enabled: cont.services.enabled },
    { key: "gallery",      label: "Galerie",                                  enabled: cont.gallery.enabled },
    { key: "about",        label: cont.about.title         || "À propos",    enabled: cont.about.enabled },
    { key: "testimonials", label: "Avis",                                     enabled: cont.testimonials.enabled },
    { key: "hours",        label: "Horaires",                                 enabled: cont.hours.enabled },
    { key: "contact",      label: cont.contact.title       || "Contact",     enabled: cont.contact.enabled },
  ];

  sections.forEach(function(s) {
    if (!s.enabled) return;
    var li = document.createElement("li");
    var a  = document.createElement("a");
    a.href = "#" + s.key;
    a.textContent = s.label;
    a.className = "nav-link";
    li.appendChild(a);
    menu.appendChild(li);
  });

  /* Navbar CTA */
  var ctaEl = document.getElementById("navbar-cta");
  if (ctaEl && cont.contact.enabled) {
    ctaEl.textContent = cont.hero.cta.primary.label;
    ctaEl.href = cont.hero.cta.primary.href;
  } else if (ctaEl) {
    ctaEl.hidden = true;
  }

  /* Burger toggle */
  var toggle = document.getElementById("nav-toggle");
  if (toggle && menu) {
    toggle.addEventListener("click", function() {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    /* Close menu when a link is clicked */
    menu.addEventListener("click", function(e) {
      if (e.target.classList.contains("nav-link")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}


/* ------------------------------------------------------------
   5. BUILD HERO
   Tag, title (supports \n), subtitle, CTA buttons, visual
   ------------------------------------------------------------ */

function buildHero(C) {
  var hero = C.content.hero;

  /* Tag */
  var tagEl = document.querySelector(".hero-tag");
  if (tagEl) tagEl.textContent = hero.tag;

  /* Title — convert \n to <br> */
  var titleEl = document.querySelector(".hero-title");
  if (titleEl) titleEl.innerHTML = escapeHtml(hero.title).replace(/\n/g, "<br>");

  /* Subtitle */
  var subEl = document.querySelector(".hero-subtitle");
  if (subEl) subEl.textContent = hero.subtitle;

  /* CTA buttons */
  var ctaWrap = document.querySelector(".hero-cta");
  if (ctaWrap && hero.cta.primary) {
    var primary = createCTA(hero.cta.primary.label, hero.cta.primary.href, "btn btn-primary");
    ctaWrap.appendChild(primary);
  }
  if (ctaWrap && hero.cta.secondary) {
    var secondary = createCTA(hero.cta.secondary.label, hero.cta.secondary.href, "btn btn-secondary");
    ctaWrap.appendChild(secondary);
  }

  /* Hero image */
  var visualEl = document.querySelector(".hero-visual");
  if (visualEl && hero.image) {
    var img = document.createElement("img");
    img.src = hero.image;
    img.alt = C.identity.name + " — photo principale";
    img.className = "hero-image";
    visualEl.appendChild(img);
  }
}

/* Create CTA button/link */
function createCTA(label, href, className) {
  var a = document.createElement("a");
  a.href = href;
  a.textContent = label;
  a.className = className;
  a.setAttribute("data-event", "cta_click");
  a.setAttribute("data-label", label);
  return a;
}

/* Escape HTML to prevent XSS in title rendering */
function escapeHtml(str) {
  var div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}


/* ------------------------------------------------------------
   6. BUILD SECTIONS
   Calls each section builder only if enabled: true
   Removes hidden attribute to reveal the section
   ------------------------------------------------------------ */

function buildSections(C) {
  var cont = C.content;

  if (cont.services.enabled)     { show("services");     buildServices(cont.services); }
  if (cont.gallery.enabled)      { show("gallery");      buildGallery(cont.gallery); }
  if (cont.about.enabled)        { show("about");        buildAbout(cont.about); }
  if (cont.testimonials.enabled) { show("testimonials"); buildTestimonials(cont.testimonials); }
  if (cont.hours.enabled)        { show("hours");        buildHours(cont.hours); }
  if (cont.contact.enabled)      { show("contact");      buildContact(cont.contact, C.contact); }

  /* Map — shown if mapEmbed is provided */
  if (C.contact.mapEmbed) {
    show("map");
    var iframe = document.querySelector(".map-embed");
    if (iframe) iframe.src = C.contact.mapEmbed;
  }
}

function show(id) {
  var el = document.getElementById(id);
  if (el) el.removeAttribute("hidden");
}


/* --- Services --- */
function buildServices(data) {
  var titleEl = document.querySelector(".services-title");
  var subEl   = document.querySelector(".services-subtitle");
  var grid    = document.querySelector(".services-grid");

  if (titleEl) titleEl.textContent = data.title;
  if (subEl)   subEl.textContent = data.subtitle;

  if (grid) {
    data.items.forEach(function(item) {
      var card = document.createElement("div");
      card.className = "service-card";
      card.innerHTML =
        '<span class="service-icon">' + escapeHtml(item.icon) + '</span>' +
        '<h3 class="service-name">' + escapeHtml(item.name) + '</h3>' +
        '<p class="service-desc">' + escapeHtml(item.desc) + '</p>';
      grid.appendChild(card);
    });
  }
}


/* --- Gallery --- */
function buildGallery(data) {
  var titleEl = document.querySelector(".gallery-title");
  var grid    = document.querySelector(".gallery-grid");

  if (titleEl) titleEl.textContent = data.title;

  if (grid) {
    data.images.forEach(function(src, i) {
      var item = document.createElement("div");
      item.className = "gallery-item";

      /* If src is an emoji (short string, no path chars), render as text */
      if (src.length <= 4 && !src.includes("/") && !src.includes(".")) {
        item.innerHTML = '<span class="gallery-emoji">' + src + '</span>';
      } else {
        var img = document.createElement("img");
        img.src = src;
        img.alt = "Photo " + (i + 1);
        img.loading = "lazy";
        item.appendChild(img);
      }
      grid.appendChild(item);
    });
  }
}


/* --- About --- */
function buildAbout(data) {
  var titleEl = document.querySelector(".about-title");
  var textEl  = document.querySelector(".about-text");
  var statsEl = document.querySelector(".about-stats");
  var visEl   = document.querySelector(".about-visual");

  if (titleEl) titleEl.textContent = data.title;
  if (textEl)  textEl.textContent = data.text;

  /* Stats */
  if (statsEl && data.stats) {
    data.stats.forEach(function(stat) {
      var div = document.createElement("div");
      div.className = "about-stat";
      div.innerHTML =
        '<span class="stat-value">' + escapeHtml(stat.value) + '</span>' +
        '<span class="stat-label">' + escapeHtml(stat.label) + '</span>';
      statsEl.appendChild(div);
    });
  }

  /* Image */
  if (visEl && data.image) {
    var img = document.createElement("img");
    img.src = data.image;
    img.alt = data.title;
    img.loading = "lazy";
    visEl.appendChild(img);
  }
}


/* --- Testimonials --- */
function buildTestimonials(data) {
  var grid = document.querySelector(".testimonials-grid");
  if (!grid) return;

  data.items.forEach(function(item) {
    var card = document.createElement("div");
    card.className = "testimonial-card";

    /* Stars */
    var stars = "";
    for (var i = 0; i < 5; i++) {
      stars += i < item.stars ? "★" : "☆";
    }

    card.innerHTML =
      '<div class="testimonial-stars">' + stars + '</div>' +
      '<blockquote class="testimonial-text">' + escapeHtml(item.text) + '</blockquote>' +
      '<div class="testimonial-author">' +
        '<span class="testimonial-name">' + escapeHtml(item.name) + '</span>' +
        '<span class="testimonial-role">' + escapeHtml(item.role) + '</span>' +
      '</div>';
    grid.appendChild(card);
  });
}


/* --- Hours --- */
function buildHours(data) {
  var list = document.querySelector(".hours-list");
  if (!list) return;

  data.items.forEach(function(item) {
    var row = document.createElement("div");
    row.className = "hours-row";
    if (item.time === "Fermé") row.classList.add("hours-row--closed");
    row.innerHTML =
      '<span class="hours-day">' + escapeHtml(item.day) + '</span>' +
      '<span class="hours-time">' + escapeHtml(item.time) + '</span>';
    list.appendChild(row);
  });
}


/* --- Contact --- */
function buildContact(data, contactInfo) {
  var titleEl = document.querySelector(".contact-title");
  var subEl   = document.querySelector(".contact-subtitle");
  var btnEl   = document.querySelector(".contact-submit");
  var phoneGr = document.querySelector(".form-group--phone");
  var details = document.querySelector(".contact-details");
  var socials = document.querySelector(".contact-socials");

  if (titleEl) titleEl.textContent = data.title;
  if (subEl)   subEl.textContent = data.subtitle;
  if (btnEl)   btnEl.textContent = data.btnLabel;

  /* Show phone field if configured */
  if (phoneGr && data.showPhone) phoneGr.removeAttribute("hidden");

  /* Set form action */
  var form = document.getElementById("contact-form");
  if (form && data.formEndpoint) {
    form.action = data.formEndpoint;
  }

  /* Contact details */
  if (details && contactInfo) {
    var html = "";

    if (contactInfo.address) {
      html += '<div class="contact-detail">' +
        '<strong>Adresse</strong>' +
        '<span>' + escapeHtml(contactInfo.address.street) + '<br>' +
        escapeHtml(contactInfo.address.zip) + ' ' + escapeHtml(contactInfo.address.city) + '</span>' +
      '</div>';
    }

    if (contactInfo.phone) {
      html += '<div class="contact-detail">' +
        '<strong>Téléphone</strong>' +
        '<a href="tel:' + contactInfo.phone.replace(/\s/g, "") + '" data-event="phone_click">' +
        escapeHtml(contactInfo.phone) + '</a>' +
      '</div>';
    }

    if (contactInfo.email) {
      html += '<div class="contact-detail">' +
        '<strong>Email</strong>' +
        '<a href="mailto:' + contactInfo.email + '">' + escapeHtml(contactInfo.email) + '</a>' +
      '</div>';
    }

    details.innerHTML = html;
  }

  /* Social links */
  if (socials && contactInfo.socials) {
    var socialHtml = "";
    var platforms = contactInfo.socials;
    if (platforms.instagram) socialHtml += '<a href="' + platforms.instagram + '" target="_blank" rel="noopener" aria-label="Instagram" class="social-link">Instagram</a>';
    if (platforms.facebook)  socialHtml += '<a href="' + platforms.facebook + '" target="_blank" rel="noopener" aria-label="Facebook" class="social-link">Facebook</a>';
    if (platforms.linkedin)  socialHtml += '<a href="' + platforms.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link">LinkedIn</a>';
    socials.innerHTML = socialHtml;
  }
}


/* ------------------------------------------------------------
   7. BUILD FOOTER
   Brand name, nav links, copyright with founding year
   ------------------------------------------------------------ */

function buildFooter(C) {
  var id = C.identity;

  /* Brand */
  var brand = document.querySelector(".footer-brand");
  if (brand) {
    brand.innerHTML =
      '<span class="footer-icon">' + (id.logo ? "" : id.icon) + '</span>' +
      '<span class="footer-name">' + escapeHtml(id.name) + '</span>';
    if (id.tagline) {
      brand.innerHTML += '<span class="footer-tagline">' + escapeHtml(id.tagline) + '</span>';
    }
  }

  /* Footer nav links (mirror navbar) */
  var linksEl = document.querySelector(".footer-links");
  if (linksEl) {
    var cont = C.content;
    var sections = [
      { key: "services",     label: cont.services.title || "Services",  enabled: cont.services.enabled },
      { key: "about",        label: cont.about.title || "À propos",     enabled: cont.about.enabled },
      { key: "testimonials", label: "Avis",                              enabled: cont.testimonials.enabled },
      { key: "contact",      label: "Contact",                           enabled: cont.contact.enabled },
    ];

    sections.forEach(function(s) {
      if (!s.enabled) return;
      var li = document.createElement("li");
      var a  = document.createElement("a");
      a.href = "#" + s.key;
      a.textContent = s.label;
      li.appendChild(a);
      linksEl.appendChild(li);
    });
  }

  /* Copyright */
  var copy = document.querySelector(".footer-copyright");
  if (copy) {
    var year = new Date().getFullYear();
    var text = "© " + year + " " + id.name;
    if (id.year) text += " — Depuis " + id.year;
    text += ". Tous droits réservés.";
    copy.textContent = text;
  }
}


/* ------------------------------------------------------------
   8. INIT ANALYTICS
   Loads GA4 and/or GTM only if IDs are present
   ------------------------------------------------------------ */

function initAnalytics(seo) {
  /* Google Analytics 4 */
  if (seo.gaId) {
    var gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + seo.gaId;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", seo.gaId);
  }

  /* Google Tag Manager */
  if (seo.gtmId) {
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s);
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", seo.gtmId);
  }

  /* Event delegation for tracked elements */
  document.body.addEventListener("click", function(e) {
    var target = e.target.closest("[data-event]");
    if (!target) return;

    var eventName = target.getAttribute("data-event");
    var label     = target.getAttribute("data-label") || target.textContent.trim();

    trackEvent(eventName, { label: label });
  });
}

/* Unified event tracking */
function trackEvent(name, params) {
  /* GA4 */
  if (window.gtag) {
    window.gtag("event", name, params);
  }
  /* GTM dataLayer */
  if (window.dataLayer) {
    window.dataLayer.push(Object.assign({ event: name }, params));
  }
}


/* ------------------------------------------------------------
   9. INIT CONTACT FORM
   Async Formspree submit, honeypot, RGPD, feedback
   ------------------------------------------------------------ */

function initContactForm(C) {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var endpoint = C.content.contact.formEndpoint;
  var successEl = form.querySelector(".form-feedback--success");
  var errorEl   = form.querySelector(".form-feedback--error");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    /* Honeypot check */
    var hp = form.querySelector('[name="_gotcha"]');
    if (hp && hp.value) return;

    /* RGPD check */
    var rgpd = form.querySelector('[name="rgpd"]');
    if (rgpd && !rgpd.checked) {
      rgpd.focus();
      return;
    }

    /* No endpoint configured — show success anyway (preview mode) */
    if (!endpoint) {
      showFeedback(successEl, errorEl, true);
      trackEvent("form_submit", { success: true });
      return;
    }

    /* Async submit to Formspree */
    var data = new FormData(form);
    data.delete("_gotcha");
    data.delete("rgpd");

    fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" },
    })
    .then(function(response) {
      if (response.ok) {
        showFeedback(successEl, errorEl, true);
        form.reset();
        trackEvent("form_submit", { success: true });
      } else {
        showFeedback(successEl, errorEl, false);
        trackEvent("form_submit", { success: false });
      }
    })
    .catch(function() {
      showFeedback(successEl, errorEl, false);
      trackEvent("form_submit", { success: false });
    });
  });
}

function showFeedback(successEl, errorEl, isSuccess) {
  if (successEl) successEl.hidden = !isSuccess;
  if (errorEl)   errorEl.hidden = isSuccess;
}


/* ------------------------------------------------------------
   10. INIT SCROLL BEHAVIOR
   Navbar shadow on scroll, reveal animations, scroll depth
   ------------------------------------------------------------ */

function initScrollBehavior() {
  var navbar = document.getElementById("navbar");

  /* Navbar shadow on scroll */
  if (navbar) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 10) {
        navbar.classList.add("navbar--scrolled");
      } else {
        navbar.classList.remove("navbar--scrolled");
      }
    }, { passive: true });
  }

  /* Reveal elements on scroll via IntersectionObserver */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length > 0 && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    reveals.forEach(function(el) { observer.observe(el); });
  }

  /* Scroll depth tracking at 25/50/75/100% */
  var depthMarks = { 25: false, 50: false, 75: false, 100: false };
  window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    var percent = Math.round((scrollTop / docHeight) * 100);

    [25, 50, 75, 100].forEach(function(mark) {
      if (percent >= mark && !depthMarks[mark]) {
        depthMarks[mark] = true;
        trackEvent("scroll_depth", { percent: mark });
      }
    });
  }, { passive: true });
}


/* ------------------------------------------------------------
   MAIN ENTRY POINT
   Called from index.html after config.js is loaded
   ------------------------------------------------------------ */

function initSite(C) {
  if (!C) {
    console.error("[Site Factory] No config found. Ensure config.js sets window.SITE_CONFIG.");
    return;
  }

  applyDesignTokens(C.design);
  loadFonts(C.design.fonts);
  buildSEO(C);
  buildNavbar(C);
  buildHero(C);
  buildSections(C);
  buildFooter(C);
  initAnalytics(C.seo);
  initContactForm(C);
  initScrollBehavior();
}
