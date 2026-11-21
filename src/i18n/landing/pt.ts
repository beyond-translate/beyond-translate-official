import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: 'Seleção e página inteira · Regras por site · Motor próprio',
  status: 'Disponível para Chrome, Edge e Firefox.',
  stores: {
    label: 'Instale pela loja do seu navegador',
  },
  kickers: {
    features: 'Recursos',
    services: 'Motores',
    privacy: 'Privacidade',
    release: 'Disponível',
    faq: 'FAQ',
  },
  tools: {
    language: 'Idioma',
    theme: 'Alternar tema',
  },
  preview: {
    url: 'fieldnotes.example/essay/bilingual-reading',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: 'Tradução · Português',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      'Ler em dois idiomas muda mais do que as palavras que você vê. O ritmo desacelera, o original fica ao alcance e o sentido se assenta entre as linhas.',
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      'Uma boa tradução não substitui a página. Ela fica ao lado, pronta para sumir no instante em que você quiser o original de volta.',
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation: 'O ritmo desacelera, o original fica ao alcance e o sentido se assenta entre as linhas.',
    bubbleLabel: 'Traduzir para português',
    bilingual: 'Bilíngue',
    translationOnly: 'Somente tradução',
    translated: 'Traduzido',
    selection: 'Seleção',
    translatePage: 'Traduzir página',
    showOriginal: 'Mostrar original',
  },
  features: {
    heading: 'Muito além da tradução',
    intro:
      'Privacidade, regras por site e caderno são os pontos em que o Beyond Translate mais se diferencia de outras extensões de tradução.',
    items: {
      privacy: {
        title: 'Privacidade',
        body: 'As chaves ficam no seu dispositivo, os backups são sempre criptografados, as páginas de origem nunca são registradas e o texto vai apenas para o serviço que você escolher.',
      },
      rules: {
        title: 'Regras por site',
        body: 'Memoriza escopo, idioma, prompt e tradução automática por site, com regras integradas para GitHub, Stack Overflow, Wikipedia e muito mais.',
      },
      memory: {
        title: 'Caderno e arquivo',
        body: 'Palavras e frases salvas ficam no caderno; traduções de páginas podem ser arquivadas e aparecem instantaneamente na próxima vez.',
      },
      selection: {
        title: 'Selecione e traduza',
        body: 'Selecione um texto e a tradução aparece ao lado; palavras isoladas também mostram fonética, classe gramatical, acepções e exemplos.',
      },
      compare: {
        title: 'Compare serviços',
        body: 'Coloque vários serviços de tradução no espaço de seleção e compare os resultados; salve o bloco que preferir.',
      },
      engine: {
        title: 'Seu próprio motor',
        body: 'Cerca de 37 presets de provedores de modelos em quatro protocolos, além da tradução automática do Google, do Bing e da nuvem.',
      },
    },
    more: 'Também inclui bola flutuante, pré-tradução, pesquisa rápida e 25 idiomas de interface.',
  },
  services: {
    heading: 'O motor de tradução é escolha sua',
    intro: 'Sem dependência de um único serviço. Use os endpoints gratuitos ou os seus próprios modelos.',
    stats: [
      { value: '≈37', label: 'presets de provedores de modelos' },
      { value: '≈130', label: 'idiomas de destino' },
      { value: '25', label: 'idiomas de interface' },
      { value: '4', label: 'protocolos de API' },
    ],
    body: 'A tradução automática do Google e do Bing funciona de imediato, sem chave de API. Você também pode conectar seus próprios provedores de modelos ou as APIs oficiais de tradução automática do Google Cloud, Azure, Alibaba Cloud e Volcengine.',
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
    heading: 'Suas palavras vão apenas aonde você escolher',
    intro:
      'A tradução precisa enviar o texto a um serviço de tradução. É só isso que a extensão faz com ele — os backups passam obrigatoriamente pelo AES-256-GCM, e texto em claro não é sequer uma opção.',
    items: [
      {
        title: 'As chaves ficam no seu dispositivo',
        body: 'Chaves de API, chaves de acesso da nuvem e credenciais de sincronização ficam armazenadas localmente e não são expostas a scripts de conteúdo.',
      },
      {
        title: 'Os backups precisam ser criptografados',
        body: 'Configurações, caderno e arquivo de páginas são criptografados separadamente com AES-256-GCM e depois empacotados em um zip; a sincronização na nuvem envia apenas esse pacote criptografado. A chave de dados nunca sai do seu dispositivo — se você a perder, nem nós conseguimos abrir o arquivo.',
      },
      {
        title: 'Nenhum dado de navegação coletado',
        body: 'As páginas de origem nunca são registradas, não há análise em segundo plano nem publicidade. Nós não sabemos — nem queremos saber — o que você lê.',
      },
    ],
    link: 'Veja como não olhamos para você',
  },
  release: {
    heading: 'Instalar',
    intro: 'O Beyond Translate está disponível para Chrome, Edge e Firefox.',
    body: 'Escolha a loja do seu navegador para instalar a extensão; as instruções de instalação e a documentação de ajuda são mantidas em sincronia.',
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: 'Conheça a central de ajuda',
    feedbackCta: 'Abrir o repositório de feedback',
  },
  faq: {
    heading: 'Perguntas frequentes',
    items: [
      {
        question: 'Onde posso instalar?',
        answer:
          'Instale pela Chrome Web Store, pelo Microsoft Edge Add-ons ou pelo Firefox Add-ons e fixe a extensão na barra de ferramentas.',
      },
      {
        question: 'Preciso da minha própria chave de API?',
        answer:
          'Não. Os endpoints integrados do Google e do Bing funcionam sem nenhuma configuração. Adicione sua própria chave apenas quando quiser um modelo melhor ou uma API oficial de tradução automática.',
      },
      {
        question: 'A tradução envia minhas páginas para a nuvem?',
        answer:
          'Apenas o texto que precisa ser traduzido é enviado ao serviço que você escolher. Chaves e credenciais de sincronização ficam no seu dispositivo, os backups são criptografados e nenhum histórico de navegação é coletado.',
      },
      {
        question: 'Quais navegadores são compatíveis?',
        answer: 'Navegadores baseados em Chromium (Chrome 111+, Edge) e Firefox 136+, em Manifest V3.',
      },
      {
        question: 'Existem recursos pagos?',
        answer:
          'Seleção e tradução de página inteira são gratuitas. Backup/restauração e a gravação de regras por site exigem uma licença de compra única: quando a página de compra abrir, pague por lá, envie o número da transação e, após a revisão manual, ative na extensão com o e-mail da compra.',
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: 'Leia a web inteira no seu próprio idioma.',
    navLabel: 'Rodapé',
    groups: [
      {
        title: 'Produto',
        links: [
          { label: 'Recursos', href: '#features' },
          { label: 'Privacidade', href: '#privacy' },
          { label: 'Motores', href: '#services' },
        ],
      },
      {
        title: 'Ajuda',
        links: [
          { label: 'Central de ajuda', href: 'help/' },
          { label: 'Primeiros passos', href: 'help/getting-started/' },
          { label: 'Tradução automática', href: 'help/machine-translation/' },
          { label: 'Perguntas frequentes', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界. O código-fonte do site é aberto sob a licença MIT.',
  },
};
