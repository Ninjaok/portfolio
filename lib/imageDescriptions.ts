import type { Lang } from "./translations";

/* Legendas mostradas ao passar o rato sobre cada imagem dos carrosséis.
   A chave é o nome do ficheiro sem pasta nem extensão (ex.: "speedy_1"),
   para a legenda acompanhar a imagem onde quer que ela seja usada.

   Partial (não Record completo) de propósito: acrescentar um idioma ao site
   passaria a exigir 19 legendas novas só para o ficheiro compilar, o que
   trava a adição de locales. Em vez disso, o que faltar cai para EN — ver
   imageDescription() no fim do ficheiro. */
const DESCRIPTIONS: Record<string, Partial<Record<Lang, string>>> = {
  // ---------- Speedy ----------
  speedy_1: {
    PT: "O Speedy registado em película 35 mm — fotografia analógica do veículo autónomo.",
    EN: "Speedy captured on 35 mm film — an analog photograph of the autonomous vehicle.",
    FR: "Speedy sur pellicule 35 mm — photographie argentique du véhicule autonome.",
    DE: "Speedy auf 35-mm-Film — eine analoge Aufnahme des autonomen Fahrzeugs.",
  },
  speedy_2: {
    PT: "Perfil lateral do Speedy, fotografado em estúdio profissional no IADE.",
    EN: "Side profile of Speedy, photographed in a professional studio at IADE.",
    FR: "Profil latéral de Speedy, photographié en studio professionnel à l'IADE.",
    DE: "Seitenprofil von Speedy, aufgenommen im Profistudio der IADE.",
  },
  speedy_3: {
    PT: "Lado direito do veículo, rodado cerca de 30°, em estúdio profissional no IADE.",
    EN: "Right side of the vehicle, turned about 30°, in a professional studio at IADE.",
    FR: "Côté droit du véhicule, pivoté d'environ 30°, en studio professionnel à l'IADE.",
    DE: "Rechte Fahrzeugseite, um etwa 30° gedreht, im Profistudio der IADE.",
  },
  speedy_4: {
    PT: "O Speedy de frente, com os sensores em destaque — estúdio profissional do IADE.",
    EN: "Speedy head-on, sensors front and centre — IADE's professional studio.",
    FR: "Speedy de face, capteurs en évidence — studio professionnel de l'IADE.",
    DE: "Speedy frontal, die Sensorik im Blick — Profistudio der IADE.",
  },
  speedy_5: {
    PT: "Traseira do veículo em ligeiro ângulo para a esquerda, em estúdio no IADE.",
    EN: "Rear of the vehicle at a slight leftward angle, in the studio at IADE.",
    FR: "Arrière du véhicule, légèrement incliné vers la gauche, en studio à l'IADE.",
    DE: "Heck des Fahrzeugs, leicht nach links gewinkelt, im Studio der IADE.",
  },
  speedy_6: {
    PT: "Grande plano da eletrónica de controlo que conduz o veículo autónomo.",
    EN: "Close-up of the control electronics that drive the autonomous vehicle.",
    FR: "Gros plan sur l'électronique de contrôle qui pilote le véhicule autonome.",
    DE: "Nahaufnahme der Steuerelektronik, die das autonome Fahrzeug lenkt.",
  },
  speedy_7: {
    PT: "Lado esquerdo do veículo, rodado cerca de 30°, em estúdio profissional no IADE.",
    EN: "Left side of the vehicle, turned about 30°, in a professional studio at IADE.",
    FR: "Côté gauche du véhicule, pivoté d'environ 30°, en studio professionnel à l'IADE.",
    DE: "Linke Fahrzeugseite, um etwa 30° gedreht, im Profistudio der IADE.",
  },

  // ---------- Wash Buddy ----------
  "wash-buddy_0": {
    PT: "Protótipo do Wash Buddy — o robô que transforma a lavagem das mãos numa brincadeira.",
    EN: "The Wash Buddy prototype — the robot that turns handwashing into play.",
    FR: "Le prototype de Wash Buddy — le robot qui fait du lavage des mains un jeu.",
    DE: "Der Wash-Buddy-Prototyp — der Roboter, der Händewaschen zum Spiel macht.",
  },
  "wash-buddy_1": {
    PT: "Placa de controlo central: duas camadas empilhadas, desenho modular para encolher o robô.",
    EN: "Central control board: two stacked layers, a modular design that keeps the robot compact.",
    FR: "Carte de contrôle centrale : deux couches empilées, un design modulaire qui compacte le robot.",
    DE: "Zentrale Steuerplatine: zwei gestapelte Lagen, modular entworfen, um den Roboter kompakt zu halten.",
  },
  "wash-buddy_2": {
    PT: "Camada inferior da placa, encarregada do controlo e distribuição de energia do sistema.",
    EN: "Lower board layer, in charge of the system's power control and distribution.",
    FR: "Couche inférieure de la carte, chargée du contrôle et de la distribution d'énergie du système.",
    DE: "Untere Platinenlage, verantwortlich für Steuerung und Stromverteilung des Systems.",
  },
  "wash-buddy_3": {
    PT: "A camada de energia vista de outro ângulo, com as ligações à mostra.",
    EN: "The power layer from another angle, its connections in view.",
    FR: "La couche d'alimentation sous un autre angle, connexions apparentes.",
    DE: "Die Stromversorgungslage aus einem anderen Winkel, mit sichtbaren Verbindungen.",
  },
  "wash-buddy_4": {
    PT: "A camada de energia vista de cima, pronta a receber a camada de processamento.",
    EN: "The power layer from above, ready to receive the processing layer.",
    FR: "La couche d'alimentation vue de dessus, prête à recevoir la couche de traitement.",
    DE: "Die Stromversorgungslage von oben, bereit für die Verarbeitungslage.",
  },
  "wash-buddy_5": {
    PT: "Camada superior de processamento: o ESP32 e o DFPlayer Mini, cérebro e voz do robô.",
    EN: "Upper processing layer: the ESP32 and DFPlayer Mini — the robot's brain and voice.",
    FR: "Couche de traitement supérieure : l'ESP32 et le DFPlayer Mini, cerveau et voix du robot.",
    DE: "Obere Verarbeitungslage: ESP32 und DFPlayer Mini — Gehirn und Stimme des Roboters.",
  },
  "wash-buddy_6": {
    PT: "A camada de processamento vista de outro ângulo, com os módulos em relevo.",
    EN: "The processing layer from another angle, its modules standing out.",
    FR: "La couche de traitement sous un autre angle, modules en relief.",
    DE: "Die Verarbeitungslage aus einem anderen Winkel, die Module deutlich sichtbar.",
  },
  "wash-buddy_7": {
    PT: "Vista superior do conjunto de processamento já montado.",
    EN: "Top view of the assembled processing stack.",
    FR: "Vue de dessus de l'ensemble de traitement assemblé.",
    DE: "Draufsicht auf den fertig montierten Verarbeitungsstapel.",
  },

  // ---------- World of Toilets ----------
  wot: {
    PT: "Vídeo promocional da aplicação World of Toilets.",
    EN: "Promotional video for the World of Toilets app.",
    FR: "Vidéo promotionnelle de l'application World of Toilets.",
    DE: "Werbevideo für die App World of Toilets.",
  },
  wot_1: {
    PT: "Pesquisa e rota pedonal traçada com A* até ao Jardim Zoológico de Lisboa.",
    EN: "Search and walking route plotted with A* to the Lisbon Zoo.",
    FR: "Recherche et itinéraire piéton tracé avec A* jusqu'au Zoo de Lisbonne.",
    DE: "Suche und mit A* geplante Fußroute zum Zoo von Lissabon.",
  },
  wot_2: {
    PT: "Rota pedonal gerada com A* sobre o grafo OpenStreetMap, até ao Museu de Lisboa.",
    EN: "Walking route generated with A* over the OpenStreetMap graph, to the Museum of Lisbon.",
    FR: "Itinéraire piéton généré avec A* sur le graphe OpenStreetMap, jusqu'au Musée de Lisbonne.",
    DE: "Mit A* über den OpenStreetMap-Graphen erzeugte Fußroute zum Museum von Lissabon.",
  },

  // ---------- CAPO ----------
  "01-cut-workflow": {
    PT: "Fluxo de corte no CAPO: o operador percorre cada etapa até à peça cortada.",
    EN: "Cutting workflow in CAPO: the operator walks through every step to the cut piece.",
    FR: "Flux de découpe dans CAPO : l'opérateur suit chaque étape jusqu'à la pièce découpée.",
    DE: "Schneid-Workflow in CAPO: der Bediener durchläuft jeden Schritt bis zum fertigen Zuschnitt.",
  },
  "02-assembly-workflow": {
    PT: "Fluxo de montagem no CAPO, etapa a etapa, na perspetiva do operador.",
    EN: "Assembly workflow in CAPO, step by step, from the operator's perspective.",
    FR: "Flux d'assemblage dans CAPO, étape par étape, du point de vue de l'opérateur.",
    DE: "Montage-Workflow in CAPO, Schritt für Schritt, aus Sicht des Bedieners.",
  },
  "03-weld-workflow": {
    PT: "Fluxo de soldadura no CAPO, etapa a etapa, na perspetiva do operador.",
    EN: "Welding workflow in CAPO, step by step, from the operator's perspective.",
    FR: "Flux de soudure dans CAPO, étape par étape, du point de vue de l'opérateur.",
    DE: "Schweiß-Workflow in CAPO, Schritt für Schritt, aus Sicht des Bedieners.",
  },
  "04-gating": {
    PT: "Gating em tempo real: concluir uma etapa abre logo a seguinte para o próximo operador.",
    EN: "Real-time gating: finishing one stage instantly opens the next for its operator.",
    FR: "Gating en temps réel : terminer une étape ouvre aussitôt la suivante pour son opérateur.",
    DE: "Echtzeit-Gating: Der Abschluss einer Stufe öffnet sofort die nächste für den Bediener.",
  },

  // ---------- Physics Simulator ----------
  "kinematics-01": {
    PT: "Modo cinemático: trajetória e decomposição do vetor sob a aceleração da gravidade.",
    EN: "Kinematic mode: trajectory and vector decomposition under gravitational acceleration.",
    FR: "Mode cinématique : trajectoire et décomposition du vecteur sous l'accélération de la pesanteur.",
    DE: "Kinematischer Modus: Bahn und Vektorzerlegung unter der Erdbeschleunigung.",
  },
  "kinematics-02": {
    PT: "Modo cinemático: o rasto da partícula desenha a trajetória de aceleração constante.",
    EN: "Kinematic mode: the particle's trail traces its constant-acceleration trajectory.",
    FR: "Mode cinématique : la traînée de la particule dessine sa trajectoire à accélération constante.",
    DE: "Kinematischer Modus: Die Partikelspur zeichnet die Bahn konstanter Beschleunigung nach.",
  },
  "dynamics-01": {
    PT: "Modo dinâmico: a segunda lei de Newton deriva a aceleração das forças aplicadas.",
    EN: "Dynamic mode: Newton's second law derives acceleration from the applied forces.",
    FR: "Mode dynamique : la deuxième loi de Newton déduit l'accélération des forces appliquées.",
    DE: "Dynamischer Modus: Newtons zweites Gesetz leitet die Beschleunigung aus den Kräften ab.",
  },
  "dynamics-02": {
    PT: "Modo dinâmico: forças configuráveis e gravidade a atuar, com decomposição vetorial.",
    EN: "Dynamic mode: configurable forces and gravity at work, with vector decomposition.",
    FR: "Mode dynamique : forces configurables et gravité à l'œuvre, avec décomposition vectorielle.",
    DE: "Dynamischer Modus: konfigurierbare Kräfte und Schwerkraft wirken, mit Vektorzerlegung.",
  },

  // ---------- Hobbies (About Me) ----------
  hobby_0: {
    PT: "Modelo 2D desenhado para planear o melhor encaminhamento das pistas numa breadboard.",
    EN: "2D model drawn to plan the best trace routing on a breadboard.",
    FR: "Modèle 2D dessiné pour planifier le meilleur routage des pistes sur une breadboard.",
    DE: "2D-Modell, gezeichnet, um die beste Leiterbahnführung auf einem Breadboard zu planen.",
  },
  hobby_1: {
    PT: "Rolos de película 35 mm — a matéria-prima da fotografia analógica.",
    EN: "Rolls of 35 mm film — the raw material of analog photography.",
    FR: "Rouleaux de pellicule 35 mm — la matière première de la photographie argentique.",
    DE: "35-mm-Filmrollen — der Rohstoff der analogen Fotografie.",
  },
  hobby_2: {
    PT: "Uma libélula vermelha, apanhada de perto.",
    EN: "A red dragonfly, caught up close.",
    FR: "Une libellule rouge, saisie de près.",
    DE: "Eine rote Libelle, aus der Nähe eingefangen.",
  },
  hobby_3: {
    PT: "Caneta de tinta permanente TWSBI ECO, aparo fino — companheira da escrita.",
    EN: "TWSBI ECO fountain pen, fine nib — a writing companion.",
    FR: "Stylo plume TWSBI ECO, plume fine — compagnon d'écriture.",
    DE: "TWSBI ECO Füllfederhalter, feine Feder — ein Begleiter beim Schreiben.",
  },
  hobby_4: {
    PT: "Sorriso aberto debaixo de um capacete, pronto para a estrada.",
    EN: "A wide smile under a helmet, ready for the road.",
    FR: "Un grand sourire sous un casque, prêt pour la route.",
    DE: "Ein breites Lächeln unter dem Helm, bereit für die Straße.",
  },
  hobby_5: {
    PT: "Com os amigos no Tech4Good, evento de jogos realizado no IADE.",
    EN: "With friends at Tech4Good, a game event held at IADE.",
    FR: "Avec des amis à Tech4Good, un événement de jeux organisé à l'IADE.",
    DE: "Mit Freunden bei Tech4Good, einem Spiele-Event an der IADE.",
  },
  hobby_6: {
    PT: "A equipa no Tech4Good, com o prémio de 2.º lugar na mão.",
    EN: "The team at Tech4Good, 2nd place prize in hand.",
    FR: "L'équipe à Tech4Good, le prix de la 2e place en main.",
    DE: "Das Team bei Tech4Good, den Preis für den 2. Platz in der Hand.",
  },
  hobby_7: {
    PT: "Viagem ao Porto com os amigos.",
    EN: "A trip to Porto with friends.",
    FR: "Un voyage à Porto entre amis.",
    DE: "Eine Reise nach Porto mit Freunden.",
  },
  hobby_8: {
    PT: "Amigos revelados em película — memórias em fotografia analógica.",
    EN: "Friends developed on film — memories in analog photography.",
    FR: "Des amis révélés sur pellicule — des souvenirs en photographie argentique.",
    DE: "Freunde, auf Film entwickelt — Erinnerungen in analoger Fotografie.",
  },
};

/** "/images/speedy_1.jpg" -> "speedy_1" */
function keyFromSrc(src: string): string {
  const file = src.split("/").pop() ?? src;
  return file.replace(/\.[^.]+$/, "");
}

/** Legenda da imagem no idioma pedido. Sem tradução nesse idioma, recorre ao
    EN (idioma-ponte do site) antes de desistir; "" quando a imagem não tem
    legenda nenhuma — o componente esconde a legenda nesse caso. */
export function imageDescription(src: string, lang: Lang): string {
  const entry = DESCRIPTIONS[keyFromSrc(src)];
  return entry?.[lang] ?? entry?.EN ?? "";
}
