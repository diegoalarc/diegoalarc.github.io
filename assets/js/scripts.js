(function(){
  "use strict";

  /* ============================================================
     1. i18n dictionary
  ============================================================ */
  var T = {
    en: {
      "nav.about":"About","nav.skills":"Skills","nav.experience":"Experience","nav.education":"Education",
      "nav.certifications":"Certifications","nav.projects":"Projects","nav.play":"Play","nav.contact":"Contact",
      "hero.role":"Customer Success Lead | Geospatial Data Scientist",
      "hero.bio":"Customer Success Lead and Geospatial Data Scientist with 10+ years of international experience spanning enterprise CRM administration, technical API support, and spatial analytics. Proven track record of architecting HubSpot CRM infrastructures, aligning Sales with Product engineering, and accelerating client onboarding. Specialized in translating complex user requirements into actionable technical solutions. Trilingual professional (Spanish, English, German) holding an M.Sc. in Remote Sensing.",
      "hero.chip1":"10+ years of experience","hero.chip2":"Trilingual — ES · EN · DE","hero.chip3":"M.Sc. in Remote Sensing","hero.chip4":"Based in Germany",
      "hero.cta1":"Get in touch",
      "skills.title":"Technical &amp; Core Competencies",
      "skills.cat1":"Customer Success &amp; CRM","skills.cat1items":"HubSpot CRM Architecture · Zendesk Administration · Account Playbooks · Stakeholder Management · Enterprise Technical Onboarding",
      "skills.cat2":"Data Science &amp; Programming","skills.cat2items":"Python 3 · R · SQL · GeoPandas · Machine Learning (Random Forest, SVM)",
      "skills.cat3":"API &amp; DevOps Ecosystem","skills.cat3items":"REST APIs · OpenAPI Specification 3.0 · Linux · Git · Docker",
      "skills.cat4":"Geospatial Engineering","skills.cat4items":"QGIS · ArcGIS · Sentinel-2 Multispectral · LiDAR 3D · Photogrammetry",
      "skills.cat5":"Languages","skills.cat5items":"Spanish (Native) · English (C1 Professional) · German (B1)",
      "experience.title":"Professional Experience",
      "exp.aves.role":"Customer Success Lead — AVES Reality",
      "exp.aves.b1":"Architect, configure, and administer the company-wide <strong>HubSpot CRM</strong> infrastructure to optimize pipeline tracking, customer health metrics, and executive reporting.",
      "exp.aves.b2":"Orchestrate cross-functional alignment between Sales and Product teams to synchronize enterprise client requirements directly with engineering roadmaps.",
      "exp.aves.b3":"Manage end-to-end customer communication and onboarding workflows, ensuring 100% on-time delivery of highly technical spatial datasets.",
      "exp.aves.b4":"Author and operationalize Customer Success playbooks in collaboration with Sales, significantly driving account retention and post-onboarding growth.",
      "exp.up42sr.role":"Senior Technical Support Engineer — UP42",
      "exp.up42sr.b1":"Commanded high-priority technical escalations for enterprise developer integrations, directly elevating customer satisfaction (CSAT) and account retention.",
      "exp.up42sr.b2":"Acted as primary Point of Contact (POC) for Data Product Managers, evaluating pre-release builds and channeling user friction points into sprint planning.",
      "exp.up42sr.b3":"Executed comprehensive REST API testing and maintained developer documentation compliant with <strong>OpenAPI Specification 3.0</strong> standards.",
      "exp.up42doc.role":"Technical Documentation Engineer (Secondment) — UP42",
      "exp.up42doc.b1":"Authored developer FAQs, API integration recipes, and geospatial dataset specifications utilized by international enterprise clients.",
      "exp.up42doc.b2":"Restructured public documentation architecture, cutting navigation friction and reducing Tier 1 support ticket volume.",
      "exp.up42.role":"Technical Support Engineer — UP42",
      "exp.up42.b1":"Resolved complex support requests regarding automated API pipelines and multi-sensor satellite catalog access.",
      "exp.up42.b2":"Administered Zendesk; engineered automated triggers, macros, and reporting dashboards that measurably reduced average ticket resolution times.",
      "exp.up42.b3":"Guided technical customer onboarding onto REST APIs, accelerating time-to-value for new platform users.",
      "exp.aguas.role":"Senior GIS Analyst — Aguas Andinas S.A.",
      "exp.aguas.b1":"Maintained enterprise GIS databases for millions of utility customers; engineered Python automation scripts in ArcGIS that accelerated data processing times by <strong>40%</strong>.",
      "exp.aguas.b2":"Executed high-precision GNSS field resurveys to enhance spatial integrity for urban infrastructure planning.",
      "exp.aconcagua.role":"Senior Project Engineer — GIS &amp; Data Automation — Aconcagua Solutions",
      "exp.aconcagua.b1":"Engineered Excel VBA automation tools to eliminate manual data entry and developed Python web scrapers to harvest municipal open geodata.",
      "exp.here.role":"Field Analyst II — GIS Project Manager — HERE Maps (Nokia / HERE Technologies)",
      "exp.here.b1":"Directed national POI and mapping projects across Chile, negotiating municipal data-sharing agreements and enforcing strict corporate Quality Assurance standards.",
      "education.title":"Education",
      "edu.msc.title":"Master of Science (M.Sc.) in Remote Sensing",
      "edu.msc.body":'Completed as part of the <a class="master-link" href="https://eagle-science.org/about/" target="_blank" rel="noopener">EAGLE — Applied Earth Observation and Geoanalysis</a> master\'s program at <a href="https://www.uni-wuerzburg.de/" target="_blank" rel="noopener">Julius-Maximilians-Universität Würzburg</a>, Germany.',
      "edu.msc.thesislabel":"Thesis:",
      "edu.msc.thesis":'<strong>Thesis:</strong> "Predicting Grape Yields in Chile using Sentinel-2 Imagery and Machine Learning Models" (Python/R pipelines using Random Forest and SVM).',
      "edu.bsc.title":"Bachelor of Science (B.Sc.) in Survey Engineering",
      "edu.bsc.body":"Universidad de Santiago de Chile (USACH), Santiago, Chile.",
      "edu.bsc.focus":"Focus on Geodesy, topographic measurement systems, and 3D spatial modeling.",
      "certs.title":"Certifications",
      "certs.subtitle":"Selected certifications and credentials — from Customer Success methodology to remote sensing and language proficiency.",
      "certs.credid":"Credential ID","certs.view":"View credential →",
      "certs.addcard.title":"Add certification","certs.addcard.body":"New credentials will appear here as they're earned.",
      "date.d1":"Issued Dec 2022 · Expired Dec 2024",
      "date.d2":"Issued Nov 2022",
      "date.d3":"Issued Jul 2022",
      "date.d4":"Issued Mar 2021",
      "date.d5":"Issued Apr 2019 · Expired Apr 2021",
      "date.d6":"Issued May 2017 · Expired May 2018",
      "date.d7":"Issued Feb 2018",
      "projects.title":"Projects &amp; Initiatives",
      "proj.geodesicl.title":"GeodesiCL (Author)","proj.geodesicl.body":"Author of the official R package for geodesic calculations tailored to Chilean projections, widely adopted nationwide.","proj.geodesicl.link":"View Repository →",
      "proj.geocodigos.title":"Geocodigos Chile (Founder)","proj.geocodigos.body":"Founded a community initiative mentoring over 100+ geoscientists in open-source programming methodologies between 2019 and 2023.","proj.geocodigos.link":"View Organization →",
      "proj.dlr.title":"DLR Internship","proj.dlr.body":"Completed a competitive research internship at the German Aerospace Center (DLR) focusing on advanced satellite time-series analysis.",
      "play.title":"Off the clock","play.subtitle":"Recruiters deserve a coffee break too. Steer the satellite, collect ground stations, and try to beat your own high score.",
      "play.score":"Score","play.best":"Best","play.start":"Start","play.restart":"Restart","play.paused":"Paused","play.over":"Game over","play.cheat":"cheat mode",
      "contact.title":"Let's connect","contact.subtitle":"Interested in collaboration, geospatial analytics, or Customer Success leadership?",
      "footer.rights":"© 2026 Diego Alarcón. All rights reserved.",
      "coord.country":"Hersbruck, Germany",
      "toast.konami":"🛰️ Houston, we have a hire! Cheat mode unlocked below.",
      "toast.view_rgb":"Back to true-colour (RGB) view.",
      "toast.view_ndvi":"NDVI false-colour view — the way a satellite sees vegetation health.",
      "toast.view_ndwi":"NDWI false-colour view — highlighting water bodies, the way satellites map water.",
      "toast.view_swir":"SWIR false-colour view — short-wave infrared, used for geology and burn scars."
    },
    es: {
      "nav.about":"Sobre mí","nav.skills":"Habilidades","nav.experience":"Experiencia","nav.education":"Educación",
      "nav.certifications":"Certificaciones","nav.projects":"Proyectos","nav.play":"Jugar","nav.contact":"Contacto",
      "hero.role":"Líder de Customer Success | Científico de Datos Geoespaciales",
      "hero.bio":"Líder de Customer Success y científico de datos geoespaciales con más de 10 años de experiencia internacional en administración de CRM empresarial, soporte técnico de APIs y análisis espacial. Historial comprobado en el diseño de infraestructuras CRM en HubSpot, la alineación entre Ventas e Ingeniería de Producto, y la aceleración del onboarding de clientes. Especializado en traducir requerimientos técnicos complejos en soluciones accionables. Profesional trilingüe (español, inglés, alemán) con un Máster en Teledetección.",
      "hero.chip1":"Más de 10 años de experiencia","hero.chip2":"Trilingüe — ES · EN · DE","hero.chip3":"Máster en Teledetección","hero.chip4":"Radicado en Alemania",
      "hero.cta1":"Escríbeme",
      "skills.title":"Competencias técnicas y transversales",
      "skills.cat1":"Customer Success y CRM","skills.cat1items":"Arquitectura de HubSpot CRM · Administración de Zendesk · Playbooks de cuentas · Gestión de stakeholders · Onboarding técnico empresarial",
      "skills.cat2":"Ciencia de datos y programación","skills.cat2items":"Python 3 · R · SQL · GeoPandas · Machine Learning (Random Forest, SVM)",
      "skills.cat3":"Ecosistema de APIs y DevOps","skills.cat3items":"APIs REST · OpenAPI Specification 3.0 · Linux · Git · Docker",
      "skills.cat4":"Ingeniería geoespacial","skills.cat4items":"QGIS · ArcGIS · Sentinel-2 Multiespectral · LiDAR 3D · Fotogrametría",
      "skills.cat5":"Idiomas","skills.cat5items":"Español (nativo) · Inglés (C1 profesional) · Alemán (B1)",
      "experience.title":"Experiencia profesional",
      "exp.aves.role":"Líder de Customer Success — AVES Reality",
      "exp.aves.b1":"Diseña, configura y administra la infraestructura de <strong>HubSpot CRM</strong> a nivel de toda la empresa para optimizar el seguimiento del pipeline, las métricas de salud del cliente y los reportes ejecutivos.",
      "exp.aves.b2":"Coordina la alineación multifuncional entre los equipos de Ventas y Producto para sincronizar los requerimientos de clientes empresariales directamente con las hojas de ruta de ingeniería.",
      "exp.aves.b3":"Gestiona la comunicación y los flujos de onboarding de clientes de principio a fin, asegurando una entrega puntual del 100% de conjuntos de datos espaciales altamente técnicos.",
      "exp.aves.b4":"Redacta y pone en marcha playbooks de Customer Success junto con Ventas, impulsando de forma significativa la retención de cuentas y el crecimiento post-onboarding.",
      "exp.up42sr.role":"Senior Technical Support Engineer — UP42",
      "exp.up42sr.b1":"Lideró escalaciones técnicas de alta prioridad para integraciones de desarrolladores empresariales, elevando directamente la satisfacción del cliente (CSAT) y la retención de cuentas.",
      "exp.up42sr.b2":"Actuó como punto de contacto principal (POC) para los Product Managers de Datos, evaluando versiones preliminares y canalizando los puntos de fricción de los usuarios hacia la planificación de sprints.",
      "exp.up42sr.b3":"Ejecutó pruebas exhaustivas de APIs REST y mantuvo documentación para desarrolladores conforme al estándar <strong>OpenAPI Specification 3.0</strong>.",
      "exp.up42doc.role":"Technical Documentation Engineer (comisión de servicio) — UP42",
      "exp.up42doc.b1":"Redactó FAQs para desarrolladores, guías de integración de API y especificaciones de conjuntos de datos geoespaciales utilizadas por clientes empresariales internacionales.",
      "exp.up42doc.b2":"Reestructuró la arquitectura de la documentación pública, reduciendo la fricción de navegación y el volumen de tickets de soporte de nivel 1.",
      "exp.up42.role":"Technical Support Engineer — UP42",
      "exp.up42.b1":"Resolvió solicitudes de soporte complejas relacionadas con pipelines de API automatizados y el acceso a catálogos satelitales multisensor.",
      "exp.up42.b2":"Administró Zendesk; diseñó disparadores automatizados, macros y paneles de reportes que redujeron de forma medible los tiempos de resolución de tickets.",
      "exp.up42.b3":"Guio el onboarding técnico de clientes hacia las APIs REST, acelerando el time-to-value de los nuevos usuarios de la plataforma.",
      "exp.aguas.role":"Senior GIS Analyst — Aguas Andinas S.A.",
      "exp.aguas.b1":"Mantuvo bases de datos GIS empresariales para millones de clientes de servicios públicos; desarrolló scripts de automatización en Python dentro de ArcGIS que aceleraron los tiempos de procesamiento de datos en un <strong>40%</strong>.",
      "exp.aguas.b2":"Ejecutó reencuestas de campo GNSS de alta precisión para mejorar la integridad espacial en la planificación de infraestructura urbana.",
      "exp.aconcagua.role":"Senior Project Engineer — GIS y Automatización de Datos — Aconcagua Solutions",
      "exp.aconcagua.b1":"Desarrolló herramientas de automatización en Excel VBA para eliminar la entrada manual de datos y creó web scrapers en Python para recopilar geodatos municipales abiertos.",
      "exp.here.role":"Field Analyst II — GIS Project Manager — HERE Maps (Nokia / HERE Technologies)",
      "exp.here.b1":"Dirigió proyectos nacionales de POI y cartografía en todo Chile, negociando acuerdos municipales de intercambio de datos y haciendo cumplir estrictos estándares corporativos de control de calidad.",
      "education.title":"Educación",
      "edu.msc.title":"Máster en Ciencias (M.Sc.) en Teledetección",
      "edu.msc.body":'Cursado como parte del programa de máster <a class="master-link" href="https://eagle-science.org/about/" target="_blank" rel="noopener">EAGLE — Applied Earth Observation and Geoanalysis</a> en la <a href="https://www.uni-wuerzburg.de/" target="_blank" rel="noopener">Julius-Maximilians-Universität Würzburg</a>, Alemania.',
      "edu.msc.thesislabel":"Tesis:",
      "edu.msc.thesis":'<strong>Tesis:</strong> "Predicting Grape Yields in Chile using Sentinel-2 Imagery and Machine Learning Models" (pipelines en Python/R utilizando Random Forest y SVM).',
      "edu.bsc.title":"Licenciatura en Ciencias (B.Sc.) en Ingeniería en Geomensura",
      "edu.bsc.body":"Universidad de Santiago de Chile (USACH), Santiago, Chile.",
      "edu.bsc.focus":"Enfoque en geodesia, sistemas de medición topográfica y modelado espacial 3D.",
      "certs.title":"Certificaciones",
      "certs.subtitle":"Certificaciones y credenciales seleccionadas — desde metodología de Customer Success hasta teledetección y dominio de idiomas.",
      "certs.credid":"ID de credencial","certs.view":"Ver credencial →",
      "certs.addcard.title":"Añadir certificación","certs.addcard.body":"Las nuevas credenciales aparecerán aquí a medida que se obtengan.",
      "date.d1":"Emitido dic. 2022 · Expiró dic. 2024",
      "date.d2":"Emitido nov. 2022",
      "date.d3":"Emitido jul. 2022",
      "date.d4":"Emitido mar. 2021",
      "date.d5":"Emitido abr. 2019 · Expiró abr. 2021",
      "date.d6":"Emitido may. 2017 · Expiró may. 2018",
      "date.d7":"Emitido feb. 2018",
      "projects.title":"Proyectos e iniciativas",
      "proj.geodesicl.title":"GeodesiCL (Autor)","proj.geodesicl.body":"Autor del paquete oficial de R para cálculos geodésicos adaptado a las proyecciones chilenas, ampliamente adoptado a nivel nacional.","proj.geodesicl.link":"Ver repositorio →",
      "proj.geocodigos.title":"Geocodigos Chile (Fundador)","proj.geocodigos.body":"Fundó una iniciativa comunitaria que mentorizó a más de 100 geocientíficos en metodologías de programación open-source entre 2019 y 2023.","proj.geocodigos.link":"Ver organización →",
      "proj.dlr.title":"Pasantía en el DLR","proj.dlr.body":"Completó una pasantía de investigación altamente competitiva en el Centro Aeroespacial Alemán (DLR), enfocada en el análisis avanzado de series temporales satelitales.",
      "play.title":"Fuera de horario","play.subtitle":"Los reclutadores también se merecen un descanso. Dirige el satélite, recolecta estaciones terrestres y trata de superar tu propio récord.",
      "play.score":"Puntos","play.best":"Mejor","play.start":"Iniciar","play.restart":"Reiniciar","play.paused":"Pausado","play.over":"Fin del juego","play.cheat":"modo trucos",
      "contact.title":"Conectemos","contact.subtitle":"¿Interesado en colaborar, en análisis geoespacial o en liderazgo de Customer Success?",
      "footer.rights":"© 2026 Diego Alarcón. Todos los derechos reservados.",
      "coord.country":"Hersbruck, Alemania",
      "toast.konami":"🛰️ Houston, ¡tenemos una contratación! Modo trucos desbloqueado abajo.",
      "toast.view_rgb":"De vuelta a la vista en color real (RGB).",
      "toast.view_ndvi":"Vista en falso color NDVI — así ve un satélite la salud de la vegetación.",
      "toast.view_ndwi":"Vista en falso color NDWI — resalta los cuerpos de agua, tal como los satélites mapean el agua.",
      "toast.view_swir":"Vista en falso color SWIR — infrarrojo de onda corta, usado en geología y cicatrices de incendios."
    },
    de: {
      "nav.about":"Über mich","nav.skills":"Fähigkeiten","nav.experience":"Erfahrung","nav.education":"Ausbildung",
      "nav.certifications":"Zertifikate","nav.projects":"Projekte","nav.play":"Spielen","nav.contact":"Kontakt",
      "hero.role":"Customer Success Lead | Geodaten-Wissenschaftler",
      "hero.bio":"Customer Success Lead und Geodaten-Wissenschaftler mit über 10 Jahren internationaler Erfahrung in der Administration von Unternehmens-CRM-Systemen, technischem API-Support und räumlicher Analyse. Nachweisliche Erfolge beim Aufbau von HubSpot-CRM-Infrastrukturen, der Abstimmung zwischen Vertrieb und Produktentwicklung sowie der Beschleunigung des Kunden-Onboardings. Spezialisiert auf die Übersetzung komplexer technischer Anforderungen in umsetzbare Lösungen. Dreisprachiger Fachmann (Spanisch, Englisch, Deutsch) mit einem M.Sc. in Fernerkundung.",
      "hero.chip1":"Über 10 Jahre Erfahrung","hero.chip2":"Dreisprachig — ES · EN · DE","hero.chip3":"M.Sc. in Fernerkundung","hero.chip4":"Wohnhaft in Deutschland",
      "hero.cta1":"Kontakt aufnehmen",
      "skills.title":"Technische &amp; fachliche Kompetenzen",
      "skills.cat1":"Customer Success &amp; CRM","skills.cat1items":"HubSpot-CRM-Architektur · Zendesk-Administration · Account-Playbooks · Stakeholder-Management · Technisches Enterprise-Onboarding",
      "skills.cat2":"Data Science &amp; Programmierung","skills.cat2items":"Python 3 · R · SQL · GeoPandas · Machine Learning (Random Forest, SVM)",
      "skills.cat3":"API- &amp; DevOps-Ökosystem","skills.cat3items":"REST-APIs · OpenAPI Specification 3.0 · Linux · Git · Docker",
      "skills.cat4":"Geodatentechnik","skills.cat4items":"QGIS · ArcGIS · Sentinel-2 Multispektral · LiDAR 3D · Photogrammetrie",
      "skills.cat5":"Sprachen","skills.cat5items":"Spanisch (Muttersprache) · Englisch (C1 fachkundig) · Deutsch (B1)",
      "experience.title":"Berufserfahrung",
      "exp.aves.role":"Customer Success Lead — AVES Reality",
      "exp.aves.b1":"Konzipiert, konfiguriert und administriert die unternehmensweite <strong>HubSpot-CRM</strong>-Infrastruktur zur Optimierung von Pipeline-Tracking, Customer-Health-Metriken und Management-Reporting.",
      "exp.aves.b2":"Koordiniert die funktionsübergreifende Abstimmung zwischen Sales und Produktteams, um Anforderungen von Enterprise-Kunden direkt mit der Engineering-Roadmap zu synchronisieren.",
      "exp.aves.b3":"Verantwortet die End-to-End-Kundenkommunikation und Onboarding-Workflows und gewährleistet eine 100&nbsp;% pünktliche Lieferung hochtechnischer räumlicher Datensätze.",
      "exp.aves.b4":"Erstellt und operationalisiert gemeinsam mit dem Vertrieb Customer-Success-Playbooks und steigert dadurch spürbar die Kundenbindung und das Wachstum nach dem Onboarding.",
      "exp.up42sr.role":"Senior Technical Support Engineer — UP42",
      "exp.up42sr.b1":"Verantwortete technische Eskalationen mit hoher Priorität für Enterprise-Entwicklerintegrationen und steigerte dadurch direkt Kundenzufriedenheit (CSAT) und Kundenbindung.",
      "exp.up42sr.b2":"Fungierte als zentraler Ansprechpartner (POC) für Data Product Manager, bewertete Vorabversionen und leitete Reibungspunkte der Nutzer in die Sprintplanung ein.",
      "exp.up42sr.b3":"Führte umfassende REST-API-Tests durch und pflegte Entwicklerdokumentation gemäß dem Standard <strong>OpenAPI Specification 3.0</strong>.",
      "exp.up42doc.role":"Technical Documentation Engineer (Abordnung) — UP42",
      "exp.up42doc.b1":"Verfasste Entwickler-FAQs, API-Integrationsanleitungen und geodaten-spezifische Spezifikationen für internationale Enterprise-Kunden.",
      "exp.up42doc.b2":"Restrukturierte die Architektur der öffentlichen Dokumentation, wodurch Navigationsreibung und das Volumen von Tier-1-Support-Tickets reduziert wurden.",
      "exp.up42.role":"Technical Support Engineer — UP42",
      "exp.up42.b1":"Löste komplexe Support-Anfragen zu automatisierten API-Pipelines und dem Zugriff auf Multisensor-Satellitenkataloge.",
      "exp.up42.b2":"Administrierte Zendesk; entwickelte automatisierte Trigger, Makros und Reporting-Dashboards, die die durchschnittliche Ticket-Bearbeitungszeit nachweislich reduzierten.",
      "exp.up42.b3":"Begleitete das technische Kunden-Onboarding auf REST-APIs und beschleunigte die Time-to-Value neuer Plattformnutzer.",
      "exp.aguas.role":"Senior GIS Analyst — Aguas Andinas S.A.",
      "exp.aguas.b1":"Pflegte unternehmensweite GIS-Datenbanken für Millionen von Versorgungskunden; entwickelte Python-Automatisierungsskripte in ArcGIS, die die Datenverarbeitungszeiten um <strong>40&nbsp;%</strong> beschleunigten.",
      "exp.aguas.b2":"Führte hochpräzise GNSS-Feldvermessungen durch, um die räumliche Genauigkeit für die städtische Infrastrukturplanung zu verbessern.",
      "exp.aconcagua.role":"Senior Project Engineer — GIS &amp; Datenautomatisierung — Aconcagua Solutions",
      "exp.aconcagua.b1":"Entwickelte Excel-VBA-Automatisierungstools zur Eliminierung manueller Dateneingabe und erstellte Python-Webscraper zur Erfassung offener kommunaler Geodaten.",
      "exp.here.role":"Field Analyst II — GIS Project Manager — HERE Maps (Nokia / HERE Technologies)",
      "exp.here.b1":"Leitete landesweite POI- und Kartierungsprojekte in Chile, verhandelte kommunale Datenaustauschvereinbarungen und setzte strenge unternehmensweite Qualitätsstandards durch.",
      "education.title":"Ausbildung",
      "edu.msc.title":"Master of Science (M.Sc.) in Fernerkundung",
      "edu.msc.body":'Absolviert im Rahmen des Masterstudiengangs <a class="master-link" href="https://eagle-science.org/about/" target="_blank" rel="noopener">EAGLE – Applied Earth Observation and Geoanalysis</a> an der <a href="https://www.uni-wuerzburg.de/" target="_blank" rel="noopener">Julius-Maximilians-Universität Würzburg</a>, Deutschland.',
      "edu.msc.thesislabel":"Masterarbeit:",
      "edu.msc.thesis":'<strong>Masterarbeit:</strong> "Predicting Grape Yields in Chile using Sentinel-2 Imagery and Machine Learning Models" (Python/R-Pipelines mit Random Forest und SVM).',
      "edu.bsc.title":"Bachelor of Science (B.Sc.) in Vermessungswesen",
      "edu.bsc.body":"Universidad de Santiago de Chile (USACH), Santiago, Chile.",
      "edu.bsc.focus":"Schwerpunkt auf Geodäsie, topografischen Messsystemen und 3D-Raummodellierung.",
      "certs.title":"Zertifikate",
      "certs.subtitle":"Ausgewählte Zertifikate und Nachweise — von Customer-Success-Methodik bis hin zu Fernerkundung und Sprachkenntnissen.",
      "certs.credid":"Zertifikats-ID","certs.view":"Nachweis ansehen →",
      "certs.addcard.title":"Zertifikat hinzufügen","certs.addcard.body":"Neue Nachweise erscheinen hier, sobald sie erworben wurden.",
      "date.d1":"Ausgestellt Dez. 2022 · Abgelaufen Dez. 2024",
      "date.d2":"Ausgestellt Nov. 2022",
      "date.d3":"Ausgestellt Jul. 2022",
      "date.d4":"Ausgestellt März 2021",
      "date.d5":"Ausgestellt Apr. 2019 · Abgelaufen Apr. 2021",
      "date.d6":"Ausgestellt Mai 2017 · Abgelaufen Mai 2018",
      "date.d7":"Ausgestellt Feb. 2018",
      "projects.title":"Projekte &amp; Initiativen",
      "proj.geodesicl.title":"GeodesiCL (Autor)","proj.geodesicl.body":"Autor des offiziellen R-Pakets für geodätische Berechnungen, zugeschnitten auf chilenische Projektionen und landesweit weit verbreitet.","proj.geodesicl.link":"Repository ansehen →",
      "proj.geocodigos.title":"Geocodigos Chile (Gründer)","proj.geocodigos.body":"Gründete eine Community-Initiative, die zwischen 2019 und 2023 mehr als 100 Geowissenschaftler:innen in Open-Source-Programmiermethoden betreute.","proj.geocodigos.link":"Organisation ansehen →",
      "proj.dlr.title":"DLR-Praktikum","proj.dlr.body":"Absolvierte ein kompetitives Forschungspraktikum am Deutschen Zentrum für Luft- und Raumfahrt (DLR) mit Fokus auf fortgeschrittene satellitengestützte Zeitreihenanalyse.",
      "play.title":"Feierabend","play.subtitle":"Auch Recruiter verdienen eine Kaffeepause. Steuere den Satelliten, sammle Bodenstationen und versuche, deinen eigenen Highscore zu schlagen.",
      "play.score":"Punkte","play.best":"Bestwert","play.start":"Start","play.restart":"Neustart","play.paused":"Pausiert","play.over":"Spiel vorbei","play.cheat":"Cheat-Modus",
      "contact.title":"Lass uns verbinden","contact.subtitle":"Interesse an einer Zusammenarbeit, an Geodatenanalyse oder an Customer-Success-Führung?",
      "footer.rights":"© 2026 Diego Alarcón. Alle Rechte vorbehalten.",
      "coord.country":"Hersbruck, Deutschland",
      "toast.konami":"🛰️ Houston, wir haben eine Einstellung! Cheat-Modus unten freigeschaltet.",
      "toast.view_rgb":"Zurück zur Echtfarben-Ansicht (RGB).",
      "toast.view_ndvi":"NDVI-Falschfarbenansicht — so sieht ein Satellit die Vegetationsgesundheit.",
      "toast.view_ndwi":"NDWI-Falschfarbenansicht — hebt Gewässer hervor, so wie Satelliten Wasser kartieren.",
      "toast.view_swir":"SWIR-Falschfarbenansicht — kurzwelliges Infrarot, genutzt für Geologie und Brandnarben."
    }
  };

  var currentLang = "en";

  function applyLang(lang){
    if(!T[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(T[lang][key] !== undefined){ el.innerHTML = T[lang][key]; }
    });
    document.getElementById("coordTag").innerHTML = "49.5000° N, 11.3667° E — " + T[lang]["coord.country"];
    document.querySelectorAll(".lang-switch button").forEach(function(btn){
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try{ localStorage.setItem("da_lang", lang); }catch(e){}
  }

  function detectInitialLang(){
    var saved = null;
    try{ saved = localStorage.getItem("da_lang"); }catch(e){}
    if(saved && T[saved]) return saved;
    var nav = (navigator.language || "en").slice(0,2).toLowerCase();
    if(T[nav]) return nav;
    return "en";
  }

  document.querySelectorAll(".lang-switch button").forEach(function(btn){
    btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
  });

  /* ============================================================
     2. Toast helper
  ============================================================ */
  var toastEl = document.getElementById("toast");
  var toastTimer = null;
  function showToast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toastEl.classList.remove("show"); }, 4200);
  }

  /* ============================================================
     3. Satellite view-mode selector (RGB / NDVI / NDWI / SWIR)
  ============================================================ */
  var viewSelect = document.getElementById("viewSelect");
  var viewToast = { rgb:"toast.view_rgb", ndvi:"toast.view_ndvi", ndwi:"toast.view_ndwi", swir:"toast.view_swir" };
  var viewTheme = { rgb:"terrain", ndvi:"ndvi", ndwi:"ndwi", swir:"swir" };
  viewSelect.addEventListener("change", function(){
    var mode = viewSelect.value;
    document.documentElement.setAttribute("data-theme", viewTheme[mode] || "terrain");
    showToast(T[currentLang][viewToast[mode]] || "");
  });

  /* ============================================================
     4. Konami code easter egg
  ============================================================ */
  var konamiSeq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  var konamiPos = 0;
  var cheatUnlocked = false;
  var cheatTag = document.getElementById("cheatTag");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function triggerKonami(){
    cheatUnlocked = true;
    cheatTag.classList.add("show");
    showToast(T[currentLang]["toast.konami"]);
    if(!reduceMotion){
      var sat = document.createElement("div");
      sat.id = "flyby";
      sat.textContent = "🛰️";
      document.body.appendChild(sat);
      setTimeout(function(){ sat.remove(); }, 3300);
    }
  }

  window.addEventListener("keydown", function(e){
    var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if(key === konamiSeq[konamiPos]){
      konamiPos++;
      if(konamiPos === konamiSeq.length){ triggerKonami(); konamiPos = 0; }
    } else {
      konamiPos = (key === konamiSeq[0]) ? 1 : 0;
    }
  });

  /* ============================================================
     5. Console easter egg for curious devs / recruiters
  ============================================================ */
  console.log("%c🛰️ orbit acquired.", "font-size:16px; font-weight:bold; color:#2F6F62;");
  console.log("%cHi! Since you're reading the source, you'll like this: try the Konami code anywhere on the page.", "color:#4E5C51;");
  console.log("Looking at the code, not just the content — thanks for the thorough review. diego.alarcondiaz@gmail.com");

  /* ============================================================
     6. "Signal Hunter" — satellite-themed Snake game
  ============================================================ */
  (function initGame(){
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var GRID = 20;
    var CELL = canvas.width / GRID;

    var snake, dir, nextDir, food, score, best, timer, running, speed;

    function loadBest(){
      var v = 0;
      try{ v = parseInt(localStorage.getItem("signalHunterHigh") || "0", 10) || 0; }catch(e){}
      return v;
    }
    function saveBest(v){
      try{ localStorage.setItem("signalHunterHigh", String(v)); }catch(e){}
    }

    best = loadBest();
    document.getElementById("bestVal").textContent = best;

    function resetState(){
      snake = [{x:9,y:10},{x:8,y:10},{x:7,y:10}];
      dir = {x:1,y:0};
      nextDir = {x:1,y:0};
      score = 0;
      speed = 150;
      placeFood();
      document.getElementById("scoreVal").textContent = score;
    }

    function placeFood(){
      var ok = false;
      while(!ok){
        food = {x: Math.floor(Math.random()*GRID), y: Math.floor(Math.random()*GRID)};
        ok = !snake.some(function(s){ return s.x===food.x && s.y===food.y; });
      }
    }

    function drawCell(x,y,color,inset){
      inset = inset || 2;
      ctx.fillStyle = color;
      ctx.beginPath();
      if(ctx.roundRect){ ctx.roundRect(x*CELL+inset, y*CELL+inset, CELL-inset*2, CELL-inset*2, 4); }
      else { ctx.rect(x*CELL+inset, y*CELL+inset, CELL-inset*2, CELL-inset*2); }
      ctx.fill();
    }

    function getVar(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

    function draw(){
      var bg = getVar("--surface") || "#F8F9F3";
      var line = getVar("--line") || "#D6DCC7";
      var accent = getVar("--accent") || "#2F6F62";
      var gold = getVar("--gold") || "#C89B3C";
      var ink = getVar("--ink") || "#22302A";

      ctx.fillStyle = bg;
      ctx.fillRect(0,0,canvas.width,canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 1;
      for(var i=1;i<GRID;i++){
        ctx.beginPath(); ctx.moveTo(i*CELL,0); ctx.lineTo(i*CELL,canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,i*CELL); ctx.lineTo(canvas.width,i*CELL); ctx.stroke();
      }

      // food = ground station: ring + dot
      var fx = food.x*CELL + CELL/2, fy = food.y*CELL + CELL/2;
      ctx.strokeStyle = gold; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(fx, fy, CELL/2 - 2, 0, Math.PI*2); ctx.stroke();
      ctx.fillStyle = gold;
      ctx.beginPath(); ctx.arc(fx, fy, 3, 0, Math.PI*2); ctx.fill();

      // snake = satellite + signal trail
      for(var s=0; s<snake.length; s++){
        drawCell(snake[s].x, snake[s].y, s===0 ? accent : ink, s===0 ? 1 : 3);
      }
      // head "eye"
      var head = snake[0];
      ctx.fillStyle = bg;
      var ex = head.x*CELL + CELL*0.65, ey = head.y*CELL + CELL*0.35;
      ctx.beginPath(); ctx.arc(ex, ey, 1.6, 0, Math.PI*2); ctx.fill();
    }

    function step(){
      dir = nextDir;
      var head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};

      var wallHit = head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID;
      if(wallHit){
        if(cheatUnlocked){
          head.x = (head.x + GRID) % GRID;
          head.y = (head.y + GRID) % GRID;
        } else {
          return gameOver();
        }
      }
      var selfHit = snake.some(function(s){ return s.x===head.x && s.y===head.y; });
      if(selfHit) return gameOver();

      snake.unshift(head);
      if(head.x === food.x && head.y === food.y){
        score++;
        document.getElementById("scoreVal").textContent = score;
        speed = Math.max(70, 150 - score*4);
        placeFood();
        restartTimer();
      } else {
        snake.pop();
      }
      draw();
    }

    function restartTimer(){
      clearInterval(timer);
      timer = setInterval(step, speed);
    }

    function gameOver(){
      running = false;
      clearInterval(timer);
      if(score > best){ best = score; saveBest(best); document.getElementById("bestVal").textContent = best; }
      ctx.fillStyle = "rgba(20,20,20,0.55)";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = "600 22px 'IBM Plex Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(T[currentLang]["play.over"] || "Game over", canvas.width/2, canvas.height/2);
      startBtn.textContent = T[currentLang]["play.restart"] || "Restart";
    }

    var startBtn = document.getElementById("startBtn");
    function startGame(){
      resetState();
      running = true;
      draw();
      restartTimer();
      startBtn.textContent = T[currentLang]["play.restart"] || "Restart";
      canvas.focus();
    }
    startBtn.addEventListener("click", startGame);

    function setDirection(nx, ny){
      // prevent reversing directly into itself
      if(snake && snake.length > 1 && nx === -dir.x && ny === -dir.y) return;
      nextDir = {x:nx,y:ny};
    }

    // Only let arrow/WASD keys drive the game (and steal the default scroll
    // behaviour) while the game section is actually visible on screen.
    var playSection = document.getElementById("play");
    var playVisible = true;
    if("IntersectionObserver" in window){
      playVisible = false;
      var playObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){ playVisible = entry.isIntersecting; });
      }, { threshold: 0.25 });
      playObserver.observe(playSection);
    }

    var keyDir = {
      ArrowUp:[0,-1], w:[0,-1], W:[0,-1],
      ArrowDown:[0,1], s:[0,1], S:[0,1],
      ArrowLeft:[-1,0], a:[-1,0], A:[-1,0],
      ArrowRight:[1,0], d:[1,0], D:[1,0]
    };
    window.addEventListener("keydown", function(e){
      if(!playVisible) return;
      var d = keyDir[e.key];
      if(!d) return;
      e.preventDefault();
      if(!running) startGame();
      setDirection(d[0], d[1]);
    });

    document.querySelectorAll(".dpad button").forEach(function(btn){
      btn.addEventListener("click", function(){
        var d = btn.getAttribute("data-dir");
        if(!running) return;
        if(d==="up") setDirection(0,-1);
        if(d==="down") setDirection(0,1);
        if(d==="left") setDirection(-1,0);
        if(d==="right") setDirection(1,0);
      });
    });

    // initial idle frame
    resetState();
    draw();
    ctx.fillStyle = "rgba(20,20,20,0.35)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "600 18px 'IBM Plex Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("▶", canvas.width/2, canvas.height/2);
  })();

  /* ============================================================
     7. Init
  ============================================================ */
  applyLang(detectInitialLang());

})();
