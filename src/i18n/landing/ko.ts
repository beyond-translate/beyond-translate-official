import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: '선택 번역·전체 페이지 번역 · 사이트 규칙 · 나만의 엔진',
  status: 'Chrome, Edge, Firefox에서 사용할 수 있습니다.',
  stores: {
    label: '사용하는 브라우저의 스토어에서 설치하세요',
  },
  kickers: {
    features: '기능',
    services: '엔진',
    privacy: '개인정보',
    release: '출시',
    faq: 'FAQ',
  },
  tools: {
    language: '언어',
    theme: '테마 전환',
  },
  preview: {
    url: 'fieldnotes.example/essay/bilingual-reading',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: '번역 · 한국어',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      '두 언어로 읽는 일은 눈에 보이는 단어 그 이상을 바꿉니다. 속도를 늦추고 원문을 곁에 두어, 의미가 줄 사이에 천천히 스며들게 합니다.',
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      '좋은 번역은 페이지를 대신하지 않습니다. 원문 곁에 자리하다가, 원문이 다시 보고 싶어지는 순간 사라질 준비를 갖추고 있을 뿐입니다.',
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation: '속도를 늦추고 원문을 곁에 두어, 의미가 줄 사이에 천천히 스며들게 합니다.',
    bubbleLabel: '한국어로 번역',
    bilingual: '이중 언어 대조',
    translationOnly: '번역문만',
    translated: '번역됨',
    selection: '선택 번역',
    translatePage: '전체 페이지 번역',
    showOriginal: '원문 보기',
  },
  features: {
    heading: '번역 그 이상',
    intro:
      '개인정보 보호, 사이트 규칙, 단어장은 Beyond Translate가 다른 번역 확장 프로그램과 가장 크게 다른 지점입니다.',
    items: {
      privacy: {
        title: '개인정보 보호',
        body: '키는 기기에만 보관되고, 백업은 항상 암호화되며, 원본 페이지는 기록하지 않습니다. 텍스트는 선택한 번역 서비스로만 전송됩니다.',
      },
      rules: {
        title: '사이트 규칙',
        body: '사이트별로 적용 범위, 언어, 프롬프트, 자동 번역을 기억합니다. GitHub, Stack Overflow, Wikipedia 등의 규칙이 기본 제공됩니다.',
      },
      memory: {
        title: '단어장과 번역 보관함',
        body: '선택한 단어와 문장은 단어장에 쌓이고, 페이지 번역은 보관해 두었다가 다음에 열 때 바로 표시할 수 있습니다.',
      },
      selection: {
        title: '선택하면 바로 번역',
        body: '텍스트를 선택하면 번역이 옆에 펼쳐집니다. 단어는 발음 기호, 품사, 뜻풀이, 예문까지 확인할 수 있습니다.',
      },
      compare: {
        title: '여러 서비스 비교',
        body: '선택 번역 슬롯에 여러 번역 서비스를 담아 결과를 나란히 비교하고, 마음에 드는 번역만 저장하세요.',
      },
      engine: {
        title: '나만의 번역 엔진',
        body: '약 37개 모델 제공업체 프리셋과 4가지 API 프로토콜을 지원하며, Google, Bing 및 클라우드 기계 번역도 사용할 수 있습니다.',
      },
    },
    more: '플로팅 볼, 사전 번역, 빠른 검색, 25개 인터페이스 언어도 함께 제공합니다.',
  },
  services: {
    heading: '번역 엔진은 당신이 정합니다',
    intro: '특정 서비스에 묶이지 않습니다. 무료 엔드포인트를 쓰든, 직접 준비한 모델을 쓰든 당신의 선택입니다.',
    stats: [
      { value: '≈37', label: '모델 제공업체 프리셋' },
      { value: '≈130', label: '번역 대상 언어' },
      { value: '25', label: '인터페이스 언어' },
      { value: '4', label: 'API 프로토콜' },
    ],
    body: 'Google 번역과 Bing 번역의 무료 엔드포인트는 API 키 없이 바로 사용할 수 있습니다. 직접 보유한 모델 제공업체나 Google Cloud, Azure, Alibaba Cloud, Volcengine의 공식 기계 번역 API를 연결할 수도 있습니다.',
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
    heading: '당신의 글은 당신이 선택한 곳으로만 갑니다',
    intro:
      '번역하려면 텍스트를 번역 서비스로 보내야 합니다. 확장 프로그램이 텍스트로 하는 일은 그뿐입니다. 백업은 AES-256-GCM 암호화가 강제되며, 평문으로 저장하는 선택지조차 없습니다.',
    items: [
      {
        title: '키는 기기에만 보관',
        body: 'API 키, 클라우드 액세스 키, 동기화 자격 증명은 로컬에만 저장되며 콘텐츠 스크립트에서는 접근할 수 없습니다.',
      },
      {
        title: '백업은 반드시 암호화',
        body: '설정, 단어장, 페이지 번역 보관함은 각각 AES-256-GCM으로 암호화한 뒤 zip으로 묶습니다. 클라우드 동기화도 암호화된 패키지만 업로드합니다. 데이터 키는 기기 밖으로 나가지 않으며, 키를 잃으면 저희도 파일을 열 수 없습니다.',
      },
      {
        title: '탐색 기록을 수집하지 않습니다',
        body: '원본 페이지는 기록하지 않고, 백그라운드 통계나 광고도 없습니다. 당신이 무엇을 읽는지 저희는 알지도, 알고 싶지도 않습니다.',
      },
    ],
    link: '저희가 당신을 보지 않는 방식',
  },
  release: {
    heading: '설치',
    intro: 'Beyond Translate는 Chrome, Edge, Firefox에 출시되었습니다.',
    body: '사용하는 브라우저의 스토어에서 확장 프로그램을 설치하세요. 설치 안내와 도움말 문서도 함께 최신 상태로 유지됩니다.',
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: '도움말 센터 둘러보기',
    feedbackCta: '피드백 저장소 열기',
  },
  faq: {
    heading: '자주 묻는 질문',
    items: [
      {
        question: '어디에서 설치할 수 있나요?',
        answer:
          'Chrome 웹 스토어, Microsoft Edge 추가 기능, Firefox 부가 기능에서 설치한 뒤 확장 프로그램을 툴바에 고정하세요.',
      },
      {
        question: 'API 키를 직접 준비해야 하나요?',
        answer:
          '아니요. 기본 제공되는 Google, Bing 엔드포인트는 아무 설정 없이도 작동합니다. 더 나은 모델이나 공식 기계 번역 API를 원할 때만 직접 발급받은 키를 입력하면 됩니다.',
      },
      {
        question: '번역할 때 웹페이지 내용이 업로드되나요?',
        answer:
          '번역이 필요한 텍스트만 확장 프로그램에서 선택한 번역 서비스로 전송됩니다. 키와 동기화 자격 증명은 기기에만 보관되고, 백업은 항상 암호화되며, 탐색 기록은 수집하지 않습니다.',
      },
      {
        question: '어떤 브라우저를 지원하나요?',
        answer: 'Chromium 계열(Chrome 111+, Edge)과 Firefox 136+를 Manifest V3에서 지원합니다.',
      },
      {
        question: '유료 기능이 있나요?',
        answer:
          '선택 번역과 전체 페이지 번역 등 기본 기능은 무료입니다. 백업/복원과 사이트 규칙 쓰기에는 일회성 라이선스가 필요합니다. 구매 페이지가 열리면 공식 사이트에서 결제하고 거래 번호를 제출하세요. 수동 검토를 통과하면 라이선스 메일이 발송되며, 확장 프로그램에서 같은 이메일로 활성화하면 됩니다.',
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: '온 웹을 당신의 언어로 읽으세요.',
    navLabel: '바닥글',
    groups: [
      {
        title: '제품',
        links: [
          { label: '기능', href: '#features' },
          { label: '개인정보', href: '#privacy' },
          { label: '엔진', href: '#services' },
        ],
      },
      {
        title: '도움말',
        links: [
          { label: '도움말 센터', href: 'help/' },
          { label: '시작하기', href: 'help/getting-started/' },
          { label: '기계 번역', href: 'help/machine-translation/' },
          { label: '자주 묻는 질문', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界. 사이트 소스는 MIT 라이선스로 공개되어 있습니다.',
  },
};
