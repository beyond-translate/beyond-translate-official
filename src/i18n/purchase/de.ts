import type { PurchaseStrings } from '../purchase';

export const purchase: PurchaseStrings = {
  meta: {
    title: 'Beyond-Translate-Lizenz kaufen',
    description:
      'Kaufe eine einmalige Beyond-Translate-Lizenz per Alipay, WeChat Pay oder USDT. Nach manueller Prüfung kommt die Lizenz per E-Mail und wird in der Erweiterung aktiviert.',
  },
  closed: {
    kicker: 'Lizenz',
    title: 'Noch nicht im Verkauf',
    body: 'Die Lizenz ist noch nicht im Verkauf. Sobald der Verkauf startet, erscheinen hier Preis, Zahlungsmethoden und Bestellformular.',
    feedbackCta: 'Dem Feedback-Repository folgen',
    helpCta: 'Hilfedokumentation lesen',
  },
  entry: {
    heroCta: 'Lizenz kaufen',
    footerLink: 'Lizenz kaufen',
  },
  hero: {
    kicker: 'Lizenz',
    title: 'Einmal kaufen, dauerhaft nutzen',
    intro:
      'Die Basisübersetzung ist kostenlos. Für Backup/Wiederherstellung und das Schreiben von Website-Regeln ist eine einmalige Lizenz nötig. Nach manueller Prüfung geht die Lizenz-E-Mail an deine Kaufadresse.',
  },
  price: {
    oneTime: 'Einmaliger Kauf ohne automatische Verlängerung.',
    cnyLabel: 'CNY',
    usdtLabel: 'USDT',
    note: 'Sende den angezeigten Betrag und nutze das auf dieser Seite angegebene Netzwerk.',
  },
  steps: {
    title: 'So kaufst du',
    intro: 'Eine Registrierung ist nicht nötig.',
    items: [
      'Wähle eine Zahlungsmethode und zahle den angezeigten Betrag. Die QR-Codes von Alipay und WeChat enthalten keinen Betrag, gib {amount} also manuell ein.',
      'Trage nach der Zahlung auf dieser Seite deine Kauf-E-Mail, die Zahlungsmethode und die Transaktionsnummer ein.',
      'Warte auf die manuelle Prüfung, in der Regel innerhalb von {hours} Stunden. Danach erhältst du die E-Mail „Lizenz bereit“.',
      'Aktiviere die Lizenz dann im Lizenzbereich der Erweiterung mit derselben E-Mail.',
    ],
  },
  payment: {
    title: 'Zahlungsmethoden',
    intro: 'Wähle eine Zahlungsmethode und kehre danach zu dieser Seite zurück, um die Bestellung abzuschicken.',
    hint: 'Die QR-Codes von Alipay und WeChat Pay enthalten keinen Betrag, gib {cny} nach dem Scannen manuell ein. Für USDT sende {usdt} im selben Netzwerk wie der Code; auf dem falschen Netzwerk gesendete Beträge können nicht wiederhergestellt werden.',
    zoom: '{method}-Code vergrößern',
    zoomHint:
      'Klicke auf einen Code, um ihn einzeln und größer anzuzeigen, damit dein Handy nicht den benachbarten Code erfasst.',
    scan: {
      alipay: 'Öffne Alipay, wähle „Scannen“ und gib nach dem Scan {amount} manuell ein.',
      wechat: 'Öffne WeChat, wähle „Scannen“ und gib nach dem Scan {amount} manuell ein.',
      'usdt-trc20': 'Scanne mit deiner Wallet oder kopiere die Adresse und sende dann {amount} im {network}-Netzwerk.',
      'usdt-erc20': 'Scanne mit deiner Wallet oder kopiere die Adresse und sende dann {amount} im {network}-Netzwerk.',
    },
    close: 'Schließen',
    copy: 'Adresse kopieren',
    copied: 'Kopiert',
    copyFailed: 'Kopieren fehlgeschlagen. Markiere die Adresse und kopiere sie manuell.',
    qrLabel: '{method}-Zahlungscode über {amount}',
  },
  paymentMethods: {
    alipay: 'Alipay',
    wechat: 'WeChat Pay',
    'usdt-trc20': 'USDT (TRC-20)',
    'usdt-erc20': 'USDT (ERC-20)',
  },
  form: {
    title: 'Bestellung abschicken',
    intro:
      'Die E-Mail-Adresse aus dem Kauf erhält deine Lizenz-E-Mail und muss auch zur Aktivierung in der Erweiterung verwendet werden.',
    open: 'Bestellung abschicken',
    emailLabel: 'Kauf-E-Mail',
    emailHint: 'Die Lizenz-E-Mail geht an diese Adresse. Bis zu 254 Zeichen.',
    emailConfirmLabel: 'Kauf-E-Mail wiederholen',
    emailConfirmHint: 'Gib sie ein zweites Mal ein, um Tippfehler zu vermeiden.',
    methodLegend: 'Zahlungsmethode',
    amountNote: 'Die QR-Codes von Alipay und WeChat enthalten keinen Betrag. Gib beim Bezahlen {amount} manuell ein.',
    transactionLabel: 'Transaktionsnummer',
    transactionHint: 'Verwende 6–66 Buchstaben, Ziffern, Unterstriche oder Bindestriche.',
    transactionHints: {
      alipay: 'Die Bestellnummer in der Alipay-Abrechnung.',
      wechat: 'Die Transaktions-ID in der WeChat-Pay-Abrechnung.',
      'usdt-trc20': 'Der Transaktions-Hash (TxID) der USDT-Überweisung.',
      'usdt-erc20': 'Der Transaktions-Hash (TxID) der USDT-Überweisung.',
    },
    turnstileLabel: 'Menschliche Überprüfung',
    turnstileHint: 'Schließe die Überprüfung ab, bevor du die Bestellung abschickst.',
    turnstileLoading: 'Menschliche Überprüfung wird geladen…',
    turnstileFailed:
      'Die menschliche Überprüfung konnte nicht geladen werden. Lade die Seite neu und versuche es erneut oder bestelle wie unten beschrieben per E-Mail.',
    submit: 'Bestellung abschicken',
    submitting: 'Wird gesendet…',
    requiredEmail: 'Gib deine Kauf-E-Mail ein.',
    invalidEmail: 'Gib eine gültige E-Mail-Adresse ein (bis zu 254 Zeichen).',
    emailMismatch: 'Die beiden E-Mail-Adressen stimmen nicht überein.',
    requiredMethod: 'Wähle eine Zahlungsmethode.',
    requiredTransaction: 'Gib die Transaktionsnummer ein.',
    invalidTransaction:
      'Die Transaktionsnummer muss aus 6–66 Buchstaben, Ziffern, Unterstrichen oder Bindestrichen bestehen.',
    missingToken: 'Schließe zuerst die menschliche Überprüfung ab.',
    problemTitle: 'Übermittlung fehlgeschlagen',
    supportFallback:
      'Wenn die menschliche Überprüfung nicht geladen werden kann, sende deine Kauf-E-Mail, Zahlungsmethode und Transaktionsnummer an {email}; wir bearbeiten die Bestellung dann manuell.',
    noScript:
      'Das Bestellformular benötigt JavaScript. Sende deine Kauf-E-Mail, Zahlungsmethode und Transaktionsnummer an {email}; wir bearbeiten die Bestellung dann manuell.',
  },
  success: {
    title: 'Bestellung eingegangen',
    body: 'Wir haben die Bestellung für {email} erhalten und prüfen sie manuell.',
    emailLabel: 'Die Lizenz-E-Mail geht an',
    review: 'Die manuelle Prüfung dauert in der Regel bis zu {hours} Stunden.',
    waitEmail: 'Nach der Freigabe erhältst du die E-Mail „Lizenz bereit“. Reiche dieselbe Zahlung nicht erneut ein.',
    activate: 'Aktiviere die Lizenz anschließend im Lizenzbereich der Erweiterung mit derselben E-Mail.',
  },
  already: { title: 'Diese Zahlung wurde bereits eingereicht' },
  errors: {
    invalidRequest: 'Prüfe die Kauf-E-Mail und die Transaktionsnummer.',
    originNotAllowed: 'Die Website-Konfiguration ist fehlerhaft. Wende dich an den Support.',
    humanCheckFailed: 'Die menschliche Überprüfung ist fehlgeschlagen. Lade die Seite neu und versuche es erneut.',
    notOnSale: 'Dieses Angebot ist nicht mehr im Verkauf. Wende dich an den Support.',
    methodUnavailable: 'Diese Zahlungsmethode ist nicht verfügbar. Wähle eine andere.',
    alreadySubmitted:
      'Zu dieser Transaktionsnummer gibt es bereits eine freigegebene Bestellung. Aktiviere die Lizenz in der Erweiterung oder wende dich an den Support.',
    rateLimited: 'Zu viele Anfragen. Versuche es später erneut.',
    serverError: 'Der Dienst ist vorübergehend nicht verfügbar. Versuche es später erneut.',
    unavailable: 'Das Netzwerk ist nicht verfügbar. Versuche es später erneut oder wende dich an den Support.',
    invalidResponse:
      'Der Dienst hat ein unerwartetes Ergebnis zurückgegeben. Versuche es später erneut oder wende dich an den Support.',
  },
  terms: {
    title: 'Was du kaufst',
    items: [
      'Eine einmalige Lizenz ohne automatische Verlängerung.',
      'Die Lizenz ist an die Kauf-E-Mail gebunden und erlaubt bis zu 5 gleichzeitige Geräteaktivierungen. Deaktiviere ein Gerät, um einen Platz freizugeben.',
      'Die Lizenz läuft nicht ab.',
      'Nicht aktivierte Lizenzen können über den Support erstattet werden; aktivierte Lizenzen sind von der Erstattung ausgeschlossen.',
      'Wende dich bei Zahlungs- oder Aktivierungsproblemen an {email}.',
    ],
  },
  privacy: {
    title: 'Bestelldaten und Datenschutz',
    body: 'Wenn du eine Bestellung abschickst, werden deine Kauf-E-Mail, das Angebot, die Zahlungsmethode, die Transaktionsnummer und das Token zur menschlichen Überprüfung an den Lizenzdienst von Beyond Translate übermittelt, um die Bestellung manuell zu prüfen und die Lizenz auszustellen. Diese Seite lädt Cloudflare Turnstile für die menschliche Überprüfung. Bestelldaten werden nicht für Marketing verwendet und gelangen nicht in die Erweiterung. Ist der Verkauf geschlossen, lädt diese Seite Turnstile nicht.',
  },
  support: {
    title: 'Brauchst du Hilfe?',
    body: 'Bei Problemen mit Zahlung, Bestellung oder Aktivierung schreibe eine E-Mail an {email} mit deiner Kauf-E-Mail und der Transaktionsnummer.',
  },
};
