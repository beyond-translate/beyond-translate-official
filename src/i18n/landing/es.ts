import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: 'Selección y página completa · Reglas por sitio · Tu propio motor',
  status: 'Disponible en Chrome, Edge y Firefox.',
  stores: {
    label: 'Instálala desde la tienda de tu navegador',
  },
  kickers: {
    features: 'Funciones',
    services: 'Motores',
    privacy: 'Privacidad',
    release: 'Disponible',
    faq: 'Preguntas',
  },
  tools: {
    language: 'Idioma',
    theme: 'Cambiar tema',
  },
  preview: {
    url: 'fieldnotes.example/essay/lectura-bilingue',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: 'Traducción · Español',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      'Leer en dos idiomas cambia algo más que las palabras que ves. Baja el ritmo, mantiene el original cerca y deja que el significado se asiente entre líneas.',
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      'Una buena traducción no sustituye a la página. Se queda a su lado, lista para desaparecer en cuanto quieras volver al original.',
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation: 'Baja el ritmo, mantiene el original cerca y deja que el significado se asiente entre líneas.',
    bubbleLabel: 'Traducir al español',
    bilingual: 'Bilingüe',
    translationOnly: 'Solo traducción',
    translated: 'Traducido',
    selection: 'Selección',
    translatePage: 'Traducir página',
    showOriginal: 'Mostrar original',
  },
  features: {
    heading: 'Más que traducción',
    intro:
      'La privacidad, las reglas por sitio y el cuaderno son los rasgos que más distinguen a Beyond Translate de otras extensiones de traducción.',
    items: {
      privacy: {
        title: 'Privacidad',
        body: 'Las claves se quedan en tu dispositivo, las copias de seguridad siempre van cifradas, nunca se registra la página de origen y el texto solo se envía al servicio que elijas.',
      },
      rules: {
        title: 'Reglas por sitio',
        body: 'Recuerda el alcance, el idioma, el prompt y la traducción automática para cada sitio, con reglas integradas para GitHub, Stack Overflow, Wikipedia y más.',
      },
      memory: {
        title: 'Cuaderno y archivo',
        body: 'Las palabras y frases que guardas viven en el cuaderno; las traducciones de página pueden archivarse y mostrarse al instante la próxima vez.',
      },
      selection: {
        title: 'Selecciona y traduce',
        body: 'Selecciona texto y la traducción aparece junto a él; las palabras sueltas muestran además fonética, categoría gramatical, acepciones y ejemplos.',
      },
      compare: {
        title: 'Compara servicios',
        body: 'Coloca varios servicios de traducción en la ranura de selección y compara sus resultados en paralelo; guarda el bloque que prefieras.',
      },
      engine: {
        title: 'Tu propio motor',
        body: 'Unos 37 proveedores de modelos preconfigurados en cuatro protocolos, además de la traducción automática de Google, Bing y la nube.',
      },
    },
    more: 'También incluye botón flotante, pretraducción, búsqueda rápida y 25 idiomas de interfaz.',
  },
  services: {
    heading: 'Tu motor, tú decides',
    intro: 'Sin ataduras. Usa los endpoints gratuitos o tus propios modelos.',
    stats: [
      { value: '≈37', label: 'proveedores de modelos preconfigurados' },
      { value: '≈130', label: 'idiomas de destino' },
      { value: '25', label: 'idiomas de interfaz' },
      { value: '4', label: 'protocolos de API' },
    ],
    body: 'La traducción automática de Google y Bing funciona sin configurar nada y sin clave de API. También puedes conectar tus propios proveedores de modelos o las API oficiales de traducción automática de Google Cloud, Azure, Alibaba Cloud y Volcengine.',
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
    heading: 'Tus palabras solo van adonde tú eliges',
    intro:
      'Traducir requiere enviar texto a un servicio de traducción. Eso es todo lo que la extensión hace con él: las copias de seguridad se cifran obligatoriamente con AES-256-GCM y el texto en claro ni siquiera es una opción.',
    items: [
      {
        title: 'Las claves se quedan en tu dispositivo',
        body: 'Las claves de API, las claves de acceso a la nube y las credenciales de sincronización se guardan localmente y no quedan expuestas a los scripts de contenido.',
      },
      {
        title: 'Las copias de seguridad van cifradas',
        body: 'Los ajustes, el cuaderno y el archivo de páginas se cifran por separado con AES-256-GCM y luego se empaquetan en un zip; la sincronización en la nube solo sube ese paquete cifrado. La clave de datos nunca sale de tu dispositivo: si la pierdes, ni nosotros podemos abrir el archivo.',
      },
      {
        title: 'No se recopilan datos de navegación',
        body: 'Nunca se registra la página de origen, no hay analíticas en segundo plano ni publicidad. Ni sabemos ni nos importa lo que lees.',
      },
    ],
    link: 'Mira cómo no te miramos',
  },
  release: {
    heading: 'Instalar',
    intro: 'Beyond Translate está disponible en Chrome, Edge y Firefox.',
    body: 'Elige la tienda de tu navegador para instalar la extensión; los pasos de instalación y la documentación de ayuda se mantienen sincronizados.',
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: 'Explorar el centro de ayuda',
    feedbackCta: 'Abrir el repositorio de comentarios',
  },
  faq: {
    heading: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Dónde puedo instalarla?',
        answer:
          'Instálala desde Chrome Web Store, Microsoft Edge Add-ons o Firefox Add-ons y fija la extensión a la barra de herramientas.',
      },
      {
        question: '¿Necesito mi propia clave de API?',
        answer:
          'No. Los endpoints integrados de Google y Bing funcionan sin ninguna configuración. Añade tu propia clave solo si quieres un modelo mejor o una API oficial de traducción automática.',
      },
      {
        question: '¿La traducción sube mis páginas?',
        answer:
          'Solo se envía al servicio que elijas el texto que hay que traducir. Las claves y las credenciales de sincronización se quedan en tu dispositivo, las copias de seguridad van cifradas y no se recopila el historial de navegación.',
      },
      {
        question: '¿Qué navegadores son compatibles?',
        answer: 'Navegadores basados en Chromium (Chrome 111+, Edge) y Firefox 136+, con Manifest V3.',
      },
      {
        question: '¿Hay funciones de pago?',
        answer:
          'La traducción por selección y la traducción de página completa son gratuitas. La copia de seguridad/restauración y la escritura de reglas por sitio requieren una licencia única: cuando se abra la página de compra, paga allí, envía el número de transacción y, tras la revisión manual, actívala en la extensión con el correo de compra.',
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: 'Lee toda la web en tu propio idioma.',
    navLabel: 'Pie de página',
    groups: [
      {
        title: 'Producto',
        links: [
          { label: 'Funciones', href: '#features' },
          { label: 'Privacidad', href: '#privacy' },
          { label: 'Motores', href: '#services' },
        ],
      },
      {
        title: 'Ayuda',
        links: [
          { label: 'Centro de ayuda', href: 'help/' },
          { label: 'Primeros pasos', href: 'help/getting-started/' },
          { label: 'Traducción automática', href: 'help/machine-translation/' },
          { label: 'Preguntas frecuentes', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界. El código fuente del sitio es abierto bajo la licencia MIT.',
  },
};
