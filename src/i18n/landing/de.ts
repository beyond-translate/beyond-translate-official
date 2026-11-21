import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: 'Auswahl & ganze Seite · Website-Regeln · Deine eigene Engine',
  status: 'Verfügbar für Chrome, Edge und Firefox.',
  stores: {
    label: 'Aus dem Store deines Browsers installieren',
  },
  kickers: {
    features: 'Funktionen',
    services: 'Engines',
    privacy: 'Datenschutz',
    release: 'Verfügbar',
    faq: 'FAQ',
  },
  tools: {
    language: 'Sprache',
    theme: 'Design wechseln',
  },
  preview: {
    url: 'fieldnotes.example/essay/bilingual-reading',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: 'Übersetzung · Deutsch',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      'In zwei Sprachen zu lesen verändert mehr als nur die Wörter, die man sieht. Es verlangsamt das Tempo, hält das Original nah und lässt die Bedeutung zwischen den Zeilen zur Ruhe kommen.',
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      'Eine gute Übersetzung ersetzt die Seite nicht. Sie steht neben ihr und ist bereit zu verschwinden, sobald du das Original zurückhaben möchtest.',
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation:
      'Es verlangsamt das Tempo, hält das Original nah und lässt die Bedeutung zwischen den Zeilen zur Ruhe kommen.',
    bubbleLabel: 'Ins Deutsche übersetzen',
    bilingual: 'Zweisprachig',
    translationOnly: 'Nur Übersetzung',
    translated: 'Übersetzt',
    selection: 'Auswahl',
    translatePage: 'Seite übersetzen',
    showOriginal: 'Original anzeigen',
  },
  features: {
    heading: 'Mehr als nur Übersetzung',
    intro:
      'Datenschutz, Website-Regeln und das Vokabelheft: Darin unterscheidet sich Beyond Translate am deutlichsten von anderen Übersetzungserweiterungen.',
    items: {
      privacy: {
        title: 'Datenschutz',
        body: 'Schlüssel bleiben auf deinem Gerät, Backups sind immer verschlüsselt, Quellseiten werden nie aufgezeichnet, und Texte gehen nur an den Dienst deiner Wahl.',
      },
      rules: {
        title: 'Website-Regeln',
        body: 'Geltungsbereich, Sprache, Prompt und automatische Übersetzung pro Website merken – mit integrierten Regeln für GitHub, Stack Overflow, Wikipedia und mehr.',
      },
      memory: {
        title: 'Vokabelheft und Archiv',
        body: 'Gespeicherte Wörter und Sätze landen im Vokabelheft; Seitenübersetzungen lassen sich archivieren und beim nächsten Öffnen sofort anzeigen.',
      },
      selection: {
        title: 'Markieren und übersetzen',
        body: 'Text markieren – die Übersetzung erscheint direkt daneben; einzelne Wörter zeigen zusätzlich Lautschrift, Wortart, Bedeutungen und Beispiele.',
      },
      compare: {
        title: 'Dienste vergleichen',
        body: 'Mehrere Übersetzungsdienste im Auswahl-Slot nebeneinander stellen, ihre Ergebnisse vergleichen und den Block speichern, der dir am besten gefällt.',
      },
      engine: {
        title: 'Deine eigene Engine',
        body: 'Rund 37 Modellanbieter-Presets über vier Protokolle, dazu Google, Bing und maschinelle Übersetzung aus der Cloud.',
      },
    },
    more: 'Außerdem: schwebende Kugel, Vorübersetzung, Schnellsuche und 25 Oberflächensprachen.',
  },
  services: {
    heading: 'Deine Engine, deine Wahl',
    intro: 'Keine Bindung an einen Anbieter. Nutze die kostenlosen Endpunkte oder bring deine eigenen Modelle mit.',
    stats: [
      { value: '≈37', label: 'Modellanbieter-Presets' },
      { value: '≈130', label: 'Zielsprachen' },
      { value: '25', label: 'Oberflächensprachen' },
      { value: '4', label: 'API-Protokolle' },
    ],
    body: 'Google- und Bing-Übersetzung funktionieren sofort ohne API-Schlüssel. Du kannst auch eigene Modellanbieter anbinden oder die offiziellen Übersetzungs-APIs von Google Cloud, Azure, Alibaba Cloud und Volcengine nutzen.',
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
    heading: 'Deine Worte gehen nur dorthin, wohin du willst',
    intro:
      'Übersetzen muss Text an einen Übersetzungsdienst senden. Mehr macht die Erweiterung damit nicht – Backups werden zwingend mit AES-256-GCM verschlüsselt, Klartext ist nicht einmal eine Option.',
    items: [
      {
        title: 'Schlüssel bleiben auf deinem Gerät',
        body: 'API-Schlüssel, Cloud-Access-Keys und Sync-Zugangsdaten werden nur lokal gespeichert und sind für Content-Skripte nicht erreichbar.',
      },
      {
        title: 'Backups müssen verschlüsselt sein',
        body: 'Einstellungen, Vokabelheft und Übersetzungsarchiv werden jeweils mit AES-256-GCM verschlüsselt und dann als Zip gepackt; auch die Cloud-Synchronisierung lädt nur dieses verschlüsselte Paket hoch. Der Datenschlüssel verlässt dein Gerät nie – geht er verloren, können selbst wir die Datei nicht öffnen.',
      },
      {
        title: 'Keine Browsing-Daten',
        body: 'Quellseiten werden nie aufgezeichnet, es gibt keine Hintergrundanalyse und keine Werbung. Wir wissen weder, was du liest, noch interessiert es uns.',
      },
    ],
    link: 'Sieh selbst, wie wir nicht auf dich schauen',
  },
  release: {
    heading: 'Installieren',
    intro: 'Beyond Translate ist für Chrome, Edge und Firefox verfügbar.',
    body: 'Wähle den Store deines Browsers, um die Erweiterung zu installieren; Installationsanleitung und Hilfedokumente bleiben synchron.',
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: 'Zum Hilfebereich',
    feedbackCta: 'Zum Feedback-Repository',
  },
  faq: {
    heading: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Wo kann ich die Erweiterung installieren?',
        answer:
          'Im Chrome Web Store, in den Microsoft Edge Add-ons oder bei Firefox Add-ons – danach die Erweiterung in der Symbolleiste anheften.',
      },
      {
        question: 'Brauche ich einen eigenen API-Schlüssel?',
        answer:
          'Nein. Die integrierten Google- und Bing-Endpunkte funktionieren ohne jede Konfiguration. Einen eigenen Schlüssel brauchst du nur, wenn du ein besseres Modell oder eine offizielle maschinelle Übersetzungs-API nutzen möchtest.',
      },
      {
        question: 'Werden beim Übersetzen meine Seiten hochgeladen?',
        answer:
          'Nur der Text, der übersetzt werden muss, wird an den von dir gewählten Dienst gesendet. Schlüssel und Sync-Zugangsdaten bleiben auf deinem Gerät, Backups sind verschlüsselt, und es wird kein Browserverlauf gesammelt.',
      },
      {
        question: 'Welche Browser werden unterstützt?',
        answer: 'Chromium-basierte Browser (Chrome 111+, Edge) und Firefox 136+ auf Manifest V3.',
      },
      {
        question: 'Gibt es kostenpflichtige Funktionen?',
        answer:
          'Auswahl- und Ganzseitenübersetzung sind kostenlos. Für Backup/Wiederherstellung und das Schreiben von Website-Regeln ist eine einmalige Lizenz nötig: Sobald der Verkauf startet, bezahlst du dort, reichst die Transaktionsnummer ein und aktivierst die Lizenz nach manueller Prüfung in der Erweiterung mit derselben E-Mail.',
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: 'Lies das ganze Web in deiner Sprache.',
    navLabel: 'Fußzeile',
    groups: [
      {
        title: 'Produkt',
        links: [
          { label: 'Funktionen', href: '#features' },
          { label: 'Datenschutz', href: '#privacy' },
          { label: 'Engines', href: '#services' },
        ],
      },
      {
        title: 'Hilfe',
        links: [
          { label: 'Hilfebereich', href: 'help/' },
          { label: 'Erste Schritte', href: 'help/getting-started/' },
          { label: 'Maschinelle Übersetzung', href: 'help/machine-translation/' },
          { label: 'FAQ', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界. Der Quellcode dieser Website steht unter der MIT-Lizenz.',
  },
};
