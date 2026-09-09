export type Category = "UX & UI-uppdrag" | "Grafisk formgivning" | "Illustration" | "Rörligt";

export const categories: Category[] = [
  "UX & UI-uppdrag",
  "Grafisk formgivning",
  "Illustration",
  "Rörligt",
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; note: string; caption?: string }
  | { type: "link"; text: string; href: string };

export type Project = {
  slug: string;
  title: string;
  categories: Category[];
  summary: string;
  coverNote: string;
  body: Block[];
};

export const projects: Project[] = [
  {
    slug: "compentus",
    title: "Compentus webbplattform",
    categories: ["UX & UI-uppdrag"],
    summary: "Ny webbplattform och redesign med fokus på visuellt uttryck, struktur och konvertering.",
    coverNote: "compentus-800x600.png",
    body: [
      { type: "p", text: "Ny webbplattform och redesign till Compentus med fokus på:" },
      {
        type: "list",
        items: [
          "Visual design",
          "Struktur av affärsområden & tjänster",
          "Employer branding",
          "SEO",
          "Konverteringsoptimering",
        ],
      },
      { type: "p", text: "Informationsarkitektur för webbplattformen – sidor för utveckling, ny visuell identitet med en lekfull känsla, samt jämförelse mellan gamla och nya sajten." },
      { type: "p", text: "SEO – ökad synlighet. Satsningen ledde till en ökning i visibility och antal klick via sökmotorer." },
    ],
  },
  {
    slug: "forberedelse-eu-2021-2027",
    title: "Förberedelse och införandet av EU:s programperiod 2021–2027",
    categories: ["UX & UI-uppdrag"],
    summary: "UX-research och kundresa inför tekniskt lyft till nya system för EU:s nya programperiod.",
    coverNote: "image-1.png",
    body: [
      { type: "h", text: "UX research" },
      { type: "p", text: "Kundresa" },
      { type: "image", note: "image-1-1024x357.png", caption: "Kundresa" },
      { type: "p", text: "Tekniskt lyft – nya system" },
      { type: "image", note: "image-1024x724.png", caption: "System mapping" },
      { type: "p", text: "EU-krav" },
      { type: "p", text: "Etc." },
    ],
  },
  {
    slug: "produktutveckling-administrationssystem",
    title: "Produktutveckling administrativsystem",
    categories: ["UX & UI-uppdrag"],
    summary: "Produktutveckling och redesign av Min marina, ett administrationssystem för båtplatser.",
    coverNote: "Min-marina.png",
    body: [
      { type: "p", text: "Produktutveckling och redesign av Min marina som är ett administrationssystem av båtplatser för marinor, hamnar och båtklubbar." },
      { type: "p", text: "Här medverkade jag i produktutvecklingen av administrationssystemet där jag deltog i user research för att analysera och specificera funktioner för framtida utveckling." },
      { type: "p", text: "Utifrån detta skapade jag även wireframes och prototyp." },
      { type: "p", text: "Systemet hanterar import av befintliga kunder, köer, ansökningar, kontraktsskrivning, avtal, platsadministration, ekonomiunderlag till ekonomifunktion, avslut, lagring samt kommunikation till samtliga hyresgäster via mail och sms." },
      { type: "link", text: "Min marina prototyp – InVision", href: "https://web.archive.org/web/20210121110218/https:/invis.io/CZISGT23QWS#/273141473_Landningssida" },
      { type: "h", text: "Process" },
      {
        type: "list",
        items: [
          "Test av systemet och specificera uppenbara användbarhetsproblem & copywriting",
          "Konkurrentanalys och marknadsvärde för produkten",
          "User stories",
          "User research",
          "Utveckling av grafisk profil",
          "Prototyp",
          "Roadmap för kommande utveckling",
        ],
      },
    ],
  },
  {
    slug: "expand-abroad-services-branding",
    title: "Expand Abroad Services – branding",
    categories: ["Grafisk formgivning", "Illustration"],
    summary: "Visuell identitet inklusive logotyp, färger, visitkort och webbskiss.",
    coverNote: "brand-1.png",
    body: [
      { type: "p", text: "Expand Abroad Services är specialiserade på att hitta nya leverantörer eller kunder i Estland, Lettland eller Litauen inom tillverkningsindustrin, främst i metall- och maskinindustrin. Jag fick i uppdrag att skapa en visuell identitet för Expand Abroad Services." },
      {
        type: "list",
        items: [
          "Design av logotyp som representerar företagets mål och värderingar",
          "Primära & sekundära färger + fonter",
          "Design av visitkort",
          "Skiss till webbplats",
          "Design av banner för webb & sociala medier",
        ],
      },
    ],
  },
  {
    slug: "logotyp",
    title: "Logotyp Svenska Humleodlarföreningen",
    categories: ["Illustration"],
    summary: "Illustration och logotyp för Svenska Humleodlarföreningen.",
    coverNote: "shof.png",
    body: [
      { type: "h", text: "Svenska Humleodlarföreningen" },
      { type: "p", text: "Illustration" },
    ],
  },
  {
    slug: "dn-autogiroformular",
    title: "DN autogiroformulär",
    categories: ["Grafisk formgivning"],
    summary: "Formgivning av autogiroformulär för Dagens Nyheter.",
    coverNote: "DN_autogiro-800x600.jpg",
    body: [
      { type: "h", text: "Design DN autogiroformulär" },
      { type: "p", text: "Kund: Dagens Nyheter" },
      { type: "p", text: "Verktyg: InDesign" },
    ],
  },
  {
    slug: "banner-dagens-industri",
    title: "Banner Dagens industri",
    categories: ["Rörligt"],
    summary: "Digital design och motion för banner till Dagens industri.",
    coverNote: "Skarmavbild-2017-03-20.png",
    body: [{ type: "p", text: "Digital design, motion." }],
  },
  {
    slug: "siob",
    title: "Siob",
    categories: ["UX & UI-uppdrag"],
    summary: "Webbuppdrag.",
    coverNote: "siob-1.png",
    body: [{ type: "p", text: "Webb." }],
  },
  {
    slug: "rekryteringsvideo",
    title: "Instruktionsvideos Netigate",
    categories: ["Rörligt"],
    summary: "Instruktionsvideos för enkätverktyget Netigate på svenska och engelska.",
    coverNote: "Netigate-instructions.jpg",
    body: [
      { type: "p", text: "Jag spelade in instruktionsvideos för enkätverktyget Netigate om hur olika delar av e-tjänsten fungerar, samt redigerade dem." },
      { type: "link", text: "Svenska: All video tutorials – Netigate", href: "https://www.netigate.net/sv/all-video-tutorials/" },
      { type: "link", text: "Engelska: All video tutorials – Netigate", href: "https://www.netigate.net/all-video-tutorials/" },
    ],
  },
  {
    slug: "grafisk-design-massmonter",
    title: "Grafisk design mässmonter",
    categories: ["Grafisk formgivning"],
    summary: "Designförslag till mässmonter för Vetlanda kommun.",
    coverNote: "Vetlanda-monter-skiss-800x600.jpg",
    body: [
      { type: "p", text: "Designförslag till mässmonter inför en arbetsmässa där Vetlanda kommun ställer ut i syfte att locka sommarjobbare till kommunen." },
      { type: "p", text: "Design, koncept och skiss samt beskrivning av marknadsvärdet för monterns innehåll." },
    ],
  },
  {
    slug: "handlingsplansmodul-i-netigate",
    title: "Handlingsplansmodul i Netigate",
    categories: ["UX & UI-uppdrag"],
    summary: "Från research till en enkel, lättviktig handlingsplansmodul i Netigates plattform.",
    coverNote: "Actionplan-768x524.png",
    body: [
      { type: "h", text: "Bakgrund" },
      { type: "p", text: "Netigates kunder använder plattformen med målet att analysera och mäta resultat, för att sedan agera utifrån det. En av de största utmaningarna inom undersökningsplattformen har varit att användarna inte vetat hur undersökningsresultatet skulle tolkas (se avsnittet “Quick analysis”)." },
      { type: "p", text: "Målet med en ny handlingsplansmodul i Netigate var att ge användarna möjligheten att agera på det resultat som framkommit och utifrån det skapa en handlingsplan." },
      { type: "h", text: "Omfattning" },
      {
        type: "list",
        items: [
          "Inledande research & konkurrentanalys – mestadels utfört av företagets Business Developer Manager Trainee med stöttning av mig för ett UX- och grundläggande tekniskt perspektiv",
          "Wireframes & intervju med Product Success/Implementation Consultants",
        ],
      },
      { type: "p", text: "Vad som snabbt framkom under research-fasen i projektet var att det fanns ett stort behov av att Netigate-användare ska kunna skicka ut handlingsplaner till exempelvis chefer inom organisationen, så att de själva kan skapa sina egna handlingsplaner inom respektive team – som sedan kan följas upp av en administratör (till exempel HR eller chefer på övergripande nivå)." },
      { type: "p", text: "Det innebar att jag i ett tidigt stadie inkluderade utvecklarna för att diskutera möjligheter för lagring av handlingsplaner: delad rapport-länk kontra inloggning med färre rättigheter." },
      { type: "quote", text: "Projektet pausades tillfälligt på grund av för stor omfattning." },
      { type: "p", text: "Projektet togs upp igen efter cirka åtta månader – med fokus på att skapa en så enkel variant som möjligt, “the feather light action planning”." },
      {
        type: "list",
        items: [
          "Research – vilka komponenter kan återanvändas eller enkelt implementeras",
          "Intervjuer, främst med Product Success/Implementation Consultants, för att förstå hur handlingsplaner skapas",
          "Research och del av material och workshops",
          "Prototyp",
          "Test & finjustering av prototyp & copywriting",
          "Ärendespecifikationer & storys i Jira",
        ],
      },
    ],
  },
  {
    slug: "design-av-responsiva-e-post-mallar",
    title: "Design av responsiva e-post-mallar",
    categories: ["UX & UI-uppdrag"],
    summary: "Nya, mer trovärdiga e-postmallar för att höja svarsfrekvensen på undersökningar.",
    coverNote: "email-templates.png",
    body: [
      { type: "p", text: "Varje dag skickas tusentals mail ut från Netigates plattform med uppmaning att svara på en undersökning. Den “gamla” versionen av plattformen erbjöd bara enkel text och en länk för att komma till undersökningen." },
      { type: "p", text: "I den nya versionen pushade jag för att kunna erbjuda kunderna fler designmallar, vilket i sin tur skulle kunna höja svarsfrekvensen genom att mottagaren fann e-postmeddelandet mer trovärdigt och attraktivt." },
    ],
  },
  {
    slug: "quick-analysis-att-forse-anvandare-med-vardefulla-insikter",
    title: "Quick analysis – att förse användare med värdefulla insikter",
    categories: ["UX & UI-uppdrag"],
    summary: "Ett nytt sätt att snabbt visa Netigate-kunder de viktigaste insikterna ur sina undersökningar.",
    coverNote: "QA.png",
    body: [
      { type: "p", text: "Netigates kunder använder plattformen med målet att analysera och mäta resultat, för att sedan agera utifrån det. En av de största utmaningarna inom undersökningsplattformen var dock att användarna inte fick några djupare undersökningsinsikter eller några verktyg för hur undersökningsresultatet skulle tolkas." },
      { type: "p", text: "Målet med “Quick analysis” var att på ett snabbt och enkelt sätt förse användaren med de viktigaste insikterna för vad de gör bra och vad de bör prioritera för att förbättra." },
      { type: "h", text: "Projektets omfattning" },
      {
        type: "list",
        items: [
          "Konkurrentanalys",
          "Behovsanalys (intervjuer & kundcase – personas)",
          "Brainstorming, whiteboard- och pappersskisser",
          "Wireframes, test och intervjuer med stakeholders",
          "Prototyping & test",
          "Definiera krav och ärendespecifikation i Jira för utveckling",
        ],
      },
      { type: "p", text: "Idégenerering & whiteboardskisser, samt första utkast. Question ranking." },
    ],
  },
  {
    slug: "redesign-och-ombyggnation-av-netigates-undersokningsplattform",
    title: "Redesign och ombyggnation av Netigates undersökningsplattform",
    categories: ["UX & UI-uppdrag"],
    summary: "Från UX-konsult till UX Lead: hur Netigates plattform designades om från grunden, för 16 000+ användare.",
    coverNote: "netigate-white.png",
    body: [
      { type: "p", text: "Netigate är en ledande europeisk leverantör av molnbaserade tjänster för onlineundersökningar. Plattformen används av över 16 000 användare, både små organisationer och stora globala företag i alla branscher, inklusive många ledande företag runt om i världen som Electrolux, Ericsson, Vodafone och E.ON." },
      { type: "p", text: "Jag började som UX-konsult på Netigate och anställdes senare som företagets UX Lead. Här är en kort historia om redesignen och implementeringen av den nya plattformen." },
      { type: "h", text: "Definiera primära mål – effektkartläggning" },
      { type: "p", text: "Första steget för att förstå kärnverksamheten, användarna av plattformen och effektmålen för de kommande månaderna var att skapa en effektkarta, baserad på intervjuer med intressenter." },
      {
        type: "list",
        items: [
          "Varför? Mål?",
          "Sälj och paketering (kontolicenser etc.)",
          "Affärslösningar – aktörer och målgrupper",
          "“Vad?” – definiera de vanligaste användarna, deras syfte med att använda plattformen och hypoteser om hur vi ska sträva efter att uppfylla deras mål",
          "Konkurrenter och marknadsvärde – var “vill” Netigate befinna sig kopplat till prismodeller etc.",
        ],
      },
      { type: "p", text: "Wireframes och prototyper med post-it-lappar för att lämna feedback." },
      { type: "h", text: "Empathize, research & wireframing" },
      {
        type: "list",
        items: [
          "Konkurrensanalys",
          "Interna intervjuer med alla avdelningar: försäljning, marknadsföring, kundsupport, analyskonsulter, affärsutveckling etc.",
          "Skisser & wireframing",
        ],
      },
      { type: "h", text: "Test och finjustering av prototyper" },
      { type: "p", text: "Jag genomförde användbarhetstester med kunder baserat på klickbara prototyper i InVision." },
      { type: "p", text: "Prototyperna förfinades och uppdaterades baserat på de observationer, feedback och nya behov som samlades in." },
      { type: "h", text: "Resultat" },
      {
        type: "list",
        items: [
          "Mer intuitivt och modernare gränssnitt",
          "Vägledning och “empty state design” i onboardingen för att komma igång som ny användare",
          "Kontinuerlig och förbättrad feedback",
          "“Gränssnitts-rensning” med de mest väsentliga och använda funktionerna",
        ],
      },
      { type: "h", text: "Intern BETA" },
      { type: "p", text: "I betatest-fasen samlade jag feedback både från användbarhetstester och direktfeedback via en feedback-widget (Hotjar) i plattformen." },
      { type: "p", text: "En fysisk anslagstavla skapades för att segmentera feedbacken och skapa en tydligare förståelse för de viktigaste fokusområdena att jobba vidare med – och för att kommunicera vikten av att varje åsikt är viktig för ett större engagemang internt." },
      { type: "h", text: "Extern BETA" },
      { type: "p", text: "Jag var delaktig i sälj- och marknadsmaterial för att hitta kunder som var intresserade av att testa den nya beta-versionen, bland annat genom att ta fram text och bild till marknadsavdelningen för nyhetsbrev." },
      { type: "h", text: "Feedback-kanaler för insamling av kvalitativ och kvantitativ data" },
      {
        type: "list",
        items: [
          "Usability testing-sessioner",
          "Feedback-widget (knapp) inne i plattformen",
          "Fråga vid växling till “gamla” versionen",
          "Undersökning som skickades ut 1–2 månader efter att en kund fått tillgång till betaversionen",
        ],
      },
    ],
  },
  {
    slug: "styleguide-sketch-symbolbibliotek",
    title: "Styleguide & Sketch-symbolbibliotek",
    categories: ["UX & UI-uppdrag"],
    summary: "Ett komponentbibliotek från grunden i Sketch, som styleguide för designers och utvecklare.",
    coverNote: "Styleguide-900x461.png",
    body: [
      { type: "p", text: "Jag byggde upp ett symbolbibliotek från scratch i Sketch för att enkelt kunna återanvända komponenter oss UX/UI-designers emellan, men också som guidelines för hur och när olika grundläggande komponenter ska användas i plattformen – till utvecklarna." },
    ],
  },
  {
    slug: "tryckmaterial-till-mentalpiloterna",
    title: "Tryckmaterial till Mentalpiloterna",
    categories: ["Grafisk formgivning"],
    summary: "Marknadsföringsmaterial för en ideell förening som arbetar med ungas mentala hälsa.",
    coverNote: "Mentalpiloterna.png",
    body: [
      { type: "p", text: "Mentalpiloterna är en Malmö-baserad ideell förening som startades 2017." },
      { type: "p", text: "Deras mål är att skapa goda förutsättningar för barn och ungdomars mentala hälsa." },
      { type: "p", text: "Jag fick i uppdrag att designa tryckmaterial för att marknadsföra deras projekt." },
    ],
  },
  {
    slug: "energikampen-app-projekt-poc",
    title: "Energikampen – app-projekt (POC)",
    categories: ["UX & UI-uppdrag"],
    summary: "Proof of concept för en spelifierad energispar-app riktad till lågstadiebarn.",
    coverNote: "glad.png",
    body: [
      { type: "p", text: "Uppdrag från en digitalbyrå som omfattade att ta fram en proof of concept (POC) för en applikation som syftar till att främja energibesparande åtgärder." },
      { type: "p", text: "Kravställningen löd som följande: appen ska tas fram i spelformat, rikta sig till barn och ungdomar och främst användas i skolmiljö." },
      { type: "p", text: "Stegen för detta innefattade identifikation, konceptutveckling, marknadsvärde och paketering av POC i wireframes, dokumentation, design och prototyp." },
      { type: "p", text: "Temat för designprojektet var energibesparande åtgärder och att skapa en digital artefakt med syftet att främja smart energiförbrukning." },
      { type: "p", text: "Målgruppen för designen är barn i årskurs 1–3. Syftet var att använda gamification för att göra lärandet om hållbarhet roligt och lärorikt. Designen är anpassad för iPad i skolmiljö." },
      { type: "p", text: "Designprocessen utgick från Google Ventures designsprint, från idégenerering till proof of concept (klickbar prototyp), i följande sprintar:" },
      {
        type: "list",
        items: [
          "Identifikation",
          "Research / omvärldsbevakning",
          "Behovsanalys",
          "Idégenerering",
          "Skisser",
          "Illustration, design och prototyp",
        ],
      },
      { type: "quote", text: "“Mapping the problem” – effektkartläggning med det långsiktiga målet till höger, aktörer till vänster, samt hur de hänger ihop." },
      { type: "p", text: "Exempel på brister och nyckelpunkter som identifierades efter intervjuer och observationer:" },
      {
        type: "list",
        items: [
          "Eleverna känner brist på personligt ansvar, speciellt inför miljöfrågor",
          "EPA-metoden: enskilt, par, alla",
          "Viktigt att få föräldrar engagerade",
        ],
      },
      { type: "quote", text: "“Det är viktigt att jobba på ett varierande arbetssätt, då når man alla elever. Enskilt, i par och tillsammans. Den metoden heter EPA. Diskutera i små grupper samt redovisa muntligt / PowerPoint. Det flerstämmiga klassrummet (Olga Dysthe).” – klasslärare, årskurs 1–6" },
      { type: "quote", text: "“Det är viktigt att föräldrarna engagerar sig i sitt barns skolgång. Det är viktigt med trepartssamarbete – elev, föräldrar och lärare.” – klasslärare, årskurs 1–6" },
      { type: "h", text: "Idégenerering & skisser" },
      { type: "h", text: "Wireframes" },
      { type: "link", text: "Se prototypen (InVision)", href: "https://web.archive.org/web/20210121113721/https:/projects.invisionapp.com/share/BDBTBF34X#/screens/234902551_iPad_Portrait" },
    ],
  },
  {
    slug: "plan-for-eu-rapportering-i-handlaggarstod",
    title: "Plan för rapportering i EU-projekt",
    categories: ["UX & UI-uppdrag"],
    summary: "Automatiserade påminnelser och tydligare struktur för rapportering i EU-finansierade projekt.",
    coverNote: "plan-rapportering.png",
    body: [
      { type: "h", text: "Bakgrund" },
      { type: "p", text: "De som driver EU-projekt hade ett behov av att hålla koll på när man skulle in i systemet för att rapportera hur projektet går och registrera upparbetade kostnader. Det enda sättet var att antingen bli påmind av handläggaren på Tillväxtverket eller att titta i beslutsbrevet som skickades ut vid beslut om stöd – vilket kunde vara flera månader, eller år, tillbaka i tiden." },
      { type: "p", text: "Handläggarna la också mycket onödig tid på att behöva påminna projekten och att behöva använda en sidoordnad Excelfil för att se datum för samtliga projekt." },
      { type: "p", text: "I tillägg till behovsbilden fanns också EU-kravet enligt den fondgemensamma EU-förordningen: “Systemgenererade meddelanden till stödmottagarna när vissa åtgärder kan utföras.”" },
      {
        type: "list",
        items: [
          "Intervjuer",
          "Konceptskisser",
          "Prototyp och användningstester",
          "Workshops med olika intressenter för att enas kring behov och lösningar i handläggningssystemet (med olika fondförvaltare som Tillväxtverket, Interreg, Polisen och Migrationsverket), inklusive utdata som skickar vidare data till Europeiska kommissionen",
          "Iteration, iteration, iteration",
        ],
      },
      { type: "h", text: "Resultat" },
      {
        type: "list",
        items: [
          "Strukturerade datumfält för att skicka ut automatiserade påminnelser via mail, med logik (t.ex. att det inte ska gå ut mail på helgdagar)",
          "Händelselogg i “Mina sidor”",
        ],
      },
    ],
  },
  {
    slug: "utbetalning-eu-finansierade-medel",
    title: "Rapportering & utbetalning av EU-finansierade medel",
    categories: ["UX & UI-uppdrag"],
    summary: "Digitalisering av bilagor och förenklad redovisning för handläggning av utbetalningsansökningar.",
    coverNote: "image-267.png",
    body: [
      { type: "p", text: "För de som driver EU-finansierade projekt, samt för handläggning och ekonomigranskning av inkomna utbetalningsansökningar." },
      {
        type: "list",
        items: [
          "Digitalisering av bilagor",
          "Formulär: lägesrapportering",
          "Förenklad redovisning för personalkostnader",
        ],
      },
    ],
  },
  {
    slug: "inforandet-eu-fonder-polismyndigheten-migrationsverket",
    title: "Handläggningsstöd till Polismyndigheten & Migrationsverket",
    categories: ["UX & UI-uppdrag"],
    summary: "Införande av handläggningsstöd för tre EU-fonder inom Polismyndigheten och Migrationsverket.",
    coverNote: "polmig.png",
    body: [
      { type: "p", text: "Fonden för inre säkerhet 2021–2027 (Polismyndigheten)" },
      { type: "p", text: "Instrumentet för gränsförvaltning och viseringspolitik 2021–2027 (Polismyndigheten)" },
      { type: "p", text: "Asyl-, migrations- och integrationsfonden 2021–2027 (Migrationsverket)" },
    ],
  },
  {
    slug: "poster-hovstallet",
    title: "Poster till Hovstallet",
    categories: ["Grafisk formgivning"],
    summary: "Affischdesign för Hovstallet, framtagen i InDesign.",
    coverNote: "armens_musikkar.jpg",
    body: [
      { type: "h", text: "Poster till Hovstallet" },
      { type: "p", text: "InDesign" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jag jobbade med Marie under min tid som CPO på Netigate, och Marie är den bästa UX-lead som jag har jobbat med. Hon är snabb, noggrann, tar egna initiativ och har stor förståelse för vad uppgiften kräver. Marie var omtyckt av kollegor och enkel att samarbeta med.",
    name: "Peter",
    title: "CTO Netigate",
  },
  {
    quote:
      "Marie är en skicklig designer och därmed en fantastisk tillgång i ett designteam. Hon är mycket bra på att fånga upp abstrakta idéer till konkreta helhetslösningar. Hon är flexibel och har lätt för att jobba tvärfunktionellt – vilket också ledde till ett effektivt och smidigt samarbete mellan olika personer i olika avdelningar. Hon är också en skicklig copywriter. Som person är hon ödmjuk och omtänksam, vilket gör att hon är omtyckt av både kollegor, inhouse-kunder och på konsultuppdrag.",
    name: "Juta",
    title: "Marknadschef Compentus",
  },
  {
    quote:
      "Marie har under sin period varit en mycket uppskattad kollega som varit enkel att samarbeta med, visat en positiv och professionell inställning till sina arbetsuppgifter samt ett stort intresse för digitala medier i stort.",
    name: "Mårten",
    title: "VD True Friends",
  },
  {
    quote:
      "Marie gjorde ett utmärkt jobb här på Notar och var mycket populär hos våra anställda. Hon lär sig snabbt och är självgående och driven. Vid olika problem skötte hon sig oklanderligt och var inte rädd för att kavla upp ärmarna och lösa det hon stod inför. Hon jobbade organiserat och klarade galant den stress som ibland kan uppstå när man jobbar mot deadline.",
    name: "Elin",
    title: "Notar",
  },
  {
    quote:
      "Marie har på ett mycket bra sätt tagit ansvar för sina arbetsuppgifter och genomfört dessa på ett självständigt och ansvarsfullt sätt, lätt för att samarbeta mot ett gemensamt mål och har strukturerat arbetet på ett mycket bra sätt.",
    name: "Peter",
    title: "Försvarsmakten",
  },
  {
    quote:
      "Marie är lättsam att samarbeta med, hon arbetar självständigt och noggrant och tar stort ansvar för sina arbetsuppgifter. Hon är glad och utåtriktad och sätter sig snabbt in i nya arbetsuppgifter.",
    name: "Hans",
    title: "Uppsala Universitet",
  },
];

export type Client = {
  name: string;
  url: string;
};

export const clients: Client[] = [
  { name: "Tillväxtverket", url: "https://tillvaxtverket.se" },
  { name: "Netigate", url: "https://netigate.se" },
  { name: "Compentus", url: "https://compentus.se" },
  { name: "Notar", url: "https://notar.se" },
  { name: "Försvarsmakten", url: "https://forsvarsmakten.se" },
  { name: "Uppsala universitet", url: "https://uu.se" },
];

export const siteInfo = {
  name: "Marie Bäckström",
  tagline: "UX designer",
  email: "ux@marien.se",
  phone: "072-736 90 62",
  socialEmail: "marie.backstrom88@gmail.com",
  linkedin: "https://www.linkedin.com/in/marie-backstrom/",
};

export type ChatbotEntry = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

export const chatbotFaq: ChatbotEntry[] = [
  {
    id: "vad-gor-du",
    question: "Vad jobbar du med?",
    keywords: ["vad gör du", "jobbar du med", "vem är du", "om dig", "vad är du"],
    answer:
      "Jag är UX-designer med uppdrag inom bland annat UX-design, grafisk formgivning, illustration och rörlig grafik. Jag jobbar lika gärna med research och struktur som med visuellt uttryck.",
  },
  {
    id: "kunder",
    question: "Vilka har du jobbat med?",
    keywords: ["kund", "uppdragsgivare", "företag", "jobbat med", "referenser"],
    answer:
      "Jag har bland annat jobbat med Netigate, Compentus, Tillväxtverket, Försvarsmakten, Notar och Uppsala universitet.",
  },
  {
    id: "kontakt",
    question: "Hur når jag dig?",
    keywords: ["kontakt", "nå dig", "höra av", "mejl", "mail", "telefon", "ring", "hej"],
    answer: `Enklast är att mejla ${siteInfo.email} eller ringa ${siteInfo.phone} – eller gå till kontaktsidan.`,
  },
  {
    id: "stolt-projekt",
    question: "Vilket projekt är du mest stolt över?",
    keywords: ["stolt", "bästa projekt", "favoritprojekt", "höjdpunkt", "roligast"],
    answer:
      "Redesignen och ombyggnationen av Netigates undersökningsplattform – jag gick från UX-konsult till UX Lead och ledde omdesignen för en plattform med över 16 000 användare.",
  },
  {
    id: "kollegor",
    question: "Vad säger dina kollegor om dig?",
    keywords: ["kollega", "vad säger", "omdöme", "rekommendation", "referens om dig"],
    answer:
      "”Marie är den bästa UX-lead som jag har jobbat med. Hon är snabb, noggrann, tar egna initiativ och har stor förståelse för vad uppgiften kräver.” – Peter, CTO Netigate",
  },
  {
    id: "process",
    question: "Hur jobbar du?",
    keywords: ["process", "arbetssätt", "metod", "hur jobbar du", "tillvägagångssätt"],
    answer:
      "Oftast börjar jag med research och intervjuer, går vidare med wireframes och prototyper, testar med riktiga användare och finjusterar iterativt tillsammans med utvecklare och stakeholders.",
  },
  {
    id: "grafisk",
    question: "Gör du grafisk design också?",
    keywords: ["grafisk", "illustration", "logotyp", "print", "tryck", "banner"],
    answer:
      "Ja! Utöver UX/UI tar jag även uppdrag inom grafisk formgivning, illustration och rörlig grafik – bland annat logotyper, tryckmaterial och bannerdesign.",
  },
  {
    id: "pris",
    question: "Vad kostar ett uppdrag?",
    keywords: ["pris", "kostnad", "arvode", "offert", "timpris"],
    answer:
      "Det beror helt på uppdraget – hör av dig så pratar vi om vad du behöver och tar fram en offert.",
  },
];

export const chatbotFallback =
  "Bra fråga! Den kan jag inte svara på här – men skriv gärna till mig direkt, så svarar jag personligen.";
