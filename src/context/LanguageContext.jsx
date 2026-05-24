import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const DICTIONARY = {
  fr: {
    // SEO
    metaTitle: "YATA Distribution - Partenaire de confiance en distribution alimentaire",
    metaDesc: "YATA Distribution - Votre partenaire de confiance dans la distribution alimentaire en Algérie. Distribution en gros, livraison régionale, produits alimentaires de qualité.",

    // General / UI
    requestQuote: "Devenir un client",
    contactUs: "Nous Contacter",
    ourServices: "Nos Services",
    scroll: "Défiler",
    headlineBadge: "Distributeur alimentaire en gros — Algérie",
    heroSubtitleStart: "Votre partenaire de confiance dans la ",
    heroSubtitleHighlight: "distribution alimentaire",
    heroSubtitleEnd: " — du producteur à votre commerce, partout en Algérie.",
    exclusiveOffer: "Offre Exclusive",
    featuredProduct: "Produit vedette",
    getOffer: "Profiter de l'offre →",
    hq: "HQ",
    whatsappLabel: "Contacter sur WhatsApp",
    viewOnGoogleMaps: "Voir sur Google Maps →",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    allRightsReserved: "Tous droits réservés.",
    close: "Fermer",
    footerDesc: "Votre partenaire de confiance dans la distribution alimentaire en gros. Depuis Tiaret, nous approvisionnons les commerces de 3 wilayas algériennes.",
    navigationHeader: "Navigation",
    contactHeader: "Contact",
    newsletterHeader: "Newsletter",
    newsletterDesc: "Recevez nos offres grossistes et actualités directement dans votre boîte mail.",
    newsletterSuccess: "✓ Vous êtes abonné(e) !",
    copyrightText: "© 2026 YATA Distribution. Tous droits réservés.",

    // Navbar
    logoSub: "Distribution",

    // About Section
    aboutUs: "À propos de nous",
    whoIsYata: "Qui est YATA Distribution ?",
    aboutSubtitle: "Depuis 2014, YATA Distribution est le partenaire de référence des commerçants, épiciers et grandes surfaces de l'ouest algérien pour l'approvisionnement alimentaire en gros.",
    yearsExp: "Années d'expérience dans la distribution",
    ourMission: "Notre Mission",
    missionDesc: "Fournir aux commerces algériens un accès rapide, fiable et économique aux produits alimentaires de qualité, en s'appuyant sur une logistique de pointe et des partenariats durables avec les meilleurs producteurs nationaux.",
    ourVision: "Notre Vision",
    visionDesc: "Devenir le distributeur alimentaire en gros numéro 1 en Algérie d'ici 2030, en couvrant l'ensemble du territoire national avec des services logistiques modernes et efficaces.",
    ourValues: "Nos Valeurs",
    ourJourney: "Notre Parcours",

    // Values List
    valuesList: [
      { label: 'Intégrité', color: 'text-green-600' },
      { label: 'Partenariat', color: 'text-amber-600' },
      { label: 'Portée nationale', color: 'text-blue-600' },
      { label: 'Croissance', color: 'text-purple-600' },
    ],

    // Why Us Section
    whyUsEyebrow: "Pourquoi nous choisir",
    whyUsTitle: "Ce qui nous différencie",
    whyUsSubtitle: "YATA Distribution s'engage à offrir une expérience d'approvisionnement exceptionnelle grâce à des standards élevés de qualité et de service.",
    whyUsStats: [
      { value: '98%', label: 'Taux de satisfaction client' },
      { value: '24h', label: 'Délai de livraison moyen' },
      { value: '5 000 m²', label: "Capacité d'entrepôt" },
      { value: '30+', label: 'Véhicules de livraison' },
    ],

    // Coverage Section
    coverageEyebrow: "Couverture régionale",
    coverageTitle: "Nous livrons partout en Algérie",
    coverageSubtitle: "Depuis notre siège à Tiaret, notre réseau de livraison s'étend sur 3 wilayas, assurant un service rapide et fiable.",
    wilayasCovered: "Wilayas couvertes",
    directDelivery: "Livraison directe dans toutes ces zones",
    vehiclesCount: "30+ véhicules",
    coverageCards: [
      { label: 'Livraison J+1', desc: 'Sur les wilayas prioritaires' },
      { label: 'Couverture 24/7', desc: 'Commandes disponibles en ligne' },
    ],

    // Gallery Section
    galleryEyebrow: "Galerie",
    galleryTitle: "Nos installations & activités",
    gallerySubtitle: "Découvrez nos entrepôts modernes, notre flotte de véhicules et nos opérations de distribution à travers l'Algérie.",

    // Partners Section
    partnersEyebrow: "Nos Partenaires",
    partnersTitle: "Ils nous font confiance",
    partnersSubtitle: "YATA Distribution travaille avec les marques alimentaires les plus reconnues d'Algérie pour vous garantir des produits de qualité au meilleur prix.",
    partnersTrustText: "Vous êtes fournisseur ou distributeur et souhaitez rejoindre notre réseau ?",
    partnersTrustCTA: "Contactez notre équipe commerciale",
    partnersTrustTextEnd: "pour discuter d'un partenariat gagnant-gagnant.",

    // Services Section
    servicesEyebrow: "Nos Services",
    servicesTitle: "Une gamme complète de services de distribution",
    servicesSubtitle: "De la réception à la livraison, nous gérons toute la chaîne d'approvisionnement alimentaire pour que votre commerce ne manque jamais de rien.",
    customServiceTitle: "Besoin d'un service sur mesure ?",
    customServiceDesc: "Contactez-nous pour une offre personnalisée selon vos besoins.",

    // Products Section
    productsEyebrow: "Nos Produits",
    productsTitle: "Catalogue de produits alimentaires",
    productsSubtitle: "Une sélection rigoureuse des meilleures marques algériennes et internationales, disponibles en quantités grossistes livrées directement chez vous.",
    orderProduct: "Commander ce produit",

    // Contact Section
    contactEyebrow: "Contactez-nous",
    contactTitle: "Parlons de vos besoins",
    contactSubtitle: "Notre équipe commerciale est disponible pour répondre à vos demandes, établir vos devis et organiser vos livraisons dans les meilleurs délais.",
    sendUsMessage: "Envoyez-nous un message",
    fullName: "Nom complet *",
    fullNamePlaceholder: "Votre nom",
    phoneLabel: "Téléphone",
    emailLabel: "Email *",
    subjectLabel: "Sujet *",
    selectSubject: "Sélectionnez un sujet",
    subjectQuote: "Devenir client",
    subjectOrder: "Passer une commande",
    subjectPartner: "Proposition de partenariat",
    subjectInfo: "Informations générales",
    subjectClaim: "Réclamation",
    messageLabel: "Message *",
    messagePlaceholder: "Décrivez votre besoin...",
    sendMessageBtn: "Envoyer le message",
    successSent: "Message envoyé !",
    successSentDesc: "Merci pour votre message. Notre équipe vous contactera dans les 24 heures.",
    sendAnother: "Envoyer un autre message",

    // Lists and Data
    NAV_LINKS: [
      { label: 'Accueil', href: '#hero' },
      { label: 'À propos', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Galerie', href: '#gallery' },
      { label: 'Partenaires', href: '#partners' },
      { label: 'Contact', href: '#contact' },
    ],
    STATS: [
      { value: 500, suffix: '+', label: 'Clients Actifs' },
      { value: 1200, suffix: '+', label: 'Produits Distribués' },
      { value: 3, suffix: ' Wilayas', label: 'Couverture Régionale' },
      { value: 10, suffix: ' Ans', label: "D'expérience" },
    ],
    SERVICES: [
      {
        icon: 'Truck',
        title: 'Distribution Alimentaire',
        description: 'Nous assurons la distribution de produits alimentaires diversifiés à travers tout le réseau commercial régional.',
        color: 'green',
      },
      {
        icon: 'Package',
        title: 'Livraison & Logistique',
        description: 'Flotte de véhicules réfrigérés et logistique optimisée pour garantir la fraîcheur et la ponctualité des livraisons.',
        color: 'orange',
      },
      {
        icon: 'Droplets',
        title: 'Distribution de Boissons',
        description: 'Gamme complète de boissons gazeuses, jus de fruits et eaux minérales pour tous types de commerces.',
        color: 'blue',
      },
      {
        icon: 'Milk',
        title: 'Produits Laitiers',
        description: 'Distribution de produits laitiers frais — lait, yaourts, fromages — dans le respect de la chaîne du froid.',
        color: 'yellow',
      },
      {
        icon: 'Wheat',
        title: 'Produits Alimentaires Secs',
        description: 'Farine, semoule, huile, sucre et autres denrées alimentaires sèches livrées en quantités grossistes.',
        color: 'amber',
      },
      {
        icon: 'ShoppingCart',
        title: 'Distribution en Gros',
        description: 'Vente en gros à des prix compétitifs pour les supermarchés, épiceries et grandes surfaces.',
        color: 'purple',
      },
      {
        icon: 'Warehouse',
        title: 'Gestion de Stock',
        description: 'Entrepôts modernes et gestion informatisée des stocks pour une disponibilité permanente des produits.',
        color: 'teal',
      },
      {
        icon: 'MapPin',
        title: 'Réseau de Livraison Régional',
        description: 'Couverture de 3 wilayas avec un réseau de livraison dense et fiable centré sur Tiaret.',
        color: 'red',
      },
    ],
    PRODUCTS: [
      {
        category: 'Boissons',
        image: 'https://images.unsplash.com/photo-1596803244618-8dea4c6a4fca?w=400&q=80',
        description: 'Boissons gazeuses, jus naturels, eaux minérales et boissons énergisantes.',
      },
      {
        category: 'Produits Laitiers',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
        description: 'Lait frais, yaourts, fromages et crèmes de qualité supérieure.',
      },
      {
        category: 'Farines & Semoules',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',
        description: 'Farines de blé, semoules fine et grosse, produits meuniers essentiels.',
      },
      {
        category: 'Produits Alimentaires',
        image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80',
        description: 'Huile, sucre, sel, épices et condiments pour tous les besoins culinaires.',
      },
      {
        category: 'Viandes',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80',
        description: 'Viandes transformées, charcuteries et produits carnés sous atmosphère contrôlée.',
      },
      {
        category: 'Produits Emballés',
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80',
        description: "Conserves, plats préparés, snacks et produits d'épicerie emballés.",
      },
    ],
    PROMO: {
      title: 'Pack Grossiste',
      highlight: 'Boissons Premium — Été 2026',
      description:
        'Profitez de notre offre exclusive sur les boissons gazeuses et jus naturels importés. Commande en palettes complètes avec livraison prioritaire dans toute la région.',
      product: 'Assortiment Boissons Premium',
      image: '/YATA2.jpg',
      discount: '-15%',
      urgency: "Offre valable jusqu'au 30 Juin 2026 — Stock limité",
      perks: [
        'Livraison gratuite à partir de 5 palettes',
        'Prix dégressifs selon les quantités commandées',
        'Disponible pour supermarchés, épiceries & hôtels',
        'Service après-vente dédié inclus',
      ],
    },
    WHY_US: [
      {
        icon: 'Zap',
        title: 'Livraison Rapide',
        description: 'Délais de livraison optimisés grâce à notre flotte moderne et notre réseau logistique efficace.',
      },
      {
        icon: 'Award',
        title: 'Produits de Qualité',
        description: 'Sélection rigoureuse des fournisseurs pour garantir des produits conformes aux normes algériennes.',
      },
      {
        icon: 'Shield',
        title: 'Réseau Fiable',
        description: "Plus de 10 ans d'expérience et une présence établie dans 3 wilayas algériennes.",
      },
      {
        icon: 'TrendingDown',
        title: 'Prix Compétitifs',
        description: 'Tarification grossiste transparente avec des remises volumiques avantageuses pour nos clients.',
      },
      {
        icon: 'Handshake',
        title: 'Partenaires Professionnels',
        description: 'Relations durables avec les plus grandes marques nationales et internationales du secteur alimentaire.',
      },
      {
        icon: 'HeadphonesIcon',
        title: 'Service Client',
        description: 'Équipe dédiée disponible 6j/7 pour répondre à vos commandes et gérer vos besoins urgents.',
      },
    ],
    GALLERY_IMAGES: [
      {
        src: '/YATA3.jpg',
        alt: 'Entrepôt YATA Distribution',
        category: 'Entrepôt',
      },
      {
        src: '/YATA4.jpg',
        alt: 'Flotte de camions',
        category: 'Logistique',
      },
      {
        src: '/YATA5.jpg',
        alt: 'Produits alimentaires',
        category: 'Produits',
      },
      {
        src: '/YATA6.jpg',
        alt: 'Centre de distribution',
        category: 'Distribution',
      },
      {
        src: '/YATA7.jpg',
        alt: 'Stockage en entrepôt',
        category: 'Stockage',
      },
    ],
    TIMELINE: [
      { year: '2014', title: 'Fondation', desc: 'Création de YATA Distribution à Tiaret avec une vision locale.' },
      { year: '2017', title: 'Expansion Régionale', desc: 'Extension à 3 wilayas du centre-ouest algérien.' },
      { year: '2020', title: 'Modernisation', desc: "Acquisition d'une flotte réfrigérée et d'un entrepôt moderne de 5 000 m²." },
      { year: '2024', title: 'Leadership', desc: 'Couverture de 3 wilayas, 500+ clients, leader régional.' },
    ],
    CONTACT_INFO: [
      {
        label: 'Téléphone',
        value: '+213 (0) 770 59 05 10',
        sub: 'WhatsApp disponible',
        color: 'bg-green-100 text-green-700',
        href: 'tel:+213770590510',
      },
      {
        label: 'Email',
        value: 'sarlyata14@gmail.com',
        sub: 'Réponse en 24h',
        color: 'bg-amber-100 text-amber-700',
        href: 'mailto:sarlyata14@gmail.com',
      },
      {
        label: 'Adresse',
        value: 'Zone Industrielle, Tiaret',
        sub: '14000 - Tiaret, Algérie',
        color: 'bg-blue-100 text-blue-700',
        href: 'https://maps.app.goo.gl/u7rBXBEEmZtj8v7T6?g_st=ic',
      },
      {
        label: 'Horaires',
        value: 'Dim – Jeu : 8h00 – 17h00',
        sub: 'Sam : 8h00 – 13h00',
        color: 'bg-purple-100 text-purple-700',
        href: null,
      },
    ],
    WILAYAS: [
      'Tiaret', 'Tissemsilt', 'Djelfa',
    ],
    PARTNERS: [
      { name: 'Cevital', logo: 'https://ui-avatars.com/api/?name=Cevital&background=15803d&color=fff&size=120&bold=true' },
      { name: 'Hamoud Boualem', logo: 'https://ui-avatars.com/api/?name=HB&background=1d4ed8&color=fff&size=120&bold=true' },
      { name: 'Soummam', logo: 'https://ui-avatars.com/api/?name=Soummam&background=dc2626&color=fff&size=120&bold=true' },
      { name: 'Ifri', logo: 'https://ui-avatars.com/api/?name=Ifri&background=0891b2&color=fff&size=120&bold=true' },
      { name: 'Ramy', logo: 'https://ui-avatars.com/api/?name=Ramy&background=7c3aed&color=fff&size=120&bold=true' },
      { name: 'Bimo', logo: 'https://ui-avatars.com/api/?name=Bimo&background=b45309&color=fff&size=120&bold=true' },
      { name: 'Général Emballage', logo: 'https://ui-avatars.com/api/?name=GE&background=064e3b&color=fff&size=120&bold=true' },
      { name: 'Laiterie Tiaret', logo: 'https://ui-avatars.com/api/?name=LT&background=be185d&color=fff&size=120&bold=true' },
    ]
  },
  ar: {
    // SEO
    metaTitle: "YATA Distribution - شريككم الموثوق في توزيع المواد الغذائية",
    metaDesc: "YATA Distribution - شريككم الموثوق في توزيع المواد الغذائية بالجملة في الجزائر. توصيل إقليمي، خدمات لوجستية، ومنتجات غذائية عالية الجودة.",

    // General / UI
    requestQuote: "كن زبوناً",
    contactUs: "اتصل بنا",
    ourServices: "خدماتنا",
    scroll: "تمرير لأسفل",
    headlineBadge: "موزع مواد غذائية بالجملة — الجزائر",
    heroSubtitleStart: "شريككم الموثوق في ",
    heroSubtitleHighlight: "توزيع المواد الغذائية",
    heroSubtitleEnd: " — من المنتج إلى متجركم، في جميع أنحاء الجزائر.",
    exclusiveOffer: "عرض حصري",
    featuredProduct: "منتج مميز",
    getOffer: "استفد من العرض الآن ←",
    hq: "المقر الرئيسي",
    whatsappLabel: "اتصل بنا عبر واتساب",
    viewOnGoogleMaps: "عرض على خرائط Google ←",
    legal: "الشروط القانونية",
    privacy: "سياسة الخصوصية",
    allRightsReserved: "كل الحقوق محفوظة.",
    close: "إغلاق",
    footerDesc: "شريككم الموثوق في توزيع المواد الغذائية بالجملة. من تيارت، نقوم بتموين المحلات التجارية في 3 ولايات جزائرية.",
    navigationHeader: "التنقل",
    contactHeader: "الاتصال",
    newsletterHeader: "النشرة الإخبارية",
    newsletterDesc: "احصلوا على عروض الجملة وأخبارنا مباشرة في بريدكم الإلكتروني.",
    newsletterSuccess: "✓ لقد تم اشتراككم بنجاح!",
    copyrightText: "© 2026 ياتا للتوزيع. كل الحقوق محفوظة.",

    // Navbar
    logoSub: "للتوزيع",

    // About Section
    aboutUs: "من نحن",
    whoIsYata: "ما هي ياتا للتوزيع؟",
    aboutSubtitle: "منذ عام 2014، تعد ياتا للتوزيع الشريك المرجعي للتجار والبقالين والمساحات التجارية الكبرى في الغرب الجزائري للإمداد بالمواد الغذائية بالجملة.",
    yearsExp: "سنوات خبرة في مجال التوزيع",
    ourMission: "مهمتنا",
    missionDesc: "تزويد المحلات التجارية الجزائرية بوصول سريع وموثوق واقتصادي إلى مواد غذائية عالية الجودة، بالاعتماد على خدمات لوجستية متطورة وشراكات دائمة مع أفضل المنتجين الوطنيين.",
    ourVision: "رؤيتنا",
    visionDesc: "أن نصبح الموزع الأول للمواد الغذائية بالجملة في الجزائر بحلول عام 2030، من خلال تغطية كامل التراب الوطني بخدمات لوجستية حديثة وفعالة.",
    ourValues: "قيمنا",
    ourJourney: "مسيرتنا",

    // Values List
    valuesList: [
      { label: 'النزاهة', color: 'text-green-600' },
      { label: 'الشراكة', color: 'text-amber-600' },
      { label: 'الانتشار الوطني', color: 'text-blue-600' },
      { label: 'النمو', color: 'text-purple-600' },
    ],

    // Why Us Section
    whyUsEyebrow: "لماذا تختارنا",
    whyUsTitle: "ما الذي يميزنا",
    whyUsSubtitle: "تلتزم ياتا للتوزيع بتقديم تجربة توريد استثنائية بفضل معايير الجودة والخدمة العالية.",
    whyUsStats: [
      { value: '98%', label: 'معدل رضا العملاء' },
      { value: '24 ساعة', label: 'متوسط وقت التوصيل' },
      { value: '5,000 م²', label: "مساحة المستودعات" },
      { value: '30+', label: 'مركبة توزيع' },
    ],

    // Coverage Section
    coverageEyebrow: "التغطية الجغرافية",
    coverageTitle: "نصِلكم أينما كنتم في الجزائر",
    coverageSubtitle: "من مقرنا في تيارت، يمتد شبكة توزيعنا على 3 ولايات، مما يضمن خدمة سريعة وموثوقة.",
    wilayasCovered: "الولايات المغطاة",
    directDelivery: "توصيل مباشر إلى كل هذه المناطق",
    vehiclesCount: "أكثر من 30 مركبة",
    coverageCards: [
      { label: 'التوصيل في اليوم التالي', desc: 'في الولايات ذات الأولوية' },
      { label: 'تغطية 24/7', desc: 'الطلبات متاحة عبر الإنترنت' },
    ],

    // Gallery Section
    galleryEyebrow: "معرض الصور",
    galleryTitle: "منشآتنا وأنشطتنا",
    gallerySubtitle: "اكتشفوا مستودعاتنا الحديثة، أسطول مركباتنا، وعمليات التوزيع في مختلف أنحاء الجزائر.",

    // Partners Section
    partnersEyebrow: "شركاؤنا",
    partnersTitle: "علامات تجارية تثق بنا",
    partnersSubtitle: "تتعامل ياتا للتوزيع مع أكثر العلامات التجارية الغذائية شهرة في الجزائر لضمان منتجات عالية الجودة بأفضل الأسعار.",
    partnersTrustText: "هل أنتم مورد أو موزع وتريدون الانضمام إلى شبكتنا؟",
    partnersTrustCTA: "اتصلوا بفريقنا التجاري",
    partnersTrustTextEnd: "لمناقشة شراكة رابحة للطرفين.",

    // Services Section
    servicesEyebrow: "خدماتنا",
    servicesTitle: "مجموعة كاملة من خدمات التوزيع",
    servicesSubtitle: "من الاستلام إلى التوصيل، ندير سلسلة إمداد المواد الغذائية بالكامل لضمان عدم نقص أي شيء في متجركم.",
    customServiceTitle: "هل تحتاجون إلى خدمة مخصصة؟",
    customServiceDesc: "اتصلوا بنا للحصول على عرض مخصص يلبي احتياجاتكم بدقة.",

    // Products Section
    productsEyebrow: "منتجاتنا",
    productsTitle: "كتالوج المنتجات الغذائية",
    productsSubtitle: "تشكيلة مختارة بعناية من أفضل العلامات التجارية الجزائرية والعالمية، متوفرة بكميات الجملة وتُسلم إليكم مباشرة.",
    orderProduct: "طلب هذا المنتج",

    // Contact Section
    contactEyebrow: "اتصل بنا",
    contactTitle: "دعنا نتحدث عن احتياجاتك",
    contactSubtitle: "فريقنا التجاري متاح للإجابة على استفساراتكم، إعداد عروض الأسعار، وتنظيم عمليات التوصيل في أقرب الآجال.",
    sendUsMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل *",
    fullNamePlaceholder: "اسمكم الكريم",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني *",
    subjectLabel: "الموضوع *",
    selectSubject: "اختر موضوعاً",
    subjectQuote: "كن زبوناً",
    subjectOrder: "تقديم طلبية",
    subjectPartner: "اقتراح شراكة",
    subjectInfo: "معلومات عامة",
    subjectClaim: "شكوى",
    messageLabel: "الرسالة *",
    messagePlaceholder: "صف لنا احتياجاتك...",
    sendMessageBtn: "إرسال الرسالة",
    successSent: "تم إرسال الرسالة بنجاح!",
    successSentDesc: "شكراً لكم على رسالتكم. سيتصل بكم فريقنا في غضون 24 ساعة.",
    sendAnother: "إرسال رسالة أخرى",

    // Lists and Data
    NAV_LINKS: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'من نحن', href: '#about' },
      { label: 'خدماتنا', href: '#services' },
      { label: 'المعرض', href: '#gallery' },
      { label: 'شركاؤنا', href: '#partners' },
      { label: 'اتصل بنا', href: '#contact' },
    ],
    STATS: [
      { value: 500, suffix: '+', label: 'عملاء نشطون' },
      { value: 1200, suffix: '+', label: 'منتجات موزعة' },
      { value: 3, suffix: ' ولاية', label: 'تغطية إقليمية' },
      { value: 10, suffix: ' سنوات', label: 'خبرة' },
    ],
    SERVICES: [
      {
        icon: 'Truck',
        title: 'توزيع المواد الغذائية',
        description: 'نضمن توزيع منتجات غذائية متنوعة عبر كامل الشبكة التجارية الإقليمية.',
        color: 'green',
      },
      {
        icon: 'Package',
        title: 'التوصيل واللوجستيات',
        description: 'أسطول مركبات مبردة ولوجستيات محسنة لضمان نضارة المنتجات ودقة مواعيد التوصيل.',
        color: 'orange',
      },
      {
        icon: 'Droplets',
        title: 'توزيع المشروبات',
        description: 'مجموعة كاملة من المشروبات الغازية وعصائر الفواكه والمياه المعدنية لجميع أنواع المحلات التجارية.',
        color: 'blue',
      },
      {
        icon: 'Milk',
        title: 'مشتقات الحليب',
        description: 'توزيع منتجات الألبان الطازجة — حليب، ياغورت، أجبان — مع احترام تام لسلسلة التبريد.',
        color: 'yellow',
      },
      {
        icon: 'Wheat',
        title: 'المواد الغذائية الجافة',
        description: 'الدقيق والسميد والزيت والسكر والمواد الغذائية الجافة الأخرى المسلمة بكميات الجملة.',
        color: 'amber',
      },
      {
        icon: 'ShoppingCart',
        title: 'توزيع الجملة',
        description: 'البيع بالجملة بأسعار تنافسية للسوبرماركت ومحلات البقالة والمساحات التجارية الكبرى.',
        color: 'purple',
      },
      {
        icon: 'Warehouse',
        title: 'إدارة المخزون',
        description: 'مستودعات حديثة وإدارة رقمية للمخزون لضمان التوفر الدائم للمنتجات.',
        color: 'teal',
      },
      {
        icon: 'MapPin',
        title: 'شبكة التوصيل الإقليمية',
        description: 'تغطية 3 ولايات بشبكة توصيل مكثفة وموثوقة مركزها ولاية تيارت.',
        color: 'red',
      },
    ],
    PRODUCTS: [
      {
        category: 'المشروبات',
        image: 'https://images.unsplash.com/photo-1596803244618-8dea4c6a4fca?w=400&q=80',
        description: 'مشروبات غازية، عصائر طبيعية، مياه معدنية ومشروبات طاقة.',
      },
      {
        category: 'منتجات الألبان',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
        description: 'حليب طازج، ياغورت، أجبان وقشدة ذات جودة عالية.',
      },
      {
        category: 'الدقيق والسميد',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',
        description: 'دقيق القمح، سميد ناعم وخشن، ومنتجات المطاحن الأساسية.',
      },
      {
        category: 'المواد الغذائية',
        image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80',
        description: 'الزيت والسكر والملح والبهارات والتوابل لجميع احتياجات الطبخ.',
      },
      {
        category: 'اللحوم',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80',
        description: 'لحوم مصنعة، نقانق ومنتجات لحوم محفوظة تحت ظروف مراقبة.',
      },
      {
        category: 'المنتجات المعلبة',
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80',
        description: 'معلبات، أطباق جاهزة، مقرمشات ومنتجات بقالة مغلفة.',
      },
    ],
    PROMO: {
      title: 'باقة الجملة',
      highlight: 'مشروبات ممتازة — صيف 2026',
      description:
        'استفيدوا من عرضنا الحصري على المشروبات الغازية والعصائر الطبيعية المستوردة. الطلب بالمنصات الكاملة مع توصيل ذو أولوية في جميع أنحاء المنطقة.',
      product: 'تشكيلة مشروبات ممتازة',
      image: '/YATA2.jpg',
      discount: '-15%',
      urgency: 'العرض ساري حتى 30 جوان 2026 — الكمية محدودة',
      perks: [
        'توصيل مجاني ابتداءً من 5 منصات',
        'أسعار تنازلية حسب الكميات المطلوبة',
        'متوفر للسوبرماركت والبقالات والفنادق',
        'خدمة ما بعد البيع مخصصة متضمنة',
      ],
    },
    WHY_US: [
      {
        icon: 'Zap',
        title: 'توصيل سريع',
        description: 'مواعيد توصيل محسنة بفضل أسطولنا الحديث وشبكتنا اللوجستية الفعالة.',
      },
      {
        icon: 'Award',
        title: 'منتجات عالية الجودة',
        description: 'اختيار صارم للموردين لضمان منتجات متوافقة مع المعايير الجزائرية.',
      },
      {
        icon: 'Shield',
        title: 'شبكة موثوقة',
        description: 'أكثر من 10 سنوات من الخبرة وحضور راسخ في 3 ولايات جزائرية.',
      },
      {
        icon: 'TrendingDown',
        title: 'أسعار تنافسية',
        description: 'أسعار جملة شفافة مع خصومات مغرية على الكميات لعملائنا.',
      },
      {
        icon: 'Handshake',
        title: 'شركاء مهنيون',
        description: 'علاقات مستدامة مع كبرى العلامات التجارية الوطنية والدولية في قطاع الأغذية.',
      },
      {
        icon: 'HeadphonesIcon',
        title: 'خدمة العملاء',
        description: 'فريق متخصص متاح 6 أيام في الأسبوع لتلبية طلباتكم وإدارة احتياجاتكم العاجلة.',
      },
    ],
    GALLERY_IMAGES: [
      {
        src: '/YATA3.jpg',
        alt: 'مستودع ياتا للتوزيع',
        category: 'مستودع',
      },
      {
        src: '/YATA4.jpg',
        alt: 'أسطول الشاحنات',
        category: 'لوجستيات',
      },
      {
        src: '/YATA5.jpg',
        alt: 'المواد الغذائية',
        category: 'المنتجات',
      },
      {
        src: '/YATA6.jpg',
        alt: 'مركز التوزيع',
        category: 'التوزيع',
      },
      {
        src: '/YATA7.jpg',
        alt: 'التخزين في المستودع',
        category: 'التخزين',
      },
    ],
    TIMELINE: [
      { year: '2014', title: 'التأسيس', desc: 'تأسيس شركة ياتا للتوزيع في تيارت برؤية محلية.' },
      { year: '2017', title: 'التوسع الإقليمي', desc: 'التوسع إلى 3 ولايات في الوسط الغربي الجزائري.' },
      { year: '2020', title: 'التحديث', desc: "الاستحواذ على أسطول نقل مبرد ومستودع حديث بمساحة 5000 متر مربع." },
      { year: '2024', title: 'الريادة', desc: 'تغطية 3 ولايات، أكثر من 500 عميل، وريادة إقليمية.' },
    ],
    CONTACT_INFO: [
      {
        label: 'الهاتف',
        value: '+213 (0) 770 59 05 10',
        sub: 'واتساب متوفر',
        color: 'bg-green-100 text-green-700',
        href: 'tel:+213770590510',
      },
      {
        label: 'البريد الإلكتروني',
        value: 'sarlyata14@gmail.com',
        sub: 'الرد خلال 24 ساعة',
        color: 'bg-amber-100 text-amber-700',
        href: 'mailto:sarlyata14@gmail.com',
      },
      {
        label: 'العنوان',
        value: 'المنطقة الصناعية، تيارت',
        sub: '14000 - تيارت، الجزائر',
        color: 'bg-blue-100 text-blue-700',
        href: 'https://maps.app.goo.gl/u7rBXBEEmZtj8v7T6?g_st=ic',
      },
      {
        label: 'أوقات العمل',
        value: 'الأحد – الخميس: 8:00 – 17:00',
        sub: 'السبت: 8:00 – 13:00',
        color: 'bg-purple-100 text-purple-700',
        href: null,
      },
    ],
    WILAYAS: [
      'تيارت', 'تسمسيلت', 'الجلفة',
    ],
    PARTNERS: [
      { name: 'Cevital', logo: 'https://ui-avatars.com/api/?name=Cevital&background=15803d&color=fff&size=120&bold=true' },
      { name: 'Hamoud Boualem', logo: 'https://ui-avatars.com/api/?name=HB&background=1d4ed8&color=fff&size=120&bold=true' },
      { name: 'Soummam', logo: 'https://ui-avatars.com/api/?name=Soummam&background=dc2626&color=fff&size=120&bold=true' },
      { name: 'Ifri', logo: 'https://ui-avatars.com/api/?name=Ifri&background=0891b2&color=fff&size=120&bold=true' },
      { name: 'Ramy', logo: 'https://ui-avatars.com/api/?name=Ramy&background=7c3aed&color=fff&size=120&bold=true' },
      { name: 'Bimo', logo: 'https://ui-avatars.com/api/?name=Bimo&background=b45309&color=fff&size=120&bold=true' },
      { name: 'Général Emballage', logo: 'https://ui-avatars.com/api/?name=GE&background=064e3b&color=fff&size=120&bold=true' },
      { name: 'Laiterie Tiaret', logo: 'https://ui-avatars.com/api/?name=LT&background=be185d&color=fff&size=120&bold=true' },
    ]
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('yata_lang') || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('yata_lang', language)
    const isRtl = language === 'ar'
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    document.documentElement.lang = language

    // SEO updates
    document.title = DICTIONARY[language].metaTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', DICTIONARY[language].metaDesc)
    }
  }, [language])

  const t = (key) => {
    return DICTIONARY[language][key] || key
  }

  const value = {
    language,
    setLanguage,
    isRtl: language === 'ar',
    t,
    ...DICTIONARY[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
