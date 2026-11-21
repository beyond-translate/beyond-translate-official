import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: 'Selezione e pagina intera · Regole per sito · Il tuo motore',
  status: 'Disponibile su Chrome, Edge e Firefox.',
  stores: {
    label: 'Installa dallo store del tuo browser',
  },
  kickers: {
    features: 'Funzionalità',
    services: 'Motori',
    privacy: 'Privacy',
    release: 'Disponibile',
    faq: 'FAQ',
  },
  tools: {
    language: 'Lingua',
    theme: 'Cambia tema',
  },
  preview: {
    url: 'fieldnotes.example/essay/bilingual-reading',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: 'Traduzione · Italiano',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      "Leggere in due lingue cambia più delle parole che vedi. Rallenta il ritmo, tiene l'originale a portata di mano e lascia che il significato si depositi tra le righe.",
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      "Una buona traduzione non sostituisce la pagina. Le sta accanto, pronta a sparire nel momento in cui vuoi ritrovare l'originale.",
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation:
      "Rallenta il ritmo, tiene l'originale a portata di mano e lascia che il significato si depositi tra le righe.",
    bubbleLabel: 'Traduci in italiano',
    bilingual: 'Bilingue',
    translationOnly: 'Solo traduzione',
    translated: 'Tradotta',
    selection: 'Selezione',
    translatePage: 'Traduci pagina',
    showOriginal: 'Mostra originale',
  },
  features: {
    heading: 'Oltre la traduzione',
    intro:
      'Privacy, regole per sito e blocco note: è qui che Beyond Translate si distingue di più dalle altre estensioni di traduzione.',
    items: {
      privacy: {
        title: 'Privacy',
        body: 'Le chiavi restano sul tuo dispositivo, i backup sono sempre crittografati, le pagine di origine non vengono mai registrate e il testo va solo al servizio che scegli.',
      },
      rules: {
        title: 'Regole per sito',
        body: 'Ricorda ambito, lingua, prompt e traduzione automatica per ogni sito, con regole integrate per GitHub, Stack Overflow, Wikipedia e altri.',
      },
      memory: {
        title: 'Blocco note e archivio',
        body: 'Le parole e le frasi salvate restano nel blocco note; le traduzioni delle pagine possono essere archiviate e mostrate subito la volta successiva.',
      },
      selection: {
        title: 'Seleziona e traduci',
        body: 'Seleziona il testo e la traduzione compare accanto; per le singole parole vedi anche fonetica, parti del discorso, significati ed esempi.',
      },
      compare: {
        title: 'Confronta i servizi',
        body: 'Inserisci più servizi di traduzione nello slot di selezione e confronta i risultati; salva il blocco che preferisci.',
      },
      engine: {
        title: 'Il tuo motore',
        body: 'Circa 37 provider di modelli preimpostati su quattro protocolli, più Google, Bing e la traduzione automatica cloud.',
      },
    },
    more: "Include anche la sfera flottante, la pre-traduzione, la ricerca rapida e 25 lingue dell'interfaccia.",
  },
  services: {
    heading: 'Il motore lo scegli tu',
    intro: 'Nessun vincolo. Usa gli endpoint gratuiti o porta i tuoi modelli.',
    stats: [
      { value: '≈37', label: 'provider di modelli preimpostati' },
      { value: '≈130', label: 'lingue di destinazione' },
      { value: '25', label: "lingue dell'interfaccia" },
      { value: '4', label: 'protocolli API' },
    ],
    body: 'La traduzione automatica di Google e Bing funziona subito, senza chiave API. Puoi anche collegare i tuoi provider di modelli o le API ufficiali di Google Cloud, Azure, Alibaba Cloud e Volcengine.',
    chips: [
      'OpenAI Chat Completions',
      'Anthropic Messages',
      'Gemini',
      'Google Translate',
      'Bing Translate',
      'Google Cloud Translation',
      'Azure Translator',
      'Alibaba Cloud MT',
      'Volcengine MT',
    ],
  },
  privacy: {
    heading: 'Le tue parole vanno solo dove scegli tu',
    intro:
      "La traduzione deve inviare il testo a un servizio di traduzione. È tutto ciò che l'estensione fa con quel testo: i backup passano obbligatoriamente per AES-256-GCM e il testo in chiaro non è nemmeno un'opzione.",
    items: [
      {
        title: 'Le chiavi restano sul tuo dispositivo',
        body: 'Le chiavi API, le chiavi di accesso cloud e le credenziali di sincronizzazione sono salvate localmente e non sono esposte agli script di contenuto.',
      },
      {
        title: 'I backup devono essere crittografati',
        body: 'Impostazioni, blocco note e archivio delle pagine sono crittografati ciascuno con AES-256-GCM, poi impacchettati in uno zip; la sincronizzazione cloud carica solo quel pacchetto crittografato. La chiave dei dati non lascia mai il tuo dispositivo: se la perdi, nemmeno noi possiamo aprire il file.',
      },
      {
        title: 'Nessun dato di navigazione raccolto',
        body: 'Le pagine di origine non vengono mai registrate, non ci sono analisi in background né pubblicità. Non sappiamo, né ci interessa, cosa leggi.',
      },
    ],
    link: 'Scopri come non ti guardiamo',
  },
  release: {
    heading: 'Installa',
    intro: 'Beyond Translate è disponibile su Chrome, Edge e Firefox.',
    body: "Scegli lo store del tuo browser per installare l'estensione; le istruzioni di installazione e la documentazione di aiuto restano allineate.",
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: 'Sfoglia il centro assistenza',
    feedbackCta: 'Apri il repository di feedback',
  },
  faq: {
    heading: 'Domande frequenti',
    items: [
      {
        question: 'Dove posso installarla?',
        answer:
          "Installala dal Chrome Web Store, da Microsoft Edge Add-ons o da Firefox Add-ons, poi aggiungi l'estensione alla barra degli strumenti.",
      },
      {
        question: 'Serve una chiave API personale?',
        answer:
          "No. Gli endpoint integrati di Google e Bing funzionano senza alcuna configurazione. Aggiungi la tua chiave solo quando vuoi un modello migliore o un'API ufficiale di traduzione automatica.",
      },
      {
        question: 'La traduzione carica i contenuti delle mie pagine?',
        answer:
          'Viene inviato solo il testo da tradurre al servizio che scegli. Le chiavi e le credenziali di sincronizzazione restano sul tuo dispositivo, i backup sono crittografati e nessuna cronologia di navigazione viene raccolta.',
      },
      {
        question: 'Quali browser sono supportati?',
        answer: 'Browser basati su Chromium (Chrome 111+, Edge) e Firefox 136+, su Manifest V3.',
      },
      {
        question: 'Ci sono funzioni a pagamento?',
        answer:
          "La selezione e la traduzione dell'intera pagina sono gratuite. Backup/ripristino e la scrittura delle regole per sito richiedono una licenza una tantum: quando la pagina di acquisto sarà aperta, paga lì, invia il numero di transazione e, dopo la verifica manuale, attivala nell'estensione con l'email di acquisto.",
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: 'Leggi tutto il web nella tua lingua.',
    navLabel: 'Piè di pagina',
    groups: [
      {
        title: 'Prodotto',
        links: [
          { label: 'Funzionalità', href: '#features' },
          { label: 'Privacy', href: '#privacy' },
          { label: 'Motori', href: '#services' },
        ],
      },
      {
        title: 'Assistenza',
        links: [
          { label: 'Centro assistenza', href: 'help/' },
          { label: 'Primi passi', href: 'help/getting-started/' },
          { label: 'Traduzione automatica', href: 'help/machine-translation/' },
          { label: 'FAQ', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界. Il codice sorgente del sito è open source con licenza MIT.',
  },
};
