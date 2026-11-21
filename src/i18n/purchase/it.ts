import type { PurchaseStrings } from '../purchase';

export const purchase: PurchaseStrings = {
  meta: {
    title: 'Acquista una licenza Beyond Translate',
    description:
      "Acquista una licenza Beyond Translate una tantum con Alipay, WeChat Pay o USDT. Dopo la verifica manuale, la licenza arriva via email e si attiva nell'estensione.",
  },
  closed: {
    kicker: 'Licenza',
    title: 'Non ancora in vendita',
    body: "La licenza non è ancora in vendita. All'apertura delle vendite, questa pagina mostrerà prezzo, metodi di pagamento e modulo d'ordine.",
    feedbackCta: 'Segui il repository di feedback',
    helpCta: 'Leggi la documentazione',
  },
  entry: {
    heroCta: 'Acquista una licenza',
    footerLink: 'Acquista una licenza',
  },
  hero: {
    kicker: 'Licenza',
    title: 'Paghi una volta, la usi per sempre',
    intro:
      "La traduzione di base è gratuita. Backup/ripristino e scrittura delle regole per sito richiedono una licenza una tantum. Dopo la verifica manuale, l'email con la licenza arriva al tuo indirizzo di acquisto.",
  },
  price: {
    oneTime: 'Un acquisto una tantum, senza rinnovo automatico.',
    cnyLabel: 'CNY',
    usdtLabel: 'USDT',
    note: "Invia l'importo e usa la rete indicata in questa pagina.",
  },
  steps: {
    title: 'Come acquistare',
    intro: 'Non serve registrare un account.',
    items: [
      "Scegli un metodo di pagamento e paga l'importo indicato. I codici QR di Alipay e WeChat non contengono l'importo: inserisci {amount} manualmente.",
      "Dopo il pagamento, inserisci in questa pagina l'email di acquisto, il metodo di pagamento e il numero di transazione.",
      "Attendi la verifica manuale, di solito entro {hours} ore. Riceverai poi l'email di licenza pronta.",
      "Attiva nella sezione Licenza dell'estensione con la stessa email.",
    ],
  },
  payment: {
    title: 'Metodi di pagamento',
    intro: "Scegli un metodo di pagamento, poi torna su questa pagina per inviare l'ordine.",
    hint: "I codici di Alipay e WeChat Pay non contengono l'importo: inserisci {cny} manualmente dopo la scansione. Per USDT, invia {usdt} sulla stessa rete del codice; i fondi inviati sulla rete sbagliata non possono essere recuperati.",
    zoom: 'Ingrandisci il codice {method}',
    zoomHint: 'Tocca un codice per visualizzarlo da solo, più grande, così il telefono non inquadra quello accanto.',
    scan: {
      alipay: 'Apri Alipay, scegli Scansiona, poi inserisci {amount} manualmente dopo la scansione.',
      wechat: 'Apri WeChat, scegli Scansiona, poi inserisci {amount} manualmente dopo la scansione.',
      'usdt-trc20': "Scansiona con il wallet o copia l'indirizzo, poi invia {amount} sulla rete {network}.",
      'usdt-erc20': "Scansiona con il wallet o copia l'indirizzo, poi invia {amount} sulla rete {network}.",
    },
    close: 'Chiudi',
    copy: 'Copia indirizzo',
    copied: 'Copiato',
    copyFailed: "Copia non riuscita. Seleziona l'indirizzo e copialo manualmente.",
    qrLabel: 'Codice di pagamento {method} per {amount}',
  },
  paymentMethods: {
    alipay: 'Alipay',
    wechat: 'WeChat Pay',
    'usdt-trc20': 'USDT (TRC-20)',
    'usdt-erc20': 'USDT (ERC-20)',
  },
  form: {
    title: "Invia l'ordine",
    intro:
      "All'indirizzo di acquisto arriva l'email con la licenza, e lo stesso indirizzo serve per l'attivazione nell'estensione.",
    open: "Invia l'ordine",
    emailLabel: 'Email di acquisto',
    emailHint: "L'email con la licenza arriverà a questo indirizzo. Fino a 254 caratteri.",
    emailConfirmLabel: "Ripeti l'email di acquisto",
    emailConfirmHint: 'Inseriscila una seconda volta per evitare errori di battitura.',
    methodLegend: 'Metodo di pagamento',
    amountNote:
      "I codici QR di Alipay e WeChat non contengono l'importo. Inserisci {amount} manualmente al momento del pagamento.",
    transactionLabel: 'Numero di transazione',
    transactionHint: 'Usa 6–66 caratteri tra lettere, cifre, trattini bassi o trattini.',
    transactionHints: {
      alipay: "Il numero d'ordine nella ricevuta Alipay.",
      wechat: 'ID transazione nella ricevuta di WeChat Pay.',
      'usdt-trc20': 'Hash della transazione USDT (TxID).',
      'usdt-erc20': 'Hash della transazione USDT (TxID).',
    },
    turnstileLabel: 'Verifica umana',
    turnstileHint: "Completa la verifica prima di inviare l'ordine.",
    turnstileLoading: 'Caricamento della verifica umana…',
    turnstileFailed:
      'Impossibile caricare la verifica umana. Aggiorna la pagina e riprova, oppure ordina via email come descritto di seguito.',
    submit: "Invia l'ordine",
    submitting: 'Invio in corso…',
    requiredEmail: "Inserisci l'email di acquisto.",
    invalidEmail: 'Inserisci un indirizzo email valido (fino a 254 caratteri).',
    emailMismatch: 'I due indirizzi email non corrispondono.',
    requiredMethod: 'Scegli un metodo di pagamento.',
    requiredTransaction: 'Inserisci il numero di transazione.',
    invalidTransaction:
      'Il numero di transazione deve contenere 6–66 caratteri tra lettere, cifre, trattini bassi o trattini.',
    missingToken: 'Completa prima la verifica umana.',
    problemTitle: 'Invio non riuscito',
    supportFallback:
      "Se la verifica umana non si carica, invia la tua email di acquisto, il metodo di pagamento e il numero di transazione a {email} e gestiremo l'ordine manualmente.",
    noScript:
      "Il modulo d'ordine richiede JavaScript. Invia la tua email di acquisto, il metodo di pagamento e il numero di transazione a {email} e gestiremo l'ordine manualmente.",
  },
  success: {
    title: 'Ordine inviato',
    body: "Abbiamo ricevuto l'ordine di {email} e lo stiamo verificando manualmente.",
    emailLabel: "L'email con la licenza sarà inviata a",
    review: 'Di solito la verifica manuale richiede fino a {hours} ore.',
    waitEmail: "Una volta approvato, riceverai l'email di licenza pronta. Non inviare di nuovo lo stesso pagamento.",
    activate: "Poi attiva nella sezione Licenza dell'estensione con la stessa email.",
  },
  already: { title: 'Questo pagamento è già stato inviato' },
  errors: {
    invalidRequest: "Controlla l'email di acquisto e il numero di transazione.",
    originNotAllowed: "La configurazione del sito non è corretta. Contatta l'assistenza.",
    humanCheckFailed: 'La verifica umana non è riuscita. Aggiorna e riprova.',
    notOnSale: "Questa offerta non è più in vendita. Contatta l'assistenza.",
    methodUnavailable: 'Questo metodo di pagamento non è disponibile. Scegline un altro.',
    alreadySubmitted:
      "Questo numero di transazione ha già un ordine approvato. Attiva nell'estensione o contatta l'assistenza.",
    rateLimited: 'Troppe richieste. Riprova più tardi.',
    serverError: 'Il servizio non è disponibile. Riprova più tardi.',
    unavailable: "La rete non è disponibile. Riprova più tardi o contatta l'assistenza.",
    invalidResponse: "Il servizio ha restituito un risultato inatteso. Riprova più tardi o contatta l'assistenza.",
  },
  terms: {
    title: 'Cosa stai acquistando',
    items: [
      'Una licenza una tantum, senza rinnovo automatico.',
      "La licenza è legata all'email di acquisto e consente l'attivazione simultanea su un massimo di 5 dispositivi. Disattiva un dispositivo per liberare un posto.",
      'La licenza non scade.',
      "Le licenze non attivate possono essere rimborsate tramite l'assistenza; quelle attivate no.",
      "Per problemi di pagamento o attivazione, contatta l'assistenza all'indirizzo {email}.",
    ],
  },
  privacy: {
    title: 'Dati degli ordini e privacy',
    body: "Quando invii un ordine, l'email di acquisto, l'offerta, il metodo di pagamento, il numero di transazione e il token di verifica umana vengono inviati al servizio di licenza Beyond Translate per la verifica manuale e l'emissione della licenza. Questa pagina carica Cloudflare Turnstile per la verifica umana. I dati degli ordini non vengono usati per marketing e non entrano nell'estensione. Quando le vendite sono chiuse, questa pagina non carica Turnstile.",
  },
  support: {
    title: 'Serve aiuto?',
    body: "Per problemi di pagamento, ordine o attivazione, scrivi a {email} allegando l'email di acquisto e il numero di transazione.",
  },
};
