/* ==========================================================================
   DICCIONARIO MULTIIDIOMA (EN, DE, UK, RU)
   ========================================================================== */

const translations = {
  en: {
    /* GLOBAL: NAVEGACIÓN Y CABECERA */
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_philosophy: "Philosophy",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    /* INDEX.HTML (PORTADA) */
    hero_pill: "Independent Wealth & Cross-Border Advisory",
    hero_title: "Thoughtful, private financial guidance tailored to <em>your real life.</em>",
    hero_desc: "Navigating cross-border finances, relocations, and wealth structuring shouldn't feel clinical. I provide clear, discreet, and personal counsel across Europe and Eastern markets.",
    hero_btn_main: "Book a Confidential Call",
    hero_btn_secondary: "Meet Anna →",
    portrait_greeting: "Finance should empower your vision, not complicate your life. Let’s build something lasting together.",
    bio_badge: "Consulting in 4 Languages",
    bio_title: "A discreet partner in an unpredictable world.",
    bio_p1: "Large consulting firms often treat international wealth as simple spreadsheets. In reality, relocating assets, navigating multi-state taxes, and protecting a family fund require nuance and deep trust.",
    bio_p2: "I work directly with founders, expat professionals, and private families who value tailored discretion over institutional bureaucracy.",
    srv_kicker: "Areas of Practice",
    srv_heading: "Focused counsel where it matters most.",
    srv_1_title: "Cross-Border Asset Planning",
    srv_1_desc: "Structuring assets across European and Eastern jurisdictions with a focus on compliance, privacy, and tax efficiency.",
    srv_2_title: "Private Wealth & Preservation",
    srv_2_desc: "Holistic long-term strategies designed to defend purchasing power against macroeconomic instability.",
    srv_3_title: "Family & Relocation Finance",
    srv_3_desc: "Clear roadmaps for families relocating across borders, managing multi-currency cash flows, and securing generational continuity.",
    phil_1_title: "Unbiased & Independent",
    phil_1_desc: "No hidden commissions or third-party incentives. Recommendations are guided solely by your priorities.",
    phil_2_title: "Strict Discretion",
    phil_2_desc: "Direct one-on-one communication without intermediaries or layered assistants.",
    phil_3_title: "Cultural Fluency",
    phil_3_desc: "Native comprehension of legal and cultural nuances across Western and Eastern European spheres.",
    contact_heading: "Let’s discuss your financial roadmap.",
    contact_sub: "Preliminary discussions are always confidential and non-binding.",
    contact_btn: "Send Confidential Message",

    /* SERVICES.HTML */
    srv_page_pill: "Practice & Methodology",
    srv_page_title: "Strategic clarity for complex financial realities.",
    srv_page_sub: "Independent, fee-only advisory without third-party commissions. Designed specifically for founders, expatriates, and private families navigating cross-border rules.",
    srv_deliverables_heading: "Key Areas of Focus:",
    srv_1_detail_p: "Structuring your personal and corporate assets across European jurisdictions to ensure full regulatory compliance, double-tax mitigation, and privacy preservation.",
    srv_1_item_1: "Multi-jurisdiction tax optimization and reporting frameworks",
    srv_1_item_2: "Cross-border holding and entity structuring",
    srv_1_item_3: "Compliance navigation with German and European financial authorities",
    srv_2_detail_p: "Guarding purchasing power against currency volatility and inflation through diversified, independent wealth architectures and bespoke portfolio oversight.",
    srv_2_item_1: "Capital protection strategies tailored to macroeconomic cycles",
    srv_2_item_2: "Independent audit of existing banking fees and product allocations",
    srv_2_item_3: "Risk mitigation and liquidity management",
    srv_3_detail_p: "End-to-end financial orchestration for international families moving across borders, integrating multi-currency budgets and generational continuity.",
    srv_3_item_1: "Relocation fiscal roadmaps (Germany & Eastern Europe)",
    srv_3_item_2: "Generational asset transfer and estate governance",
    srv_3_item_3: "Multi-currency cash flow and international banking setup",
    proc_kicker: "Engagement Model",
    proc_heading: "A clear, disciplined process.",
    proc_1_title: "Confidential Discovery",
    proc_1_desc: "A private preliminary call to evaluate your current jurisdictional landscape and outline your key priorities.",
    proc_2_title: "Strategic Blueprint",
    proc_2_desc: "A tailored, written roadmap addressing tax exposure, asset allocation, and regulatory compliance.",
    proc_3_title: "Execution & Oversight",
    proc_3_desc: "Direct implementation support with banks and legal custodians, ensuring flawless cross-border coordination.",
    srv_cta_title: "Ready to align your financial strategy?",
    srv_cta_desc: "Book a confidential, non-binding introductory session.",

    /* ABOUT.HTML */
    about_page_pill: "Perspective & Identity",
    about_page_title: "Clarity forged in complex realities.",
    about_page_sub: "Financial stewardship is more than calculating figures. It is understanding the human weight of resilience, change, and long-term security.",
    about_role: "Independent Cross-Border Advisor",
    about_quote: "True wealth management begins when you realize that safety and continuity are not abstract concepts—they are decisions made before the storm arrives.",
    about_h2_1: "A Journey Rooted in Real Experience",
    about_p1: "Originally from Donetsk, Ukraine, my professional foundation began in financial consulting, helping clients manage resources and navigate emerging economic landscapes. When geopolitical upheaval reshaped my homeland, what had once been advisory theory became lived reality: the necessity of safeguarding capital, the agility required to relocate, and the friction of crossing borders with peace of mind.",
    about_p2: "Rebuilding in Europe required adapting across diverse sectors, understanding regulatory frameworks from the inside out, and mastering the nuances between Western European institutions and Eastern European dynamics. That multifaceted journey shaped the advisor I am today: analytical, deeply adaptable, and pragmatic.",
    about_h2_2: "Why Independent Advisory?",
    about_p3: "Traditional corporate advisory models are frequently constrained by product sales, hidden bank kickbacks, and rigid bureaucratic silos. I deliberately chose a 100% independent path. This ensures that every strategy, every introduction to legal counsel, and every financial safeguard is designed with a single priority: your family's and enterprise's genuine interests.",
    about_pillar_1_t: "Direct & Confidential",
    about_pillar_1_d: "You communicate solely with me. Discretion is protected without delegating to junior desks.",
    about_pillar_2_t: "Jurisdictional Fluency",
    about_pillar_2_d: "A natural bridge across German regulations and Eastern European legal environments.",
    about_cta_title: "Let’s start with a confidential conversation.",
    about_cta_desc: "Discuss your cross-border circumstances directly and without obligation.",

    /* CONTACT.HTML */
    contact_page_pill: "Private Direct Counsel",
    contact_page_title: "Begin a confidential conversation.",
    contact_page_sub: "Whether you are planning an international relocation, structuring multi-jurisdiction assets, or seeking an independent second opinion.",
    contact_form_title: "Direct Inquiry",
    contact_form_sub: "All inquiries are received directly by Anna under strict professional confidentiality.",
    opt_placeholder: "Select Area of Focus...",
    opt_cross_border: "Cross-Border Asset Planning",
    opt_wealth_preservation: "Private Wealth Preservation",
    opt_relocation: "Family Relocation Finance",
    opt_general: "General Advisory Inquiry",
    contact_btn_submit: "Send Confidential Message",
    contact_disclaimer: "Preliminary exchanges are non-binding and protected under strict European confidentiality standards.",
    contact_direct_title: "Direct Channels",
    contact_direct_desc: "For rapid or secure messaging:",
    contact_office_title: "Berlin Office",
    contact_inperson_note: "In-person consultations by prior appointment only.",
    contact_nda_note: "Strict Non-Disclosure & DSGVO / GDPR Compliant",

    /* PLACEHOLDERS */
    ph_name: "Your Name",
    ph_email: "Your Email",
    ph_phone: "Phone / WhatsApp (Optional)",
    ph_msg: "Briefly describe what you would like to resolve...",

    /* GLOBAL: FOOTER & SUBFOOTER */
    footer_desc: "Independent cross-border wealth management and private financial counsel across Europe.",
    footer_nav_title: "Navigation",
    footer_office_title: "Berlin Office",
    footer_legal_title: "Legal & Privacy",
    footer_impressum: "Legal Notice (Impressum)",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Engagement",
    footer_note: "Berlin • Kyiv",

    /* PHILOSOPHY.HTML */
    phil_page_pill: "Core Principles & Ethics",
    phil_page_title: "The foundations of independent fiduciary counsel.",
    phil_page_sub: "In a financial industry saturated with product pushing and opaque retrocessions, true advisory requires absolute structural independence.",
    phil_card1_title: "Radical Independence & Fee-Only Model",
    phil_card1_desc: "I do not accept kickbacks, distributor fees, or commissions from banks, fund managers, or insurance brokers. The only entity compensating my counsel is you. This completely eliminates conflicts of interest and ensures our goals remain 100% aligned.",
    phil_card2_title: "Uncompromising Discretion & Direct Dialogue",
    phil_card2_desc: "Private matters demand complete confidentiality. You work directly with me—not through anonymous associate layers or rotating relationship managers. All data and communications are treated with strict European privacy and professional discretion.",
    phil_card3_title: "Cultural & Jurisdictional Fluency",
    phil_card3_desc: "Cross-border advisory requires more than legal compliance; it demands empathy for the human journey between European systems. I provide a natural, multilingual bridge between German regulatory expectations and international backgrounds.",
    phil_card4_title: "Capital Preservation Over Speculative Hype",
    phil_card4_desc: "Building wealth takes decades; losing it through reckless structures can take weeks. My advisory philosophy prioritizes stability, generational continuity, multi-currency liquidity, and resilient structuring over volatile short-term trends.",
    phil_comp_kicker: "The Advisory Distinction",
    phil_comp_title: "How Independent Advisory Differs",
    comp_trad_heading: "Traditional Bank / Corporate Desk",
    comp_trad_1: "Tied to in-house financial products and sales targets.",
    comp_trad_2: "Earns hidden distribution commissions from third parties.",
    comp_trad_3: "Frequent rotation of account managers and junior delegates.",
    comp_trad_4: "Rigid templates with little room for cross-border agility.",
    comp_ind_heading: "Anna Advisory Standard",
    comp_ind_1: "100% open-architecture strategy tailored to your exact case.",
    comp_ind_2: "Strict fee-only structure. Zero hidden kickbacks.",
    comp_ind_3: "Direct, personal counsel with Anna from inception to execution.",
    comp_ind_4: "Fluid bridge across European jurisdictions and currencies.",
    phil_cta_title: "Experience the clarity of independent counsel.",
    phil_cta_desc: "Schedule a private, non-binding introductory session.",

    /* LEGAL PAGES */
    imp_pill: "Regulatory Compliance",
    imp_title: "Legal Notice (Impressum)",
    imp_sub: "Information pursuant to Section 5 of the German Digital Services Act (Digitale-Dienste-Gesetz - DDG).",
    imp_s1_t: "Service Provider",
    imp_s2_t: "Direct Contact",
    imp_s3_t: "Professional Status & Regulatory Scope",
    imp_s3_p: "Anna operates as an independent strategic financial and cross-border relocation consultant. In accordance with German regulations, specific legal representation in court and formal tax assessment filings are coordinated in close partnership with licensed German lawyers (Rechtsanwälte) and tax advisors (Steuerberater).",
    imp_s4_t: "Professional Liability Insurance",
    imp_s4_p: "Professional indemnity insurance coverage is maintained in accordance with standard statutory requirements for commercial financial advisory within the European Union.",
    imp_s5_t: "EU Dispute Resolution",
    imp_s5_p: "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. We are neither obligated nor willing to participate in dispute settlement proceedings before a consumer arbitration board.",

    dp_pill: "Data Protection",
    dp_title: "Privacy Policy",
    dp_sub: "Information on how we handle personal data in accordance with the EU General Data Protection Regulation (GDPR / DSGVO).",
    dp_s1_t: "1. Data Controller",
    dp_s1_p: "The controller responsible for data processing on this website pursuant to Art. 4 No. 7 GDPR is Anna Advisory, Friedrichstraße 176, 10117 Berlin, Germany (Email: contact@anna-advisory.de).",
    dp_s2_t: "2. Collection and Storage of Personal Data",
    dp_s2_p: "When submitting inquiries through our contact forms or direct encrypted channels, we process your name, contact information, and relevant contextual data solely to answer your request and deliver advisory services (Art. 6 para. 1 lit. b GDPR).",
    dp_s3_t: "3. Confidentiality & Non-Disclosure",
    dp_s3_p: "All financial, family, and cross-border circumstances shared during preliminary discovery calls are held in strict confidence. No data is sold, rented, or transferred to third-party commercial marketing platforms.",
    dp_s4_t: "4. Your Statutory Rights",
    dp_s4_p: "Under European data protection law, you possess the right of access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), and data portability (Art. 20 GDPR). You may also lodge a complaint with the Berlin Data Protection Authority.",

    terms_pill: "Contractual Framework",
    terms_title: "Terms of Engagement",
    terms_sub: "Principles governing advisory agreements, fee-only billing, and client confidentiality.",
    terms_s1_t: "1. Scope of Independent Advisory",
    terms_s1_p: "All consulting mandates are governed by individualized service agreements. Anna Advisory provides independent strategic financial counsel, asset coordination, and relocation roadmaps. Formal legal, notary, or statutory tax certifications are executed alongside accredited external partners.",
    terms_s2_t: "2. Fee-Only Compensation Structure",
    terms_s2_p: "Advisory engagements are billed exclusively on a transparent hourly, fixed-project, or retainer fee basis agreed in writing prior to work commencement. Anna Advisory strictly accepts zero commissions, third-party distribution incentives, or banking kickbacks.",
    terms_s3_t: "3. Non-Disclosure & Mutual Trust",
    terms_s3_p: "Both parties agree to treat all exchanged financial records, entity documents, and personal details with unconditional confidentiality, extending indefinitely beyond the conclusion of the mandate.",
    terms_s4_t: "4. Applicable Law & Jurisdiction",
    terms_s4_p: "Unless explicitly agreed otherwise in writing, the place of jurisdiction and performance for all contractual obligations is Berlin, Federal Republic of Germany.",

    /* FAQ.HTML */
    faq_page_pill: "Clarity & Expectations",
    faq_page_title: "Frequently Asked Questions",
    faq_page_sub: "Clear answers regarding our engagement structure, fee-only compensation, cross-border scope, and confidentiality standards.",
    faq_cat1_t: "Advisory Model & Fees",
    faq_q1: "What does 'Fee-Only' advisory mean, and why does it matter?",
    faq_a1: "'Fee-only' means my compensation comes exclusively from direct client fees (hourly rates, fixed project pricing, or monthly retainers). I accept zero commissions, referral fees, or kickbacks from banks, fund managers, or insurance products. This guarantees that every strategy recommended is 100% focused on your interests without hidden agendas.",
    faq_q2: "How does the initial discovery consultation work?",
    faq_a2: "Our initial discovery conversation is a private, confidential session to understand your current cross-border circumstances, key challenges, and primary objectives. It is non-binding and allows both parties to assess whether an advisory mandate is mutually aligned.",
    faq_cat2_t: "Cross-Border & Relocation",
    faq_q3: "Do you handle legal representation or tax filings directly?",
    faq_a3: "Anna Advisory provides independent strategic financial counsel, asset coordination, and overarching roadmap architecture. For statutory court representation and formal tax return submissions in Germany, I work in synchronized collaboration with licensed German attorneys (Rechtsanwälte) and tax advisors (Steuerberater).",
    faq_q4: "Which regional markets and jurisdictions do you specialize in?",
    faq_a4: "My primary focus centers on the intersection between Germany/Western Europe and Eastern European cross-border dynamics (particularly Ukraine). I advise international founders, private families, and professionals establishing financial continuity across borders.",
    faq_cat3_t: "Confidentiality & Privacy",
    faq_q5: "How is client data and financial confidentiality protected?",
    faq_a5: "All communications and financial records are held under strict non-disclosure terms and full compliance with European GDPR (DSGVO) standards. Client interactions are direct with Anna, ensuring zero delegation to unauthorized third parties or commercial marketing systems.",
    faq_q6: "Can consultations be conducted in languages other than German?",
    faq_a6: "Yes. Consultations, documentation reviews, and strategic roadmaps are conducted fluently in English, German, Ukrainian, and Russian.",
    faq_cta_title: "Have a question specific to your situation?",
    faq_cta_desc: "Reach out directly for a discreet, non-binding initial discussion.",

    /* FORM AJAX STATUS */
    status_sending: "Sending confidential inquiry...",
    status_success: "Thank you. Your message has been securely sent. Anna will get back to you shortly.",
    status_error: "Unable to send message. Please try again or email contact@anna-advisory.de directly."
  },

  de: {
    /* GLOBAL: NAVEGACIÓN Y CABECERA */
    nav_home: "Startseite",
    nav_about: "Über mich",
    nav_services: "Leistungen",
    nav_philosophy: "Philosophie",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",

    /* INDEX.HTML (PORTADA) */
    hero_pill: "Unabhängige Vermögens- & grenzüberschreitende Beratung",
    hero_title: "Fundierte, vertrauliche Finanzberatung, angepasst an <em>Ihr Leben.</em>",
    hero_desc: "Grenzüberschreitende Finanzen, Umzüge und Vermögensstrukturierung müssen nicht unpersönlich sein. Ich biete klare, diskrete Beratung in europäischen und osteuropäischen Märkten.",
    hero_btn_main: "Vertrauliches Gespräch anfragen",
    hero_btn_secondary: "Über Anna →",
    portrait_greeting: "Finanzen sollten Ihre Vision stärken, nicht Ihr Leben verkomplizieren. Lassen Sie uns gemeinsam Stabilität schaffen.",
    bio_badge: "Beratung in 4 Sprachen",
    bio_title: "Eine verlässliche Partnerin in unbeständigen Zeiten.",
    bio_p1: "Große Beratungshäuser behandeln grenzüberschreitende Vermögen oft wie reine Tabellen. In der Praxis erfordern Vermögenssicherung und Doppelbesteuerung Feingefühl und Vertrauen.",
    bio_p2: "Ich arbeite direkt mit Unternehmern, Expats und Familien, die persönliche Diskretion statt institutioneller Bürokratie schätzen.",
    srv_kicker: "Tätigkeitsfelder",
    srv_heading: "Fokussierte Beratung mit echtem Mehrwert.",
    srv_1_title: "Grenzüberschreitende Vermögensplanung",
    srv_1_desc: "Strukturierung von Vermögenswerten in europäischen Jurisdiktionen mit Fokus auf Compliance und Steuereffizienz.",
    srv_2_title: "Vermögenserhalt & Absicherung",
    srv_2_desc: "Ganzheitliche Strategien zum Schutz der Kaufkraft gegen makroökonomische Volatilität.",
    srv_3_title: "Familien- & Relocation-Finanzen",
    srv_3_desc: "Strukturierte Lösungen für internationale Umzüge, Multi-Währungs-Budgets und Generationenübergänge.",
    phil_1_title: "Unabhängig & Objektiv",
    phil_1_desc: "Keine versteckten Provisionen Dritter. Alle Empfehlungen richten sich ausschließlich nach Ihren Zielen.",
    phil_2_title: "Absolute Diskretion",
    phil_2_desc: "Direkter 1:1-Austausch ohne zwischengeschaltete Assistenzebenen.",
    phil_3_title: "Kulturelles Verständnis",
    phil_3_desc: "Tiefes Verständnis für rechtliche und kulturelle Gegebenheiten in West- und Osteuropa.",
    contact_heading: "Lassen Sie uns Ihre Finanzstrategie besprechen.",
    contact_sub: "Erstgespräche sind stets vertraulich und unverbindlich.",
    contact_btn: "Vertrauliche Nachricht senden",

    /* SERVICES.HTML */
    srv_page_pill: "Beratungsfelder & Methodik",
    srv_page_title: "Strategische Klarheit für komplexe Vermögensfragen.",
    srv_page_sub: "Unabhängige Honorarberatung ohne Drittprovisionen. Speziell entwickelt für Unternehmer, Expats und Familien in grenzüberschreitenden Situationen.",
    srv_deliverables_heading: "Schwerpunkte:",
    srv_1_detail_p: "Strukturierung Ihres Privat- und Unternehmensvermögens im europäischen Raum unter strikter Beachtung von Compliance, Steueroptimierung und Diskretion.",
    srv_1_item_1: "Internationale Steuerstrukturierung und Meldepflichten",
    srv_1_item_2: "Grenzüberschreitende Holding- und Beteiligungsstrukturen",
    srv_1_item_3: "Compliance mit deutschen und europäischen Regulierungsbehörden",
    srv_2_detail_p: "Schutz Ihrer Kaufkraft vor Inflation und Währungsrisiken durch diversifizierte, bankenunabhängige Vermögensarchitekturen.",
    srv_2_item_1: "Kapitalerhaltungsstrategien angepasst an makroökonomische Zyklen",
    srv_2_item_2: "Unabhängige Überprüfung bestehender Bankgebühren und Portfolios",
    srv_2_item_3: "Risikominimierung und Liquiditätssteuerung",
    srv_3_detail_p: "Ganzheitliche finanzielle Begleitung internationaler Familien bei Umzug und Neuorientierung über Ländergrenzen hinweg.",
    srv_3_item_1: "Finanzielle Relocation-Fahrpläne (Deutschland & Osteuropa)",
    srv_3_item_2: "Generationenübergreifender Vermögenstransfer und Nachfolge",
    srv_3_item_3: "Multi-Währungs-Planung und internationales Bank-Setup",
    proc_kicker: "Vorgehensweise",
    proc_heading: "Ein klarer, strukturierter Beratungsprozess.",
    proc_1_title: "Vertrauliches Erstgespräch",
    proc_1_desc: "Ein unverbindliches Gespräch zur Bestandsaufnahme Ihrer steuerlichen und rechtlichen Ausgangslage.",
    proc_2_title: "Strategischer Fahrplan",
    proc_2_desc: "Ein detailliertes, schriftliches Konzept zu Steueroptimierung, Allokation und Regulatorik.",
    proc_3_title: "Umsetzung & Begleitung",
    proc_3_desc: "Direkte Koordination mit Depotbanken, Notaren und Steuerberatern für eine nahtlose Umsetzung.",
    srv_cta_title: "Bereit für eine maßgeschneiderte Finanzstrategie?",
    srv_cta_desc: "Vereinbaren Sie ein vertrauliches und unverbindliches Erstgespräch.",

    /* ABOUT.HTML */
    about_page_pill: "Profil & Hintergrund",
    about_page_title: "Klarheit, gewachsen aus realer Erfahrung.",
    about_page_sub: "Finanzberatung ist mehr als das Kalkulieren von Zahlen. Sie erfordert ein tiefes Verständnis für Stabilität, Wandel und persönliche Sicherheit.",
    about_role: "Unabhängige Finanz- & Relocation-Beraterin",
    about_quote: "Wahre Vermögenssicherung beginnt mit der Erkenntnis, dass Sicherheit keine Abstraktion ist – sondern eine Entscheidung, die man vor dem Sturm trifft.",
    about_h2_1: "Ein Weg geprägt von realer Lebenspraxis",
    about_p1: "Gebürtig aus Donezk, Ukraine, begann mein beruflicher Weg in der klassischen Finanzberatung, wo ich Mandanten bei der Strukturierung ihrer Mittel begleitete. Als geopolitische Umbrüche meine Heimat veränderten, wurde aus Beratungstheorie gelebte Realität: die Notwendigkeit des Kapitalschutzes, die Flexibilität internationaler Reallokation und der Anspruch auf Sicherheit.",
    about_p2: "Der Neuanfang in Europa forderte die Aneignung verschiedener Tätigkeitsfelder, ein tiefes Verständnis europäischer Regulierungen und das Meistern der Brücke zwischen west- und osteuropäischen Märkten. Dieser vielseitige Werdegang prägt meine heutige Arbeitsweise: analytisch, pragmatisch und empathisch.",
    about_h2_2: "Warum unabhängige Beratung?",
    about_p3: "Traditionelle Banken- und Beratungsmodelle sind oft an Produktverkäufe und versteckte Provisionen gebunden. Ich habe mich bewusst für ein 100 % unabhängiges Honorarmodell entschieden. So ist gewährleistet, dass jede Strategie und jede Empfehlung ausschließlich Ihren Interessen dient.",
    about_pillar_1_t: "Direkt & Vertraulich",
    about_pillar_1_d: "Sie sprechen direkt mit mir – ohne zwischengeschaltete Assistenzebenen.",
    about_pillar_2_t: "Regulatorische Kompetenz",
    about_pillar_2_d: "Verlässliche Orientierung an der Schnittstelle deutscher und osteuropäischer Rechtsräume.",
    about_cta_title: "Lassen Sie uns unverbindlich sprechen.",
    about_cta_desc: "Besprechen Sie Ihre persönliche Situation in einem vertraulichen Rahmen.",

    /* CONTACT.HTML */
    contact_page_pill: "Diskrete Direktberatung",
    contact_page_title: "Starten Sie ein vertrauliches Gespräch.",
    contact_page_sub: "Ob internationale Relocation, grenzüberschreitende Vermögensstrukturierung oder eine unabhängige Zweitmeinung.",
    contact_form_title: "Direkte Anfrage",
    contact_form_sub: "Alle Anfragen gehen direkt bei Anna ein und unterliegen strikter Diskretion.",
    opt_placeholder: "Themenbereich auswählen...",
    opt_cross_border: "Grenzüberschreitende Vermögensplanung",
    opt_wealth_preservation: "Vermögenserhalt & Absicherung",
    opt_relocation: "Familien- & Relocation-Finanzen",
    opt_general: "Allgemeine Beratungsanfrage",
    contact_btn_submit: "Vertrauliche Nachricht senden",
    contact_disclaimer: "Erstgespräche sind unverbindlich und nach europäischen Datenschutzstandards (DSGVO) geschützt.",
    contact_direct_title: "Direkte Kanäle",
    contact_direct_desc: "Für schnelle und sichere Nachrichten:",
    contact_office_title: "Kanzlei Berlin",
    contact_inperson_note: "Persönliche Termine nach vorheriger Vereinbarung.",
    contact_nda_note: "Strikte Vertraulichkeit & DSGVO-konform",

    /* PLACEHOLDERS */
    ph_name: "Ihr Name",
    ph_email: "Ihre E-Mail-Adresse",
    ph_phone: "Telefon / WhatsApp (Optional)",
    ph_msg: "Beschreiben Sie kurz Ihr Anliegen...",

    /* GLOBAL: FOOTER & SUBFOOTER */
    footer_desc: "Unabhängiges grenzüberschreitendes Vermögensmanagement und diskrete Finanzberatung in Europa.",
    footer_nav_title: "Navigation",
    footer_office_title: "Kanzlei Berlin",
    footer_legal_title: "Rechtliches",
    footer_impressum: "Impressum",
    footer_privacy: "Datenschutzerklärung",
    footer_terms: "AGB",
    footer_note: "Berlin • Kyjiw",

    /* PHILOSOPHY.HTML */
    phil_page_pill: "Prinzipien & Ethik",
    phil_page_title: "Die Grundlagen unabhängiger Beratung.",
    phil_page_sub: "In einer Finanzbranche voller Produktverkauf und versteckter Provisionen erfordert echte Beratung absolute strukturelle Unabhängigkeit.",
    phil_card1_title: "Radikale Unabhängigkeit & Honorarmodell",
    phil_card1_desc: "Ich erhalte keine Provisionen, Kickbacks oder Vertriebsgebühren von Banken oder Fondsgesellschaften. Meine Vergütung erfolgt ausschließlich durch Sie, was jegliche Interessenskonflikte ausschließt.",
    phil_card2_title: "Kompromisslose Diskretion & Direktdialog",
    phil_card2_desc: "Vermögensfragen verlangen Vertraulichkeit. Sie arbeiten direkt mit mir zusammen – ohne zwischengeschaltete Assistenzebenen oder wechselnde Ansprechpartner.",
    phil_card3_title: "Kulturelle & regulatorische Kompetenz",
    phil_card3_desc: "Grenzüberschreitende Beratung erfordert mehr als Paragraphen; sie verlangt Verständnis für internationale Lebenswege. Ich biete eine verlässliche Brücke zwischen deutschen Standards und osteuropäischen Realitäten.",
    phil_card4_title: "Vermögenserhalt vor Spekulation",
    phil_card4_desc: "Vermögensaufbau dauert Jahrzehnte; es unüberlegt zu verlieren wenige Tage. Meine Philosophie setzt auf Stabilität, Liquidität und Substanzschutz statt auf kurzfristige Hypes.",
    phil_comp_kicker: "Der Unterschied",
    phil_comp_title: "Unabhängige Beratung im Vergleich",
    comp_trad_heading: "Traditionelle Banken / Konzerne",
    comp_trad_1: "Gebunden an konzerneigene Produkte und Verkaufsziele.",
    comp_trad_2: "Erhält verdeckte Vertriebsprovisionen von Drittanbietern.",
    comp_trad_3: "Häufig wechselnde Berater und Weitergabe an Junioren.",
    comp_trad_4: "Starre Standardprozesse ohne internationale Flexibilität.",
    comp_ind_heading: "Anna Advisory Standard",
    comp_ind_1: "100 % freie Architektur, abgestimmt auf Ihre Ausgangslage.",
    comp_ind_2: "Reines Honorarmodell. Keine versteckten Rückvergütungen.",
    comp_ind_3: "Persönliche Beratung durch Anna von Analyse bis Umsetzung.",
    comp_ind_4: "Reibungsloser Übergang über europäische Rechtsräume und Währungen.",
    phil_cta_title: "Erleben Sie echte, unabhängige Beratung.",
    phil_cta_desc: "Vereinbaren Sie ein vertrauliches und unverbindliches Erstgespräch.",

    /* LEGAL PAGES */
    imp_pill: "Rechtliche Angaben",
    imp_title: "Impressum",
    imp_sub: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
    imp_s1_t: "Diensteanbieter",
    imp_s2_t: "Kontakt",
    imp_s3_t: "Berufsbezeichnung & Regulierung",
    imp_s3_p: "Anna ist als unabhängige Finanz- und Relocation-Beraterin tätig. Rechts- und Steuerberatung im Sinne des StBerG und BRAO wird in Kooperation mit zugelassenen Rechtsanwälten und Steuerberatern erbracht.",
    imp_s4_t: "Berufshaftpflichtversicherung",
    imp_s4_p: "Eine den gesetzlichen Vorgaben entsprechende Berufshaftpflichtversicherung für Finanzdienstleister besteht im Geltungsbereich der Europäischen Union.",
    imp_s5_t: "EU-Streitschlichtung",
    imp_s5_p: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",

    dp_pill: "Datenschutz",
    dp_title: "Datenschutzerklärung",
    dp_sub: "Informationen über die Verarbeitung personenbezogener Daten nach der DSGVO.",
    dp_s1_t: "1. Verantwortliche Stelle",
    dp_s1_p: "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist Anna Advisory, Friedrichstraße 176, 10117 Berlin (E-Mail: contact@anna-advisory.de).",
    dp_s2_t: "2. Erhebung & Speicherung von Daten",
    dp_s2_p: "Bei Anfragen über Kontaktformulare oder Messenger erheben wir Kontaktdaten ausschließlich zur Bearbeitung und Durchführung von Beratungsgesprächen (Art. 6 Abs. 1 lit. b DSGVO).",
    dp_s3_t: "3. Vertraulichkeit",
    dp_s3_p: "Sämtliche im Rahmen von Erstgesprächen geteilten Finanzdaten unterliegen strikter Diskretion und werden niemals an unbefugte Dritte weitergegeben.",
    dp_s4_t: "4. Ihre Rechte",
    dp_s4_p: "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO) sowie das Recht auf Beschwerde bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit.",

    terms_pill: "Vertragsrahmen",
    terms_title: "Allgemeine Auftragsbedingungen (AGB)",
    terms_sub: "Grundsätze für Beratungsverträge, Honorarabrechnung und Vertraulichkeit.",
    terms_s1_t: "1. Umfang der Beratungsleistung",
    terms_s1_p: "Beratungsleistungen basieren auf individuellen Mandatsvereinbarungen. Anna Advisory erbringt strategische Vermögens- und Umzugsberatung. Rechts- und Notariatsleistungen erfolgen über akkreditierte Partner.",
    terms_s2_t: "2. Honorarmodell",
    terms_s2_p: "Die Vergütung erfolgt transparent auf Honorarbasis (Stundensatz, Festhonorar oder Retainer). Es werden keinerlei Drittprovisionen oder Bank-Kickbacks angenommen.",
    terms_s3_t: "3. Verschwiegenheit",
    terms_s3_p: "Beide Parteien verpflichten sich zur zeitlich unbegrenzten Geheimhaltung aller im Rahmen des Mandats offengelegten Informationen.",
    terms_s4_t: "4. Anwendbares Recht & Gerichtsstand",
    terms_s4_p: "Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand und Erfüllungsort ist Berlin.",

    /* FAQ.HTML */
    faq_page_pill: "Klarheit & Orientierung",
    faq_page_title: "Häufig gestellte Fragen (FAQ)",
    faq_page_sub: "Klare Antworten zu unserem Beratungsmodell, Honorarstrukturen, grenzüberschreitenden Leistungen und Vertraulichkeitsstandards.",
    faq_cat1_t: "Beratungsmodell & Honorare",
    faq_q1: "Was bedeutet reine Honorarberatung ('Fee-Only')?",
    faq_a1: "Reine Honorarberatung bedeutet, dass die Vergütung ausschließlich durch den Mandanten erfolgt (Stundensatz, Festhonorar oder Retainer). Es werden keinerlei Provisionen, Vertriebsgebühren oder Kickbacks von Banken oder Fondsgesellschaften angenommen. Dies garantiert 100 % Unabhängigkeit.",
    faq_q2: "Wie läuft das unverbindliche Erstgespräch ab?",
    faq_a2: "Das telefonische oder digitale Erstgespräch dient der Bestandsaufnahme Ihrer steuerlichen und vermögensrechtlichen Situation. Es ist vertraulich, unverbindlich und ermöglicht die Prüfung eines gemeinsamen Rahmens.",
    faq_cat2_t: "Grenzüberschreitend & Relocation",
    faq_q3: "Bieten Sie selbst Rechts- oder Steuerberatung an?",
    faq_a3: "Anna Advisory erbringt strategische Vermögensstrukturierung und Relocation-Fahrpläne. Gesetzlich vorgeschriebene Steuererklärungen oder anwaltliche Vertretungen in Deutschland erfolgen in enger Abstimmung mit zugelassenen Steuerberatern und Fachanwälten.",
    faq_q4: "Auf welche Länder und Regionen liegt der Schwerpunkt?",
    faq_a4: "Der Fokus liegt an der Schnittstelle zwischen Deutschland/Westeuropa und osteuropäischen Märkten (insbesondere Ukraine). Ich berate Unternehmer, Expats und Familien beim grenzüberschreitenden Vermögenstransfer.",
    faq_cat3_t: "Diskretion & Datenschutz",
    faq_q5: "Wie wird die Vertraulichkeit meiner Finanzdaten geschützt?",
    faq_a5: "Alle Gespräche und Dokumente unterliegen strengen Verschwiegenheitsvereinbarungen und den Vorgaben der europäischen DSGVO. Sämtlicher Austausch findet direkt mit Anna statt.",
    faq_q6: "In welchen Sprachen können Gespräche geführt werden?",
    faq_a6: "Beratungen und Dokumentenanalysen erfolgen fließend auf Deutsch, Englisch, Ukrainisch und Russisch.",
    faq_cta_title: "Haben Sie eine spezifische Frage zu Ihrer Situation?",
    faq_cta_desc: "Kontaktieren Sie mich für ein vertrauliches und unverbindliches Gespräch.",

    /* FORM AJAX STATUS */
    status_sending: "Vertrauliche Anfrage wird übermittelt...",
    status_success: "Vielen Dank. Ihre Nachricht wurde sicher übertragen. Anna wird sich zeitnah bei Ihnen melden.",
    status_error: "Übertragung fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an contact@anna-advisory.de."
  },

  uk: {
    /* GLOBAL: NAVEGACIÓN Y CABECERA */
    nav_home: "Головна",
    nav_about: "Про мене",
    nav_services: "Послуги",
    nav_philosophy: "Принципи",
    nav_faq: "Часті питання",
    nav_contact: "Контакти",

    /* INDEX.HTML (PORTADA) */
    hero_pill: "Незалежний фінансовий та транскордонний консалтинг",
    hero_title: "Зважені, приватні фінансові рішення для <em>вашого реального життя.</em>",
    hero_desc: "Управління міжнародними активами, релокація та податкове планування не мають бути бюрократичними. Я забезпечую чіткий, конфіденційний та персональний супровід.",
    hero_btn_main: "Замовити конфіденційну консультацію",
    hero_btn_secondary: "Про Анну →",
    portrait_greeting: "Фінанси мають посилювати ваші прагнення, а не ускладнювати життя. Створимо надійну основу разом.",
    bio_badge: "Консультації 4 мовами",
    bio_title: "Надійний партнер у мінливому світі.",
    bio_p1: "Великі консалтингові фірми часто ставляться до приватного капіталу як до сухих звітів. На практиці ж захист активів та транскордонне структурування потребують глибокої довіри.",
    bio_p2: "Я працюю безпосередньо з підприємцями, експатами та родинами, для яких важлива індивідуальна конфіденційність, а не корпоративні шаблони.",
    srv_kicker: "Напрямки практики",
    srv_heading: "Сфокусована експертиза для ключових завдань.",
    srv_1_title: "Транскордонне структурування активів",
    srv_1_desc: "Оптимізація активів у європейських юрисдикціях із дотриманням комплаєнсу та податкової ефективності.",
    srv_2_title: "Збереження приватного капіталу",
    srv_2_desc: "Довгострокові стратегії для захисту купівельної спроможності в умовах економічної турбулентності.",
    srv_3_title: "Фінанси при релокації та сімейні фонди",
    srv_3_desc: "Практичні рішення для родин під час міжнародного переїзду, мультивалютний контроль та спадковість.",
    phil_1_title: "Незалежність та прозорість",
    phil_1_desc: "Жодних прихованих комісійних від третіх сторін. Рішення базуються виключно на ваших інтересах.",
    phil_2_title: "Сувора конфіденційність",
    phil_2_desc: "Пряме спілкування тет-а-тет без посередників чи сторонніх асистентів.",
    phil_3_title: "Культурний контекст",
    phil_3_desc: "Глибоке розуміння юридичних та ментальних тонкощів ринків Західної та Східної Європи.",
    contact_heading: "Обговоримо вашу фінансову стратегію.",
    contact_sub: "Попередні консультації завжди конфіденційні та ні до чого не зобов'язують.",
    contact_btn: "Надіслати повідомлення",

    /* SERVICES.HTML */
    srv_page_pill: "Практика та методологія",
    srv_page_title: "Стратегічна чіткість для складних фінансових завдань.",
    srv_page_sub: "Незалежний консалтинг на основі фіксованої винагороди, без прихованих комісій. Для підприємців, експатів та міжнародних родин.",
    srv_deliverables_heading: "Ключові напрямки:",
    srv_1_detail_p: "Структурування приватних та корпоративних активів у юрисдикціях ЄС із фокусом на комплаєнс, захист конфіденційності та податкову оптимізацію.",
    srv_1_item_1: "Міжнародне податкове планування та звітність",
    srv_1_item_2: "Транскордонні холдингові структури",
    srv_1_item_3: "Комплаєнс-супровід у фінансових установах Німеччини та ЄС",
    srv_2_detail_p: "Захист купівельної спроможності від інфляції та валютних коливань через диверсифіковані та незалежні інвестиційні архітектури.",
    srv_2_item_1: "Стратегії захисту капіталу в умовах макроекономічної турбулентності",
    srv_2_item_2: "Незалежний аудит банківських комісій та існуючих портфелів",
    srv_2_item_3: "Управління ризиками та ліквідністю",
    srv_3_detail_p: "Комплексний фінансовий супровід родин під час міжнародного переїзду, мультивалютний контроль та наступність.",
    srv_3_item_1: "Фінансові дорожні карти релокації (Німеччина та Східна Європа)",
    srv_3_item_2: "Спадковість капіталу та сімейні фонди",
    srv_3_item_3: "Мультивалютні грошові потоки та міжнародний банкінг",
    proc_kicker: "Формат співпраці",
    proc_heading: "Прозорий та структурований процес.",
    proc_1_title: "Конфіденційний аудит",
    proc_1_desc: "Попередня оцінка вашої поточної юрисдикційної та фінансової ситуації.",
    proc_2_title: "Стратегічний план",
    proc_2_desc: "Письмова дорожня карта з мінімізації податкових ризиків та структурування активів.",
    proc_3_title: "Реалізація та нагляд",
    proc_3_desc: "Прямий супровід взаємодії з банками та юристами для бездоганного виконання.",
    srv_cta_title: "Готові впорядкувати власні фінанси?",
    srv_cta_desc: "Замовте конфіденційну ознайомчу консультацію.",

    /* ABOUT.HTML */
    about_page_pill: "Досвід та принципи",
    about_page_title: "Чіткість, загартована реальним досвідом.",
    about_page_sub: "Управління капіталом — це більше, ніж цифри у звітах. Це розуміння справжньої ціни стабільності, адаптації та захисту майбутнього.",
    about_role: "Незалежна фінансова радниця",
    about_quote: "Справжній захист капіталу починається тоді, коли ви розумієте: безпека та спадковість — це не теорія, а рішення, прийняті до настання кризи.",
    about_h2_1: "Шлях, заснований на практичному досвіді",
    about_p1: "Мій професійний шлях розпочався в Донецьку у сфері фінансового консалтингу, де я супроводжувала клієнтів у структуруванні ресурсів. Коли геополітичні події змінили життя моєї країни, професійні знання стали особистим досвідом: необхідність збереження активів, гнучкість під час релокації та виклики міжнародного переміщення.",
    about_p2: "Побудова життя в Європі вимагала швидкої адаптації в різних сферах, глибокого освоєння європейських регуляторних систем та побудови зв'язків між західними та східноєвропейськими ринками. Цей досвід сформував мій підхід: аналітичний, прагматичний і орієнтований на людину.",
    about_h2_2: "Чому саме незалежний консалтинг?",
    about_p3: "Класичні банківські моделі часто обмежені продажем власних продуктів та прихованими комісійними. Мій формат — це 100% незалежне консультування, де єдиним пріоритетом є ваші реальні інтереси та довгострокова безпека родини.",
    about_pillar_1_t: "Прямий діалог і конфіденційність",
    about_pillar_1_d: "Ви взаємодієте безпосередньо зі мною, без передачі справ молодшим асистентам.",
    about_pillar_2_t: "Міжкультурний та правовий контекст",
    about_pillar_2_d: "Природний міст між німецькою регуляторикою та східноєвропейськими реаліями.",
    about_cta_title: "Розпочнемо з конфіденційної розмови.",
    about_cta_desc: "Обговоріть вашу транскордонну ситуацію без жодних зобов'язань.",

    /* CONTACT.HTML */
    contact_page_pill: "Приватний прямий діалог",
    contact_page_title: "Розпочніть конфіденційну розмову.",
    contact_page_sub: "Незалежно від того, чи плануєте ви міжнародний переїзд, структурування активів у кількох юрисдикціях, чи шукаєте незалежний аудит.",
    contact_form_title: "Прямий запит",
    contact_form_sub: "Усі звернення отримує особисто Анна з дотриманням суворої професійної конфіденційності.",
    opt_placeholder: "Оберіть напрямок...",
    opt_cross_border: "Транскордонне структурування активів",
    opt_wealth_preservation: "Збереження приватного капіталу",
    opt_relocation: "Фінанси при релокації",
    opt_general: "Загальний консультаційний запит",
    contact_btn_submit: "Надіслати повідомлення",
    contact_disclaimer: "Попередні консультації є конфіденційними та відповідають стандартам захисту даних ЄС (GDPR).",
    contact_direct_title: "Прямі канали зв'язку",
    contact_direct_desc: "Для швидкого або захищеного листування:",
    contact_office_title: "Офіс у Берліні",
    contact_inperson_note: "Особисті зустрічі виключно за попереднім записом.",
    contact_nda_note: "Сувора конфіденційність та відповідність стандартам GDPR",

    /* PLACEHOLDERS */
    ph_name: "Ваше ім'я",
    ph_email: "Ваш Email",
    ph_phone: "Телефон / WhatsApp (Необов'язково)",
    ph_msg: "Коротко опишіть ваше запитання...",

    /* GLOBAL: FOOTER & SUBFOOTER */
    footer_desc: "Незалежне управління міжнародними активами та приватний фінансовий супровід у Європі.",
    footer_nav_title: "Навігація",
    footer_office_title: "Офіс у Берліні",
    footer_legal_title: "Правова інформація",
    footer_impressum: "Юридична інформація",
    footer_privacy: "Конфіденційність",
    footer_terms: "Умови співпраці",
    footer_note: "Берлін • Київ",

    /* PHILOSOPHY.HTML */
    phil_page_pill: "Принципи та стандарти",
    phil_page_title: "Основи незалежного фінансового консалтингу.",
    phil_page_sub: "В індустрії, перевантаженій нав'язуванням продуктів і прихованими комісіями, справжня допомога можлива лише за повної незалежності.",
    phil_card1_title: "Абсолютна незалежність і фіксована винагорода",
    phil_card1_desc: "Я не отримую комісійних чи ретроцесій від банків чи страхових компаній. Єдиним замовником є ви, що повністю виключає конфлікт інтересів.",
    phil_card2_title: "Безкомпромісна конфіденційність",
    phil_card2_desc: "Приватні справи вимагають повної дискретності. Ви працюєте безпосередньо зі мною, без передачі інформації молодшим асистентам.",
    phil_card3_title: "Міжкультурний та правовий міст",
    phil_card3_desc: "Транскордонний супровід вимагає розуміння специфіки різних середовищ. Я створюю комфортний міст між регуляторикою Німеччини та східноєвропейським досвідом.",
    phil_card4_title: "Збереження капіталу понад спекуляції",
    phil_card4_desc: "Створення капіталу триває десятиліттями; втратити його можна за лічені дні. Мій пріоритет — стабільність, мультивалютна ліквідність та спадковість.",
    phil_comp_kicker: "Ключова відмінність",
    phil_comp_title: "Чим відрізняється незалежний підхід",
    comp_trad_heading: "Традиційний банк / Корпорація",
    comp_trad_1: "Прив'язка до власних продуктів та планів продажів.",
    comp_trad_2: "Приховані комісійні виплати від третіх сторін.",
    comp_trad_3: "Постійна зміна менеджерів та делегування молодшим співробітникам.",
    comp_trad_4: "Шаблонні схеми без транскордонної гнучкості.",
    comp_ind_heading: "Стандарт Anna Advisory",
    comp_ind_1: "100% відкрита архітектура рішень суто під ваш кейс.",
    comp_ind_2: "Прозора модель оплати. Жодних прихованих відкатів.",
    comp_ind_3: "Особистий супровід від Анни від початку до реалізації.",
    comp_ind_4: "Гнучка інтеграція між юрисдикціями та валютами.",
    phil_cta_title: "Оцініть переваги незалежного партнерства.",
    phil_cta_desc: "Замовте конфіденційну ознайомчу консультацію.",

    /* LEGAL PAGES */
    imp_pill: "Правові норми",
    imp_title: "Юридична інформація (Impressum)",
    imp_sub: "Інформація відповідно до § 5 Закону Німеччини про цифрові послуги (DDG).",
    imp_s1_t: "Постачальник послуг",
    imp_s2_t: "Контакти",
    imp_s3_t: "Професійний статус",
    imp_s3_p: "Анна діє як незалежна фінансова радниця та консультантка з релокації. Офіційне представництво в суді та податковий аудит здійснюються у співпраці з ліцензованими юристами та податковими радниками Німеччини.",
    imp_s4_t: "Страхування професійної відповідальності",
    imp_s4_p: "Діє обов'язковий поліс страхування професійної відповідальності відповідно до стандартів ЄС.",
    imp_s5_t: "Врегулювання суперечок у ЄС",
    imp_s5_p: "Платформа онлайн-врегулювання суперечок Європейської комісії: https://ec.europa.eu/consumers/odr.",

    dp_pill: "Захист даних",
    dp_title: "Політика конфіденційності",
    dp_sub: "Інформація щодо обробки персональних даних відповідно до європейського регламенту GDPR (DSGVO).",
    dp_s1_t: "1. Контролер даних",
    dp_s1_p: "Відповідальним за обробку даних на цьому веб-сайті є Anna Advisory, Friedrichstraße 176, 10117 Berlin (Email: contact@anna-advisory.de).",
    dp_s2_t: "2. Збір та зберігання інформації",
    dp_s2_p: "Дані з контактних форм обробляються виключно для надання консультаційних послуг та відповідей на запити (ст. 6 ч. 1 літ. b GDPR).",
    dp_s3_t: "3. Нерозголошення",
    dp_s3_p: "Будь-яка особиста чи фінансова інформація захищена принципами професійної конфіденційності та не передається комерційним базам.",
    dp_s4_t: "4. Ваші права",
    dp_s4_p: "Ви маєте право на доступ, виправлення, видалення інформації та звернення до наглядових органів Берліна з захисту даних.",

    terms_pill: "Умови співпраці",
    terms_title: "Умови надання послуг",
    terms_sub: "Принципи консультаційних угод, фіксованої оплати та конфіденційності.",
    terms_s1_t: "1. Предмет консультацій",
    terms_s1_p: "Консалтинг базується на персональних угодах. Офіційні юридичні та нотаріальні процедури координуються з ліцензованими партнерами.",
    terms_s2_t: "2. Фіксована оплата (Fee-Only)",
    terms_s2_p: "Оплата здійснюється виключно за погодинною ставкою або фіксованим гонораром. Будь-які приховані комісійні виключені.",
    terms_s3_t: "3. Конфіденційність",
    terms_s3_p: "Сторони зобов'язуються зберігати повну таємницю щодо фінансових деталей та документів без обмеження строком.",
    terms_s4_t: "4. Юрисдикція",
    terms_s4_p: "Застосовується законодавство Федеративної Республіки Німеччина. Місце юрисдикції — Берлін.",

    /* FAQ.HTML */
    faq_page_pill: "Прозорість та відповіді",
    faq_page_title: "Часті питання (FAQ)",
    faq_page_sub: "Відповіді щодо формату співпраці, фіксованої оплати, транскордонних послуг та стандартів конфіденційності.",
    faq_cat1_t: "Формат консалтингу та оплата",
    faq_q1: "Що означає незалежний консалтинг за гонораром (Fee-Only)?",
    faq_a1: "Це означає, що оплата здійснюється виключно клієнтом (погодинно, за проект чи абонентська плата). Я не приймаю прихованих комісій чи виплат від банків або фондів, що забезпечує 100% захист ваших інтересів.",
    faq_q2: "Як проходить перша ознайомча консультація?",
    faq_a2: "Це коротка конфіденційна розмова для визначення ваших цілей, поточного правового статусу активів та обсягу завдань. Вона ні до чого не зобов'язує.",
    faq_cat2_t: "Транскордонні питання та релокація",
    faq_q3: "Чи надаєте ви офіційні юридичні та податкові висновки?",
    faq_a3: "Anna Advisory забезпечує стратегічне фінансове структурування та супровід. Офіційне представництво в німецьких судах та податкова звітність здійснюються у партнерстві з ліцензованими німецькими юристами та податковими радниками.",
    faq_q4: "На яких юрисдикціях ви спеціалізуєтесь?",
    faq_a4: "Основна спеціалізація — взаємодія між Німеччиною/ЄС та країнами Східної Європи (зокрема Україною) для підприємців та приватних родин.",
    faq_cat3_t: "Конфіденційність та безпека",
    faq_q5: "Як захищені мої персональні та фінансові дані?",
    faq_a5: "Уся інформація захищена нормами європейського регламенту GDPR (DSGVO) та договором про нерозголошення. Спілкування відбувається виключно з Анною без посередників.",
    faq_q6: "Якими мовами проводяться консультації?",
    faq_a6: "Консультації та робота з документами ведуться українською, німецькою, англійською та російською мовами.",
    faq_cta_title: "Маєте питання щодо вашої ситуації?",
    faq_cta_desc: "Звертайтеся безпосередньо для конфіденційного обговорення.",

    /* FORM AJAX STATUS */
    status_sending: "Надсилання конфіденційного запиту...",
    status_success: "Дякуємо. Ваше повідомлення успішно надіслано. Анна зв'яжеться з вами найближчим часом.",
    status_error: "Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть на contact@anna-advisory.de."
  },

  ru: {
    /* GLOBAL: NAVEGACIÓN Y CABECERA */
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_services: "Услуги",
    nav_philosophy: "Принципы",
    nav_faq: "Частые вопросы",
    nav_contact: "Контакты",

    /* INDEX.HTML (PORTADA) */
    hero_pill: "Независимый финансовый и трансграничный консалтинг",
    hero_title: "Взвешенные, приватные финансовые решения для <em>вашей жизни.</em>",
    hero_desc: "Управление международными активами, релокация и налоговое структурирование не должны быть формальными. Я обеспечиваю четкое, конфиденциальное и индивидуальное консультирование.",
    hero_btn_main: "Запросить консультацию",
    hero_btn_secondary: "Об Анне →",
    portrait_greeting: "Финансы должны усиливать ваши цели, а не усложнять жизнь. Давайте создадим устойчивую основу вместе.",
    bio_badge: "Консультации на 4 языках",
    bio_title: "Надежный партнер в меняющемся мире.",
    bio_p1: "Крупные консалтинговые компании часто воспринимают частный капитал как сухие таблицы. На деле защита активов и трансграничное планирование требуют персонального доверия.",
    bio_p2: "Я работаю напрямую с фаундерами, экспатами и семьями, которые ценят индивидуальную конфиденциальность выше корпоративных шаблонов.",
    srv_kicker: "Направления практики",
    srv_heading: "Сфокусированная экспертиза для важных задач.",
    srv_1_title: "Трансграничное планирование активов",
    srv_1_desc: "Структурирование активов в европейских юрисдикциях с упором на комплаенс и налоговую эффективность.",
    srv_2_title: "Сохранение частного капитала",
    srv_2_desc: "Долгосрочные стратегии для защиты покупательской способности в условиях экономической нестабильности.",
    srv_3_title: "Финансы при релокации и семейные фонды",
    srv_3_desc: "Четкие дорожные карты для семей при переезде за рубеж, мультивалютный учет и преемственность.",
    phil_1_title: "Независимость и объективность",
    phil_1_desc: "Никаких скрытых комиссий от третьих лиц. Рекомендации строятся исключительно на ваших интересах.",
    phil_2_title: "Строгая конфиденциальность",
    phil_2_desc: "Прямой диалог один на один без посредников и лишних ассистентов.",
    phil_3_title: "Понимание контекста",
    phil_3_desc: "Глубокое понимание юридических и культурных реалий рынков Западной и Восточной Европы.",
    contact_heading: "Обсудим вашу финансовую стратегию.",
    contact_sub: "Предварительные консультации всегда конфиденциальны и ни к чему не обязывают.",
    contact_btn: "Отправить сообщение",

    /* SERVICES.HTML */
    srv_page_pill: "Практика и методология",
    srv_page_title: "Стратегическая четкость для сложных финансовых задач.",
    srv_page_sub: "Независимый консалтинг на основе гонорара, без скрытых комиссий. Для фаундеров, экспатов и международных семей.",
    srv_deliverables_heading: "Ключевые направления:",
    srv_1_detail_p: "Структурирование частных и корпоративных активов в юрисдикциях ЕС с упором на комплаенс, конфиденциальность и налоговую оптимизацию.",
    srv_1_item_1: "Международное налоговое планирование и отчетность",
    srv_1_item_2: "Трансграничные холдинговые структуры",
    srv_1_item_3: "Комплаенс-сопровождение в финансовых институтах Германии и ЕС",
    srv_2_detail_p: "Защита покупательской способности от инфляции и валютных рисков через диверсифицированные и независимые структуры.",
    srv_2_item_1: "Стратегии сохранения капитала в условиях нестабильности",
    srv_2_item_2: "Независимый аудит банковских комиссий и структуры портфеля",
    srv_2_item_3: "Управление рисками и ликвидностью",
    srv_3_detail_p: "Комплексное финансовое сопровождение семей при релокации, мультивалютный учет и преемственность.",
    srv_3_item_1: "Дорожные карты релокации (Германия и Восточная Европа)",
    srv_3_item_2: "Преемственность капитала и семейные фонды",
    srv_3_item_3: "Мультивалютные денежные потоки и международный банкинг",
    proc_kicker: "Формат работы",
    proc_heading: "Прозрачный и дисциплинированный процесс.",
    proc_1_title: "Конфиденциальный аудит",
    proc_1_desc: "Предварительная оценка текущей финансовой и юридической ситуации.",
    proc_2_title: "Стратегический план",
    proc_2_desc: "Письменная дорожная карта по оптимизации рисков, налогов и активов.",
    proc_3_title: "Реализация и контроль",
    proc_3_desc: "Прямое сопровождение работы с банками и юристами для точного исполнения стратегии.",
    srv_cta_title: "Готовы выстроить устойчивую финансовую стратегию?",
    srv_cta_desc: "Запросите конфиденциальную ознакомительную консультацию.",

    /* ABOUT.HTML */
    about_page_pill: "Опыт и принципы",
    about_page_title: "Четкость, основанная на реальном опыте.",
    about_page_sub: "Управление капиталом — это не просто финансовые расчеты. Это понимание ценности стабильности, адаптации и долгосрочной безопасности.",
    about_role: "Независимый финансовый консультант",
    about_quote: "Истинная защита активов начинается с понимания: безопасность — это не абстракция, а решения, принятые до наступления шторма.",
    about_h2_1: "Путь, проверенный практикой",
    about_p1: "Мой профессиональный путь начался в Донецке в сфере финансового консалтинга, где я помогала клиентам управлять ресурсами и планировать капитал. Когда геополитические события изменили мою родину, консалтинговая теория стала практикой: важность сохранения активов, гибкость при релокации и надежность правовых решений.",
    about_p2: "Адаптация в Европе потребовала работы в различных сферах, детального понимания европейского регулирования и тонкостей взаимодействия между западными и восточноевропейскими институтами. Этот путь сформировал мой стиль: аналитический, гибкий и прагматичный.",
    about_h2_2: "Почему независимый консалтинг?",
    about_p3: "Корпоративные модели часто привязаны к продаже банковских продуктов и комиссиям третьих лиц. Я выбрала 100% независимый формат, где каждая стратегия и рекомендация создается исключительно в ваших интересах.",
    about_pillar_1_t: "Прямой диалог и конфиденциальность",
    about_pillar_1_d: "Общение происходит исключительно со мной, без передачи задач сторонним помощникам.",
    about_pillar_2_t: "Понимание регуляторного контекста",
    about_pillar_2_d: "Надежный мост между законодательством Германии и восточноевропейскими реалиями.",
    about_cta_title: "Начнем с конфиденциального диалога.",
    about_cta_desc: "Обсудите вашу финансовую ситуацию напрямую и без обязательств.",

    /* CONTACT.HTML */
    contact_page_pill: "Прямой конфиденциальный диалог",
    contact_page_title: "Начните конфиденциальный разговор.",
    contact_page_sub: "Планируете ли вы международный переезд, структурирование активов в нескольких юрисдикциях или ищете независимое второе мнение.",
    contact_form_title: "Прямой запрос",
    contact_form_sub: "Все обращения поступают напрямую Анне с соблюдением строгой профессиональной тайны.",
    opt_placeholder: "Выберите направление...",
    opt_cross_border: "Трансграничное планирование активов",
    opt_wealth_preservation: "Сохранение частного капитала",
    opt_relocation: "Финансы при релокации",
    opt_general: "Общий консультационный запрос",
    contact_btn_submit: "Отправить сообщение",
    contact_disclaimer: "Предварительные консультации ни к чему не обязывают и защищены европейскими стандартами GDPR.",
    contact_direct_title: "Прямые каналы связи",
    contact_direct_desc: "Для быстрой или защищенной связи:",
    contact_office_title: "Офис в Берлине",
    contact_inperson_note: "Личные встречи строго по предварительной записи.",
    contact_nda_note: "Строгая конфиденциальность и соответствие GDPR",

    /* PLACEHOLDERS */
    ph_name: "Ваше имя",
    ph_email: "Ваш Email",
    ph_phone: "Телефон / WhatsApp (Необязательно)",
    ph_msg: "Краткое описание вашей ситуации...",

    /* GLOBAL: FOOTER & SUBFOOTER */
    footer_desc: "Независимое трансграничное управление активами и частный финансовый консалтинг в Европе.",
    footer_nav_title: "Навигация",
    footer_office_title: "Офис в Берлине",
    footer_legal_title: "Правовая информация",
    footer_impressum: "Выходные данные",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия работы",
    footer_note: "Берлин • Киев",

    /* PHILOSOPHY.HTML */
    phil_page_pill: "Принципы и этика",
    phil_page_title: "Основы независимого финансового консалтинга.",
    phil_page_sub: "В индустрии, переполненной продажей продуктов и скрытыми комиссиями, надежное партнерство требует абсолютной независимости.",
    phil_card1_title: "Полная независимость и работа за гонорар",
    phil_card1_desc: "Я не получаю скрытых комиссий от банков или фондов. Мои услуги оплачиваете только вы, что исключает конфликт интересов.",
    phil_card2_title: "Строгая конфиденциальность и прямой диалог",
    phil_card2_desc: "Личные финансовые вопросы требуют полной защиты. Общение происходит только со мной, без передачи задач сторонним помощникам.",
    phil_card3_title: "Культурное и правовое понимание",
    phil_card3_desc: "Международный консалтинг требует понимания специфики стран. Я создаю естественный мост между законами Германии и восточноевропейскими реалиями.",
    phil_card4_title: "Сохранение капитала важнее спекуляций",
    phil_card4_desc: "Создание капитала требует десятилетий, а потерять его можно за считанные дни. Мой приоритет — надежность, ликвидность и защита семьи.",
    phil_comp_kicker: "Ключевое отличие",
    phil_comp_title: "В чем разница подходов",
    comp_trad_heading: "Традиционный банк / Корпорация",
    comp_trad_1: "Привязка к собственным продуктам и планам продаж.",
    comp_trad_2: "Скрытые комиссии и выплаты от третьих лиц.",
    comp_trad_3: "Частая смена менеджеров и передача задач ассистентам.",
    comp_trad_4: "Шаблонные процессы без учета трансграничной специфики.",
    comp_ind_heading: "Стандарт Anna Advisory",
    comp_ind_1: "100% открытая архитектура под вашу конкретную задачу.",
    comp_ind_2: "Фиксированная оплата. Никаких скрытых вознаграждений.",
    comp_ind_3: "Прямое ведение проекта Анной от начала до конца.",
    comp_ind_4: "Свободная координация между юрисдикциями и валютами.",
    phil_cta_title: "Оцените ясность независимого консалтинга.",
    phil_cta_desc: "Запросите конфиденциальную ознакомительную консультацию.",

    /* LEGAL PAGES */
    imp_pill: "Правовые нормы",
    imp_title: "Выходные данные (Impressum)",
    imp_sub: "Информация в соответствии с § 5 Закона Германии о цифровых услугах (DDG).",
    imp_s1_t: "Поставщик услуг",
    imp_s2_t: "Контакты",
    imp_s3_t: "Профессиональный статус",
    imp_s3_p: "Анна ведет деятельность в качестве независимого финансового консультанта. Юридические и налоговые заключения оформляются совместно с лицензированными адвокатами и налоговыми консультантами Германии.",
    imp_s4_t: "Страхование профессиональной ответственности",
    imp_s4_p: "Профессиональная ответственность застрахована в соответствии с требованиями законодательства ЕС.",
    imp_s5_t: "Урегулирование споров в ЕС",
    imp_s5_p: "Платформа онлайн-урегулирования споров Еврокомиссии: https://ec.europa.eu/consumers/odr.",

    dp_pill: "Защита данных",
    dp_title: "Политика конфиденциальности",
    dp_sub: "Информация об обработке персональных данных согласно европейскому регламенту GDPR (DSGVO).",
    dp_s1_t: "1. Контролер данных",
    dp_s1_p: "Ответственным лицом за обработку данных является Anna Advisory, Friedrichstraße 176, 10117 Berlin (Email: contact@anna-advisory.de).",
    dp_s2_t: "2. Сбор и обработка информации",
    dp_s2_p: "Данные из форм обратной связи используются исключительно для коммуникации и оказания консультаций (ст. 6 ч. 1 лит. b GDPR).",
    dp_s3_t: "3. Конфиденциальность",
    dp_s3_p: "Вся информация, переданная на вводных консультациях, строго конфиденциальна и не передается третьим лицам.",
    dp_s4_t: "4. Ваши права",
    dp_s4_p: "Вы имеете право на доступ, изменение, удаление данных, а также право на обращение в ведомство по защите данных Берлина.",

    terms_pill: "Условия сотрудничества",
    terms_title: "Условия работы",
    terms_sub: "Принципы консультационных договоров, прозрачной оплаты и конфиденциальности.",
    terms_s1_t: "1. Предмет консультаций",
    terms_s1_p: "Консультации проводятся на основе индивидуальных договоров. Юридические и нотариальные действия выполняются через аккредитованных партнеров.",
    terms_s2_t: "2. Гонорарная основа (Fee-Only)",
    terms_s2_p: "Оплата производится строго на основе прозрачных ставок за проект или время. Комиссии от банков и фондов исключены.",
    terms_s3_t: "3. Конфиденциальность",
    terms_s3_p: "Стороны обязуются соблюдать бессрочную конфиденциальность относительно всех предоставленных документов и сведений.",
    terms_s4_t: "4. Применимое право и юрисдикция",
    terms_s4_p: "Применяется право Федеративной Республики Германия. Место юрисдикции — Берлин.",

    /* FAQ.HTML */
    faq_page_pill: "Прозрачность и ответы",
    faq_page_title: "Частые вопросы (FAQ)",
    faq_page_sub: "Ответы о формате сотрудничества, гонорарной модели, трансграничном сопровождении и защите данных.",
    faq_cat1_t: "Модель работы и оплата",
    faq_q1: "Что означает независимый консалтинг за гонорар (Fee-Only)?",
    faq_a1: "Оплата услуг производится исключительно клиентом (почасовая ставка, проектная работа или ретейнер). Комиссии и скрытые выплаты от банков или управляющих компаний исключены.",
    faq_q2: "Как проходит вводная ознакомительная консультация?",
    faq_a2: "Это приватная беседа для оценки вашей текущей финансовой и юридической ситуации, а также определения приоритетных шагов. Она ни к чему не обязывает.",
    faq_cat2_t: "Трансграничные задачи и релокация",
    faq_q3: "Оказываете ли вы юридические и налоговые услуги напрямую?",
    faq_a3: "Anna Advisory разрабатывает стратегическую финансовую архитектуру и координирует процессы. Официальное представительство и подача деклараций в Германии осуществляются совместно с лицензированными адвокатами и налоговыми консультантами.",
    faq_q4: "На каких юрисдикциях вы специализируетесь?",
    faq_a4: "Основной фокус — взаимодействие между юрисдикциями Германии/ЕС и Восточной Европы (включая Украину) для фаундеров и частных лиц.",
    faq_cat3_t: "Конфиденциальность и безопасность",
    faq_q5: "Как защищена конфиденциальность финансовых данных?",
    faq_a5: "Все данные защищены европейским регламентом GDPR (DSGVO) и бессрочным соглашением о неразглашении. Вся коммуникация идет только напрямую с Анной.",
    faq_q6: "На каких языках проводятся консультации?",
    faq_a6: "Консультации и анализ документов проводятся на английском, немецком, украинском и русском языках.",
    faq_cta_title: "Есть вопрос по вашей ситуации?",
    faq_cta_desc: "Свяжитесь напрямую для конфиденциального обсуждения.",

    /* FORM AJAX STATUS */
    status_sending: "Отправка конфиденциального запроса...",
    status_success: "Спасибо. Ваше сообщение успешно отправлено. Анна свяжется с вами в ближайшее время.",
    status_error: "Не удалось отправить сообщение. Попробуйте снова или напишите на contact@anna-advisory.de."
  }
};

/* ==========================================================================
   MOTOR DE CAMBIO DE IDIOMA
   ========================================================================== */

function changeLanguage(lang) {
  if (!translations[lang]) return;

  // 1. Textos regulares
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // 2. Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // 3. Persistencia
  document.documentElement.lang = lang;
  localStorage.setItem('anna_lang', lang);
}

/* ==========================================================================
   INICIALIZACIÓN AL CARGAR EL DOM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Selector de idioma persistente (Desktop & Mobile)
  const select = document.getElementById('lang-select');
  const savedLang = localStorage.getItem('anna_lang') || 'en';

  if (select && translations[savedLang]) {
    select.value = savedLang;
    changeLanguage(savedLang);

    const handleLangChange = (e) => {
      changeLanguage(e.target.value);
    };

    select.addEventListener('change', handleLangChange);
    select.addEventListener('input', handleLangChange);
  }

  // Menú Hamburguesa Móvil
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-cta a');

  if (menuBtn && mobileNav) {
    const closeMenu = () => {
      menuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    const toggleMenu = () => {
      const isOpen = menuBtn.classList.toggle('active');
      mobileNav.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Cerrar menú si se hace tap en el logo
    const brandLogo = document.querySelector('.header .brand');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        if (menuBtn.classList.contains('active')) {
          closeMenu();
        }
      });
    }
  }

  // Interacción Tap/Clic para Retrato y Badge en Móvil
  const portrait = document.querySelector('.portrait-wrapper');
  if (portrait) {
    portrait.addEventListener('click', (e) => {
      if (e.target.closest('.floating-badge')) return;
      portrait.classList.toggle('active');
    });
  }

  const badge = document.querySelector('.floating-badge');
  if (badge) {
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      badge.classList.toggle('active');
    });
  }

  // Efecto compacto del Header al hacer scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Manejo de envío AJAX para Web3Forms (Index y Contact)
  const ajaxForms = document.querySelectorAll('.web3-ajax-form');
  ajaxForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem('anna_lang') || 'en';
      const submitBtn = form.querySelector('button[type="submit"]');
      const statusBox = form.querySelector('.form-status-msg');

      if (!statusBox) return;

      // Estado enviando
      const originalBtnText = submitBtn.innerText;
      submitBtn.disabled = true;
      submitBtn.innerText = translations[currentLang]?.status_sending || 'Sending...';
      statusBox.style.display = 'block';
      statusBox.style.color = 'var(--text-muted)';
      statusBox.innerText = translations[currentLang]?.status_sending || 'Sending...';

      const formData = new FormData(form);
      const jsonObject = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(jsonObject)
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          statusBox.style.color = 'var(--accent-sage)';
          statusBox.innerText = translations[currentLang]?.status_success || 'Message sent successfully.';
          form.reset();
        } else {
          statusBox.style.color = 'var(--accent-terracotta)';
          statusBox.innerText = result.message || (translations[currentLang]?.status_error || 'Error sending message.');
        }
      } catch (err) {
        statusBox.style.color = 'var(--accent-terracotta)';
        statusBox.innerText = translations[currentLang]?.status_error || 'Network error. Please try again.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    });
  });
});