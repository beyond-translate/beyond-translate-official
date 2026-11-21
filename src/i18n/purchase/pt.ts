import type { PurchaseStrings } from '../purchase';

export const purchase: PurchaseStrings = {
  meta: {
    title: 'Comprar uma licença do Beyond Translate',
    description:
      'Compre uma licença única do Beyond Translate via Alipay, WeChat Pay ou USDT. Após a revisão manual, a licença chega por e-mail e é ativada na extensão.',
  },
  closed: {
    kicker: 'Licença',
    title: 'Ainda não está à venda',
    body: 'A licença ainda não está à venda. Quando as vendas abrirem, esta página mostrará o preço, as formas de pagamento e o formulário de pedido.',
    feedbackCta: 'Acompanhe o repositório de feedback',
    helpCta: 'Ler a documentação de ajuda',
  },
  entry: {
    heroCta: 'Comprar uma licença',
    footerLink: 'Comprar uma licença',
  },
  hero: {
    kicker: 'Licença',
    title: 'Compre uma vez, use para sempre',
    intro:
      'A tradução básica é gratuita. Backup/restauração e a gravação de regras por site exigem uma licença de compra única. Após a revisão manual, o e-mail da licença vai para o seu endereço de compra.',
  },
  price: {
    oneTime: 'Compra única, sem renovação automática.',
    cnyLabel: 'CNY',
    usdtLabel: 'USDT',
    note: 'Envie o valor e use a rede mostrada nesta página.',
  },
  steps: {
    title: 'Como comprar',
    intro: 'Não é preciso criar conta.',
    items: [
      'Escolha uma forma de pagamento e pague o valor exibido. Os códigos QR do Alipay e do WeChat não incluem valor, então digite {amount} manualmente.',
      'Depois de pagar, preencha nesta página o e-mail de compra, a forma de pagamento e o número da transação.',
      'Aguarde a revisão manual, que normalmente leva até {hours} horas. Em seguida, você recebe o e-mail avisando que a licença está pronta.',
      'Ative na seção Licença da extensão com o mesmo e-mail.',
    ],
  },
  payment: {
    title: 'Formas de pagamento',
    intro: 'Escolha uma forma de pagamento e volte a esta página para enviar o pedido.',
    hint: 'Os códigos QR do Alipay e do WeChat Pay não incluem valor, então digite {cny} manualmente após escanear. Para USDT, envie {usdt} na mesma rede do código; fundos enviados na rede errada não podem ser recuperados.',
    zoom: 'Ampliar o código {method}',
    zoomHint: 'Clique em um código para exibi-lo sozinho e maior, para que seu celular não leia o código ao lado.',
    scan: {
      alipay: 'Abra o Alipay, escolha Escanear e digite {amount} manualmente após a leitura.',
      wechat: 'Abra o WeChat, escolha Escanear e digite {amount} manualmente após a leitura.',
      'usdt-trc20': 'Escaneie com sua carteira ou copie o endereço e envie {amount} na rede {network}.',
      'usdt-erc20': 'Escaneie com sua carteira ou copie o endereço e envie {amount} na rede {network}.',
    },
    close: 'Fechar',
    copy: 'Copiar endereço',
    copied: 'Copiado',
    copyFailed: 'Falha ao copiar. Selecione o endereço e copie manualmente.',
    qrLabel: 'Código de pagamento {method} no valor de {amount}',
  },
  paymentMethods: {
    alipay: 'Alipay',
    wechat: 'WeChat Pay',
    'usdt-trc20': 'USDT (TRC-20)',
    'usdt-erc20': 'USDT (ERC-20)',
  },
  form: {
    title: 'Enviar o pedido',
    intro: 'O e-mail de compra recebe o e-mail da licença e também deve ser usado para ativar na extensão.',
    open: 'Enviar pedido',
    emailLabel: 'E-mail de compra',
    emailHint: 'O e-mail da licença vai para este endereço. Até 254 caracteres.',
    emailConfirmLabel: 'Repita o e-mail de compra',
    emailConfirmHint: 'Digite novamente para evitar erros de digitação.',
    methodLegend: 'Forma de pagamento',
    amountNote: 'Os códigos QR do Alipay e do WeChat não incluem valor. Digite {amount} manualmente ao pagar.',
    transactionLabel: 'Número da transação',
    transactionHint: 'Use de 6 a 66 letras, dígitos, sublinhados ou hífens.',
    transactionHints: {
      alipay: 'O número do pedido no extrato do Alipay.',
      wechat: 'O ID da transação no extrato do WeChat Pay.',
      'usdt-trc20': 'O hash da transação de transferência USDT (TxID).',
      'usdt-erc20': 'O hash da transação de transferência USDT (TxID).',
    },
    turnstileLabel: 'Verificação humana',
    turnstileHint: 'Conclua a verificação antes de enviar.',
    turnstileLoading: 'Carregando a verificação humana…',
    turnstileFailed:
      'Não foi possível carregar a verificação humana. Atualize a página e tente novamente, ou faça o pedido por e-mail conforme descrito abaixo.',
    submit: 'Enviar pedido',
    submitting: 'Enviando…',
    requiredEmail: 'Informe seu e-mail de compra.',
    invalidEmail: 'Informe um endereço de e-mail válido (até 254 caracteres).',
    emailMismatch: 'Os dois endereços de e-mail não coincidem.',
    requiredMethod: 'Escolha uma forma de pagamento.',
    requiredTransaction: 'Informe o número da transação.',
    invalidTransaction: 'O número da transação deve ter de 6 a 66 letras, dígitos, sublinhados ou hífens.',
    missingToken: 'Conclua a verificação humana primeiro.',
    problemTitle: 'Falha no envio',
    supportFallback:
      'Se a verificação humana não carregar, envie seu e-mail de compra, a forma de pagamento e o número da transação para {email} e processaremos o pedido manualmente.',
    noScript:
      'O formulário de pedido precisa de JavaScript. Envie seu e-mail de compra, a forma de pagamento e o número da transação para {email} e processaremos o pedido manualmente.',
  },
  success: {
    title: 'Pedido enviado',
    body: 'Recebemos o pedido de {email} e estamos revisando manualmente.',
    emailLabel: 'O e-mail da licença será enviado para',
    review: 'A revisão manual normalmente leva até {hours} horas.',
    waitEmail:
      'Após a aprovação, você recebe o e-mail avisando que a licença está pronta. Não envie o mesmo pagamento novamente.',
    activate: 'Depois, ative na seção Licença da extensão com o mesmo e-mail.',
  },
  already: { title: 'Este pagamento já foi enviado' },
  errors: {
    invalidRequest: 'Verifique o e-mail de compra e o número da transação.',
    originNotAllowed: 'A configuração do site está incorreta. Entre em contato com o suporte.',
    humanCheckFailed: 'A verificação humana falhou. Atualize a página e tente novamente.',
    notOnSale: 'Esta oferta não está mais à venda. Entre em contato com o suporte.',
    methodUnavailable: 'Esta forma de pagamento não está disponível. Escolha outra.',
    alreadySubmitted:
      'Este número de transação já tem um pedido aprovado. Ative na extensão ou entre em contato com o suporte.',
    rateLimited: 'Muitas solicitações. Tente novamente mais tarde.',
    serverError: 'O serviço está indisponível. Tente novamente mais tarde.',
    unavailable: 'A rede está indisponível. Tente novamente mais tarde ou entre em contato com o suporte.',
    invalidResponse:
      'O serviço retornou um resultado inesperado. Tente novamente mais tarde ou entre em contato com o suporte.',
  },
  terms: {
    title: 'O que você está comprando',
    items: [
      'Uma licença de compra única, sem renovação automática.',
      'A licença é vinculada ao e-mail de compra e permite até 5 ativações simultâneas de dispositivos. Desative um dispositivo para liberar uma vaga.',
      'A licença não expira.',
      'Licenças não ativadas podem ser reembolsadas pelo suporte; licenças ativadas não podem.',
      'Entre em contato com o suporte em {email} para problemas de pagamento ou ativação.',
    ],
  },
  privacy: {
    title: 'Dados do pedido e privacidade',
    body: 'Ao enviar um pedido, seu e-mail de compra, a oferta, a forma de pagamento, o número da transação e o token de verificação humana são enviados ao serviço de licenças do Beyond Translate para revisão manual e emissão da licença. Esta página carrega o Cloudflare Turnstile para a verificação humana. Os dados do pedido não são usados para marketing e não entram na extensão. Quando as vendas estão fechadas, esta página não carrega o Turnstile.',
  },
  support: {
    title: 'Precisa de ajuda?',
    body: 'Para problemas de pagamento, pedido ou ativação, envie um e-mail para {email} com o e-mail de compra e o número da transação.',
  },
};
