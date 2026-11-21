import type { PurchaseStrings } from '../purchase';

export const purchase: PurchaseStrings = {
  meta: {
    title: 'Beyond Translate 라이선스 구매',
    description:
      'Alipay, WeChat Pay, USDT로 Beyond Translate 라이선스를 일회성으로 구매하세요. 수동 검토 후 라이선스가 이메일로 발송되며 확장 프로그램에서 활성화할 수 있습니다.',
  },
  closed: {
    kicker: '라이선스',
    title: '아직 판매하지 않습니다',
    body: '라이선스는 아직 판매 중이 아닙니다. 판매가 시작되면 이 페이지에 가격, 결제 수단, 주문 양식이 표시됩니다.',
    feedbackCta: '피드백 저장소 팔로우',
    helpCta: '도움말 문서 보기',
  },
  entry: {
    heroCta: '라이선스 구매',
    footerLink: '라이선스 구매',
  },
  hero: {
    kicker: '라이선스',
    title: '한 번 구매로 계속 사용',
    intro:
      '기본 번역은 무료입니다. 백업/복원과 사이트 규칙 쓰기에는 일회성 라이선스가 필요합니다. 수동 검토를 거친 뒤 구매 이메일로 라이선스 메일이 발송됩니다.',
  },
  price: {
    oneTime: '자동 갱신 없는 일회성 구매입니다.',
    cnyLabel: 'CNY',
    usdtLabel: 'USDT',
    note: '이 페이지에 표시된 금액과 네트워크로 전송하세요.',
  },
  steps: {
    title: '구매 방법',
    intro: '계정 가입은 필요하지 않습니다.',
    items: [
      '결제 수단을 선택하고 표시된 금액을 결제하세요. Alipay와 WeChat Pay QR 코드에는 금액이 포함되어 있지 않으므로 {amount}을(를) 직접 입력하세요.',
      '결제 후 이 페이지에서 구매 이메일, 결제 수단, 거래 번호를 입력하세요.',
      '수동 검토를 기다리세요. 보통 {hours}시간 이내에 완료되며, 이후 「라이선스 준비 완료」 메일을 받게 됩니다.',
      '확장 프로그램의 라이선스 섹션에서 같은 이메일로 활성화하세요.',
    ],
  },
  payment: {
    title: '결제 수단',
    intro: '결제 수단을 하나 선택한 뒤 이 페이지로 돌아와 주문을 제출하세요.',
    hint: 'Alipay와 WeChat Pay QR 코드에는 금액이 포함되어 있지 않으므로 스캔 후 {cny}을(를) 직접 입력하세요. USDT는 QR 코드와 같은 네트워크로 {usdt}을(를) 전송해야 하며, 잘못된 네트워크로 보낸 자금은 되찾을 수 없습니다.',
    zoom: '{method} QR 코드 확대',
    zoomHint: 'QR 코드를 클릭하면 크게 따로 표시되어 옆에 있는 코드를 잘못 스캔하지 않습니다.',
    scan: {
      alipay: 'Alipay를 열고 「스캔」을 선택한 뒤, 스캔 후 {amount}을(를) 직접 입력하세요.',
      wechat: 'WeChat을 열고 「스캔」을 선택한 뒤, 스캔 후 {amount}을(를) 직접 입력하세요.',
      'usdt-trc20': '지갑으로 스캔하거나 주소를 복사한 뒤 {network} 네트워크로 {amount}을(를) 전송하세요.',
      'usdt-erc20': '지갑으로 스캔하거나 주소를 복사한 뒤 {network} 네트워크로 {amount}을(를) 전송하세요.',
    },
    close: '닫기',
    copy: '주소 복사',
    copied: '복사됨',
    copyFailed: '복사하지 못했습니다. 주소를 직접 선택해 복사하세요.',
    qrLabel: '{method} 결제 QR 코드, 금액 {amount}',
  },
  paymentMethods: {
    alipay: 'Alipay',
    wechat: 'WeChat Pay',
    'usdt-trc20': 'USDT (TRC-20)',
    'usdt-erc20': 'USDT (ERC-20)',
  },
  form: {
    title: '주문 제출',
    intro: '구매 이메일로 라이선스 메일이 발송되며, 확장 프로그램에서 활성화할 때도 같은 이메일을 사용해야 합니다.',
    open: '주문 제출',
    emailLabel: '구매 이메일',
    emailHint: '라이선스 메일이 이 주소로 발송됩니다. 최대 254자.',
    emailConfirmLabel: '구매 이메일 다시 입력',
    emailConfirmHint: '오타를 방지하려면 한 번 더 입력하세요.',
    methodLegend: '결제 수단',
    amountNote:
      'Alipay와 WeChat Pay QR 코드에는 금액이 포함되어 있지 않습니다. 결제할 때 {amount}을(를) 직접 입력하세요.',
    transactionLabel: '거래 번호',
    transactionHint: '거래 번호는 영문자, 숫자, 밑줄, 하이픈으로 6–66자입니다.',
    transactionHints: {
      alipay: 'Alipay 거래 내역의 주문 번호입니다.',
      wechat: 'WeChat Pay 거래 내역의 거래 번호입니다.',
      'usdt-trc20': 'USDT 전송 거래 해시(TxID)입니다.',
      'usdt-erc20': 'USDT 전송 거래 해시(TxID)입니다.',
    },
    turnstileLabel: '사람 확인',
    turnstileHint: '제출하기 전에 확인을 완료하세요.',
    turnstileLoading: '사람 확인을 불러오는 중…',
    turnstileFailed:
      '사람 확인을 불러오지 못했습니다. 페이지를 새로 고쳐 다시 시도하거나, 아래 안내에 따라 이메일로 주문하세요.',
    submit: '주문 제출',
    submitting: '제출하는 중…',
    requiredEmail: '구매 이메일을 입력하세요.',
    invalidEmail: '올바른 이메일 주소를 입력하세요(최대 254자).',
    emailMismatch: '두 이메일 주소가 일치하지 않습니다.',
    requiredMethod: '결제 수단을 선택하세요.',
    requiredTransaction: '거래 번호를 입력하세요.',
    invalidTransaction: '거래 번호는 영문자, 숫자, 밑줄, 하이픈으로 6–66자여야 합니다.',
    missingToken: '먼저 사람 확인을 완료하세요.',
    problemTitle: '제출 실패',
    supportFallback:
      '사람 확인을 불러올 수 없다면 구매 이메일, 결제 수단, 거래 번호를 {email}로 보내 주세요. 저희가 주문을 직접 처리하겠습니다.',
    noScript:
      '주문 양식을 사용하려면 JavaScript가 필요합니다. 구매 이메일, 결제 수단, 거래 번호를 {email}로 보내 주시면 저희가 주문을 직접 처리하겠습니다.',
  },
  success: {
    title: '주문이 제출되었습니다',
    body: '{email}의 주문을 접수했으며 수동 검토 중입니다.',
    emailLabel: '라이선스 메일이 발송될 주소',
    review: '수동 검토는 보통 {hours}시간 이내에 완료됩니다.',
    waitEmail: '승인되면 「라이선스 준비 완료」 메일을 받게 됩니다. 같은 결제를 다시 제출하지 마세요.',
    activate: '그다음 확장 프로그램의 라이선스 섹션에서 같은 이메일로 활성화하세요.',
  },
  already: { title: '이미 제출된 결제입니다' },
  errors: {
    invalidRequest: '구매 이메일과 거래 번호를 확인하세요.',
    originNotAllowed: '사이트 설정에 문제가 있습니다. 지원 이메일로 문의하세요.',
    humanCheckFailed: '사람 확인에 실패했습니다. 새로 고친 뒤 다시 시도하세요.',
    notOnSale: '이 상품은 더 이상 판매하지 않습니다. 지원 이메일로 문의하세요.',
    methodUnavailable: '이 결제 수단은 현재 사용할 수 없습니다. 다른 수단을 선택하세요.',
    alreadySubmitted:
      '이 거래 번호에는 이미 승인된 주문이 있습니다. 확장 프로그램에서 활성화하거나 지원 이메일로 문의하세요.',
    rateLimited: '요청이 너무 많습니다. 잠시 후 다시 시도하세요.',
    serverError: '서비스를 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도하세요.',
    unavailable: '네트워크를 사용할 수 없습니다. 잠시 후 다시 시도하거나 지원 이메일로 문의하세요.',
    invalidResponse: '서비스가 예상치 못한 결과를 반환했습니다. 잠시 후 다시 시도하거나 지원 이메일로 문의하세요.',
  },
  terms: {
    title: '구매 안내',
    items: [
      '자동 갱신되지 않는 일회성 라이선스입니다.',
      '라이선스는 구매 이메일에 귀속되며 최대 5대의 기기에서 동시에 활성화할 수 있습니다. 기기를 비활성화하면 다른 기기에서 사용할 자리가 생깁니다.',
      '라이선스는 만료되지 않습니다.',
      '활성화하지 않은 라이선스는 지원 이메일을 통해 환불받을 수 있으며, 활성화한 라이선스는 환불할 수 없습니다.',
      '결제나 활성화에 문제가 있으면 {email}로 문의하세요.',
    ],
  },
  privacy: {
    title: '주문 데이터와 개인정보',
    body: '주문을 제출하면 구매 이메일, 판매 항목, 결제 수단, 거래 번호, 사람 확인 토큰이 Beyond Translate 라이선스 서비스로 전송되어 수동 검토와 라이선스 발급에 사용됩니다. 이 페이지는 사람 확인을 위해 Cloudflare Turnstile을 불러옵니다. 주문 데이터는 마케팅에 사용되지 않으며 확장 프로그램으로 전달되지도 않습니다. 판매가 중지된 동안에는 이 페이지에서 Turnstile을 불러오지 않습니다.',
  },
  support: {
    title: '도움이 필요하신가요?',
    body: '결제, 주문, 활성화에 문제가 있으면 구매 이메일과 거래 번호를 함께 {email}로 보내 주세요.',
  },
};
