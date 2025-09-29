let pageTime = 0;
const content = {
    es: {
        pageTitle: "Portafolio de Diego Alarcón",
        profileAlt: "Foto de perfil de Diego Alarcón",
        profileDescription: "Ingeniero de Soporte Técnico | Especialista en Geociencias, Python y API | Ayudando a los clientes a resolver desafíos técnicos complejos.",
        aboutMeTitle: "Acerca de mí",
        aboutMeText: `Soy <strong>Diego Alarcón</strong>, Ingeniero en Geociencias originario de <strong>Santiago de Chile</strong> y actualmente radicado en <strong>Alemania</strong>. 
Decidí mudarme en busca de un sueño, de nuevos desafíos profesionales y personales, y también del amor de mi vida.<br><br>
Mi trayectoria no ha sido lineal ni sencilla: ha estado llena de aprendizajes y obstáculos que me han formado tanto como profesional como persona.
Los he enfrentado siempre con actitud positiva y sin miedo, porque estoy convencido de que <strong>no existe problema sin solución</strong> y que <strong>todo desafío trae consigo una ganancia</strong>.<br>
Esta mentalidad me ha permitido adaptarme a entornos cambiantes y aportar valor en situaciones complejas.<br><br>
En lo profesional, cuento con experiencia sólida en <strong>GIS, Teledetección y Soporte Técnico</strong>, y actualmente desempeño el rol de <strong>Technical Support Engineer en UP42</strong>, donde ayudo a clientes y equipos a resolver problemas técnicos vinculados a <strong>datos satelitales, APIs y Python</strong>.<br><br>
Me destaco por mi capacidad de <strong>trabajar bajo presión sin perder la calma</strong>, de <strong>delegar tareas de manera eficiente</strong>, y de <strong>organizar documentación y procesos</strong> para asegurar la continuidad del trabajo.<br>
Además, tengo experiencia coordinando directamente con clientes, lo que me permite <strong>alinear expectativas, anticipar necesidades y mejorar la calidad de las entregas</strong>.<br><br>
Me considero una persona <strong>curiosa, resiliente y orientada a resultados</strong>, con una visión clara: crecer de manera continua y aportar tanto en lo humano como en lo técnico a cada equipo en el que participo.<br><br>
<em>"La vida premia a quienes se atreven"</em> es una frase que me acompaña y guía mis decisiones.`,
        experienceTitle: "Experiencia Profesional",
        experience: [
            { title: "Technical Support Engineer", company: "UP42", url: "https://up42.com/", location: "Remoto, Alemania", dates: "Oct 2021 - Presente", bullets: ["Mantuve un <strong>99% de satisfacción del cliente</strong> resolviendo problemas técnicos para APIs geoespaciales y servicios de procesamiento de datos.", "Administré la plataforma <strong>Zendesk</strong>, optimizando los flujos de trabajo y reduciendo los tiempos de respuesta.", "Proporcioné soporte experto en <strong>datos de Observación de la Tierra</strong> y flujos de trabajo de procesamiento.", "Mejoré la documentación de auto-servicio, <strong>reduciendo las solicitudes de soporte entrantes en un 15%</strong>.", "Coordiné las comunicaciones internas para garantizar implementaciones de funciones sin problemas."] },
            { title: "Master Student in Remote Sensing, EAGLE", company: "University of Würzburg", url: "https://eagle-science.org/", location: "Alemania", dates: "Sep 2019 - Dic 2021", bullets: ["Especialización en <strong>GIS, sensores remotos, y análisis espacial</strong> con QGIS, ArcGIS, Python y R.", "Realicé una investigación sobre la predicción del rendimiento de uva en Chile."] },
            { title: "Senior GIS Analyst", company: "Aguas Andinas", url: "https://www.aguasandinas.cl/", location: "Santiago, CL", dates: "Nov 2018 - Sep 2019", bullets: ["Gestioné la base de datos GIS, implementé <strong>nuevas redes de agua y alcantarillado</strong> y actualicé la red geodésica.", "Automatización de flujos de trabajo con <strong>Python</strong> para mejorar la eficiencia."] },
            { title: "Survey Engineer", company: "Digimapas Chile Aerofotogrametría Ltda", url: "https://www.digimapas.cl/", location: "Santiago, CL", dates: "Jul 2018 - Sep 2018", bullets: ["Realicé estudios de campo con <strong>estaciones totales y GPS</strong> para proyectos civiles y de ingeniería.", "Procesé datos <strong>LIDAR</strong> para la creación de modelos de terreno de alta precisión."] },
            { title: "Senior Project Engineer", company: "Aconcagua Solutions", url: "https://www.aconcaguasolutions.com/", location: "Santiago, CL", dates: "Oct 2016 - May 2017", bullets: ["Desarrollé macros en Excel y proyectos en Visual Basic para la <strong>automación de datos</strong>.", "Realicé <strong>web scraping</strong> para la recolección de información relevante."] },
            { title: "Field Analyst II", company: "Here Maps", url: "https://www.here.com/", location: "Santiago, CL", dates: "Sep 2013 - Feb 2016", bullets: ["Lideré <strong>GIS</strong> proyectos, incluyendo el mapeo de puntos de interés y la validación de la red vial.", "Actué como representante de <strong>Ingeniería de Bases de Datos</strong> para la comunicación con equipos globales."] },
            { title: "Project Engineer", company: "Municipality of Providencia", url: "https://providencia.cl/", location: "Santiago, CL", dates: "Abr 2012 - Feb 2013", bullets: ["Digitalicé mapas para apoyar la <strong>formalización legal y catastral</strong>.", "Optimicé los flujos de trabajo en <strong>ArcGIS</strong> y las conexiones de bases de datos.", "Automatización de la generación de informes con <strong>Excel VBA</strong>."] },
            { title: "Project Engineer", company: "Interra Chile", url: "http://www.interralatam.com/", location: "Santiago, CL", dates: "Ene 2012 - Mar 2012", bullets: ["Clasifiqué datos de terreno e interpreté orto-imágenes para modelos digitales.", "Contribuí a la creación de <strong>modelos de terreno de alta resolución</strong>."] }
        ],
        educationTitle: "Educación",
        education: [
            { title: "M.Sc. en Sensores Remotos", company: "Julius-Maximilians-Universität Würzburg", url: "https://eagle-science.org/", dates: "Ago 2019 - Dic 2021", location: "Würzburg, Alemania", bullets: ["<strong>Enfoque:</strong> Sensores remotos, aprendizaje automático y aplicaciones SIG.", "<strong>Tesis:</strong> \"Exploring Remote Sensing and Machine Learning to Predict Grape Yields in Chile\"."] },
            { title: "Prácticas en Sensores Remotos", company: "German Aerospace Center (DLR)", url: "https://www.dlr.de/", dates: "Mar 2020 - Abr 2020", location: "Oberpfaffenhofen, Alemania", bullets: ["<strong>Enfoque:</strong> Utilicé sensores NTL para analizar la asignación de fondos de la UE a inversiones públicas.", "<strong>Proceso:</strong> Realicé pre-procesamiento y análisis estadístico de datos de series temporales."] },
            { title: "B.Sc. en Ingeniería en Geomensura", company: "Universidad de Santiago de Chile", url: "https://www.usach.cl/", dates: "2006 - 2011", location: "Santiago, Chile", bullets: ["<strong>Enfoque:</strong> Geodesia, recolección de datos topográficos y técnicas topográficas en Ingeniería.", "<strong>Tesis:</strong> \"Análisis de la variación de la columna total de electrones (TEC) en la ionósfera mediante redes de estaciones GNSS\"."] }
        ],
        projectsTitle: "Proyectos Destacados",
        projects: [
            { title: "GeodesiCL", description: "Una pequeña travesía por la Geodesia Geométrica.", url: "https://github.com/diegoalarc/GeodesiCL" },
            { title: "Innovation laboratory EAGLE", description: "El laboratorio de innovación ofrece la oportunidad de realizar un proyecto de investigación.", url: "https://github.com/diegoalarc/Innovation_laboratory_EAGLE" },
            { title: "MB1 and MB2 Master EAGLE courses", description: "Códigos para aprobar los cursos de maestría.", url: "https://github.com/diegoalarc/Test__MB1_and_MB2" },
            { title: "Spatial modeling and prediction (SMP)", description: "Código y póster para aprobar el curso SMP.", url: "https://github.com/diegoalarc/Spatial_Modeling_and_Prediction" }
        ],
        certificationsTitle: "Certificaciones",
        certifications: [
            { title: "Fundamentos de Docker para Desarrolladores de Python", institution: "Udemy", dates: "Nov 2022", credentialId: "UC-4d634c10-ebde-4b53-bd41-3c698020b39b" },
            { title: "2022 Bootcamp Completo de Python De Cero a Héroe en Python", institution: "Udemy", dates: "Jul 2022", credentialId: "UC-80ae18d8-1c94-49a1-93e2-9a2fb3786c98" },
            { title: "Git+GitHub: Un sistema de control de versiones completo desde cero", institution: "Udemy", dates: "Jul 2022", credentialId: "UC-1400fe44-9a47-459b-96f6-1416cb945ea6" },
            { title: "Alemán como Lengua Extranjera B1", institution: "https://www.uni-wuerzburg.de/zfs/startseite/", dates: "Mar 2021", credentialId: "khE0wj3LlmgfyaYr" },
            { title: "Certificado de Alemán B1", institution: "telc GmbH - The European Language Certificates", dates: "Feb 2018", credentialId: "1474620" },
            { title: "Gerente Certificado de Éxito del Cliente (CCSM) Nivel 1", institution: "SuccessHACKER", dates: "Expira en Dic 2024" },
            { title: "TOEFL iBT B2", institution: "TOEFL Genius", dates: "Expira en Abr 2021", credentialId: "2182 2041 9017 2830" }
        ],
        moreAboutMeTitle: "Más sobre mí",
        moreAboutMe: {
            mainSkills: { title: "Habilidades principales", skills: [{ name: "Microsoft", icon: "fa-brands fa-microsoft", rating: 4.5 }, { name: "Apple", icon: "fa-brands fa-apple", rating: 4 }, { name: "Linux", icon: "fa-brands fa-linux", rating: 4.5 }, { name: "Docker", icon: "fa-brands fa-docker", rating: 2.5 }, { name: "GitHub", icon: "fa-brands fa-github", rating: 2.5 }, { name: "Python", icon: "fa-brands fa-python", rating: 3 }, { name: "R", icon: "fa-brands fa-r-project", rating: 4 }, { name: "ArcGIS", rating: 3 }, { name: "VSCode", rating: 3 }, { name: "QGIS", rating: 4 }] },
            coding: { title: "Experiencia en codificación", skills: [{ name: "Geopandas", rating: 3 }, { name: "Rasterio", rating: 3 }, { name: "Scikit-ML", rating: 2.5 }, { name: "Json", rating: 4 }, { name: "API", rating: 2.5 }] },
            languages: { title: "Idiomas", skills: [{ name: "Español", rating: 5 }, { name: "Inglés", rating: 4 }, { name: "Alemán", rating: 2.5 }] }
        },
        footer: { text1: `Hecho con &#x2764;&#xfe0f; y caf&#xe9;` }
    },
    en: {
        pageTitle: "Diego Alarcón's Portfolio",
        profileAlt: "Profile picture of Diego Alarcón",
        profileDescription: "Technical Support Engineer | Geoscience, Python, and API Specialist | Helping clients solve complex technical challenges.",
        aboutMeTitle: "About Me",
        aboutMeText: `I am <strong>Diego Alarcón</strong>, a Geoscience Engineer originally from <strong>Santiago de Chile</strong> and currently based in <strong>Germany</strong>. 
I decided to move in pursuit of a dream, new professional and personal challenges, and also the love of my life.<br><br>
My journey has not been linear or easy: it has been full of lessons and obstacles that have shaped me both as a professional and as a person.
I have always faced them with a positive attitude and without fear, because I am convinced that <strong>there is no problem without a solution</strong> and that <strong>every challenge brings its own reward</strong>.<br>
This mindset has allowed me to adapt to changing environments and add value in complex situations.<br><br>
Professionally, I have solid experience in <strong>GIS, Remote Sensing, and Technical Support</strong>, and I currently work as a <strong>Technical Support Engineer at UP42</strong>, where I help clients and teams solve technical problems related to <strong>satellite data, APIs, and Python</strong>.<br><br>
I stand out for my ability to <strong>work under pressure without losing composure</strong>, <strong>delegate tasks efficiently</strong>, and <strong>organize documentation and processes</strong> to ensure work continuity.<br>
Additionally, I have experience coordinating directly with clients, which allows me to <strong>align expectations, anticipate needs, and improve delivery quality</strong>.<br><br>
I consider myself a <strong>curious, resilient, and results-oriented</strong> person, with a clear vision: to grow continuously and contribute both humanly and technically to every team I participate in.<br><br>
<em>"Life rewards those who dare"</em> is a phrase that accompanies me and guides my decisions.`,
        experienceTitle: "Professional Experience",
        experience: [
            { title: "Technical Support Engineer", company: "UP42", url: "https://up42.com/", location: "Remote, Germany", dates: "Oct 2021 - Present", bullets: ["Maintained a <strong>99% customer satisfaction</strong> by resolving technical issues for geospatial APIs and data processing services.", "Managed the <strong>Zendesk</strong> platform, optimizing workflows and reducing response times.", "Provided expert support on <strong>Earth Observation data</strong> and processing workflows.", "Improved self-service documentation, <strong>reducing incoming support requests by 15%</strong>.", "Coordinated internal communications to ensure seamless feature deployments."] },
            { title: "Master Student in Remote Sensing, EAGLE", company: "University of Würzburg", url: "https://eagle-science.org/", location: "Germany", dates: "Sep 2019 - Dec 2021", bullets: ["Specialization in <strong>GIS, remote sensing, and spatial analysis</strong> using QGIS, ArcGIS, Python and R.", "Conducted research on grape yield prediction in Chile."] },
            { title: "Senior GIS Analyst", company: "Aguas Andinas", url: "https://www.aguasandinas.cl/", location: "Santiago, CL", dates: "Nov 2018 - Sep 2019", bullets: ["Managed the GIS database, implemented <strong>new water and sewerage networks</strong> and updated the geodetic network.", "Automation of workflows with <strong>Python</strong> to improve efficiency."] },
            { title: "Survey Engineer", company: "Digimapas Chile Aerofotogrametría Ltda", url: "https://www.digimapas.cl/", location: "Santiago, CL", dates: "Jul 2018 - Sep 2018", bullets: ["Conducted field surveys with <strong>Total Stations and GPS</strong> for civil and engineering projects.", "Processed <strong>LIDAR</strong> data for the creation of high-precision terrain models."] },
            { title: "Senior Project Engineer", company: "Aconcagua Solutions", url: "https://www.aconcaguasolutions.com/", location: "Santiago, CL", dates: "Oct 2016 - May 2017", bullets: ["Developed macros in Excel and projects in Visual Basic for the <strong>automación de datos</strong>.", "Performed <strong>web scraping</strong> for relevant information gathering."] },
            { title: "Field Analyst II", company: "Here Maps", url: "https://www.here.com/", location: "Santiago, CL", dates: "Sep 2013 - Feb 2016", bullets: ["Led <strong>GIS</strong> projects, including mapping of points of interest and road network validation.", "Acted as a <strong>Database Engineering</strong> representative for communication with global teams."] },
            { title: "Project Engineer", company: "Municipality of Providencia", url: "https://providencia.cl/", location: "Apr 2012 - Feb 2013", bullets: ["Digitized maps to support <strong>legal and cadastral formalization</strong>.", "Optimized workflows in <strong>ArcGIS</strong> and database connections.", "Automated report generation with <strong>Excel VBA</strong>."] },
            { title: "Project Engineer", company: "Interra Chile", url: "http://www.interralatam.com/", location: "Jan 2012 - Mar 2012", bullets: ["Classified terrain data and interpreted orthoimages for digital models.", "Contributed to the creation of <strong>high-resolution terrain models</strong>."] }
        ],
        educationTitle: "Education",
        education: [
            { title: "M.Sc. in Remote Sensing", company: "Julius-Maximilians-Universität Würzburg", url: "https://eagle-science.org/", dates: "Aug 2019 - Dec 2021", location: "Würzburg, Germany", bullets: ["<strong>Focus:</strong> Remote sensing, machine learning, and GIS applications.", "<strong>Thesis:</strong> \"Exploring Remote Sensing and Machine Learning to Predict Grape Yields in Chile\"."] },
            { title: "Remote Sensing Internship", company: "German Aerospace Center (DLR)", url: "https://www.dlr.de/", dates: "Mar 2020 - Apr 2020", location: "Oberpfaffenhofen, Germany", bullets: ["<strong>Focus:</strong> Utilized NTL sensors to analyze the allocation of EU funds to public investments.", "<strong>Process:</strong> Conducted pre-processing and statistical analysis of time-series data."] },
            { title: "B.Sc. in Geomatics Engineering", company: "Universidad de Santiago de Chile", url: "https://www.usach.cl/", dates: "2006 - 2011", location: "Santiago, Chile", bullets: ["<strong>Focus:</strong> Geodesy, topographic data collection, and surveying techniques in Engineering.", "<strong>Thesis:</strong> \"Analysis of the variation of the total electron column (TEC) in the ionosphere using GNSS station networks\"."] }
        ],
        projectsTitle: "Featured Projects",
        projects: [
            { title: "GeodesiCL", description: "A small journey through Geometric Geodesy.", url: "https://github.com/diegoalarc/GeodesiCL" },
            { title: "Innovation laboratory EAGLE", description: "The innovation laboratory provides the opportunity to carry out a research project.", url: "https://github.com/diegoalarc/Innovation_laboratory_EAGLE" },
            { title: "MB1 and MB2 Master EAGLE courses", description: "Codes for passing the master's courses.", url: "https://github.com/diegoalarc/Test__MB1_and_2" },
            { title: "Spatial modeling and prediction (SMP)", description: "Code and poster to pass the SMP course.", url: "https://github.com/diegoalarc/Spatial_Modeling_and_Prediction" }
        ],
        certificationsTitle: "Certifications",
        certifications: [
            { title: "Docker Fundamentals for Python Developers", institution: "Udemy", dates: "Nov 2022", credentialId: "UC-4d634c10-ebde-4b53-bd41-3c698020b39b" },
            { title: "2022 Complete Python Bootcamp From Zero to Hero in Python", institution: "Udemy", dates: "Jul 2022", credentialId: "UC-80ae18d8-1c94-49a1-93e2-9a2fb3786c98" },
            { title: "Git+GitHub: A complete version control system from scratch", institution: "Udemy", dates: "Jul 2022", credentialId: "UC-1400fe44-9a47-459b-96f6-1416cb945ea6" },
            { title: "German as a Foreign Language B1", institution: "https://www.uni-wuerzburg.de/zfs/startseite/", dates: "Mar 2021", credentialId: "khE0wj3LlmgfyaYr" },
            { title: "German Certificate B1", institution: "telc GmbH - The European Language Certificates", dates: "Feb 2018", credentialId: "1474620" },
            { title: "Certified Customer Success Manager (CCSM) Level 1", institution: "SuccessHACKER", dates: "Expired Dec 2024" },
            { title: "TOEFL iBT B2", institution: "TOEFL Genius", dates: "Expired Apr 2021", credentialId: "2182 2041 9017 2830" }
        ],
        moreAboutMeTitle: "More about me",
        moreAboutMe: {
            mainSkills: { title: "Main Skills", skills: [{ name: "Microsoft", icon: "fa-brands fa-microsoft", rating: 4.5 }, { name: "Apple", icon: "fa-brands fa-apple", rating: 4 }, { name: "Linux", icon: "fa-brands fa-linux", rating: 4.5 }, { name: "Docker", icon: "fa-brands fa-docker", rating: 2.5 }, { name: "GitHub", icon: "fa-brands fa-github", rating: 2.5 }, { name: "Python", icon: "fa-brands fa-python", rating: 3 }, { name: "R", icon: "fa-brands fa-r-project", rating: 4 }, { name: "ArcGIS", rating: 3 }, { name: "VSCode", rating: 3 }, { name: "QGIS", rating: 4 }] },
            coding: { title: "Coding Experience", skills: [{ name: "Geopandas", rating: 3 }, { name: "Rasterio", rating: 3 }, { name: "Scikit-ML", rating: 2.5 }, { name: "Json", rating: 4 }, { name: "API", rating: 2.5 }] },
            languages: { title: "Languages", skills: [{ name: "Spanish", rating: 5 }, { name: "English", rating: 4 }, { name: "German", rating: 2.5 }] }
        },
        footer: { text1: `Made with &#x2764;&#xfe0f; and coffee` }
    },
    de: {
        pageTitle: "Diego Alarcón's Portfolio",
        profileAlt: "Profilbild von Diego Alarcón",
        profileDescription: "Technical Support Engineer | Geowissenschaften-, Python- und API-Spezialist | Unterstützt Kunden bei der Lösung komplexer technischer Herausforderungen.",
        aboutMeTitle: "Über mich",
        aboutMeText: `Ich bin <strong>Diego Alarcón</strong>, Geowissenschaftsingenieur, ursprünglich aus <strong>Santiago de Chile</strong> und derzeit wohnhaft in <strong>Deutschland</strong>. 
Ich habe beschlossen, umzuziehen, um einen Traum zu verfolgen, neue berufliche und persönliche Herausforderungen anzunehmen und auch die Liebe meines Lebens zu finden.<br><br>
Mein Werdegang war weder linear noch einfach: Er war voller Lektionen und Hindernisse, die mich sowohl beruflich als auch persönlich geprägt haben.
Ich habe ihnen stets mit positiver Einstellung und ohne Angst begegnet, weil ich überzeugt bin, dass <strong>kein Problem ohne Lösung existiert</strong> und dass <strong>jede Herausforderung ihre eigenen Belohnungen mit sich bringt</strong>.<br>
Diese Denkweise hat es mir ermöglicht, mich an wechselnde Umgebungen anzupassen und in komplexen Situationen Wert zu schaffen.<br><br>
Beruflich verfüge ich über solide Erfahrung in <strong>GIS, Fernerkundung und Technischem Support</strong> und arbeite derzeit als <strong>Technical Support Engineer bei UP42</strong>, wo ich Kunden und Teams helfe, technische Probleme im Zusammenhang mit <strong>Satelittendaten, APIs und Python</strong> zu lösen.<br><br>
Ich zeichne mich durch meine Fähigkeit aus, <strong>unter Druck ruhig zu bleiben</strong>, <strong>Aufgaben effizient zu delegieren</strong> und <strong>Dokumentation und Prozesse zu organisieren</strong>, um die Kontinuität der Arbeit sicherzustellen.<br>
Darüber hinaus habe ich Erfahrung in der direkten Koordination mit Kunden, was es mir ermöglicht, <strong>Erwartungen abzustimmen, Bedürfnisse vorherzusehen und die Qualität der Leistungen zu verbessern</strong>.<br><br>
Ich betrachte mich als <strong>neugierige, resiliente und ergebnisorientierte</strong> Person mit einer klaren Vision: kontinuierlich zu wachsen und sowohl menschlich als auch fachlich zu jedem Team beizutragen, in dem ich mitwirke.<br><br>
<em>"Das Leben belohnt diejenigen, die sich trauen"</em> ist ein Satz, der mich begleitet und meine Entscheidungen leitet.`,
        experienceTitle: "Berufserfahrung",
        experience: [
            { title: "Technical Support Engineer", company: "UP42", url: "https://up42.com/", location: "Remote, Deutschland", dates: "Okt 2021 - Heute", bullets: ["Erreichte eine <strong>99%ige Kundenzufriedenheit</strong> durch die Lösung technischer Probleme für Geodaten-APIs und Datenverarbeitungsdienste.", "Verwaltete die <strong>Zendesk</strong>-Plattform, optimierte Arbeitsabläufe und verkürzte die Antwortzeiten.", "Bot Experten-Support für <strong>Erdbeobachtungsdaten</strong> und Verarbeitungsabläufe.", "Verbesserte die Selbstbedienungsdokumentation, <strong>reduzierte eingehende Support-Anfragen um 15%</strong>.", "Koordinierte die interne Kommunikation, um reibungslose Funktionsbereitstellungen sicherzustellen."] },
            { title: "Master Student in Remote Sensing, EAGLE", company: "University of Würzburg", url: "https://eagle-science.org/", location: "Deutschland", dates: "Sep 2019 - Dez 2021", bullets: ["Spezialisierung auf <strong>GIS, Fernerkundung und Raumanalyse</strong> mit QGIS, ArcGIS, Python und R.", "Führte eine Forschungsarbeit zur Vorhersage von Traubenerträgen in Chile durch."] },
            { title: "Senior GIS Analyst", company: "Aguas Andinas", url: "https://www.aguasandinas.cl/", location: "Santiago, CL", dates: "Nov 2018 - Sep 2019", bullets: ["Verwaltete die GIS-Datenbank, implementierte <strong>neue Wasser- und Abwassernetze</strong> y aktualisierte das geodätische Netzwerk.", "Automatisierte Arbeitsabläufe mit <strong>Python</strong> zur Effizienzsteigerung."] },
            { title: "Survey Engineer", company: "Digimapas Chile Aerofotogrametría Ltda", url: "https://www.digimapas.cl/", location: "Santiago, CL", dates: "Juli 2018 - Sep 2018", bullets: ["Führte Feldvermessungen mit <strong>Totalstationen und GPS</strong> für Zivil- und Ingenieurprojekte durch.", "Verarbeitete <strong>LIDAR</strong>-Daten zur Erstellung hochpräziser Geländemodelle."] },
            { title: "Senior Project Engineer", company: "Aconcagua Solutions", url: "https://www.aconcaguasolutions.com/", location: "Santiago, CL", dates: "Okt 2016 - Mai 2017", bullets: ["Entwickelte Excel-Makros und Visual Basic-Projekte zur <strong>Datenautomatisierung</strong>.", "Führte <strong>Web-Scraping</strong> zur Sammlung relevanter Informationen durch."] },
            { title: "Field Analyst II", company: "Here Maps", url: "https://www.here.com/", location: "Santiago, CL", dates: "Sep 2013 - Feb 2016", bullets: ["Leitete <strong>GIS</strong>-Projekte, einschließlich der Kartierung von Points of Interest und der Validierung des Straßennetzes.", "Agierte als <strong>Datenbankingenieur</strong>-Vertreter für die Kommunikation mit globalen Teams."] },
            { title: "Project Engineer", company: "Municipality of Providencia", url: "https://providencia.cl/", location: "April 2012 - Feb 2013", bullets: ["Digitalisierte Karten zur Unterstützung der <strong>rechtlichen und katastralen Formalisierung</strong>.", "Optimierte Arbeitsabläufe in <strong>ArcGIS</strong> und Datenbankverbindungen.", "Automatisierte die Berichterstellung mit <strong>Excel VBA</strong>."] },
            { title: "Project Engineer", company: "Interra Chile", url: "http://www.interralatam.com/", location: "Jan 2012 - Mär 2012", bullets: ["Klassifizierte Geländedaten und interpretierte Orthobilder für digitale Modelle.", "Trug zur Erstellung von <strong>hochaufgelösten Geländemodellen</strong> bei."] }
        ],
        educationTitle: "Ausbildung",
        education: [
            { title: "M.Sc. in Fernerkundung", company: "Julius-Maximilians-Universität Würzburg", url: "https://eagle-science.org/", dates: "Aug 2019 - Dez 2021", location: "Würzburg, Deutschland", bullets: ["<strong>Schwerpunkt:</strong> Fernerkundung, maschinelles Lernen und GIS-Anwendungen.", "<strong>Abschlussarbeit:</strong> \"Exploring Remote Sensing and Machine Learning to Predict Grape Yields in Chile\"."] },
            { title: "Fernerkundungspraktikum", company: "Deutsches Zentrum für Luft- und Raumfahrt (DLR)", url: "https://www.dlr.de/", dates: "Mär 2020 - Apr 2020", location: "Oberpfaffenhofen, Deutschland", bullets: ["<strong>Schwerpunkt:</strong> Nutzung von NTL-Sensoren zur Analyse der Verteilung von EU-Fonds für öffentliche Investitionen.", "<strong>Prozess:</strong> Durchführung von Vorverarbeitung und statistischer Analyse von Zeitreihendaten."] },
            { title: "B.Sc. in Geomatik-Ingenieurwesen", company: "Universidad de Santiago de Chile", url: "https://www.usach.cl/", dates: "2006 - 2011", location: "Santiago, Chile", bullets: ["<strong>Schwerpunkt:</strong> Geodäsie, topografische Datenerfassung und Vermessungstechniken im Ingenieurwesen.", "<strong>Tesis:</strong> \"Análisis de la variación de la columna total de electrones (TEC) en la ionósfera mediante redes de estaciones GNSS\"."] }
        ],
        projectsTitle: "Ausgewählte Projekte",
        projects: [
            { title: "GeodesiCL", description: "Eine kleine Reise in die geometrische Geodäsie.", url: "https://github.com/diegoalarc/GeodesiCL" },
            { title: "Innovation laboratory EAGLE", description: "Das Innovationslabor bietet die Möglichkeit, ein Forschungsprojekt durchzuführen.", url: "https://github.com/diegoalarc/Innovation_laboratory_EAGLE" },
            { title: "MB1 and MB2 Master EAGLE courses", description: "Codes für die Zulassung zu den Masterstudiengängen.", url: "https://github.com/diegoalarc/Test__MB1_and_MB2" },
            { title: "Spatial modeling and prediction (SMP)", description: "Code und Poster für die Genehmigung des SMP-Kurses.", url: "https://github.com/diegoalarc/Spatial_Modeling_and_Prediction" }
        ],
        certificationsTitle: "Lizenzen & Zertifizierungen",
        certifications: [
            { title: "Docker-Grundlagen für Python-Entwickler", institution: "Udemy", dates: "Nov 2022", credentialId: "UC-4d634c10-ebde-4b53-bd41-3c698020b39b" },
            { title: "2022 Kompletter Python-Bootcamp von Null zum Helden in Python", institution: "Udemy", dates: "Jul 2022", credentialId: "UC-80ae18d8-1c94-49a1-93e2-9a2fb3786c98" },
            { title: "Git+GitHub: Ein vollständiges Versionskontrollsystem von Grund auf", institution: "Udemy", dates: "Jul 2022", credentialId: "UC-1400fe44-9a47-459b-96f6-1416cb945ea6" },
            { title: "Deutsch als Fremdsprache B1", institution: "https://www.uni-wuerzburg.de/zfs/startseite/", dates: "Mär 2021", credentialId: "khE0wj3LlmgfyaYr" },
            { title: "Zertifikat Deutsch B1", institution: "telc GmbH - The European Language Certificates", dates: "Feb 2018", credentialId: "1474620" },
            { title: "Zertifizierter Customer Success Manager (CCSM) Level 1", institution: "SuccessHACKER", dates: "Läuft ab im Dez 2024" },
            { title: "TOEFL iBT B2", institution: "TOEFL Genius", dates: "Läuft ab im Apr 2021", credentialId: "2182 2041 9017 2830" }
        ],
        moreAboutMeTitle: "Mehr über mich",
        moreAboutMe: {
            mainSkills: { title: "Hauptfähigkeiten", skills: [{ name: "Microsoft", icon: "fa-brands fa-microsoft", rating: 4.5 }, { name: "Apple", icon: "fa-brands fa-apple", rating: 4 }, { name: "Linux", icon: "fa-brands fa-linux", rating: 4.5 }, { name: "Docker", icon: "fa-brands fa-docker", rating: 2.5 }, { name: "GitHub", icon: "fa-brands fa-github", rating: 2.5 }, { name: "Python", icon: "fa-brands fa-python", rating: 3 }, { name: "R", icon: "fa-brands fa-r-project", rating: 4 }, { name: "ArcGIS", rating: 3 }, { name: "VSCode", rating: 3 }, { name: "QGIS", rating: 4 }] },
            coding: { title: "Coding-Erfahrung", skills: [{ name: "Geopandas", rating: 3 }, { name: "Rasterio", rating: 3 }, { name: "Scikit-ML", rating: 2.5 }, { name: "Json", rating: 4 }, { name: "API", rating: 2.5 }] },
            languages: { title: "Sprachen", skills: [{ name: "Spanisch", rating: 5 }, { name: "Inglés", rating: 4 }, { name: "Deutsch", rating: 2.5 }] }
        },
        footer: { text1: `Gemacht mit &#x2764;&#xfe0f; und Kaffee` }
    }
};
const updateContent = (lang) => {
    const currentContent = content[lang];
    document.getElementById('page-title').textContent = currentContent.pageTitle;
    document.getElementById('profile-description').textContent = currentContent.profileDescription;
    document.getElementById('about-me-title').textContent = currentContent.aboutMeTitle;
    document.getElementById('about-me-text').innerHTML = currentContent.aboutMeText;
    document.getElementById('experience-title').textContent = currentContent.experienceTitle;
    renderExperience(currentContent.experience);
    document.getElementById('education-title').textContent = currentContent.educationTitle;
    renderEducation(currentContent.education);
    document.getElementById('projects-title').textContent = currentContent.projectsTitle;
    renderProjects(currentContent.projects);
    document.getElementById('certifications-title').textContent = currentContent.certificationsTitle;
    renderCertifications(currentContent.certifications);
    document.getElementById('more-about-me-title').textContent = currentContent.moreAboutMeTitle;
    renderSkills(currentContent.moreAboutMe);
    document.getElementById('footer-text-1').innerHTML = currentContent.footer.text1;
    const navLinks = document.querySelectorAll('.floating-nav a');
    navLinks.forEach(link => {
        const tooltipText = link.getAttribute(`data-tooltip-${lang}`);
        if (tooltipText) {
            link.setAttribute('data-tooltip', tooltipText);
        }
    });
    document.getElementById('profile-image').alt = currentContent.profileAlt;
};
const renderExperience = (experienceData) => {
    const container = document.getElementById('experience-container');
    if (!experienceData) return;
    container.innerHTML = experienceData.map(job => `
        <div class="timeline-item">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-bold text-lg">${job.title}</h3>
                    <a href="${job.url}" target="_blank" class="text-sm highlight-text hover:underline">${job.company}</a>
                    <p class="text-xs text-gray-500">${job.location}</p>
                </div>
                <p class="flex-shrink-0 text-sm highlight-text font-semibold ml-4 text-right">${job.dates}</p>
            </div>
            <ul class="list-disc list-inside mt-2 text-gray-300">
                ${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        </div>
    `).join('');
};

const renderEducation = (educationData) => {
    const container = document.getElementById('education-container');
    if (!educationData) return;
    container.innerHTML = educationData.map(edu => `
        <div class="flex items-start">
            <div class="timeline-container w-full">
                <div class="timeline-item">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-bold text-lg">${edu.title}</h3>
                            <a href="${edu.url}" target="_blank" class="text-sm highlight-text hover:underline">${edu.company}</a>
                            <p class="text-xs text-gray-500">${edu.location}</p>
                        </div>
                        <p class="flex-shrink-0 text-sm highlight-text font-semibold ml-4 text-right">${edu.dates}</p>
                    </div>
                    <ul class="list-disc list-inside mt-2 text-gray-300">
                        ${edu.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
};
const renderProjects = (projectsData) => {
    const container = document.getElementById('projects-container');
    if (!projectsData) return;
    container.innerHTML = projectsData.map(project => `
        <a href="${project.url}" target="_blank" class="project-card block p-6">
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p>${project.description}</p>
        </a>
    `).join('');
};

const renderCertifications = (certificationsData) => {
    const container = document.getElementById('certifications-container');
    if (!certificationsData) return;
    container.innerHTML = certificationsData.map(cert => `
        <a ${cert.url ? `href="${cert.url}" target="_blank"` : ''} class="certification-card block p-6">
            <h3 class="text-xl font-bold mb-2">${cert.title}</h3>
            <p class="text-gray-400 text-sm">${cert.institution}</p>
            <p class="text-xs text-gray-500 mt-1">${cert.dates}</p>
            ${cert.credentialId ? `<p class="mt-1 text-xs font-bold highlight-text"><strong>CredentialID:</strong> ${cert.credentialId}</p>` : ''}
        </a>
    `).join('');
};

const renderSkills = (skillsData) => {
    const container = document.getElementById('more-about-me-container');
    if (!skillsData || !skillsData.mainSkills || !skillsData.coding || !skillsData.languages) return;
    container.innerHTML = `
        <div class="p-4 border-2 border-gray-700 rounded-lg">
            <h3 class="text-lg font-bold mb-2">${skillsData.mainSkills.title}</h3>
            <div class="space-y-2">
                ${skillsData.mainSkills.skills.map(skill => `
                    <div class="flex items-center">
                        ${skill.icon ? `<i class="${skill.icon} text-teal-400 mr-2"></i>` : ''}
                        <span class="flex-grow">${skill.name}</span>
                        <span class="skill-rating">${renderStars(skill.rating)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="p-4 border-2 border-gray-700 rounded-lg">
            <h3 class="text-lg font-bold mb-2">${skillsData.coding.title}</h3>
            <div class="space-y-2">
                ${skillsData.coding.skills.map(skill => `
                    <div class="flex items-center">
                        <span class="flex-grow">${skill.name}</span>
                        <span class="skill-rating">${renderStars(skill.rating)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="p-4 border-2 border-gray-700 rounded-lg">
            <h3 class="text-lg font-bold mb-2">${skillsData.languages.title}</h3>
            <div class="space-y-2">
                ${skillsData.languages.skills.map(skill => `
                    <div class="flex items-center">
                        <span class="flex-grow">${skill.name}</span>
                        <span class="skill-rating">${renderStars(skill.rating)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

const renderStars = (rating) => {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < fullStars; i++) {
        stars += `<i class="fa-solid fa-star filled-star"></i>`;
    }
    if (hasHalfStar) {
        stars += `<i class="fa-solid fa-star-half-stroke half-star"></i>`;
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += `<i class="fa-regular fa-star empty-star"></i>`;
    }
    return stars;
};
const setLanguage = (lang) => {
    updateContent(lang);
    document.getElementById('language-switcher').value = lang;
    localStorage.setItem('lang', lang);
};

// CÓDIGO CORREGIDO PARA EL COMPORTAMIENTO EN MÓVILES
document.querySelectorAll('.floating-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const originalTooltip = this.getAttribute('data-tooltip');
        if (originalTooltip) {
            this.removeAttribute('data-tooltip');
        }

        setTimeout(() => {
            if (originalTooltip) {
                this.setAttribute('data-tooltip', originalTooltip);
            }
        }, 500);

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const initialLang = localStorage.getItem('lang') || 'es';
setLanguage(initialLang);
document.getElementById('language-switcher').addEventListener('change', (event) => {
    setLanguage(event.target.value);
});
