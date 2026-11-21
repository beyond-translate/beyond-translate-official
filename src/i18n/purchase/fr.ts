import type { PurchaseStrings } from '../purchase';

export const purchase: PurchaseStrings = {
  meta: {
    title: 'Acheter une licence Beyond Translate',
    description:
      'Achetez une licence Beyond Translate à paiement unique par Alipay, WeChat Pay ou USDT. Après un examen manuel, la licence vous parvient par e-mail et s’active dans l’extension.',
  },
  closed: {
    kicker: 'Licence',
    title: 'Pas encore en vente',
    body: 'La licence n’est pas encore en vente. À l’ouverture des ventes, cette page affichera le prix, les moyens de paiement et le formulaire de commande.',
    feedbackCta: 'Suivre le dépôt de retours',
    helpCta: 'Lire la documentation',
  },
  entry: {
    heroCta: 'Acheter une licence',
    footerLink: 'Acheter une licence',
  },
  hero: {
    kicker: 'Licence',
    title: 'Un seul achat, pour toujours',
    intro:
      'La traduction de base est gratuite. La sauvegarde et la restauration, ainsi que l’écriture des règles par site, nécessitent une licence à paiement unique. Après un examen manuel, l’e-mail de licence est envoyé à votre adresse d’achat.',
  },
  price: {
    oneTime: 'Un achat unique, sans renouvellement automatique.',
    cnyLabel: 'CNY',
    usdtLabel: 'USDT',
    note: 'Envoyez le montant indiqué et utilisez le réseau affiché sur cette page.',
  },
  steps: {
    title: 'Comment acheter',
    intro: 'Aucune création de compte n’est nécessaire.',
    items: [
      'Choisissez un moyen de paiement et réglez le montant affiché. Les QR codes Alipay et WeChat ne comportent pas de montant : saisissez {amount} manuellement.',
      'Après le paiement, renseignez sur cette page votre e-mail d’achat, le moyen de paiement et le numéro de transaction.',
      'Attendez l’examen manuel, généralement sous {hours} heures. Vous recevrez ensuite l’e-mail confirmant que la licence est prête.',
      'Activez ensuite la licence dans la section Licence de l’extension, avec le même e-mail.',
    ],
  },
  payment: {
    title: 'Moyens de paiement',
    intro: 'Choisissez un moyen de paiement, puis revenez sur cette page pour soumettre la commande.',
    hint: 'Les codes Alipay et WeChat Pay ne comportent pas de montant : saisissez {cny} manuellement après avoir scanné. Pour USDT, envoyez {usdt} sur le même réseau que le code ; les fonds envoyés sur un mauvais réseau ne peuvent pas être récupérés.',
    zoom: 'Agrandir le code {method}',
    zoomHint:
      'Cliquez sur un code pour l’afficher seul, en plus grand, afin que votre téléphone ne scanne pas celui d’à côté.',
    scan: {
      alipay: 'Ouvrez Alipay, choisissez Scanner, puis saisissez {amount} manuellement après le scan.',
      wechat: 'Ouvrez WeChat, choisissez Scanner, puis saisissez {amount} manuellement après le scan.',
      'usdt-trc20':
        'Scannez avec votre portefeuille ou copiez l’adresse, puis envoyez {amount} sur le réseau {network}.',
      'usdt-erc20':
        'Scannez avec votre portefeuille ou copiez l’adresse, puis envoyez {amount} sur le réseau {network}.',
    },
    close: 'Fermer',
    copy: 'Copier l’adresse',
    copied: 'Copié',
    copyFailed: 'La copie a échoué. Sélectionnez l’adresse et copiez-la manuellement.',
    qrLabel: 'Code de paiement {method} de {amount}',
  },
  paymentMethods: {
    alipay: 'Alipay',
    wechat: 'WeChat Pay',
    'usdt-trc20': 'USDT (TRC-20)',
    'usdt-erc20': 'USDT (ERC-20)',
  },
  form: {
    title: 'Soumettre la commande',
    intro: 'L’e-mail d’achat reçoit l’e-mail de licence et doit aussi servir à l’activation dans l’extension.',
    open: 'Soumettre la commande',
    emailLabel: 'E-mail d’achat',
    emailHint: 'L’e-mail de licence sera envoyé à cette adresse. 254 caractères maximum.',
    emailConfirmLabel: 'Confirmez l’e-mail d’achat',
    emailConfirmHint: 'Saisissez-le une seconde fois pour éviter les fautes de frappe.',
    methodLegend: 'Moyen de paiement',
    amountNote:
      'Les QR codes Alipay et WeChat ne comportent pas de montant. Saisissez {amount} manuellement au moment de payer.',
    transactionLabel: 'Numéro de transaction',
    transactionHint: 'Utilisez 6 à 66 lettres, chiffres, tirets bas ou traits d’union.',
    transactionHints: {
      alipay: 'Le numéro de commande dans le relevé Alipay.',
      wechat: 'L’identifiant de transaction dans le relevé WeChat Pay.',
      'usdt-trc20': 'Le hash de transaction du virement USDT (TxID).',
      'usdt-erc20': 'Le hash de transaction du virement USDT (TxID).',
    },
    turnstileLabel: 'Vérification humaine',
    turnstileHint: 'Effectuez la vérification avant de soumettre la commande.',
    turnstileLoading: 'Chargement de la vérification humaine…',
    turnstileFailed:
      'La vérification humaine n’a pas pu se charger. Actualisez la page et réessayez, ou commandez par e-mail comme expliqué ci-dessous.',
    submit: 'Soumettre la commande',
    submitting: 'Envoi en cours…',
    requiredEmail: 'Saisissez votre e-mail d’achat.',
    invalidEmail: 'Saisissez une adresse e-mail valide (254 caractères maximum).',
    emailMismatch: 'Les deux adresses e-mail ne correspondent pas.',
    requiredMethod: 'Choisissez un moyen de paiement.',
    requiredTransaction: 'Saisissez le numéro de transaction.',
    invalidTransaction:
      'Le numéro de transaction doit comporter 6 à 66 lettres, chiffres, tirets bas ou traits d’union.',
    missingToken: 'Effectuez d’abord la vérification humaine.',
    problemTitle: 'Échec de l’envoi',
    supportFallback:
      'Si la vérification humaine ne peut pas se charger, envoyez votre e-mail d’achat, le moyen de paiement et le numéro de transaction à {email} ; nous traiterons la commande manuellement.',
    noScript:
      'Le formulaire de commande nécessite JavaScript. Envoyez votre e-mail d’achat, le moyen de paiement et le numéro de transaction à {email} ; nous traiterons la commande manuellement.',
  },
  success: {
    title: 'Commande soumise',
    body: 'Nous avons bien reçu la commande de {email} et l’examinons manuellement.',
    emailLabel: 'L’e-mail de licence sera envoyé à',
    review: 'L’examen manuel prend généralement jusqu’à {hours} heures.',
    waitEmail:
      'Une fois approuvée, vous recevrez l’e-mail confirmant que la licence est prête. Ne soumettez pas à nouveau le même paiement.',
    activate: 'Activez ensuite la licence dans la section Licence de l’extension, avec le même e-mail.',
  },
  already: { title: 'Ce paiement a déjà été soumis' },
  errors: {
    invalidRequest: 'Vérifiez l’e-mail d’achat et le numéro de transaction.',
    originNotAllowed: 'La configuration du site est incorrecte. Contactez l’assistance.',
    humanCheckFailed: 'La vérification humaine a échoué. Actualisez la page et réessayez.',
    notOnSale: 'Cette offre n’est plus en vente. Contactez l’assistance.',
    methodUnavailable: 'Ce moyen de paiement est indisponible. Choisissez-en un autre.',
    alreadySubmitted:
      'Ce numéro de transaction a déjà une commande approuvée. Activez la licence dans l’extension ou contactez l’assistance.',
    rateLimited: 'Trop de requêtes. Réessayez plus tard.',
    serverError: 'Le service est indisponible. Réessayez plus tard.',
    unavailable: 'Le réseau est indisponible. Réessayez plus tard ou contactez l’assistance.',
    invalidResponse: 'Le service a renvoyé un résultat inattendu. Réessayez plus tard ou contactez l’assistance.',
  },
  terms: {
    title: 'Ce que vous achetez',
    items: [
      'Une licence à paiement unique, sans renouvellement automatique.',
      'La licence est liée à l’e-mail d’achat et permet jusqu’à 5 activations simultanées sur des appareils différents. Désactivez un appareil pour libérer une place.',
      'La licence n’expire pas.',
      'Les licences non activées peuvent être remboursées via l’assistance ; les licences activées ne le peuvent pas.',
      'Contactez l’assistance à {email} pour tout problème de paiement ou d’activation.',
    ],
  },
  privacy: {
    title: 'Données de commande et confidentialité',
    body: 'Lorsque vous soumettez une commande, votre e-mail d’achat, l’offre, le moyen de paiement, le numéro de transaction et le jeton de vérification humaine sont envoyés au service de licence Beyond Translate pour l’examen manuel et la délivrance de la licence. Cette page charge Cloudflare Turnstile pour la vérification humaine. Les données de commande ne servent pas au marketing et n’entrent pas dans l’extension. Lorsque les ventes sont fermées, cette page ne charge pas Turnstile.',
  },
  support: {
    title: 'Besoin d’aide ?',
    body: 'Pour tout problème de paiement, de commande ou d’activation, écrivez à {email} en joignant l’e-mail d’achat et le numéro de transaction.',
  },
};
