import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: 'Sélection et page entière · Règles par site · Votre propre moteur',
  status: 'Disponible sur Chrome, Edge et Firefox.',
  stores: {
    label: 'Installer depuis la boutique de votre navigateur',
  },
  kickers: {
    features: 'Fonctionnalités',
    services: 'Moteurs',
    privacy: 'Confidentialité',
    release: 'Disponible',
    faq: 'FAQ',
  },
  tools: {
    language: 'Langue',
    theme: 'Changer de thème',
  },
  preview: {
    url: 'fieldnotes.example/essay/bilingual-reading',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: 'Traduction · Français',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      'Lire dans deux langues change plus que les mots que l’on voit. Cela ralentit le rythme, garde l’original à portée de main et laisse le sens se déposer entre les lignes.',
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      'Une bonne traduction ne remplace pas la page. Elle se tient à côté, prête à disparaître dès que vous voulez retrouver l’original.',
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation:
      'Cela ralentit le rythme, garde l’original à portée de main et laisse le sens se déposer entre les lignes.',
    bubbleLabel: 'Traduire vers le français',
    bilingual: 'Bilingue',
    translationOnly: 'Traduction seule',
    translated: 'Traduit',
    selection: 'Traduction par sélection',
    translatePage: 'Traduire la page',
    showOriginal: 'Afficher l’original',
  },
  features: {
    heading: 'Bien plus que de la traduction',
    intro:
      'Confidentialité, règles par site et carnet de vocabulaire : c’est là que Beyond Translate se distingue le plus des autres extensions de traduction.',
    items: {
      privacy: {
        title: 'Confidentialité',
        body: 'Vos clés restent sur votre appareil, les sauvegardes sont toujours chiffrées, les pages sources ne sont jamais enregistrées et le texte n’est envoyé qu’au service que vous choisissez.',
      },
      rules: {
        title: 'Règles par site',
        body: 'Mémorisez la portée, la langue, le prompt et la traduction automatique pour chaque site, avec des règles intégrées pour GitHub, Stack Overflow, Wikipedia et bien d’autres.',
      },
      memory: {
        title: 'Carnet et archive',
        body: 'Les mots et phrases sélectionnés rejoignent le carnet ; les traductions de pages peuvent être archivées et s’affichent instantanément à la prochaine ouverture.',
      },
      selection: {
        title: 'Sélectionnez et traduisez',
        body: 'Sélectionnez du texte et la traduction apparaît juste à côté ; pour un mot isolé, vous obtenez aussi la phonétique, la nature grammaticale, les sens et des exemples.',
      },
      compare: {
        title: 'Comparez les services',
        body: 'Placez plusieurs services de traduction dans l’emplacement de sélection, comparez leurs résultats côte à côte et enregistrez le bloc de votre choix.',
      },
      engine: {
        title: 'Votre propre moteur',
        body: 'Environ 37 fournisseurs de modèles prédéfinis sur quatre protocoles, ainsi que Google, Bing et la traduction automatique des fournisseurs cloud.',
      },
    },
    more: 'Comprend aussi une bulle flottante, la pré-traduction, la recherche rapide et 25 langues d’interface.',
  },
  services: {
    heading: 'Votre moteur, votre choix',
    intro: 'Sans dépendance. Utilisez les services gratuits intégrés, ou vos propres modèles.',
    stats: [
      { value: '≈37', label: 'fournisseurs de modèles prédéfinis' },
      { value: '≈130', label: 'langues cibles' },
      { value: '25', label: 'langues d’interface' },
      { value: '4', label: 'protocoles d’API' },
    ],
    body: 'La traduction automatique Google et Bing fonctionne dès l’installation, sans clé API. Vous pouvez aussi connecter vos propres fournisseurs de modèles, ou les API officielles de traduction automatique de Google Cloud, Azure, Alibaba Cloud et Volcengine.',
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
    heading: 'Vos mots ne vont que là où vous le décidez',
    intro:
      'La traduction doit envoyer le texte à un service de traduction. C’est tout ce que l’extension en fait : les sauvegardes sont chiffrées d’office en AES-256-GCM, et le texte en clair n’est même pas une option.',
    items: [
      {
        title: 'Vos clés restent sur votre appareil',
        body: 'Les clés API, les clés d’accès cloud et les identifiants de synchronisation sont stockés localement et ne sont pas exposés aux scripts de contenu.',
      },
      {
        title: 'Les sauvegardes sont toujours chiffrées',
        body: 'Les réglages, le carnet et l’archive de pages sont chacun chiffrés avec AES-256-GCM, puis regroupés dans un fichier zip ; la synchronisation cloud n’envoie que ce paquet chiffré. La clé de données ne quitte jamais votre appareil : perdez-la et même nous ne pourrons pas ouvrir le fichier.',
      },
      {
        title: 'Aucune donnée de navigation collectée',
        body: 'Les pages sources ne sont jamais enregistrées, il n’y a ni analyse d’audience en arrière-plan ni publicité. Ce que vous lisez ne nous regarde pas — et nous ne cherchons pas à le savoir.',
      },
    ],
    link: 'Voyez comment nous ne vous regardons pas',
  },
  release: {
    heading: 'Installer',
    intro: 'Beyond Translate est disponible sur Chrome, Edge et Firefox.',
    body: 'Choisissez la boutique de votre navigateur pour installer l’extension ; les étapes d’installation et la documentation d’aide restent synchronisées.',
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: 'Parcourir le centre d’aide',
    feedbackCta: 'Ouvrir le dépôt de retours',
  },
  faq: {
    heading: 'Questions fréquentes',
    items: [
      {
        question: 'Où puis-je l’installer ?',
        answer:
          'Installez-la depuis le Chrome Web Store, les modules complémentaires Microsoft Edge ou les modules complémentaires Firefox, puis épinglez l’extension à la barre d’outils.',
      },
      {
        question: 'Dois-je fournir ma propre clé API ?',
        answer:
          'Non. Les services Google et Bing intégrés fonctionnent sans aucune configuration. Ajoutez votre propre clé uniquement si vous voulez un meilleur modèle ou une API officielle de traduction automatique.',
      },
      {
        question: 'La traduction envoie-t-elle mes pages quelque part ?',
        answer:
          'Seul le texte à traduire est envoyé au service que vous choisissez. Les clés et les identifiants de synchronisation restent sur votre appareil, les sauvegardes sont chiffrées et aucun historique de navigation n’est collecté.',
      },
      {
        question: 'Quels navigateurs sont pris en charge ?',
        answer: 'Les navigateurs basés sur Chromium (Chrome 111+, Edge) et Firefox 136+, sur Manifest V3.',
      },
      {
        question: 'Existe-t-il des fonctions payantes ?',
        answer:
          'La traduction par sélection et la traduction de pages entières sont gratuites. La sauvegarde et la restauration, ainsi que l’écriture de règles par site, nécessitent une licence à paiement unique : lorsque la page d’achat sera ouverte, payez sur place, soumettez le numéro de transaction, puis, après examen manuel, activez la licence dans l’extension avec l’e-mail d’achat.',
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: 'Lisez tout le web dans votre langue.',
    navLabel: 'Pied de page',
    groups: [
      {
        title: 'Produit',
        links: [
          { label: 'Fonctionnalités', href: '#features' },
          { label: 'Confidentialité', href: '#privacy' },
          { label: 'Moteurs', href: '#services' },
        ],
      },
      {
        title: 'Aide',
        links: [
          { label: 'Centre d’aide', href: 'help/' },
          { label: 'Premiers pas', href: 'help/getting-started/' },
          { label: 'Traduction automatique', href: 'help/machine-translation/' },
          { label: 'FAQ', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界. Le code source du site est publié sous licence MIT.',
  },
};
