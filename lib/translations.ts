export const translations = {
  PT: {
    // Sidebar
    bio: "Engenheiro Informático & Técnico em Mecânica | Data Science · Inteligência Artificial | Python · SQL · Java",
    aboutText: "Engenheiro de Software | Data Science & IA | A resolver problemas com código, matemática e curiosidade",
    aboutMeBtn: "Sobre mim",

    // ProjectsIntro
    projectsHeading: "Projetos",

    // ProjectSection
    participantsLabel: "Participantes",

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
    speedyShort: "O Speedy é um veículo de corrida autónomo desenvolvido para navegar em pista de forma rápida e inteligente. Utilizando visão computacional e inteligência artificial, segue o percurso, deteta obstáculos e toma decisões em tempo real.",
    speedyLong: "O Speedy é um veículo de corrida autónomo desenvolvido para competir em pistas de forma rápida, segura e totalmente autónoma. Construído como projeto final da Licenciatura em Engenharia Informática do IADE - Universidade Europeia, o sistema integra visão computacional, inteligência artificial e sensores para identificar a pista, reconhecer obstáculos e adaptar a condução em tempo real. Toda a arquitetura foi consolidada num Raspberry Pi 4, tornando a plataforma mais eficiente e reduzindo a latência entre a perceção do ambiente e a atuação do veículo. Desenvolvido sobre ROS 2 Jazzy, o Speedy representa a integração de software, eletrónica e robótica numa solução completa para navegação autónoma, demonstrando a aplicação prática de algoritmos de controlo, processamento de imagem e tomada de decisão em sistemas embarcados.",

    washBuddyShort: "Um robô interativo que gamifica a lavagem das mãos para crianças através de expressões faciais, movimento e feedback de áudio acionado por RFID.",
    washBuddyLong: "Wash Buddy é um robô interativo autónomo que orienta as crianças através de uma rotina de lavagem das mãos: tocar em brinquedos marcados com RFID (sabão, esponja, toalha) avança numa máquina de estado rigorosa — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — com timeouts por etapa ajustados para diretrizes reais, incluindo um piso de 20 segundos de esfregão seguindo as recomendações da OMS/CDC para lavagem das mãos. Um ESP32-WROOM-32 executa um split dual-core do FreeRTOS: um núcleo renderiza uma face OLED animada proceduralmente e efeitos de partículas a 60 FPS fixas, enquanto o outro controla três gestos baseados em servos, leituras de RFID e linhas de voz sincronizadas. Uma placa PCB personalizada separa as camadas de energia e lógica para manter o ruído dos motores longe dos barramentos SPI/I2C, com desligamento automático gateado por MOSFET para eliminar o consumo em espera.",

    worldOfToiletsShort: "Uma aplicação Android colaborativa para encontrar casas de banho públicas limpas e acessíveis, com rotas pedonais otimizadas por IA e um backend tolerante a falhas.",
    worldOfToiletsLong: "World of Toilets é uma aplicação móvel que ajuda as pessoas a localizar, avaliar e sugerir casas de banho públicas em Lisboa. Construída em Kotlin com Jetpack Compose, filtra resultados por critérios como acessibilidade e fraldários, e calcula rotas pedonais otimizadas com uma pesquisa A* sobre um grafo OpenStreetMap de 199.000 nós, com uma média de 1,75s por consulta em testes de carga com uma taxa de sucesso de 100%. O backend executa duas instâncias replicadas de API NestJS e dois front-ends Next.js atrás de um balanceador de carga NGINX, apoiado por um cluster MariaDB Galera de três nós em replicação multi-master síncrona, com autenticação JWT, controlo de acesso baseado em papéis e credenciais com hash bcrypt.",

    capoShort: "Um sistema de rastreamento de chão de fábrica para fabricação de tubagens, com transferências de etapas em tempo real entre corte, montagem e soldadura.",
    capoLong: "CAPO (Computer Aided Process Overview) digitaliza o chão de fábrica de tubagens metálicas, modelando o trabalho numa hierarquia Projeto → Isométrico → Spool → Junta → Peça em três etapas sequenciais: corte, montagem e soldadura. Construído com NestJS 11 usando CQRS e um modelo de domínio rico, cada transição de estado é registada como um evento imutável, e as transferências de etapa são derivadas — nunca armazenadas — do estado das próprias peças, para que a pipeline nunca perca a sincronização. Eventos de domínio propagam-se via Socket.IO, de modo que completar uma etapa abre instantaneamente a seguinte para o seu operador sem recarregar a página. O front-end é Next.js 16 com React Server Components, executado atrás de um proxy reverso NGINX como um monorepo Bun-workspace.",

    angryDuckShort: "Um plano de infraestrutura de rede para um edifício inteligente de 6 andares, cobrindo sistemas de segurança IoT e simulação em Cisco Packet Tracer.",
    angryDuckLong: "Angry Duck é um projeto de design de infraestrutura de rede para a sede de seis andares e edifício secundário de uma empresa avícola fictícia, construído para o curso de Redes e Comunicações de Dados. O plano abrange cablagem estruturada, backbone duplo, pontos de acesso Wi-Fi por andar e um datacenter centralizado, juntamente com quatro subsistemas IoT modulares — deteção de gases perigosos, supressão de incêndios, segurança de acesso e controlo de temperatura — implantados em cada andar. A topologia completa (2 routers, 9 switches, 6 servidores, 39 computadores e 44 dispositivos IoT) foi modelada e simulada no Cisco Packet Tracer.",

    physicsSimShort: "Uma aplicação desktop GTK4 que simula física de partículas em modos cinemático e dinâmico, com exportação CSV e gravação/carregamento de projetos.",
    physicsSimLong: "Physics Simulator é uma aplicação desktop GTK4 que modela o movimento de partículas em dois modos independentes: cinemático, onde as partículas seguem trajetórias de aceleração constante, e dinâmico, onde a segunda lei de Newton deriva a aceleração a partir de forças configuráveis e gravidade em cada passo. Construída em C com Cairo para renderização vetorial, suporta modos de câmara com zoom automático e seguimento de partículas, renderiza rastos históricos de partículas e pode guardar ou carregar estados completos de simulação como ficheiros de projeto .sabino, com exportação CSV detalhada por partícula para análise posterior.",
  },
  EN: {
    // Sidebar
    bio: "Computer Engineer & Mechanical Technician | Data Science · Artificial Intelligence | Python · SQL · Java",
    aboutText: "Software Engineer | Data Science & AI | Solving problems with code, math & curiosity",
    aboutMeBtn: "About me",

    // ProjectsIntro
    projectsHeading: "Projects",

    // ProjectSection
    participantsLabel: "Participants",

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
    speedyShort: "Speedy is an autonomous racing vehicle designed to navigate tracks quickly and intelligently. Using computer vision and artificial intelligence, it follows the course, detects obstacles, and makes real-time decisions.",
    speedyLong: "Speedy is an autonomous racing vehicle developed to compete on tracks in a fast, safe, and fully autonomous manner. Built as the final project for the Bachelor's degree in Computer Science at IADE - European University, the system integrates computer vision, artificial intelligence, and sensors to identify the track, recognize obstacles, and adapt driving in real time. The entire architecture was consolidated on a Raspberry Pi 4, making the platform more efficient and reducing the latency between environment perception and vehicle actuation. Developed on ROS 2 Jazzy, Speedy represents the integration of software, electronics, and robotics into a complete solution for autonomous navigation, demonstrating the practical application of control algorithms, image processing, and decision-making in embedded systems.",

    washBuddyShort: "An interactive robot that gamifies hand washing for children through facial expressions, movement, and RFID-triggered audio feedback.",
    washBuddyLong: "Wash Buddy is an autonomous interactive robot that guides children through a hand-washing routine: touching RFID-tagged toys (soap, sponge, towel) advances through a strict state machine — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — with per-step timeouts tuned to real guidelines, including a 20-second scrubbing floor following WHO/CDC hand-washing recommendations. An ESP32-WROOM-32 runs a FreeRTOS dual-core split: one core renders a procedurally animated OLED face and particle effects at a fixed 60 FPS, while the other handles three servo-based gestures, RFID reads, and synchronized voice lines. A custom PCB separates the power and logic layers to keep motor noise away from the SPI/I2C buses, with MOSFET-gated auto-shutdown to eliminate standby consumption.",

    worldOfToiletsShort: "A crowdsourced Android app for finding clean, accessible public restrooms, with AI-optimized walking routes and a fault-tolerant backend.",
    worldOfToiletsLong: "World of Toilets is a mobile app that helps people locate, rate, and suggest public restrooms in Lisbon. Built in Kotlin with Jetpack Compose, it filters results by criteria like accessibility and baby-changing facilities, and calculates optimized walking routes with an A* search over a 199,000-node OpenStreetMap graph, averaging 1.75s per query across load tests with a 100% success rate. The backend runs two replicated NestJS API instances and two Next.js front-ends behind an NGINX load balancer, backed by a three-node MariaDB Galera cluster in synchronous multi-master replication, with JWT authentication, role-based access control, and bcrypt-hashed credentials.",

    capoShort: "A factory-floor tracking system for pipeline manufacturing, with real-time stage hand-offs between cutting, assembly, and welding.",
    capoLong: "CAPO (Computer Aided Process Overview) digitizes a metal pipeline factory's production floor, modeling work as a Project → Isometric → Spool → Joint → Piece hierarchy across three sequential stages: cutting, assembly, and welding. Built with NestJS 11 using CQRS and a rich domain model, every state transition is recorded as an immutable event, and stage hand-offs are derived — never stored — from the state of the pieces themselves, so the pipeline can never fall out of sync. Domain events propagate over Socket.IO, so completing a stage instantly opens the next one for its operator without a page reload. The front-end is Next.js 16 with React Server Components, running behind an NGINX reverse proxy as a Bun-workspace monorepo.",

    angryDuckShort: "A network infrastructure plan for a 6-floor smart building, covering IoT safety systems and Cisco Packet Tracer simulation.",
    angryDuckLong: "Angry Duck is a network infrastructure design project for a fictional poultry company's six-floor headquarters and secondary building, built for a Networks and Data Communications course. The plan covers structured cabling, a dual backbone, per-floor Wi-Fi access points, and a centralized datacenter, alongside four modular IoT subsystems — hazardous gas detection, fire suppression, access security, and temperature control — deployed on every floor. The full topology (2 routers, 9 switches, 6 servers, 39 computers, and 44 IoT devices) was modeled and simulated in Cisco Packet Tracer.",

    physicsSimShort: "A GTK4 desktop app simulating particle physics in kinematic and dynamic modes, with CSV export and project save/load.",
    physicsSimLong: "Physics Simulator is a GTK4 desktop application that models particle motion in two independent modes: kinematic, where particles follow constant-acceleration trajectories, and dynamic, where Newton's second law derives acceleration from configurable forces and gravity at each step. Built in C with Cairo for vector rendering, it supports auto-zoom and particle-follow camera modes, renders historical particle trails, and can save or load full simulation states as .sabino project files, with detailed per-particle CSV export for further analysis.",
  },
  FR: {
    // Sidebar
    bio: "Ingénieur Informatique & Technicien en Mécanique | Data Science · Intelligence Artificielle | Python · SQL · Java",
    aboutText: "Ingénieur Logiciel | Data Science & IA | Résoudre des problèmes avec du code, des mathématiques et de la curiosité",
    aboutMeBtn: "À propos",

    // ProjectsIntro
    projectsHeading: "Projets",

    // ProjectSection
    participantsLabel: "Participants",

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
    speedyShort: "Speedy est un véhicule de course autonome conçu pour parcourir des pistes rapidement et intelligemment. Grâce à la vision par ordinateur et à l'intelligence artificielle, il suit le tracé, détecte les obstacles et prend des décisions en temps réel.",
    speedyLong: "Speedy est un véhicule de course autonome développé pour concourir sur piste de manière rapide, sûre et totalement autonome. Construit comme projet de fin d'études de la Licence en Ingénierie Informatique de l'IADE - Université Européenne, le système intègre vision par ordinateur, intelligence artificielle et capteurs pour identifier la piste, reconnaître les obstacles et adapter la conduite en temps réel. Toute l'architecture a été consolidée sur un Raspberry Pi 4, rendant la plateforme plus efficace et réduisant la latence entre la perception de l'environnement et l'action du véhicule. Développé sur ROS 2 Jazzy, Speedy représente l'intégration du logiciel, de l'électronique et de la robotique dans une solution complète de navigation autonome, démontrant l'application pratique d'algorithmes de contrôle, de traitement d'image et de prise de décision dans des systèmes embarqués.",

    washBuddyShort: "Un robot interactif qui transforme le lavage des mains en jeu pour les enfants grâce aux expressions faciales, aux mouvements et à un retour audio déclenché par RFID.",
    washBuddyLong: "Wash Buddy est un robot interactif autonome qui guide les enfants à travers une routine de lavage des mains : toucher des jouets marqués RFID (savon, éponge, serviette) fait progresser une machine à états stricte — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — avec des délais par étape calibrés selon de vraies recommandations, dont un minimum de 20 secondes de frottement suivant les recommandations OMS/CDC pour le lavage des mains. Un ESP32-WROOM-32 exécute un partage dual-core FreeRTOS : un cœur affiche un visage OLED animé de façon procédurale et des effets de particules à 60 FPS fixes, tandis que l'autre gère trois gestes basés sur des servomoteurs, les lectures RFID et des lignes vocales synchronisées. Un PCB personnalisé sépare les couches d'alimentation et de logique pour éloigner le bruit des moteurs des bus SPI/I2C, avec une mise en veille automatique pilotée par MOSFET pour éliminer la consommation en veille.",

    worldOfToiletsShort: "Une application Android collaborative pour trouver des toilettes publiques propres et accessibles, avec des itinéraires piétons optimisés par IA et un backend tolérant aux pannes.",
    worldOfToiletsLong: "World of Toilets est une application mobile qui aide les gens à localiser, noter et suggérer des toilettes publiques à Lisbonne. Construite en Kotlin avec Jetpack Compose, elle filtre les résultats selon des critères comme l'accessibilité et les tables à langer, et calcule des itinéraires piétons optimisés grâce à une recherche A* sur un graphe OpenStreetMap de 199 000 nœuds, avec une moyenne de 1,75s par requête lors de tests de charge et un taux de succès de 100%. Le backend exécute deux instances répliquées d'API NestJS et deux front-ends Next.js derrière un répartiteur de charge NGINX, appuyé par un cluster MariaDB Galera à trois nœuds en réplication synchrone multi-maître, avec authentification JWT, contrôle d'accès basé sur les rôles et mots de passe hachés en bcrypt.",

    capoShort: "Un système de suivi d'atelier pour la fabrication de tuyauteries, avec des transferts d'étapes en temps réel entre découpe, assemblage et soudure.",
    capoLong: "CAPO (Computer Aided Process Overview) numérise l'atelier de fabrication de tuyauteries métalliques, modélisant le travail selon une hiérarchie Projet → Isométrique → Spool → Joint → Pièce à travers trois étapes séquentielles : découpe, assemblage et soudure. Construit avec NestJS 11 utilisant CQRS et un modèle de domaine riche, chaque transition d'état est enregistrée comme un événement immuable, et les transferts d'étape sont dérivés — jamais stockés — de l'état des pièces elles-mêmes, afin que le pipeline ne perde jamais la synchronisation. Les événements de domaine se propagent via Socket.IO, de sorte que la fin d'une étape ouvre instantanément la suivante pour son opérateur sans recharger la page. Le front-end est Next.js 16 avec React Server Components, exécuté derrière un proxy inverse NGINX comme monorepo Bun-workspace.",

    angryDuckShort: "Un plan d'infrastructure réseau pour un bâtiment intelligent de 6 étages, couvrant des systèmes de sécurité IoT et une simulation Cisco Packet Tracer.",
    angryDuckLong: "Angry Duck est un projet de conception d'infrastructure réseau pour le siège de six étages et le bâtiment secondaire d'une entreprise avicole fictive, réalisé pour le cours de Réseaux et Communications de Données. Le plan couvre le câblage structuré, une dorsale double, des points d'accès Wi-Fi par étage et un datacenter centralisé, accompagnés de quatre sous-systèmes IoT modulaires — détection de gaz dangereux, extinction incendie, sécurité d'accès et contrôle de température — déployés à chaque étage. La topologie complète (2 routeurs, 9 commutateurs, 6 serveurs, 39 ordinateurs et 44 appareils IoT) a été modélisée et simulée dans Cisco Packet Tracer.",

    physicsSimShort: "Une application de bureau GTK4 simulant la physique des particules en modes cinématique et dynamique, avec export CSV et sauvegarde/chargement de projets.",
    physicsSimLong: "Physics Simulator est une application de bureau GTK4 qui modélise le mouvement de particules selon deux modes indépendants : cinématique, où les particules suivent des trajectoires à accélération constante, et dynamique, où la deuxième loi de Newton dérive l'accélération à partir de forces configurables et de la gravité à chaque pas. Construite en C avec Cairo pour le rendu vectoriel, elle prend en charge des modes de caméra à zoom automatique et de suivi de particules, affiche les traînées historiques des particules, et peut sauvegarder ou charger des états de simulation complets sous forme de fichiers de projet .sabino, avec un export CSV détaillé par particule pour analyse ultérieure.",
  },
  DE: {
    // Sidebar
    bio: "Informatikingenieur & Mechaniktechniker | Data Science · Künstliche Intelligenz | Python · SQL · Java",
    aboutText: "Software-Ingenieur | Data Science & KI | Probleme lösen mit Code, Mathematik und Neugier",
    aboutMeBtn: "Über mich",

    // ProjectsIntro
    projectsHeading: "Projekte",

    // ProjectSection
    participantsLabel: "Teilnehmer",

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
    speedyShort: "Speedy ist ein autonomes Rennfahrzeug, das entwickelt wurde, um Strecken schnell und intelligent zu navigieren. Mit Computer Vision und künstlicher Intelligenz folgt es der Strecke, erkennt Hindernisse und trifft Entscheidungen in Echtzeit.",
    speedyLong: "Speedy ist ein autonomes Rennfahrzeug, das entwickelt wurde, um auf Strecken schnell, sicher und vollständig autonom zu fahren. Als Abschlussprojekt des Bachelorstudiengangs Informatikingenieurwesen an der IADE - Europäische Universität integriert das System Computer Vision, künstliche Intelligenz und Sensoren, um die Strecke zu erkennen, Hindernisse zu identifizieren und das Fahrverhalten in Echtzeit anzupassen. Die gesamte Architektur wurde auf einem Raspberry Pi 4 konsolidiert, was die Plattform effizienter macht und die Latenz zwischen Umgebungswahrnehmung und Fahrzeugaktion reduziert. Entwickelt auf ROS 2 Jazzy, steht Speedy für die Integration von Software, Elektronik und Robotik in einer vollständigen Lösung für autonome Navigation und zeigt die praktische Anwendung von Regelungsalgorithmen, Bildverarbeitung und Entscheidungsfindung in eingebetteten Systemen.",

    washBuddyShort: "Ein interaktiver Roboter, der Händewaschen für Kinder durch Gesichtsausdrücke, Bewegung und RFID-ausgelöstes Audio-Feedback spielerisch gestaltet.",
    washBuddyLong: "Wash Buddy ist ein autonomer interaktiver Roboter, der Kinder durch eine Händewaschroutine führt: Das Berühren von RFID-markiertem Spielzeug (Seife, Schwamm, Handtuch) bewegt eine strikte Zustandsmaschine voran — Idle → Wet → Soap → Scrub → Rinse → Dry → Success — mit Zeitlimits pro Schritt, die an reale Richtlinien angepasst sind, einschließlich einer Mindestschrubbdauer von 20 Sekunden gemäß WHO/CDC-Empfehlungen zum Händewaschen. Ein ESP32-WROOM-32 führt einen FreeRTOS-Dual-Core-Split aus: Ein Kern rendert ein prozedural animiertes OLED-Gesicht und Partikeleffekte mit festen 60 FPS, während der andere drei servobasierte Gesten, RFID-Lesevorgänge und synchronisierte Sprachzeilen steuert. Eine benutzerdefinierte Leiterplatte trennt Strom- und Logikebenen, um Motorrauschen von den SPI/I2C-Bussen fernzuhalten, mit MOSFET-gesteuerter automatischer Abschaltung zur Eliminierung des Standby-Verbrauchs.",

    worldOfToiletsShort: "Eine crowdsourced Android-App zum Finden sauberer, barrierefreier öffentlicher Toiletten, mit KI-optimierten Fußwegen und einem fehlertoleranten Backend.",
    worldOfToiletsLong: "World of Toilets ist eine mobile App, die Menschen hilft, öffentliche Toiletten in Lissabon zu finden, zu bewerten und vorzuschlagen. In Kotlin mit Jetpack Compose entwickelt, filtert sie Ergebnisse nach Kriterien wie Barrierefreiheit und Wickelmöglichkeiten und berechnet optimierte Fußwege mit einer A*-Suche über einen OpenStreetMap-Graphen mit 199.000 Knoten, mit durchschnittlich 1,75s pro Anfrage in Lasttests und einer Erfolgsquote von 100%. Das Backend betreibt zwei replizierte NestJS-API-Instanzen und zwei Next.js-Frontends hinter einem NGINX-Load-Balancer, unterstützt von einem dreiknotigen MariaDB-Galera-Cluster in synchroner Multi-Master-Replikation, mit JWT-Authentifizierung, rollenbasierter Zugriffskontrolle und bcrypt-gehashten Zugangsdaten.",

    capoShort: "Ein Werkstattverfolgungssystem für die Rohrleitungsfertigung, mit Echtzeit-Übergaben zwischen Schneiden, Montage und Schweißen.",
    capoLong: "CAPO (Computer Aided Process Overview) digitalisiert die Fertigungshalle einer Metallrohrleitungsfabrik und modelliert die Arbeit als Hierarchie Projekt → Isometrie → Spool → Verbindung → Teil über drei aufeinanderfolgende Phasen: Schneiden, Montage und Schweißen. Gebaut mit NestJS 11 unter Verwendung von CQRS und einem reichhaltigen Domänenmodell, wird jeder Zustandsübergang als unveränderliches Ereignis aufgezeichnet, und Phasenübergaben werden abgeleitet — niemals gespeichert — aus dem Zustand der Teile selbst, sodass die Pipeline nie außer Sync geraten kann. Domänenereignisse werden über Socket.IO propagiert, sodass der Abschluss einer Phase sofort die nächste für den Bediener öffnet, ohne die Seite neu zu laden. Das Frontend ist Next.js 16 mit React Server Components, das hinter einem NGINX-Reverse-Proxy als Bun-Workspace-Monorepo läuft.",

    angryDuckShort: "Ein Netzwerkinfrastrukturplan für ein 6-stöckiges Smart Building, mit IoT-Sicherheitssystemen und Cisco-Packet-Tracer-Simulation.",
    angryDuckLong: "Angry Duck ist ein Netzwerkinfrastruktur-Designprojekt für den sechsstöckigen Hauptsitz und das Nebengebäude eines fiktiven Geflügelunternehmens, erstellt für einen Kurs in Netzwerken und Datenkommunikation. Der Plan umfasst strukturierte Verkabelung, ein doppeltes Backbone, Wi-Fi-Zugangspunkte pro Stockwerk und ein zentralisiertes Rechenzentrum, zusammen mit vier modularen IoT-Subsystemen — Gefahrgaserkennung, Brandbekämpfung, Zugangssicherheit und Temperaturkontrolle — die auf jeder Etage eingesetzt werden. Die vollständige Topologie (2 Router, 9 Switches, 6 Server, 39 Computer und 44 IoT-Geräte) wurde in Cisco Packet Tracer modelliert und simuliert.",

    physicsSimShort: "Eine GTK4-Desktop-App, die Partikelphysik in kinematischen und dynamischen Modi simuliert, mit CSV-Export und Projekt-Speichern/Laden.",
    physicsSimLong: "Physics Simulator ist eine GTK4-Desktop-Anwendung, die Partikelbewegung in zwei unabhängigen Modi modelliert: kinematisch, bei dem Partikel Bahnen mit konstanter Beschleunigung folgen, und dynamisch, bei dem Newtons zweites Gesetz die Beschleunigung aus konfigurierbaren Kräften und Schwerkraft bei jedem Schritt ableitet. In C mit Cairo für Vektorrendering gebaut, unterstützt sie automatische Zoom- und Partikelverfolgungs-Kameramodi, rendert historische Partikelspuren und kann vollständige Simulationszustände als .sabino-Projektdateien speichern oder laden, mit detailliertem CSV-Export pro Partikel zur weiteren Analyse.",
  },
} as const;

export type Lang = "PT" | "EN" | "FR" | "DE";
export type TranslationKey = keyof typeof translations.PT;
export type Translations = (typeof translations)[Lang];

// Single source of truth for supported locales — used by routing (proxy,
// layout) and the language switcher UI.
export const LOCALES = [
  { code: "pt", lang: "PT" as const, label: "PT", name: "Português" },
  { code: "en", lang: "EN" as const, label: "EN", name: "English" },
  { code: "fr", lang: "FR" as const, label: "FR", name: "Français" },
  { code: "de", lang: "DE" as const, label: "DE", name: "Deutsch" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export function localeToLang(locale: string): Lang {
  return LOCALES.find((l) => l.code === locale)?.lang ?? "PT";
}
