import type { PurchaseStrings } from '../purchase';

export const purchase: PurchaseStrings = {
  meta: {
    title: 'Comprar una licencia de Beyond Translate',
    description:
      'Compra una licencia única de Beyond Translate con Alipay, WeChat Pay o USDT. Tras una revisión manual, la licencia llega por correo y se activa en la extensión.',
  },
  closed: {
    kicker: 'Licencia',
    title: 'Aún no está a la venta',
    body: 'La licencia aún no está a la venta. Cuando se abran las ventas, esta página mostrará el precio, los métodos de pago y el formulario de pedido.',
    feedbackCta: 'Seguir el repositorio de comentarios',
    helpCta: 'Leer la documentación de ayuda',
  },
  entry: {
    heroCta: 'Comprar una licencia',
    footerLink: 'Comprar una licencia',
  },
  hero: {
    kicker: 'Licencia',
    title: 'Compra una vez, úsala para siempre',
    intro:
      'La traducción básica es gratuita. La copia de seguridad y la restauración, así como la escritura de reglas por sitio, necesitan una licencia única. Tras la revisión manual, el correo con la licencia se envía a tu dirección de compra.',
  },
  price: {
    oneTime: 'Una compra única, sin renovación automática.',
    cnyLabel: 'CNY',
    usdtLabel: 'USDT',
    note: 'Envía el importe y usa la red que se indica en esta página.',
  },
  steps: {
    title: 'Cómo comprar',
    intro: 'No hace falta crear ninguna cuenta.',
    items: [
      'Elige un método de pago y paga el importe indicado. Los códigos QR de Alipay y WeChat no incluyen importe, así que introduce {amount} manualmente.',
      'Cuando hayas pagado, introduce en esta página tu correo de compra, el método de pago y el número de transacción.',
      'Espera la revisión manual, que suele completarse en {hours} horas; después recibirás el correo de licencia lista.',
      'Actívala en la sección Licencia de la extensión con el mismo correo.',
    ],
  },
  payment: {
    title: 'Métodos de pago',
    intro: 'Elige un método de pago y vuelve a esta página para enviar el pedido.',
    hint: 'Los códigos de Alipay y WeChat Pay no incluyen importe, así que introduce {cny} manualmente después de escanear. Para USDT, envía {usdt} en la misma red que el código; los fondos enviados por la red equivocada no se pueden recuperar.',
    zoom: 'Ampliar el código de {method}',
    zoomHint: 'Haz clic en un código para verlo ampliado por separado y evitar que tu teléfono capture el de al lado.',
    scan: {
      alipay: 'Abre Alipay, elige Escanear y, tras escanear el código, introduce {amount} manualmente.',
      wechat: 'Abre WeChat, elige Escanear y, tras escanear el código, introduce {amount} manualmente.',
      'usdt-trc20': 'Escanea con tu monedero o copia la dirección y envía {amount} en la red {network}.',
      'usdt-erc20': 'Escanea con tu monedero o copia la dirección y envía {amount} en la red {network}.',
    },
    close: 'Cerrar',
    copy: 'Copiar dirección',
    copied: 'Copiado',
    copyFailed: 'No se pudo copiar. Selecciona la dirección y cópiala manualmente.',
    qrLabel: 'Código de pago de {method} por {amount}',
  },
  paymentMethods: {
    alipay: 'Alipay',
    wechat: 'WeChat Pay',
    'usdt-trc20': 'USDT (TRC-20)',
    'usdt-erc20': 'USDT (ERC-20)',
  },
  form: {
    title: 'Enviar el pedido',
    intro: 'El correo de compra recibe el correo de la licencia y también debe usarse para activarla en la extensión.',
    open: 'Enviar pedido',
    emailLabel: 'Correo de compra',
    emailHint: 'El correo de la licencia se envía a esta dirección. Máximo 254 caracteres.',
    emailConfirmLabel: 'Repite el correo de compra',
    emailConfirmHint: 'Introdúcelo una segunda vez para detectar errores tipográficos.',
    methodLegend: 'Método de pago',
    amountNote: 'Los códigos QR de Alipay y WeChat no incluyen importe. Introduce {amount} manualmente al pagar.',
    transactionLabel: 'Número de transacción',
    transactionHint: 'Usa entre 6 y 66 letras, dígitos, guiones bajos o guiones.',
    transactionHints: {
      alipay: 'El número de pedido que aparece en el recibo de Alipay.',
      wechat: 'El número de transacción que aparece en el recibo de WeChat Pay.',
      'usdt-trc20': 'El hash de la transacción (TxID) de la transferencia USDT.',
      'usdt-erc20': 'El hash de la transacción (TxID) de la transferencia USDT.',
    },
    turnstileLabel: 'Verificación humana',
    turnstileHint: 'Completa la verificación antes de enviar el pedido.',
    turnstileLoading: 'Cargando la verificación humana…',
    turnstileFailed:
      'No se pudo cargar la verificación humana. Actualiza la página e inténtalo de nuevo, o realiza el pedido por correo como se explica abajo.',
    submit: 'Enviar pedido',
    submitting: 'Enviando…',
    requiredEmail: 'Introduce tu correo de compra.',
    invalidEmail: 'Introduce una dirección de correo válida (máximo 254 caracteres).',
    emailMismatch: 'Las dos direcciones de correo no coinciden.',
    requiredMethod: 'Elige un método de pago.',
    requiredTransaction: 'Introduce el número de transacción.',
    invalidTransaction: 'El número de transacción debe tener entre 6 y 66 letras, dígitos, guiones bajos o guiones.',
    missingToken: 'Completa antes la verificación humana.',
    problemTitle: 'No se pudo enviar',
    supportFallback:
      'Si la verificación humana no carga, envía tu correo de compra, método de pago y número de transacción a {email} y procesaremos el pedido manualmente.',
    noScript:
      'El formulario de pedido necesita JavaScript. Envía tu correo de compra, método de pago y número de transacción a {email} y procesaremos el pedido manualmente.',
  },
  success: {
    title: 'Pedido enviado',
    body: 'Hemos recibido el pedido de {email} y lo estamos revisando manualmente.',
    emailLabel: 'El correo de la licencia se enviará a',
    review: 'La revisión manual suele tardar hasta {hours} horas.',
    waitEmail: 'Cuando se apruebe, recibirás el correo de licencia lista. No envíes el mismo pago otra vez.',
    activate: 'Después, actívala en la sección Licencia de la extensión con el mismo correo.',
  },
  already: { title: 'Este pago ya se envió' },
  errors: {
    invalidRequest: 'Revisa el correo de compra y el número de transacción.',
    originNotAllowed: 'La configuración del sitio es incorrecta. Contacta con soporte.',
    humanCheckFailed: 'La verificación humana ha fallado. Actualiza la página e inténtalo de nuevo.',
    notOnSale: 'Este producto ya no está a la venta. Contacta con soporte.',
    methodUnavailable: 'Este método de pago no está disponible. Elige otro.',
    alreadySubmitted:
      'Este número de transacción ya cuenta con un pedido aprobado. Activa la licencia en la extensión o contacta con soporte.',
    rateLimited: 'Demasiadas solicitudes. Inténtalo de nuevo más tarde.',
    serverError: 'El servicio no está disponible. Inténtalo de nuevo más tarde.',
    unavailable: 'La red no está disponible. Inténtalo de nuevo más tarde o contacta con soporte.',
    invalidResponse:
      'El servicio devolvió un resultado inesperado. Inténtalo de nuevo más tarde o contacta con soporte.',
  },
  terms: {
    title: 'Qué estás comprando',
    items: [
      'Una licencia única, sin renovación automática.',
      'La licencia está vinculada al correo de compra y permite hasta 5 activaciones simultáneas de dispositivos. Puedes desactivar un dispositivo para liberar un espacio.',
      'La licencia no caduca.',
      'Las licencias sin activar se pueden reembolsar a través de soporte; las activadas, no.',
      'Si tienes problemas de pago o activación, contacta con soporte en {email}.',
    ],
  },
  privacy: {
    title: 'Datos del pedido y privacidad',
    body: 'Cuando envías un pedido, tu correo de compra, el producto, el método de pago, el número de transacción y el token de verificación humana se envían al servicio de licencias de Beyond Translate para la revisión manual y la emisión de la licencia. Esta página carga Cloudflare Turnstile para la verificación humana. Los datos del pedido no se usan con fines de marketing ni pasan a la extensión. Cuando las ventas están cerradas, esta página no carga Turnstile.',
  },
  support: {
    title: '¿Necesitas ayuda?',
    body: 'Si tienes problemas con el pago, el pedido o la activación, escribe a {email} e incluye el correo de compra y el número de transacción.',
  },
};
