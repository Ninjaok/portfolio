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
} as const;

export type Lang = "PT" | "EN";
export type TranslationKey = keyof typeof translations.PT;
