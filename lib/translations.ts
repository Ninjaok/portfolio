export const translations = {
  PT: {
    // Sidebar
    bio: "Engenheiro Informático & Técnico em Mecânica | Data Science · Inteligência Artificial | Python · SQL · Java",
    aboutText: "Engenheiro de Software focado em Data Science e IA. Transformo problemas complexos em soluções claras, com código, matemática e muita curiosidade.",
    aboutMeBtn: "Sobre mim",
    shareBtn: "Partilhar",
    projectsNavLabel: "Projetos",

    // ProjectsIntro
    projectsHeading: "Projetos",
    projectsEyebrow: "Portfólio · 2026",
    projectsLead: "Projetos de Engenharia Informática desenvolvidos ao longo da licenciatura no IADE — Universidade Europeia: de robótica autónoma e sistemas embebidos a aplicações web, móveis e simulação. Clique num projeto para ver os detalhes.",
    viewProject: "Ver projeto",

    // ProjectSection
    participantsLabel: "Participantes",
    projectKicker: "Projeto",
    visitGithub: "Visitar Github",
    profileBtn: "Perfil",

    // AboutMeSection
    aboutHeading: "Sobre mim",
    aboutParagraph1: "Curioso por natureza, gosto de resolver problemas com dados e código. Fora do trabalho, ando entre fotografia analógica e desenvolvimento de jogos, sempre a otimizar alguma coisa. Gosto muito de aprender e tenho paixão pela escrita, por viajar e por conduzir moto. Trabalho também com gestão, arte e publicidade, e tenho um part-time onde aprendo sobre roupa, materiais e treino o meu inglês. Tenho um forte interesse por memorização, sistemas elétricos e mecânica.",
    aboutParagraph2: "O meu foco técnico atual centra-se em <strong>Data Science e Inteligência Artificial</strong>, desenvolvendo soluções eficientes com ecossistemas como Python, SQL, Java e C#.",
    aboutParagraph3: "Fora do ambiente corporativo e de desenvolvimento de software comercial, divido o meu tempo livre entre a precisão calma da <strong>fotografia analógica de 35mm</strong>, o processo criativo no <strong>desenvolvimento de jogos indie</strong> e <strong>a corrida</strong>, procurando sempre otimizar e refinar cada detalhe.",

    focusEducationTitle: "Formação & Base",
    focusEducationDesc: "Técnico em Mecânica e Engenharia Informática (IADE).",
    focusStackTitle: "Stack Principal",
    focusStackDesc: "Python, SQL, Java, C#, C++ e computação inteligente.",
    focusCreativeTitle: "Interesses Criativos",
    focusCreativeDesc: "Fotografia analógica, Game Dev, corrida, memorização, sistemas elétricos e mecânica.",

    // About - Education & Experience
    educationTitle: "Formação Académica",
    educationDegree: "Licenciatura em Engenharia Informática",
    educationSchool: "IADE — Universidade Europeia",
    educationGrade: "Média: 16",
    educationDesc: "Licenciatura em Engenharia Informática com um currículo focado na resolução de problemas reais através da tecnologia. O programa constrói uma base teórica sólida em matemática e lógica, enfatizando o desenvolvimento prático de software e hardware. As disciplinas abrangem tecnologias de ponta, desde sistemas distribuídos e bases de dados até inteligência artificial, robótica e prototipagem de dispositivos IoT — preparando os graduados para projetar e construir infraestruturas tecnológicas robustas e completas.",

    activitiesTitle: "Atividades & Representação",
    activity1: "Representante do Curso de Engenharia Informática | IADE (2024–2026): principal ligação entre estudantes e administração, defendendo os interesses dos alunos e melhorias académicas.",
    activity2: "Representante de Turma — D1 e D2 | IADE (2023–2026): apoiei a organização académica e a comunicação entre colegas e docentes.",
    activity3: "Fotografia Analógica: prática de fotografia em filme — captação, medição de luz, revelação química e ampliação em câmara escura.",

    experienceTitle: "Experiência",
    experienceRole: "Assistente de Vendas",
    experienceDesc: "Assistente de vendas numa loja de roupa clássica, prestando atendimento ao cliente em inglês e francês, com forte foco em comunicação clara, conhecimento de produto e assistência personalizada. Responsável pela organização da loja, controlo de inventário e garantia de uma experiência de compra eficiente e acolhedora.",

    // Project descriptions
    speedyShort: "Carro de corrida autónomo com visão computacional.",
    speedyLong: "O Speedy é um veículo de corrida autónomo desenvolvido para competir em pistas de forma rápida, segura e totalmente autónoma. Construído como projeto final da Licenciatura em Engenharia Informática do IADE - Universidade Europeia, o sistema integra visão computacional, inteligência artificial e sensores para identificar a pista, reconhecer obstáculos e adaptar a condução em tempo real. Toda a arquitetura foi consolidada num Raspberry Pi 4, tornando a plataforma mais eficiente e reduzindo a latência entre a perceção do ambiente e a atuação do veículo. Desenvolvido sobre ROS 2 Jazzy, o Speedy representa a integração de software, eletrónica e robótica numa solução completa para navegação autónoma, demonstrando a aplicação prática de algoritmos de controlo, processamento de imagem e tomada de decisão em sistemas embarcados.",

    washBuddyShort: "Robô que gamifica a lavagem das mãos com RFID.",
    washBuddyLong: "Wash Buddy é um robô interativo autónomo que orienta as crianças através de uma rotina de lavagem das mãos: tocar em brinquedos marcados com RFID (sabão, esponja, toalha) avança numa máquina de estado rigorosa — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — com timeouts por etapa ajustados para diretrizes reais, incluindo um piso de 20 segundos de esfregão seguindo as recomendações da OMS/CDC para lavagem das mãos. Um ESP32-WROOM-32 executa um split dual-core do FreeRTOS: um núcleo renderiza uma face OLED animada proceduralmente e efeitos de partículas a 60 FPS fixas, enquanto o outro controla três gestos baseados em servos, leituras de RFID e linhas de voz sincronizadas. Uma placa PCB personalizada separa as camadas de energia e lógica para manter o ruído dos motores longe dos barramentos SPI/I2C, com desligamento automático gateado por MOSFET para eliminar o consumo em espera.",

    worldOfToiletsShort: "App Android de casas de banho com rotas A*.",
    worldOfToiletsLong: "World of Toilets é uma aplicação móvel que ajuda as pessoas a localizar, avaliar e sugerir casas de banho públicas em Lisboa. Construída em Kotlin com Jetpack Compose, filtra resultados por critérios como acessibilidade e fraldários, e calcula rotas pedonais otimizadas com uma pesquisa A* sobre um grafo OpenStreetMap de 199.000 nós, com uma média de 1,75s por consulta em testes de carga com uma taxa de sucesso de 100%. O backend executa duas instâncias replicadas de API NestJS e dois front-ends Next.js atrás de um balanceador de carga NGINX, apoiado por um cluster MariaDB Galera de três nós em replicação multi-master síncrona, com autenticação JWT, controlo de acesso baseado em papéis e credenciais com hash bcrypt.",

    capoShort: "Gestão de chão de fábrica em tempo real.",
    capoLong: "CAPO (Computer Aided Process Overview) digitaliza o chão de fábrica de tubagens metálicas, modelando o trabalho numa hierarquia Projeto → Isométrico → Spool → Junta → Peça em três etapas sequenciais: corte, montagem e soldadura. Construído com NestJS 11 usando CQRS e um modelo de domínio rico, cada transição de estado é registada como um evento imutável, e as transferências de etapa são derivadas — nunca armazenadas — do estado das próprias peças, para que a pipeline nunca perca a sincronização. Eventos de domínio propagam-se via Socket.IO, de modo que completar uma etapa abre instantaneamente a seguinte para o seu operador sem recarregar a página. O front-end é Next.js 16 com React Server Components, executado atrás de um proxy reverso NGINX como um monorepo Bun-workspace.",

    angryDuckShort: "Rede e sistemas IoT num edifício de 6 andares.",
    angryDuckLong: "Angry Duck é um projeto de design de infraestrutura de rede para a sede de seis andares e edifício secundário de uma empresa avícola fictícia, construído para o curso de Redes e Comunicações de Dados. O plano abrange cablagem estruturada, backbone duplo, pontos de acesso Wi-Fi por andar e um datacenter centralizado, juntamente com quatro subsistemas IoT modulares — deteção de gases perigosos, supressão de incêndios, segurança de acesso e controlo de temperatura — implantados em cada andar. A topologia completa (2 routers, 9 switches, 6 servidores, 39 computadores e 44 dispositivos IoT) foi modelada e simulada no Cisco Packet Tracer.",

    physicsSimShort: "Simulador de física de partículas em GTK4.",
    physicsSimLong: "Physics Simulator é uma aplicação desktop GTK4 que modela o movimento de partículas em dois modos independentes: cinemático, onde as partículas seguem trajetórias de aceleração constante, e dinâmico, onde a segunda lei de Newton deriva a aceleração a partir de forças configuráveis e gravidade em cada passo. Construída em C com Cairo para renderização vetorial, suporta modos de câmara com zoom automático e seguimento de partículas, renderiza rastos históricos de partículas e pode guardar ou carregar estados completos de simulação como ficheiros de projeto .sabino, com exportação CSV detalhada por partícula para análise posterior.",
  },
  EN: {
    // Sidebar
    bio: "Computer Engineer & Mechanical Technician | Data Science · Artificial Intelligence | Python · SQL · Java",
    aboutText: "Software Engineer focused on Data Science and AI. I turn complex problems into clear solutions, with code, mathematics and a lot of curiosity.",
    aboutMeBtn: "About me",
    shareBtn: "Share",
    projectsNavLabel: "Projects",

    // ProjectsIntro
    projectsHeading: "Projects",
    projectsEyebrow: "Portfolio · 2026",
    projectsLead: "Computer Engineering projects built throughout my degree at IADE — European University: from autonomous robotics and embedded systems to web, mobile and simulation software. Click a project to see the details.",
    viewProject: "View project",

    // ProjectSection
    participantsLabel: "Participants",
    projectKicker: "Project",
    visitGithub: "Visit Github",
    profileBtn: "Profile",

    // AboutMeSection
    aboutHeading: "About me",
    aboutParagraph1: "Curious by nature, I enjoy solving problems with data and code. Outside of work, I spend my time between analog photography and game development, always optimizing something. I have a strong passion for learning, writing, traveling, and riding motorcycles. I also work in management, art, and advertising, and I have a part-time job where I learn about fabrics, materials, and practice my English. I'm also into memorization techniques, electrical systems, and mechanics.",
    aboutParagraph2: "My current technical focus is on <strong>Data Science and Artificial Intelligence</strong>, developing efficient solutions with ecosystems like Python, SQL, Java, and C#.",
    aboutParagraph3: "Outside of the corporate environment and commercial software development, I split my free time between the quiet precision of <strong>35mm analog photography</strong>, the creative process of <strong>indie game development</strong>, and <strong>running</strong>, always seeking to optimize and refine every detail.",

    focusEducationTitle: "Education & Background",
    focusEducationDesc: "Mechanical Technician & Computer Engineering (IADE).",
    focusStackTitle: "Main Stack",
    focusStackDesc: "Python, SQL, Java, C#, C++ and intelligent computing.",
    focusCreativeTitle: "Creative Interests",
    focusCreativeDesc: "Analog photography, Game Dev, running, memorization, electrical systems & mechanics.",

    // About - Education & Experience
    educationTitle: "Education",
    educationDegree: "Bachelor's in Computer Engineering",
    educationSchool: "IADE — European University",
    educationGrade: "Grade: 16",
    educationDesc: "Bachelor's degree in Computer Engineering with a curriculum focused on solving real-world problems through technology. The program builds a strong theoretical foundation in mathematics and logic while emphasizing hands-on software and hardware development. Coursework spans cutting-edge technologies, from distributed systems and databases to artificial intelligence, robotics, and IoT device prototyping — preparing graduates to design and build robust, end-to-end technological infrastructures.",

    activitiesTitle: "Activities & Representation",
    activity1: "Informatics Engineering Course Representative | IADE (2024–2026): main liaison between students and administration, advocating for student interests and academic improvements.",
    activity2: "Class Representative – D1 and D2 | IADE (2023–2026): supported academic organization and communication between peers and faculty.",
    activity3: "Analog Photography: hands-on practice of film photography — shooting, light metering, chemical developing, and darkroom enlarging.",

    experienceTitle: "Experience",
    experienceRole: "Sales Associate",
    experienceDesc: "Sales Associate at a classic fashion clothing store, providing customer service in English and French, with a strong focus on clear communication, product knowledge, and personalized customer assistance. Responsible for maintaining store organization, managing inventory control, and ensuring an efficient and welcoming shopping experience for customers.",

    // Project descriptions
    speedyShort: "Autonomous racing car driven by computer vision.",
    speedyLong: "Speedy is an autonomous racing vehicle developed to compete on tracks in a fast, safe, and fully autonomous manner. Built as the final project for the Bachelor's degree in Computer Science at IADE - European University, the system integrates computer vision, artificial intelligence, and sensors to identify the track, recognize obstacles, and adapt driving in real time. The entire architecture was consolidated on a Raspberry Pi 4, making the platform more efficient and reducing the latency between environment perception and vehicle actuation. Developed on ROS 2 Jazzy, Speedy represents the integration of software, electronics, and robotics into a complete solution for autonomous navigation, demonstrating the practical application of control algorithms, image processing, and decision-making in embedded systems.",

    washBuddyShort: "Robot that gamifies handwashing using RFID.",
    washBuddyLong: "Wash Buddy is an autonomous interactive robot that guides children through a hand-washing routine: touching RFID-tagged toys (soap, sponge, towel) advances through a strict state machine — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — with per-step timeouts tuned to real guidelines, including a 20-second scrubbing floor following WHO/CDC hand-washing recommendations. An ESP32-WROOM-32 runs a FreeRTOS dual-core split: one core renders a procedurally animated OLED face and particle effects at a fixed 60 FPS, while the other handles three servo-based gestures, RFID reads, and synchronized voice lines. A custom PCB separates the power and logic layers to keep motor noise away from the SPI/I2C buses, with MOSFET-gated auto-shutdown to eliminate standby consumption.",

    worldOfToiletsShort: "Android app for public restrooms with A* routes.",
    worldOfToiletsLong: "World of Toilets is a mobile app that helps people locate, rate, and suggest public restrooms in Lisbon. Built in Kotlin with Jetpack Compose, it filters results by criteria like accessibility and baby-changing facilities, and calculates optimized walking routes with an A* search over a 199,000-node OpenStreetMap graph, averaging 1.75s per query across load tests with a 100% success rate. The backend runs two replicated NestJS API instances and two Next.js front-ends behind an NGINX load balancer, backed by a three-node MariaDB Galera cluster in synchronous multi-master replication, with JWT authentication, role-based access control, and bcrypt-hashed credentials.",

    capoShort: "Real-time factory floor tracking for pipe work.",
    capoLong: "CAPO (Computer Aided Process Overview) digitizes a metal pipeline factory's production floor, modeling work as a Project → Isometric → Spool → Joint → Piece hierarchy across three sequential stages: cutting, assembly, and welding. Built with NestJS 11 using CQRS and a rich domain model, every state transition is recorded as an immutable event, and stage hand-offs are derived — never stored — from the state of the pieces themselves, so the pipeline can never fall out of sync. Domain events propagate over Socket.IO, so completing a stage instantly opens the next one for its operator without a page reload. The front-end is Next.js 16 with React Server Components, running behind an NGINX reverse proxy as a Bun-workspace monorepo.",

    angryDuckShort: "Network and IoT systems for a 6-floor building.",
    angryDuckLong: "Angry Duck is a network infrastructure design project for a fictional poultry company's six-floor headquarters and secondary building, built for a Networks and Data Communications course. The plan covers structured cabling, a dual backbone, per-floor Wi-Fi access points, and a centralized datacenter, alongside four modular IoT subsystems — hazardous gas detection, fire suppression, access security, and temperature control — deployed on every floor. The full topology (2 routers, 9 switches, 6 servers, 39 computers, and 44 IoT devices) was modeled and simulated in Cisco Packet Tracer.",

    physicsSimShort: "GTK4 desktop particle physics simulator.",
    physicsSimLong: "Physics Simulator is a GTK4 desktop application that models particle motion in two independent modes: kinematic, where particles follow constant-acceleration trajectories, and dynamic, where Newton's second law derives acceleration from configurable forces and gravity at each step. Built in C with Cairo for vector rendering, it supports auto-zoom and particle-follow camera modes, renders historical particle trails, and can save or load full simulation states as .sabino project files, with detailed per-particle CSV export for further analysis.",
  },
  FR: {
    // Sidebar
    bio: "Ingénieur Informatique & Technicien en Mécanique | Data Science · Intelligence Artificielle | Python · SQL · Java",
    aboutText: "Ingénieur Logiciel spécialisé en Data Science et IA. Je transforme des problèmes complexes en solutions claires, avec du code, des mathématiques et beaucoup de curiosité.",
    aboutMeBtn: "À propos",
    shareBtn: "Partager",
    projectsNavLabel: "Projets",

    // ProjectsIntro
    projectsHeading: "Projets",
    projectsEyebrow: "Portfolio · 2026",
    projectsLead: "Projets d'Ingénierie Informatique réalisés au cours de ma licence à l'IADE — Université Européenne : de la robotique autonome et des systèmes embarqués aux applications web, mobiles et de simulation. Cliquez sur un projet pour voir les détails.",
    viewProject: "Voir le projet",

    // ProjectSection
    participantsLabel: "Participants",
    projectKicker: "Projet",
    visitGithub: "Voir sur Github",
    profileBtn: "Profil",

    // AboutMeSection
    aboutHeading: "À propos de moi",
    aboutParagraph1: "Curieux de nature, j'aime résoudre des problèmes avec des données et du code. En dehors du travail, je partage mon temps entre la photographie argentique et le développement de jeux, toujours en train d'optimiser quelque chose. J'ai une réelle passion pour l'apprentissage, l'écriture, les voyages et la moto. Je travaille aussi dans la gestion, l'art et la publicité, et j'ai un emploi à temps partiel où j'apprends les textiles, les matériaux et je pratique mon anglais. Je m'intéresse aussi beaucoup à la mémorisation, aux systèmes électriques et à la mécanique.",
    aboutParagraph2: "Mon focus technique actuel porte sur la <strong>Data Science et l'Intelligence Artificielle</strong>, avec le développement de solutions efficaces à l'aide d'écosystèmes comme Python, SQL, Java et C#.",
    aboutParagraph3: "En dehors de l'environnement corporate et du développement logiciel commercial, je partage mon temps libre entre la précision calme de la <strong>photographie argentique 35mm</strong>, le processus créatif du <strong>développement de jeux indépendants</strong> et <strong>la course à pied</strong>, en cherchant toujours à optimiser et affiner chaque détail.",

    focusEducationTitle: "Formation & Bases",
    focusEducationDesc: "Technicien en Mécanique et Ingénierie Informatique (IADE).",
    focusStackTitle: "Stack Principale",
    focusStackDesc: "Python, SQL, Java, C#, C++ et informatique intelligente.",
    focusCreativeTitle: "Intérêts Créatifs",
    focusCreativeDesc: "Photographie argentique, Game Dev, course à pied, mémorisation, systèmes électriques et mécanique.",

    // About - Education & Experience
    educationTitle: "Formation Académique",
    educationDegree: "Licence en Ingénierie Informatique",
    educationSchool: "IADE — Université Européenne",
    educationGrade: "Moyenne : 16",
    educationDesc: "Licence en Ingénierie Informatique avec un cursus axé sur la résolution de problèmes réels grâce à la technologie. Le programme construit une base théorique solide en mathématiques et en logique, tout en mettant l'accent sur le développement pratique de logiciels et de matériel. Les matières couvrent des technologies de pointe, des systèmes distribués et des bases de données jusqu'à l'intelligence artificielle, la robotique et le prototypage de dispositifs IoT — préparant les diplômés à concevoir et construire des infrastructures technologiques robustes et complètes.",

    activitiesTitle: "Activités & Représentation",
    activity1: "Représentant du cursus d'Ingénierie Informatique | IADE (2024–2026) : principal lien entre les étudiants et l'administration, défendant les intérêts des étudiants et les améliorations académiques.",
    activity2: "Délégué de classe — D1 et D2 | IADE (2023–2026) : soutien à l'organisation académique et à la communication entre collègues et enseignants.",
    activity3: "Photographie argentique : pratique de la photographie sur film — prise de vue, mesure de la lumière, développement chimique et agrandissement en chambre noire.",

    experienceTitle: "Expérience",
    experienceRole: "Assistant de Vente",
    experienceDesc: "Assistant de vente dans une boutique de vêtements classiques, assurant le service client en anglais et en français, avec un fort accent sur une communication claire, la connaissance des produits et une assistance personnalisée. Responsable de l'organisation du magasin, de la gestion des stocks et d'une expérience d'achat efficace et accueillante.",

    // Project descriptions
    speedyShort: "Voiture de course autonome par vision par ordinateur.",
    speedyLong: "Speedy est un véhicule de course autonome développé pour concourir sur piste de manière rapide, sûre et totalement autonome. Construit comme projet de fin d'études de la Licence en Ingénierie Informatique de l'IADE - Université Européenne, le système intègre vision par ordinateur, intelligence artificielle et capteurs pour identifier la piste, reconnaître les obstacles et adapter la conduite en temps réel. Toute l'architecture a été consolidée sur un Raspberry Pi 4, rendant la plateforme plus efficace et réduisant la latence entre la perception de l'environnement et l'action du véhicule. Développé sur ROS 2 Jazzy, Speedy représente l'intégration du logiciel, de l'électronique et de la robotique dans une solution complète de navigation autonome, démontrant l'application pratique d'algorithmes de contrôle, de traitement d'image et de prise de décision dans des systèmes embarqués.",

    washBuddyShort: "Robot qui ludifie le lavage des mains via RFID.",
    washBuddyLong: "Wash Buddy est un robot interactif autonome qui guide les enfants à travers une routine de lavage des mains : toucher des jouets marqués RFID (savon, éponge, serviette) fait progresser une machine à états stricte — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — avec des délais par étape calibrés selon de vraies recommandations, dont un minimum de 20 secondes de frottement suivant les recommandations OMS/CDC pour le lavage des mains. Un ESP32-WROOM-32 exécute un partage dual-core FreeRTOS : un cœur affiche un visage OLED animé de façon procédurale et des effets de particules à 60 FPS fixes, tandis que l'autre gère trois gestes basés sur des servomoteurs, les lectures RFID et des lignes vocales synchronisées. Un PCB personnalisé sépare les couches d'alimentation et de logique pour éloigner le bruit des moteurs des bus SPI/I2C, avec une mise en veille automatique pilotée par MOSFET pour éliminer la consommation en veille.",

    worldOfToiletsShort: "App Android de toilettes publiques, itinéraires A*.",
    worldOfToiletsLong: "World of Toilets est une application mobile qui aide les gens à localiser, noter et suggérer des toilettes publiques à Lisbonne. Construite en Kotlin avec Jetpack Compose, elle filtre les résultats selon des critères comme l'accessibilité et les tables à langer, et calcule des itinéraires piétons optimisés grâce à une recherche A* sur un graphe OpenStreetMap de 199 000 nœuds, avec une moyenne de 1,75s par requête lors de tests de charge et un taux de succès de 100%. Le backend exécute deux instances répliquées d'API NestJS et deux front-ends Next.js derrière un répartiteur de charge NGINX, appuyé par un cluster MariaDB Galera à trois nœuds en réplication synchrone multi-maître, avec authentification JWT, contrôle d'accès basé sur les rôles et mots de passe hachés en bcrypt.",

    capoShort: "Suivi d'atelier en temps réel pour la tuyauterie.",
    capoLong: "CAPO (Computer Aided Process Overview) numérise l'atelier de fabrication de tuyauteries métalliques, modélisant le travail selon une hiérarchie Projet → Isométrique → Spool → Joint → Pièce à travers trois étapes séquentielles : découpe, assemblage et soudure. Construit avec NestJS 11 utilisant CQRS et un modèle de domaine riche, chaque transition d'état est enregistrée comme un événement immuable, et les transferts d'étape sont dérivés — jamais stockés — de l'état des pièces elles-mêmes, afin que le pipeline ne perde jamais la synchronisation. Les événements de domaine se propagent via Socket.IO, de sorte que la fin d'une étape ouvre instantanément la suivante pour son opérateur sans recharger la page. Le front-end est Next.js 16 avec React Server Components, exécuté derrière un proxy inverse NGINX comme monorepo Bun-workspace.",

    angryDuckShort: "Réseau et systèmes IoT pour un bâtiment de 6 étages.",
    angryDuckLong: "Angry Duck est un projet de conception d'infrastructure réseau pour le siège de six étages et le bâtiment secondaire d'une entreprise avicole fictive, réalisé pour le cours de Réseaux et Communications de Données. Le plan couvre le câblage structuré, une dorsale double, des points d'accès Wi-Fi par étage et un datacenter centralisé, accompagnés de quatre sous-systèmes IoT modulaires — détection de gaz dangereux, extinction incendie, sécurité d'accès et contrôle de température — déployés à chaque étage. La topologie complète (2 routeurs, 9 commutateurs, 6 serveurs, 39 ordinateurs et 44 appareils IoT) a été modélisée et simulée dans Cisco Packet Tracer.",

    physicsSimShort: "Simulateur de physique des particules en GTK4.",
    physicsSimLong: "Physics Simulator est une application de bureau GTK4 qui modélise le mouvement de particules selon deux modes indépendants : cinématique, où les particules suivent des trajectoires à accélération constante, et dynamique, où la deuxième loi de Newton dérive l'accélération à partir de forces configurables et de la gravité à chaque pas. Construite en C avec Cairo pour le rendu vectoriel, elle prend en charge des modes de caméra à zoom automatique et de suivi de particules, affiche les traînées historiques des particules, et peut sauvegarder ou charger des états de simulation complets sous forme de fichiers de projet .sabino, avec un export CSV détaillé par particule pour analyse ultérieure.",
  },
  DE: {
    // Sidebar
    bio: "Informatikingenieur & Mechaniktechniker | Data Science · Künstliche Intelligenz | Python · SQL · Java",
    aboutText: "Software-Ingenieur mit Fokus auf Data Science und KI. Ich verwandle komplexe Probleme in klare Lösungen — mit Code, Mathematik und viel Neugier.",
    aboutMeBtn: "Über mich",
    shareBtn: "Teilen",
    projectsNavLabel: "Projekte",

    // ProjectsIntro
    projectsHeading: "Projekte",
    projectsEyebrow: "Portfolio · 2026",
    projectsLead: "Projekte aus dem Informatikingenieur-Studium an der IADE — Europäische Universität: von autonomer Robotik und eingebetteten Systemen bis hin zu Web-, Mobil- und Simulationssoftware. Klicken Sie auf ein Projekt, um Details zu sehen.",
    viewProject: "Projekt ansehen",

    // ProjectSection
    participantsLabel: "Teilnehmer",
    projectKicker: "Projekt",
    visitGithub: "Auf Github ansehen",
    profileBtn: "Profil",

    // AboutMeSection
    aboutHeading: "Über mich",
    aboutParagraph1: "Von Natur aus neugierig, löse ich gerne Probleme mit Daten und Code. Außerhalb der Arbeit verbringe ich meine Zeit zwischen analoger Fotografie und Spieleentwicklung und optimiere dabei ständig irgendetwas. Ich habe eine große Leidenschaft fürs Lernen, Schreiben, Reisen und Motorradfahren. Ich arbeite außerdem im Bereich Management, Kunst und Werbung und habe einen Nebenjob, bei dem ich mehr über Stoffe und Materialien lerne und mein Englisch übe. Ich interessiere mich auch stark für Gedächtnistechniken, elektrische Systeme und Mechanik.",
    aboutParagraph2: "Mein aktueller technischer Schwerpunkt liegt auf <strong>Data Science und Künstlicher Intelligenz</strong>, wobei ich effiziente Lösungen mit Ökosystemen wie Python, SQL, Java und C# entwickle.",
    aboutParagraph3: "Außerhalb des Unternehmensumfelds und der kommerziellen Softwareentwicklung teile ich meine Freizeit zwischen der ruhigen Präzision der <strong>analogen 35mm-Fotografie</strong>, dem kreativen Prozess der <strong>Indie-Spieleentwicklung</strong> und <strong>dem Laufen</strong> auf, stets bestrebt, jedes Detail zu optimieren und zu verfeinern.",

    focusEducationTitle: "Ausbildung & Grundlagen",
    focusEducationDesc: "Mechaniktechniker & Informatikingenieurwesen (IADE).",
    focusStackTitle: "Haupt-Stack",
    focusStackDesc: "Python, SQL, Java, C#, C++ und intelligentes Computing.",
    focusCreativeTitle: "Kreative Interessen",
    focusCreativeDesc: "Analoge Fotografie, Game Dev, Laufen, Gedächtnistechniken, elektrische Systeme & Mechanik.",

    // About - Education & Experience
    educationTitle: "Akademische Ausbildung",
    educationDegree: "Bachelor in Informatikingenieurwesen",
    educationSchool: "IADE — Europäische Universität",
    educationGrade: "Note: 16",
    educationDesc: "Bachelorabschluss in Informatikingenieurwesen mit einem Lehrplan, der sich auf die Lösung realer Probleme durch Technologie konzentriert. Das Programm baut ein solides theoretisches Fundament in Mathematik und Logik auf und legt gleichzeitig Wert auf praktische Software- und Hardwareentwicklung. Die Kursinhalte umfassen modernste Technologien, von verteilten Systemen und Datenbanken bis hin zu künstlicher Intelligenz, Robotik und dem Prototyping von IoT-Geräten — und bereiten Absolventen darauf vor, robuste, durchgängige technologische Infrastrukturen zu entwerfen und zu bauen.",

    activitiesTitle: "Aktivitäten & Vertretung",
    activity1: "Studiengangsvertreter Informatikingenieurwesen | IADE (2024–2026): Hauptansprechpartner zwischen Studierenden und Verwaltung, Vertretung der Studierendeninteressen und akademischer Verbesserungen.",
    activity2: "Klassensprecher — D1 und D2 | IADE (2023–2026): Unterstützung der akademischen Organisation und Kommunikation zwischen Kommilitonen und Lehrkräften.",
    activity3: "Analoge Fotografie: praktische Erfahrung mit Filmfotografie — Aufnahme, Lichtmessung, chemische Entwicklung und Vergrößerung in der Dunkelkammer.",

    experienceTitle: "Erfahrung",
    experienceRole: "Verkaufsassistent",
    experienceDesc: "Verkaufsassistent in einem klassischen Modegeschäft, Kundenbetreuung auf Englisch und Französisch, mit starkem Fokus auf klare Kommunikation, Produktkenntnisse und persönliche Kundenbetreuung. Verantwortlich für die Organisation des Geschäfts, die Bestandskontrolle und ein effizientes, einladendes Einkaufserlebnis.",

    // Project descriptions
    speedyShort: "Autonomes Rennauto mit Computer Vision.",
    speedyLong: "Speedy ist ein autonomes Rennfahrzeug, das entwickelt wurde, um auf Strecken schnell, sicher und vollständig autonom zu fahren. Als Abschlussprojekt des Bachelorstudiengangs Informatikingenieurwesen an der IADE - Europäische Universität integriert das System Computer Vision, künstliche Intelligenz und Sensoren, um die Strecke zu erkennen, Hindernisse zu identifizieren und das Fahrverhalten in Echtzeit anzupassen. Die gesamte Architektur wurde auf einem Raspberry Pi 4 konsolidiert, was die Plattform effizienter macht und die Latenz zwischen Umgebungswahrnehmung und Fahrzeugaktion reduziert. Entwickelt auf ROS 2 Jazzy, steht Speedy für die Integration von Software, Elektronik und Robotik in einer vollständigen Lösung für autonome Navigation und zeigt die praktische Anwendung von Regelungsalgorithmen, Bildverarbeitung und Entscheidungsfindung in eingebetteten Systemen.",

    washBuddyShort: "Roboter, der Händewaschen per RFID spielerisch macht.",
    washBuddyLong: "Wash Buddy ist ein autonomer interaktiver Roboter, der Kinder durch eine Händewaschroutine führt: Das Berühren von RFID-markiertem Spielzeug (Seife, Schwamm, Handtuch) bewegt eine strikte Zustandsmaschine voran — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — mit Zeitlimits pro Schritt, die an reale Richtlinien angepasst sind, einschließlich einer Mindestschrubbdauer von 20 Sekunden gemäß WHO/CDC-Empfehlungen zum Händewaschen. Ein ESP32-WROOM-32 führt einen FreeRTOS-Dual-Core-Split aus: Ein Kern rendert ein prozedural animiertes OLED-Gesicht und Partikeleffekte mit festen 60 FPS, während der andere drei servobasierte Gesten, RFID-Lesevorgänge und synchronisierte Sprachzeilen steuert. Eine benutzerdefinierte Leiterplatte trennt Strom- und Logikebenen, um Motorrauschen von den SPI/I2C-Bussen fernzuhalten, mit MOSFET-gesteuerter automatischer Abschaltung zur Eliminierung des Standby-Verbrauchs.",

    worldOfToiletsShort: "Android-App für öffentliche Toiletten mit A*-Routen.",
    worldOfToiletsLong: "World of Toilets ist eine mobile App, die Menschen hilft, öffentliche Toiletten in Lissabon zu finden, zu bewerten und vorzuschlagen. In Kotlin mit Jetpack Compose entwickelt, filtert sie Ergebnisse nach Kriterien wie Barrierefreiheit und Wickelmöglichkeiten und berechnet optimierte Fußwege mit einer A*-Suche über einen OpenStreetMap-Graphen mit 199.000 Knoten, mit durchschnittlich 1,75s pro Anfrage in Lasttests und einer Erfolgsquote von 100%. Das Backend betreibt zwei replizierte NestJS-API-Instanzen und zwei Next.js-Frontends hinter einem NGINX-Load-Balancer, unterstützt von einem dreiknotigen MariaDB-Galera-Cluster in synchroner Multi-Master-Replikation, mit JWT-Authentifizierung, rollenbasierter Zugriffskontrolle und bcrypt-gehashten Zugangsdaten.",

    capoShort: "Echtzeit-Werkstattverfolgung für Rohrfertigung.",
    capoLong: "CAPO (Computer Aided Process Overview) digitalisiert die Fertigungshalle einer Metallrohrleitungsfabrik und modelliert die Arbeit als Hierarchie Projekt → Isometrie → Spool → Verbindung → Teil über drei aufeinanderfolgende Phasen: Schneiden, Montage und Schweißen. Gebaut mit NestJS 11 unter Verwendung von CQRS und einem reichhaltigen Domänenmodell, wird jeder Zustandsübergang als unveränderliches Ereignis aufgezeichnet, und Phasenübergaben werden abgeleitet — niemals gespeichert — aus dem Zustand der Teile selbst, sodass die Pipeline nie außer Sync geraten kann. Domänenereignisse werden über Socket.IO propagiert, sodass der Abschluss einer Phase sofort die nächste für den Bediener öffnet, ohne die Seite neu zu laden. Das Frontend ist Next.js 16 mit React Server Components, das hinter einem NGINX-Reverse-Proxy als Bun-Workspace-Monorepo läuft.",

    angryDuckShort: "Netzwerk und IoT für ein 6-stöckiges Gebäude.",
    angryDuckLong: "Angry Duck ist ein Netzwerkinfrastruktur-Designprojekt für den sechsstöckigen Hauptsitz und das Nebengebäude eines fiktiven Geflügelunternehmens, erstellt für einen Kurs in Netzwerken und Datenkommunikation. Der Plan umfasst strukturierte Verkabelung, ein doppeltes Backbone, Wi-Fi-Zugangspunkte pro Stockwerk und ein zentralisiertes Rechenzentrum, zusammen mit vier modularen IoT-Subsystemen — Gefahrgaserkennung, Brandbekämpfung, Zugangssicherheit und Temperaturkontrolle — die auf jeder Etage eingesetzt werden. Die vollständige Topologie (2 Router, 9 Switches, 6 Server, 39 Computer und 44 IoT-Geräte) wurde in Cisco Packet Tracer modelliert und simuliert.",

    physicsSimShort: "GTK4-Simulator für Partikelphysik.",
    physicsSimLong: "Physics Simulator ist eine GTK4-Desktop-Anwendung, die Partikelbewegung in zwei unabhängigen Modi modelliert: kinematisch, bei dem Partikel Bahnen mit konstanter Beschleunigung folgen, und dynamisch, bei dem Newtons zweites Gesetz die Beschleunigung aus konfigurierbaren Kräften und Schwerkraft bei jedem Schritt ableitet. In C mit Cairo für Vektorrendering gebaut, unterstützt sie automatische Zoom- und Partikelverfolgungs-Kameramodi, rendert historische Partikelspuren und kann vollständige Simulationszustände als .sabino-Projektdateien speichern oder laden, mit detailliertem CSV-Export pro Partikel zur weiteren Analyse.",
  },
  ES: {
    // Sidebar
    bio: "Ingeniero Informático y Técnico en Mecánica | Data Science · Inteligencia Artificial | Python · SQL · Java",
    aboutText: "Ingeniero de Software centrado en Data Science e IA. Convierto problemas complejos en soluciones claras, con código, matemáticas y mucha curiosidad.",
    aboutMeBtn: "Sobre mí",
    shareBtn: "Compartir",
    projectsNavLabel: "Proyectos",

    // ProjectsIntro
    projectsHeading: "Proyectos",
    projectsEyebrow: "Portfolio · 2026",
    projectsLead: "Proyectos de Ingeniería Informática desarrollados a lo largo de la carrera en IADE — Universidad Europea: desde robótica autónoma y sistemas embebidos hasta aplicaciones web, móviles y de simulación. Haz clic en un proyecto para ver los detalles.",
    viewProject: "Ver proyecto",

    // ProjectSection
    participantsLabel: "Participantes",
    projectKicker: "Proyecto",
    visitGithub: "Ver en Github",
    profileBtn: "Perfil",

    // AboutMeSection
    aboutHeading: "Sobre mí",
    aboutParagraph1: "Curioso por naturaleza, disfruto resolviendo problemas con datos y código. Fuera del trabajo, reparto mi tiempo entre la fotografía analógica y el desarrollo de videojuegos, siempre optimizando algo. Me apasiona aprender, escribir, viajar y conducir moto. También trabajo en gestión, arte y publicidad, y tengo un empleo a tiempo parcial donde aprendo sobre ropa, materiales y practico mi inglés. Me interesan mucho las técnicas de memorización, los sistemas eléctricos y la mecánica.",
    aboutParagraph2: "Mi enfoque técnico actual se centra en <strong>Data Science e Inteligencia Artificial</strong>, desarrollando soluciones eficientes con ecosistemas como Python, SQL, Java y C#.",
    aboutParagraph3: "Fuera del entorno corporativo y del desarrollo de software comercial, reparto mi tiempo libre entre la precisión serena de la <strong>fotografía analógica de 35 mm</strong>, el proceso creativo del <strong>desarrollo de videojuegos indie</strong> y <strong>el running</strong>, buscando siempre optimizar y refinar cada detalle.",

    focusEducationTitle: "Formación y Base",
    focusEducationDesc: "Técnico en Mecánica e Ingeniería Informática (IADE).",
    focusStackTitle: "Stack Principal",
    focusStackDesc: "Python, SQL, Java, C#, C++ y computación inteligente.",
    focusCreativeTitle: "Intereses Creativos",
    focusCreativeDesc: "Fotografía analógica, Game Dev, running, memorización, sistemas eléctricos y mecánica.",

    // About - Education & Experience
    educationTitle: "Formación Académica",
    educationDegree: "Grado en Ingeniería Informática",
    educationSchool: "IADE — Universidad Europea",
    educationGrade: "Nota media: 16",
    educationDesc: "Grado en Ingeniería Informática con un plan de estudios centrado en resolver problemas reales mediante la tecnología. El programa construye una base teórica sólida en matemáticas y lógica, poniendo el énfasis en el desarrollo práctico de software y hardware. Las asignaturas abarcan tecnologías de vanguardia, desde sistemas distribuidos y bases de datos hasta inteligencia artificial, robótica y prototipado de dispositivos IoT — preparando a los graduados para diseñar y construir infraestructuras tecnológicas robustas y completas.",

    activitiesTitle: "Actividades y Representación",
    activity1: "Delegado del Grado en Ingeniería Informática | IADE (2024–2026): principal enlace entre el alumnado y la administración, defendiendo los intereses de los estudiantes y mejoras académicas.",
    activity2: "Delegado de clase — D1 y D2 | IADE (2023–2026): apoyo a la organización académica y a la comunicación entre compañeros y profesorado.",
    activity3: "Fotografía analógica: práctica de fotografía en película — toma, medición de luz, revelado químico y ampliación en cuarto oscuro.",

    experienceTitle: "Experiencia",
    experienceRole: "Dependiente de Tienda",
    experienceDesc: "Dependiente en una tienda de ropa clásica, atendiendo a clientes en inglés y francés, con especial atención a la comunicación clara, el conocimiento del producto y la asistencia personalizada. Responsable de la organización de la tienda, el control de inventario y de garantizar una experiencia de compra eficiente y acogedora.",

    // Project descriptions
    speedyShort: "Coche de carreras autónomo con visión por computador.",
    speedyLong: "Speedy es un vehículo de carreras autónomo desarrollado para competir en circuitos de forma rápida, segura y totalmente autónoma. Construido como proyecto final del Grado en Ingeniería Informática de IADE - Universidad Europea, el sistema integra visión por computador, inteligencia artificial y sensores para identificar la pista, reconocer obstáculos y adaptar la conducción en tiempo real. Toda la arquitectura se consolidó en una Raspberry Pi 4, haciendo la plataforma más eficiente y reduciendo la latencia entre la percepción del entorno y la actuación del vehículo. Desarrollado sobre ROS 2 Jazzy, Speedy representa la integración de software, electrónica y robótica en una solución completa de navegación autónoma, demostrando la aplicación práctica de algoritmos de control, procesamiento de imagen y toma de decisiones en sistemas embebidos.",

    washBuddyShort: "Robot que gamifica el lavado de manos con RFID.",
    washBuddyLong: "Wash Buddy es un robot interactivo autónomo que guía a los niños a través de una rutina de lavado de manos: tocar juguetes etiquetados con RFID (jabón, esponja, toalla) hace avanzar una máquina de estados estricta — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — con tiempos límite por etapa ajustados a directrices reales, incluyendo un mínimo de 20 segundos de frotado siguiendo las recomendaciones de la OMS/CDC. Un ESP32-WROOM-32 ejecuta un reparto dual-core con FreeRTOS: un núcleo renderiza una cara OLED animada de forma procedural y efectos de partículas a 60 FPS fijos, mientras el otro controla tres gestos basados en servos, lecturas RFID y líneas de voz sincronizadas. Una PCB personalizada separa las capas de potencia y lógica para mantener el ruido de los motores lejos de los buses SPI/I2C, con apagado automático controlado por MOSFET para eliminar el consumo en espera.",

    worldOfToiletsShort: "App Android de aseos públicos con rutas A*.",
    worldOfToiletsLong: "World of Toilets es una aplicación móvil que ayuda a localizar, valorar y sugerir aseos públicos en Lisboa. Construida en Kotlin con Jetpack Compose, filtra resultados por criterios como accesibilidad y cambiadores para bebés, y calcula rutas peatonales optimizadas mediante una búsqueda A* sobre un grafo de OpenStreetMap de 199.000 nodos, con una media de 1,75 s por consulta en pruebas de carga y una tasa de éxito del 100%. El backend ejecuta dos instancias replicadas de la API NestJS y dos front-ends Next.js tras un balanceador de carga NGINX, respaldado por un clúster MariaDB Galera de tres nodos en replicación multimaestro síncrona, con autenticación JWT, control de acceso basado en roles y credenciales cifradas con bcrypt.",

    capoShort: "Gestión de planta de producción en tiempo real.",
    capoLong: "CAPO (Computer Aided Process Overview) digitaliza la planta de producción de tuberías metálicas, modelando el trabajo en una jerarquía Proyecto → Isométrico → Spool → Junta → Pieza a lo largo de tres etapas secuenciales: corte, montaje y soldadura. Construido con NestJS 11 usando CQRS y un modelo de dominio rico, cada transición de estado se registra como un evento inmutable, y los traspasos entre etapas se derivan — nunca se almacenan — del estado de las propias piezas, de modo que el pipeline nunca puede desincronizarse. Los eventos de dominio se propagan mediante Socket.IO, así completar una etapa abre al instante la siguiente para su operario sin recargar la página. El front-end es Next.js 16 con React Server Components, ejecutándose tras un proxy inverso NGINX como monorepo Bun-workspace.",

    angryDuckShort: "Red y sistemas IoT en un edificio de 6 plantas.",
    angryDuckLong: "Angry Duck es un proyecto de diseño de infraestructura de red para la sede de seis plantas y el edificio secundario de una empresa avícola ficticia, realizado para la asignatura de Redes y Comunicaciones de Datos. El plan abarca cableado estructurado, un backbone doble, puntos de acceso Wi-Fi por planta y un centro de datos centralizado, junto con cuatro subsistemas IoT modulares — detección de gases peligrosos, extinción de incendios, seguridad de acceso y control de temperatura — desplegados en cada planta. La topología completa (2 routers, 9 switches, 6 servidores, 39 ordenadores y 44 dispositivos IoT) se modeló y simuló en Cisco Packet Tracer.",

    physicsSimShort: "Simulador de física de partículas en GTK4.",
    physicsSimLong: "Physics Simulator es una aplicación de escritorio GTK4 que modela el movimiento de partículas en dos modos independientes: cinemático, donde las partículas siguen trayectorias de aceleración constante, y dinámico, donde la segunda ley de Newton deriva la aceleración a partir de fuerzas configurables y la gravedad en cada paso. Construida en C con Cairo para el renderizado vectorial, admite modos de cámara con zoom automático y seguimiento de partículas, dibuja las estelas históricas de las partículas y permite guardar o cargar estados completos de simulación como archivos de proyecto .sabino, con exportación CSV detallada por partícula para análisis posterior.",
  },
  IT: {
    // Sidebar
    bio: "Ingegnere Informatico e Tecnico Meccanico | Data Science · Intelligenza Artificiale | Python · SQL · Java",
    aboutText: "Ingegnere del Software specializzato in Data Science e IA. Trasformo problemi complessi in soluzioni chiare, con codice, matematica e tanta curiosità.",
    aboutMeBtn: "Chi sono",
    shareBtn: "Condividi",
    projectsNavLabel: "Progetti",

    // ProjectsIntro
    projectsHeading: "Progetti",
    projectsEyebrow: "Portfolio · 2026",
    projectsLead: "Progetti di Ingegneria Informatica sviluppati durante la laurea allo IADE — Università Europea: dalla robotica autonoma e dai sistemi embedded alle applicazioni web, mobile e di simulazione. Clicca su un progetto per vederne i dettagli.",
    viewProject: "Vedi progetto",

    // ProjectSection
    participantsLabel: "Partecipanti",
    projectKicker: "Progetto",
    visitGithub: "Vedi su Github",
    profileBtn: "Profilo",

    // AboutMeSection
    aboutHeading: "Chi sono",
    aboutParagraph1: "Curioso per natura, mi piace risolvere problemi con dati e codice. Fuori dal lavoro divido il mio tempo tra fotografia analogica e sviluppo di videogiochi, sempre a ottimizzare qualcosa. Ho una forte passione per l'apprendimento, la scrittura, i viaggi e la moto. Lavoro anche nella gestione, nell'arte e nella pubblicità, e ho un impiego part-time dove imparo a conoscere tessuti, materiali e faccio pratica con l'inglese. Mi interessano molto le tecniche di memorizzazione, i sistemi elettrici e la meccanica.",
    aboutParagraph2: "Il mio focus tecnico attuale è su <strong>Data Science e Intelligenza Artificiale</strong>, sviluppando soluzioni efficienti con ecosistemi come Python, SQL, Java e C#.",
    aboutParagraph3: "Fuori dall'ambiente aziendale e dallo sviluppo software commerciale, divido il mio tempo libero tra la precisione silenziosa della <strong>fotografia analogica 35mm</strong>, il processo creativo dello <strong>sviluppo di videogiochi indie</strong> e <strong>la corsa</strong>, cercando sempre di ottimizzare e rifinire ogni dettaglio.",

    focusEducationTitle: "Formazione e Basi",
    focusEducationDesc: "Tecnico Meccanico e Ingegneria Informatica (IADE).",
    focusStackTitle: "Stack Principale",
    focusStackDesc: "Python, SQL, Java, C#, C++ e computazione intelligente.",
    focusCreativeTitle: "Interessi Creativi",
    focusCreativeDesc: "Fotografia analogica, Game Dev, corsa, memorizzazione, sistemi elettrici e meccanica.",

    // About - Education & Experience
    educationTitle: "Formazione Accademica",
    educationDegree: "Laurea in Ingegneria Informatica",
    educationSchool: "IADE — Università Europea",
    educationGrade: "Media: 16",
    educationDesc: "Laurea in Ingegneria Informatica con un percorso incentrato sulla risoluzione di problemi reali attraverso la tecnologia. Il programma costruisce solide basi teoriche in matematica e logica, dando allo stesso tempo grande importanza allo sviluppo pratico di software e hardware. Le materie spaziano su tecnologie all'avanguardia, dai sistemi distribuiti e dai database fino all'intelligenza artificiale, alla robotica e alla prototipazione di dispositivi IoT — preparando i laureati a progettare e costruire infrastrutture tecnologiche robuste e complete.",

    activitiesTitle: "Attività e Rappresentanza",
    activity1: "Rappresentante del corso di Ingegneria Informatica | IADE (2024–2026): principale collegamento tra studenti e amministrazione, a tutela degli interessi degli studenti e dei miglioramenti accademici.",
    activity2: "Rappresentante di classe — D1 e D2 | IADE (2023–2026): supporto all'organizzazione accademica e alla comunicazione tra colleghi e docenti.",
    activity3: "Fotografia analogica: pratica della fotografia su pellicola — scatto, misurazione della luce, sviluppo chimico e ingrandimento in camera oscura.",

    experienceTitle: "Esperienza",
    experienceRole: "Addetto alle Vendite",
    experienceDesc: "Addetto alle vendite in un negozio di abbigliamento classico, con assistenza ai clienti in inglese e francese e forte attenzione alla comunicazione chiara, alla conoscenza del prodotto e all'assistenza personalizzata. Responsabile dell'organizzazione del negozio, del controllo dell'inventario e di garantire un'esperienza d'acquisto efficiente e accogliente.",

    // Project descriptions
    speedyShort: "Auto da corsa autonoma con visione artificiale.",
    speedyLong: "Speedy è un veicolo da corsa autonomo sviluppato per gareggiare in pista in modo veloce, sicuro e completamente autonomo. Realizzato come progetto finale della Laurea in Ingegneria Informatica dello IADE - Università Europea, il sistema integra visione artificiale, intelligenza artificiale e sensori per identificare la pista, riconoscere gli ostacoli e adattare la guida in tempo reale. L'intera architettura è stata consolidata su un Raspberry Pi 4, rendendo la piattaforma più efficiente e riducendo la latenza tra la percezione dell'ambiente e l'azione del veicolo. Sviluppato su ROS 2 Jazzy, Speedy rappresenta l'integrazione di software, elettronica e robotica in una soluzione completa per la navigazione autonoma, dimostrando l'applicazione pratica di algoritmi di controllo, elaborazione delle immagini e processo decisionale nei sistemi embedded.",

    washBuddyShort: "Robot che rende il lavaggio delle mani un gioco con RFID.",
    washBuddyLong: "Wash Buddy è un robot interattivo autonomo che guida i bambini attraverso una routine di lavaggio delle mani: toccare giocattoli con tag RFID (sapone, spugna, asciugamano) fa avanzare una macchina a stati rigorosa — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — con timeout per fase calibrati su linee guida reali, incluso un minimo di 20 secondi di sfregamento secondo le raccomandazioni OMS/CDC. Un ESP32-WROOM-32 esegue una suddivisione dual-core con FreeRTOS: un core disegna un volto OLED animato proceduralmente ed effetti particellari a 60 FPS fissi, mentre l'altro gestisce tre gesti basati su servomotori, letture RFID e battute vocali sincronizzate. Un PCB personalizzato separa i livelli di alimentazione e logica per tenere il rumore dei motori lontano dai bus SPI/I2C, con spegnimento automatico gestito da MOSFET per azzerare il consumo in standby.",

    worldOfToiletsShort: "App Android per bagni pubblici con percorsi A*.",
    worldOfToiletsLong: "World of Toilets è un'app mobile che aiuta a individuare, valutare e segnalare bagni pubblici a Lisbona. Sviluppata in Kotlin con Jetpack Compose, filtra i risultati secondo criteri come l'accessibilità e la presenza di fasciatoi, e calcola percorsi pedonali ottimizzati con una ricerca A* su un grafo OpenStreetMap di 199.000 nodi, con una media di 1,75 s per query nei test di carico e un tasso di successo del 100%. Il backend esegue due istanze replicate dell'API NestJS e due front-end Next.js dietro un bilanciatore di carico NGINX, supportato da un cluster MariaDB Galera a tre nodi in replica multi-master sincrona, con autenticazione JWT, controllo degli accessi basato sui ruoli e credenziali cifrate con bcrypt.",

    capoShort: "Gestione in tempo reale del reparto produzione.",
    capoLong: "CAPO (Computer Aided Process Overview) digitalizza il reparto produttivo di una fabbrica di tubazioni metalliche, modellando il lavoro in una gerarchia Progetto → Isometrico → Spool → Giunto → Pezzo attraverso tre fasi sequenziali: taglio, assemblaggio e saldatura. Costruito con NestJS 11 usando CQRS e un modello di dominio ricco, ogni transizione di stato è registrata come evento immutabile, e i passaggi di fase sono derivati — mai memorizzati — dallo stato dei pezzi stessi, così che la pipeline non possa mai perdere la sincronia. Gli eventi di dominio si propagano tramite Socket.IO, quindi completare una fase apre immediatamente la successiva per il suo operatore senza ricaricare la pagina. Il front-end è Next.js 16 con React Server Components, eseguito dietro un reverse proxy NGINX come monorepo Bun-workspace.",

    angryDuckShort: "Rete e sistemi IoT per un edificio di 6 piani.",
    angryDuckLong: "Angry Duck è un progetto di design dell'infrastruttura di rete per la sede di sei piani e l'edificio secondario di un'azienda avicola fittizia, realizzato per il corso di Reti e Comunicazione Dati. Il piano comprende cablaggio strutturato, un doppio backbone, punti di accesso Wi-Fi per piano e un datacenter centralizzato, insieme a quattro sottosistemi IoT modulari — rilevamento di gas pericolosi, spegnimento incendi, sicurezza degli accessi e controllo della temperatura — installati su ogni piano. La topologia completa (2 router, 9 switch, 6 server, 39 computer e 44 dispositivi IoT) è stata modellata e simulata in Cisco Packet Tracer.",

    physicsSimShort: "Simulatore di fisica delle particelle in GTK4.",
    physicsSimLong: "Physics Simulator è un'applicazione desktop GTK4 che modella il moto delle particelle in due modalità indipendenti: cinematica, dove le particelle seguono traiettorie ad accelerazione costante, e dinamica, dove la seconda legge di Newton ricava l'accelerazione da forze configurabili e dalla gravità a ogni passo. Sviluppata in C con Cairo per il rendering vettoriale, supporta modalità di camera con zoom automatico e inseguimento delle particelle, disegna le scie storiche delle particelle e permette di salvare o caricare stati di simulazione completi come file di progetto .sabino, con esportazione CSV dettagliata per particella per analisi successive.",
  },
  RU: {
    // Sidebar
    bio: "Инженер-программист и техник-механик | Data Science · Искусственный интеллект | Python · SQL · Java",
    aboutText: "Инженер-программист, специализирующийся на Data Science и ИИ. Превращаю сложные задачи в понятные решения — с помощью кода, математики и большого любопытства.",
    aboutMeBtn: "Обо мне",
    shareBtn: "Поделиться",
    projectsNavLabel: "Проекты",

    // ProjectsIntro
    projectsHeading: "Проекты",
    projectsEyebrow: "Портфолио · 2026",
    projectsLead: "Проекты по компьютерной инженерии, созданные за годы обучения в IADE — Европейском университете: от автономной робототехники и встраиваемых систем до веб-, мобильных и симуляционных приложений. Нажмите на проект, чтобы посмотреть подробности.",
    viewProject: "Смотреть проект",

    // ProjectSection
    participantsLabel: "Участники",
    projectKicker: "Проект",
    visitGithub: "Открыть на Github",
    profileBtn: "Профиль",

    // AboutMeSection
    aboutHeading: "Обо мне",
    aboutParagraph1: "Любопытный по натуре, я люблю решать задачи с помощью данных и кода. Вне работы я делю время между аналоговой фотографией и разработкой игр, постоянно что-то оптимизируя. У меня сильная страсть к обучению, письму, путешествиям и мотоциклам. Я также работаю в сфере менеджмента, искусства и рекламы, и у меня есть подработка, где я узнаю о тканях, материалах и практикую английский. Мне очень интересны техники запоминания, электрические системы и механика.",
    aboutParagraph2: "Мой текущий технический фокус — <strong>Data Science и искусственный интеллект</strong>: я разрабатываю эффективные решения на экосистемах вроде Python, SQL, Java и C#.",
    aboutParagraph3: "Вне корпоративной среды и коммерческой разработки я делю свободное время между спокойной точностью <strong>аналоговой 35-мм фотографии</strong>, творческим процессом <strong>инди-разработки игр</strong> и <strong>бегом</strong>, всегда стремясь оптимизировать и отточить каждую деталь.",

    focusEducationTitle: "Образование и база",
    focusEducationDesc: "Техник-механик и компьютерная инженерия (IADE).",
    focusStackTitle: "Основной стек",
    focusStackDesc: "Python, SQL, Java, C#, C++ и интеллектуальные вычисления.",
    focusCreativeTitle: "Творческие интересы",
    focusCreativeDesc: "Аналоговая фотография, геймдев, бег, мнемотехника, электрические системы и механика.",

    // About - Education & Experience
    educationTitle: "Академическое образование",
    educationDegree: "Бакалавр компьютерной инженерии",
    educationSchool: "IADE — Европейский университет",
    educationGrade: "Средний балл: 16",
    educationDesc: "Степень бакалавра компьютерной инженерии с учебной программой, ориентированной на решение реальных задач с помощью технологий. Программа выстраивает прочную теоретическую основу в математике и логике, одновременно делая упор на практическую разработку программного и аппаратного обеспечения. Курсы охватывают передовые технологии — от распределённых систем и баз данных до искусственного интеллекта, робототехники и прототипирования IoT-устройств, готовя выпускников проектировать и создавать надёжные, полноценные технологические инфраструктуры.",

    activitiesTitle: "Деятельность и представительство",
    activity1: "Представитель направления «Компьютерная инженерия» | IADE (2024–2026): основное связующее звено между студентами и администрацией, защита интересов студентов и продвижение академических улучшений.",
    activity2: "Староста группы — D1 и D2 | IADE (2023–2026): поддержка академической организации и коммуникации между однокурсниками и преподавателями.",
    activity3: "Аналоговая фотография: практика плёночной съёмки — кадрирование, замер света, химическая проявка и печать в фотолаборатории.",

    experienceTitle: "Опыт работы",
    experienceRole: "Продавец-консультант",
    experienceDesc: "Продавец-консультант в магазине классической одежды: обслуживание клиентов на английском и французском языках с упором на понятную коммуникацию, знание товара и индивидуальный подход. Отвечал за порядок в магазине, контроль складских запасов и создание удобного и приветливого опыта покупок.",

    // Project descriptions
    speedyShort: "Автономный гоночный автомобиль с компьютерным зрением.",
    speedyLong: "Speedy — автономный гоночный автомобиль, созданный для быстрого, безопасного и полностью автономного прохождения трассы. Разработанный как дипломный проект бакалавриата по компьютерной инженерии в IADE — Европейском университете, он объединяет компьютерное зрение, искусственный интеллект и датчики, чтобы распознавать трассу, замечать препятствия и адаптировать управление в реальном времени. Вся архитектура была объединена на Raspberry Pi 4, что сделало платформу эффективнее и снизило задержку между восприятием обстановки и действиями автомобиля. Построенный на ROS 2 Jazzy, Speedy демонстрирует интеграцию программного обеспечения, электроники и робототехники в законченное решение для автономной навигации, показывая практическое применение алгоритмов управления, обработки изображений и принятия решений во встраиваемых системах.",

    washBuddyShort: "Робот, превращающий мытьё рук в игру с помощью RFID.",
    washBuddyLong: "Wash Buddy — автономный интерактивный робот, который проводит детей через процедуру мытья рук: прикосновение к игрушкам с RFID-метками (мыло, губка, полотенце) продвигает строгий конечный автомат — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — с таймаутами на каждом шаге, настроенными по реальным рекомендациям, включая минимум 20 секунд намыливания согласно рекомендациям ВОЗ/CDC. ESP32-WROOM-32 выполняет двухъядерное разделение на FreeRTOS: одно ядро отрисовывает процедурно анимированное OLED-лицо и эффекты частиц со стабильными 60 FPS, а другое управляет тремя жестами на сервоприводах, чтением RFID и синхронизированными голосовыми репликами. Заказная печатная плата разделяет силовой и логический слои, чтобы шум двигателей не попадал на шины SPI/I2C, а автоотключение через MOSFET убирает потребление в режиме ожидания.",

    worldOfToiletsShort: "Android-приложение для туалетов с маршрутами A*.",
    worldOfToiletsLong: "World of Toilets — мобильное приложение, помогающее находить, оценивать и предлагать общественные туалеты в Лиссабоне. Написанное на Kotlin с Jetpack Compose, оно фильтрует результаты по таким критериям, как доступность и наличие пеленальных столиков, и строит оптимальные пешеходные маршруты поиском A* по графу OpenStreetMap из 199 000 узлов — в среднем 1,75 с на запрос при нагрузочном тестировании со 100% успешных ответов. Бэкенд поднимает две реплики API на NestJS и два фронтенда на Next.js за балансировщиком NGINX, опираясь на кластер MariaDB Galera из трёх узлов в синхронной multi-master репликации, с JWT-аутентификацией, ролевой моделью доступа и паролями, хешированными bcrypt.",

    capoShort: "Управление цехом в реальном времени.",
    capoLong: "CAPO (Computer Aided Process Overview) оцифровывает производственный цех завода металлических трубопроводов, моделируя работу в иерархии Проект → Изометрия → Катушка → Стык → Деталь через три последовательных этапа: резка, сборка и сварка. Построенный на NestJS 11 с использованием CQRS и богатой доменной модели, каждый переход состояния фиксируется как неизменяемое событие, а передачи между этапами выводятся — и никогда не хранятся — из состояния самих деталей, поэтому конвейер не может рассинхронизироваться. Доменные события расходятся через Socket.IO, так что завершение этапа мгновенно открывает следующий для его оператора без перезагрузки страницы. Фронтенд — Next.js 16 с React Server Components, работающий за обратным прокси NGINX в виде монорепозитория на Bun-workspace.",

    angryDuckShort: "Сеть и IoT-системы в шестиэтажном здании.",
    angryDuckLong: "Angry Duck — проект сетевой инфраструктуры для шестиэтажной штаб-квартиры и вспомогательного здания вымышленной птицеводческой компании, выполненный для курса «Сети и передача данных». План охватывает структурированную кабельную систему, двойную магистраль, точки доступа Wi-Fi на каждом этаже и централизованный дата-центр, а также четыре модульные IoT-подсистемы — обнаружение опасных газов, пожаротушение, контроль доступа и управление температурой — развёрнутые на каждом этаже. Полная топология (2 маршрутизатора, 9 коммутаторов, 6 серверов, 39 компьютеров и 44 IoT-устройства) была смоделирована и отработана в Cisco Packet Tracer.",

    physicsSimShort: "Симулятор физики частиц на GTK4.",
    physicsSimLong: "Physics Simulator — настольное приложение на GTK4, моделирующее движение частиц в двух независимых режимах: кинематическом, где частицы движутся по траекториям с постоянным ускорением, и динамическом, где второй закон Ньютона выводит ускорение из настраиваемых сил и гравитации на каждом шаге. Написанное на C с Cairo для векторной отрисовки, оно поддерживает режимы камеры с автомасштабированием и слежением за частицей, рисует исторические следы частиц и умеет сохранять и загружать полные состояния симуляции в виде файлов проекта .sabino, с подробным экспортом в CSV по каждой частице для дальнейшего анализа.",
  },
  TR: {
    // Sidebar
    bio: "Bilgisayar Mühendisi ve Makine Teknisyeni | Veri Bilimi · Yapay Zekâ | Python · SQL · Java",
    aboutText: "Veri Bilimi ve yapay zekâya odaklanan bir yazılım mühendisiyim. Karmaşık problemleri kod, matematik ve bolca merakla net çözümlere dönüştürüyorum.",
    aboutMeBtn: "Hakkımda",
    shareBtn: "Paylaş",
    projectsNavLabel: "Projeler",

    // ProjectsIntro
    projectsHeading: "Projeler",
    projectsEyebrow: "Portfolyo · 2026",
    projectsLead: "IADE — Avrupa Üniversitesi'ndeki lisans eğitimim boyunca geliştirdiğim Bilgisayar Mühendisliği projeleri: otonom robotik ve gömülü sistemlerden web, mobil ve simülasyon uygulamalarına. Ayrıntıları görmek için bir projeye tıklayın.",
    viewProject: "Projeyi gör",

    // ProjectSection
    participantsLabel: "Katılımcılar",
    projectKicker: "Proje",
    visitGithub: "Github'da gör",
    profileBtn: "Profil",

    // AboutMeSection
    aboutHeading: "Hakkımda",
    aboutParagraph1: "Doğası gereği meraklı biriyim; problemleri veri ve kodla çözmekten keyif alıyorum. İş dışında zamanımı analog fotoğrafçılık ile oyun geliştirme arasında bölüyorum ve sürekli bir şeyleri optimize ediyorum. Öğrenmeye, yazmaya, seyahat etmeye ve motosiklet sürmeye karşı güçlü bir tutkum var. Ayrıca yönetim, sanat ve reklam alanlarında çalışıyorum; kumaşlar ve malzemeler hakkında bilgi edindiğim ve İngilizcemi geliştirdiğim yarı zamanlı bir işim var. Ezberleme teknikleri, elektrik sistemleri ve mekaniğe de büyük ilgi duyuyorum.",
    aboutParagraph2: "Şu anki teknik odağım <strong>Veri Bilimi ve Yapay Zekâ</strong>: Python, SQL, Java ve C# gibi ekosistemlerle verimli çözümler geliştiriyorum.",
    aboutParagraph3: "Kurumsal ortamın ve ticari yazılım geliştirmenin dışında, boş zamanımı <strong>35 mm analog fotoğrafçılığın</strong> sakin hassasiyeti, <strong>bağımsız oyun geliştirmenin</strong> yaratıcı süreci ve <strong>koşu</strong> arasında bölüyorum; her ayrıntıyı optimize etmeye ve incelikle işlemeye çalışıyorum.",

    focusEducationTitle: "Eğitim ve Temel",
    focusEducationDesc: "Makine Teknisyeni ve Bilgisayar Mühendisliği (IADE).",
    focusStackTitle: "Ana Teknoloji Yığını",
    focusStackDesc: "Python, SQL, Java, C#, C++ ve akıllı hesaplama.",
    focusCreativeTitle: "Yaratıcı İlgi Alanları",
    focusCreativeDesc: "Analog fotoğrafçılık, oyun geliştirme, koşu, ezberleme teknikleri, elektrik sistemleri ve mekanik.",

    // About - Education & Experience
    educationTitle: "Akademik Eğitim",
    educationDegree: "Bilgisayar Mühendisliği Lisans Derecesi",
    educationSchool: "IADE — Avrupa Üniversitesi",
    educationGrade: "Not ortalaması: 16",
    educationDesc: "Gerçek dünya problemlerini teknolojiyle çözmeye odaklanan bir müfredata sahip Bilgisayar Mühendisliği lisans programı. Program, matematik ve mantıkta sağlam bir teorik temel kurarken uygulamalı yazılım ve donanım geliştirmeye ağırlık veriyor. Dersler, dağıtık sistemler ve veritabanlarından yapay zekâ, robotik ve IoT cihaz prototiplemeye kadar güncel teknolojileri kapsıyor — mezunları sağlam ve uçtan uca teknolojik altyapılar tasarlayıp kurmaya hazırlıyor.",

    activitiesTitle: "Faaliyetler ve Temsil",
    activity1: "Bilgisayar Mühendisliği Bölüm Temsilcisi | IADE (2024–2026): öğrenciler ile yönetim arasındaki başlıca bağlantı; öğrenci haklarını ve akademik iyileştirmeleri savundum.",
    activity2: "Sınıf Temsilcisi — D1 ve D2 | IADE (2023–2026): akademik organizasyona ve öğrenciler ile öğretim üyeleri arasındaki iletişime destek verdim.",
    activity3: "Analog Fotoğrafçılık: film fotoğrafçılığı pratiği — çekim, ışık ölçümü, kimyasal banyo ve karanlık odada baskı.",

    experienceTitle: "Deneyim",
    experienceRole: "Satış Danışmanı",
    experienceDesc: "Klasik giyim mağazasında satış danışmanı: İngilizce ve Fransızca müşteri hizmeti, net iletişim, ürün bilgisi ve kişiselleştirilmiş desteğe güçlü odaklanma. Mağaza düzeninden, stok kontrolünden ve verimli, samimi bir alışveriş deneyimi sağlamaktan sorumluydum.",

    // Project descriptions
    speedyShort: "Bilgisayarlı görüyle çalışan otonom yarış aracı.",
    speedyLong: "Speedy, pistlerde hızlı, güvenli ve tamamen otonom şekilde yarışmak için geliştirilmiş otonom bir yarış aracıdır. IADE — Avrupa Üniversitesi Bilgisayar Mühendisliği lisans bitirme projesi olarak inşa edilen sistem; pisti tanımak, engelleri fark etmek ve sürüşü gerçek zamanlı uyarlamak için bilgisayarlı görüyü, yapay zekâyı ve sensörleri bir araya getiriyor. Tüm mimari tek bir Raspberry Pi 4 üzerinde toplandı; bu, platformu daha verimli kıldı ve çevre algısı ile araç tepkisi arasındaki gecikmeyi azalttı. ROS 2 Jazzy üzerine kurulan Speedy; yazılım, elektronik ve robotiğin otonom navigasyon için eksiksiz bir çözümde birleşmesini temsil ediyor ve kontrol algoritmalarının, görüntü işlemenin ve karar vermenin gömülü sistemlerdeki pratik uygulamasını gösteriyor.",

    washBuddyShort: "El yıkamayı RFID ile oyunlaştıran robot.",
    washBuddyLong: "Wash Buddy, çocuklara el yıkama rutininde eşlik eden otonom ve etkileşimli bir robottur: RFID etiketli oyuncaklara (sabun, sünger, havlu) dokunmak katı bir durum makinesini ilerletir — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — her adımın zaman aşımı gerçek kılavuzlara göre ayarlanmıştır; buna DSÖ/CDC el yıkama önerileri doğrultusunda en az 20 saniyelik ovma süresi de dahildir. Bir ESP32-WROOM-32, FreeRTOS ile çift çekirdekli bir ayrım yürütür: bir çekirdek prosedürel olarak canlandırılan OLED yüzü ve parçacık efektlerini sabit 60 FPS'te çizerken, diğeri servo tabanlı üç hareketi, RFID okumalarını ve senkronize ses replikelerini yönetir. Özel tasarım bir PCB, motor gürültüsünü SPI/I2C hatlarından uzak tutmak için güç ve mantık katmanlarını ayırır; MOSFET denetimli otomatik kapanma ise bekleme tüketimini ortadan kaldırır.",

    worldOfToiletsShort: "A* rotalı genel tuvalet bulma Android uygulaması.",
    worldOfToiletsLong: "World of Toilets, Lizbon'daki genel tuvaletleri bulmaya, puanlamaya ve önermeye yarayan bir mobil uygulamadır. Kotlin ve Jetpack Compose ile geliştirilen uygulama, sonuçları erişilebilirlik ve bebek bakım masası gibi ölçütlere göre filtreler ve 199.000 düğümlük bir OpenStreetMap grafiği üzerinde A* aramasıyla en uygun yaya rotalarını hesaplar; yük testlerinde sorgu başına ortalama 1,75 sn ve %100 başarı oranı elde edilmiştir. Arka uçta, NGINX yük dengeleyicinin arkasında iki kopya NestJS API örneği ile iki Next.js ön yüzü çalışır; bunları senkron çoklu-ana (multi-master) replikasyonlu üç düğümlü bir MariaDB Galera kümesi destekler. Kimlik doğrulama JWT ile, yetkilendirme rol tabanlı erişim denetimiyle yapılır ve parolalar bcrypt ile özetlenir.",

    capoShort: "Üretim sahasının gerçek zamanlı takibi.",
    capoLong: "CAPO (Computer Aided Process Overview), metal boru hattı fabrikasının üretim sahasını dijitalleştirir ve işi Proje → İzometrik → Spool → Ek Yeri → Parça hiyerarşisinde, birbirini izleyen üç aşamada modeller: kesme, montaj ve kaynak. CQRS ve zengin bir alan modeliyle NestJS 11 üzerine kurulan sistemde her durum geçişi değiştirilemez bir olay olarak kaydedilir; aşamalar arası devir ise parçaların kendi durumlarından türetilir — asla saklanmaz — böylece süreç akışı hiçbir zaman senkronizasyonunu kaybedemez. Alan olayları Socket.IO üzerinden yayılır, dolayısıyla bir aşamanın tamamlanması sayfa yenilenmeden bir sonrakini operatörüne anında açar. Ön yüz, React Server Components kullanan Next.js 16'dır ve bir NGINX ters vekil sunucusunun arkasında Bun-workspace monorepo olarak çalışır.",

    angryDuckShort: "6 katlı bir binada ağ ve IoT sistemleri.",
    angryDuckLong: "Angry Duck, kurgusal bir kanatlı eti şirketinin altı katlı genel merkezi ve ikincil binası için hazırlanmış bir ağ altyapısı tasarım projesidir; Ağlar ve Veri İletişimi dersi kapsamında yapılmıştır. Plan; yapısal kablolamayı, çift omurgayı, her kattaki Wi-Fi erişim noktalarını ve merkezî bir veri merkezini kapsar. Buna ek olarak her kata dört modüler IoT alt sistemi yerleştirilmiştir: tehlikeli gaz algılama, yangın söndürme, giriş güvenliği ve sıcaklık kontrolü. Topolojinin tamamı (2 yönlendirici, 9 anahtar, 6 sunucu, 39 bilgisayar ve 44 IoT cihazı) Cisco Packet Tracer'da modellenmiş ve simüle edilmiştir.",

    physicsSimShort: "GTK4 tabanlı parçacık fiziği simülatörü.",
    physicsSimLong: "Physics Simulator, parçacık hareketini birbirinden bağımsız iki kipte modelleyen bir GTK4 masaüstü uygulamasıdır: kinematik kipte parçacıklar sabit ivmeli yörüngeler izler; dinamik kipte ise Newton'un ikinci yasası, her adımda yapılandırılabilir kuvvetlerden ve yerçekiminden ivmeyi türetir. Vektörel çizim için Cairo kullanılarak C dilinde yazılmıştır; otomatik yakınlaştırma ve parçacık takibi kamera kiplerini destekler, parçacıkların geçmiş izlerini çizer ve simülasyon durumlarının tamamını .sabino proje dosyaları olarak kaydedip yükleyebilir. Ayrıntılı analiz için parçacık bazında CSV dışa aktarımı sunar.",
  },
  UK: {
    // Sidebar
    bio: "Інженер-програміст і технік-механік | Data Science · Штучний інтелект | Python · SQL · Java",
    aboutText: "Інженер-програміст, зосереджений на Data Science та ШІ. Перетворюю складні задачі на зрозумілі рішення — за допомогою коду, математики й великої цікавості.",
    aboutMeBtn: "Про мене",
    shareBtn: "Поділитися",
    projectsNavLabel: "Проєкти",

    // ProjectsIntro
    projectsHeading: "Проєкти",
    projectsEyebrow: "Портфоліо · 2026",
    projectsLead: "Проєкти з комп'ютерної інженерії, створені протягом навчання в IADE — Європейському університеті: від автономної робототехніки та вбудованих систем до вебзастосунків, мобільних програм і симуляцій. Натисніть на проєкт, щоб побачити подробиці.",
    viewProject: "Переглянути проєкт",

    // ProjectSection
    participantsLabel: "Учасники",
    projectKicker: "Проєкт",
    visitGithub: "Відкрити на Github",
    profileBtn: "Профіль",

    // AboutMeSection
    aboutHeading: "Про мене",
    aboutParagraph1: "Допитливий за вдачею, я люблю розв'язувати задачі за допомогою даних і коду. Поза роботою ділю час між аналоговою фотографією та розробкою ігор, постійно щось оптимізуючи. Маю велику пристрасть до навчання, письма, подорожей і мотоциклів. Також працюю у сфері менеджменту, мистецтва та реклами, і маю підробіток, де дізнаюся про тканини й матеріали та практикую англійську. Мене дуже цікавлять техніки запам'ятовування, електричні системи та механіка.",
    aboutParagraph2: "Мій нинішній технічний фокус — <strong>Data Science та штучний інтелект</strong>: розробляю ефективні рішення на екосистемах як-от Python, SQL, Java та C#.",
    aboutParagraph3: "Поза корпоративним середовищем і комерційною розробкою я ділю вільний час між спокійною точністю <strong>аналогової 35-мм фотографії</strong>, творчим процесом <strong>інді-розробки ігор</strong> та <strong>бігом</strong>, завжди прагнучи оптимізувати й відточити кожну деталь.",

    focusEducationTitle: "Освіта та база",
    focusEducationDesc: "Технік-механік і комп'ютерна інженерія (IADE).",
    focusStackTitle: "Основний стек",
    focusStackDesc: "Python, SQL, Java, C#, C++ та інтелектуальні обчислення.",
    focusCreativeTitle: "Творчі інтереси",
    focusCreativeDesc: "Аналогова фотографія, геймдев, біг, мнемотехніка, електричні системи та механіка.",

    // About - Education & Experience
    educationTitle: "Академічна освіта",
    educationDegree: "Бакалавр комп'ютерної інженерії",
    educationSchool: "IADE — Європейський університет",
    educationGrade: "Середній бал: 16",
    educationDesc: "Ступінь бакалавра з комп'ютерної інженерії з навчальною програмою, зорієнтованою на розв'язання реальних задач за допомогою технологій. Програма закладає міцний теоретичний фундамент у математиці та логіці, водночас наголошуючи на практичній розробці програмного й апаратного забезпечення. Курси охоплюють передові технології — від розподілених систем і баз даних до штучного інтелекту, робототехніки та прототипування IoT-пристроїв, готуючи випускників проєктувати й будувати надійні, наскрізні технологічні інфраструктури.",

    activitiesTitle: "Діяльність і представництво",
    activity1: "Представник спеціальності «Комп'ютерна інженерія» | IADE (2024–2026): основна ланка між студентами та адміністрацією, обстоювання інтересів студентів і академічних покращень.",
    activity2: "Староста групи — D1 і D2 | IADE (2023–2026): підтримка академічної організації та комунікації між одногрупниками й викладачами.",
    activity3: "Аналогова фотографія: практика плівкової зйомки — кадрування, вимірювання світла, хімічне проявлення та друк у фотолабораторії.",

    experienceTitle: "Досвід роботи",
    experienceRole: "Продавець-консультант",
    experienceDesc: "Продавець-консультант у магазині класичного одягу: обслуговування клієнтів англійською та французькою з акцентом на чітку комунікацію, знання товару та індивідуальний підхід. Відповідав за лад у магазині, контроль складських запасів і забезпечення зручного та привітного досвіду покупок.",

    // Project descriptions
    speedyShort: "Автономний гоночний автомобіль із комп'ютерним зором.",
    speedyLong: "Speedy — автономний гоночний автомобіль, створений для швидкого, безпечного й цілком автономного проходження траси. Розроблений як дипломний проєкт бакалаврату з комп'ютерної інженерії в IADE — Європейському університеті, він поєднує комп'ютерний зір, штучний інтелект і датчики, щоб розпізнавати трасу, помічати перешкоди й адаптувати керування в реальному часі. Усю архітектуру було зведено на Raspberry Pi 4, що зробило платформу ефективнішою та зменшило затримку між сприйняттям середовища й діями автомобіля. Побудований на ROS 2 Jazzy, Speedy демонструє інтеграцію програмного забезпечення, електроніки та робототехніки в завершене рішення для автономної навігації, показуючи практичне застосування алгоритмів керування, обробки зображень і ухвалення рішень у вбудованих системах.",

    washBuddyShort: "Робот, що перетворює миття рук на гру за допомогою RFID.",
    washBuddyLong: "Wash Buddy — автономний інтерактивний робот, який проводить дітей через процедуру миття рук: дотик до іграшок із RFID-мітками (мило, губка, рушник) просуває строгий скінченний автомат — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — із таймаутами на кожному кроці, налаштованими за реальними рекомендаціями, включно з мінімумом у 20 секунд намилювання згідно з рекомендаціями ВООЗ/CDC. ESP32-WROOM-32 виконує дворядерний поділ на FreeRTOS: одне ядро малює процедурно анімоване OLED-обличчя та ефекти частинок зі стабільними 60 FPS, а інше керує трьома жестами на сервоприводах, зчитуванням RFID і синхронізованими голосовими репліками. Замовна друкована плата розділяє силовий і логічний шари, щоб шум двигунів не потрапляв на шини SPI/I2C, а автовимкнення через MOSFET прибирає споживання в режимі очікування.",

    worldOfToiletsShort: "Android-застосунок для туалетів із маршрутами A*.",
    worldOfToiletsLong: "World of Toilets — мобільний застосунок, який допомагає знаходити, оцінювати та пропонувати громадські вбиральні в Лісабоні. Написаний на Kotlin із Jetpack Compose, він фільтрує результати за критеріями на кшталт доступності та наявності сповивальних столиків і будує оптимальні пішохідні маршрути пошуком A* по графу OpenStreetMap із 199 000 вузлів — у середньому 1,75 с на запит під час навантажувального тестування зі 100% успішних відповідей. Бекенд піднімає дві репліки API на NestJS і два фронтенди на Next.js за балансувальником NGINX, спираючись на кластер MariaDB Galera з трьох вузлів у синхронній multi-master реплікації, з JWT-автентифікацією, рольовою моделлю доступу та паролями, хешованими bcrypt.",

    capoShort: "Керування виробничим цехом у реальному часі.",
    capoLong: "CAPO (Computer Aided Process Overview) оцифровує виробничий цех заводу металевих трубопроводів, моделюючи роботу в ієрархії Проєкт → Ізометрія → Котушка → Стик → Деталь через три послідовні етапи: різання, складання та зварювання. Побудований на NestJS 11 із використанням CQRS і багатої доменної моделі, кожен перехід стану фіксується як незмінна подія, а передавання між етапами виводяться — і ніколи не зберігаються — зі стану самих деталей, тож конвеєр не може розсинхронізуватися. Доменні події розходяться через Socket.IO, тому завершення етапу миттєво відкриває наступний для його оператора без перезавантаження сторінки. Фронтенд — Next.js 16 із React Server Components, що працює за зворотним проксі NGINX як монорепозиторій на Bun-workspace.",

    angryDuckShort: "Мережа та IoT-системи в шестиповерховій будівлі.",
    angryDuckLong: "Angry Duck — проєкт мережевої інфраструктури для шестиповерхової штаб-квартири та допоміжної будівлі вигаданої птахівничої компанії, виконаний для курсу «Мережі та передавання даних». План охоплює структуровану кабельну систему, подвійну магістраль, точки доступу Wi-Fi на кожному поверсі та централізований центр обробки даних, а також чотири модульні IoT-підсистеми — виявлення небезпечних газів, пожежогасіння, контроль доступу та керування температурою — розгорнуті на кожному поверсі. Повну топологію (2 маршрутизатори, 9 комутаторів, 6 серверів, 39 комп'ютерів і 44 IoT-пристрої) було змодельовано та відпрацьовано в Cisco Packet Tracer.",

    physicsSimShort: "Симулятор фізики частинок на GTK4.",
    physicsSimLong: "Physics Simulator — настільний застосунок на GTK4, що моделює рух частинок у двох незалежних режимах: кінематичному, де частинки рухаються траєкторіями зі сталим прискоренням, і динамічному, де другий закон Ньютона виводить прискорення з налаштовуваних сил і гравітації на кожному кроці. Написаний на C із Cairo для векторного рендерингу, він підтримує режими камери з автомасштабуванням і стеженням за частинкою, малює історичні сліди частинок і вміє зберігати та завантажувати повні стани симуляції у вигляді файлів проєкту .sabino, з детальним експортом у CSV по кожній частинці для подальшого аналізу.",
  },
} as const;

export type Lang = "PT" | "EN" | "FR" | "DE" | "ES" | "IT" | "RU" | "TR" | "UK";
export type TranslationKey = keyof typeof translations.PT;
export type Translations = (typeof translations)[Lang];

// Single source of truth for supported locales — used by routing (proxy,
// layout) and the language switcher UI.
export const LOCALES = [
  { code: "pt", lang: "PT" as const, label: "PT", name: "Português" },
  { code: "en", lang: "EN" as const, label: "EN", name: "English" },
  { code: "fr", lang: "FR" as const, label: "FR", name: "Français" },
  { code: "de", lang: "DE" as const, label: "DE", name: "Deutsch" },
  { code: "es", lang: "ES" as const, label: "ES", name: "Español" },
  { code: "it", lang: "IT" as const, label: "IT", name: "Italiano" },
  { code: "ru", lang: "RU" as const, label: "RU", name: "Русский" },
  { code: "tr", lang: "TR" as const, label: "TR", name: "Türkçe" },
  { code: "uk", lang: "UK" as const, label: "UK", name: "Українська" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export function localeToLang(locale: string): Lang {
  return LOCALES.find((l) => l.code === locale)?.lang ?? "PT";
}
