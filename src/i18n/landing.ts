/**
 * Landing-page copy for the three site languages. The docs live in Markdown per locale;
 * this file covers the shared landing components, where the same layout renders different copy.
 */

export type LandingLocale = 'zh-CN' | 'zh-Hant' | 'en';

export type FeatureId = 'privacy' | 'rules' | 'memory' | 'selection' | 'compare' | 'engine';

interface FeatureCopy {
  title: string;
  body: string;
}

interface PreviewSample {
  url: string;
  title: string;
  byline: string;
  sourceLabel: string;
  targetLabel: string;
  firstSource: string;
  firstTranslation: string;
  secondSource: string;
  secondTranslation: string;
  selectedSource: string;
  selectedTranslation: string;
  bubbleLabel: string;
  bilingual: string;
  translationOnly: string;
  translated: string;
  selection: string;
  translatePage: string;
  showOriginal: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterGroup {
  title: string;
  links: readonly FooterLink[];
}

export interface LandingStrings {
  eyebrow: string;
  status: string;
  stores: {
    label: string;
  };
  kickers: {
    features: string;
    services: string;
    privacy: string;
    release: string;
    faq: string;
  };
  tools: {
    language: string;
    theme: string;
  };
  preview: PreviewSample;
  features: {
    heading: string;
    intro: string;
    items: Record<FeatureId, FeatureCopy>;
    more: string;
  };
  services: {
    heading: string;
    intro: string;
    stats: readonly { value: string; label: string }[];
    body: string;
    chips: readonly string[];
  };
  privacy: {
    heading: string;
    intro: string;
    items: readonly { title: string; body: string }[];
    link: string;
  };
  release: {
    heading: string;
    intro: string;
    body: string;
    browsers: readonly string[];
    notes: string;
    helpCta: string;
    feedbackCta: string;
  };
  faq: {
    heading: string;
    items: readonly { question: string; answer: string }[];
  };
  footer: {
    brandName: string;
    brandSub: string;
    tagline: string;
    navLabel: string;
    groups: readonly FooterGroup[];
    legal: string;
  };
}

export const landingStrings = {
  'zh-CN': {
    eyebrow: '划词与整页翻译 · 站点规则 · 自选引擎',
    status: '已在 Chrome、Edge 与 Firefox 上架。',
    stores: {
      label: '从浏览器商店安装',
    },
    kickers: {
      features: '功能',
      services: '引擎',
      privacy: '隐私',
      release: '已上架',
      faq: '问答',
    },
    tools: {
      language: '语言',
      theme: '切换深浅色',
    },
    preview: {
      url: 'fieldnotes.example/essay/bilingual-reading',
      title: 'The Quiet Power of Bilingual Reading',
      byline: 'Field Notes · 6 min read',
      sourceLabel: '原文 · English',
      targetLabel: '译文 · 简体中文',
      firstSource:
        'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
      firstTranslation:
        '用两种语言阅读，改变的不只是你看到的文字。它放慢节奏，让原文留在眼前，也让意义在字里行间慢慢沉淀。',
      secondSource:
        'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
      secondTranslation: '好的翻译不会取代页面。它待在原文旁边，随时可以在你想读原文时消失。',
      selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
      selectedTranslation: '它放慢节奏，让原文留在眼前，也让意义在字里行间慢慢沉淀。',
      bubbleLabel: '翻译为 简体中文',
      bilingual: '双语对照',
      translationOnly: '仅译文',
      translated: '已翻译',
      selection: '划词翻译',
      translatePage: '整页翻译',
      showOriginal: '显示原文',
    },
    features: {
      heading: '翻译之外，留下你自己的东西',
      intro: '隐私、站点规则与生词本，是 Beyond Translate 与其它翻译扩展最不一样的地方。',
      items: {
        privacy: {
          title: '隐私',
          body: '密钥只存本机，备份始终加密，不记录来源页面；文字只发给所选的翻译服务。',
        },
        rules: {
          title: '站点规则',
          body: '按站点记住作用域、语言、提示词与自动翻译；内置 GitHub、Stack Overflow、Wikipedia 等规则。',
        },
        memory: {
          title: '生词本与译文存档',
          body: '划过的词句进生词本；整页译文可永久存档，下次打开直接上屏。',
        },
        selection: {
          title: '划词即译',
          body: '选中文字，译文在选区旁展开；单词还能看到音标、词性、义项与例句。',
        },
        compare: {
          title: '多服务对照',
          body: '划词槽位可同时放入多个翻译服务，译文并排比较，点哪块存哪块。',
        },
        engine: {
          title: '自选翻译引擎',
          body: '约 37 家模型供应商预设与四种接口协议；也可用 Google、Bing 与云厂商机器翻译。',
        },
      },
      more: '还有悬浮球、预翻译、快捷搜索等贴心服务。',
    },
    services: {
      heading: '翻译引擎，由你决定',
      intro: '不绑定某一家服务。用免费的，还是用你自己的模型，都由你决定。',
      stats: [
        { value: '≈37', label: '模型供应商预设' },
        { value: '≈130', label: '种目标语言' },
        { value: '25', label: '种界面语言' },
        { value: '4', label: '种接口协议' },
      ],
      body: '内置 Google 翻译与 Bing 翻译的免费端点，无需密钥即可使用；也可以接入自己的模型供应商，或 Google Cloud、Azure、阿里云与火山引擎的官方机器翻译。',
      chips: [
        'OpenAI Chat Completions',
        'Anthropic Messages',
        'Gemini',
        'Google 翻译',
        'Bing 翻译',
        'Google Cloud Translation',
        'Azure Translator',
        '阿里云机器翻译',
        '火山引擎机器翻译',
      ],
    },
    privacy: {
      heading: '你的信息，只去你选择的地方',
      intro:
        '翻译需要把文字发给翻译服务；除此之外，扩展不做别的事。连备份都被强制用 AES-256-GCM 加密，想存明文都没这个选项。',
      items: [
        {
          title: '密钥只存本机',
          body: 'API Key、云厂商 Access Key 与同步凭据只保存在本机，内容脚本拿不到。',
        },
        {
          title: '备份必须加密',
          body: '配置、生词本与译文存档都各自用 AES-256-GCM 加密，再打包成 zip；云同步也只上传加密包。数据密钥只存本机。',
        },
        {
          title: '不收集浏览内容',
          body: '不记录来源页面，不做后台统计，也没有广告。你在看什么，我们既不知道，也不想知道。',
        },
      ],
      link: '看看我们如何不看你',
    },
    release: {
      heading: '安装扩展',
      intro: 'Beyond Translate 已在 Chrome、Edge 与 Firefox 上架。',
      body: '选择你的浏览器商店安装扩展；安装说明与帮助文档会同步更新。',
      browsers: ['Chrome', 'Edge', 'Firefox'],
      notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
      helpCta: '先看看帮助中心',
      feedbackCta: '前往反馈仓库',
    },
    faq: {
      heading: '常见问题',
      items: [
        {
          question: '在哪里可以安装？',
          answer: '已在 Chrome、Edge 与 Firefox 上架，可从本页的安装入口进入商店。安装后把扩展固定到工具栏。',
        },
        {
          question: '必须自己准备 API Key 吗？',
          answer:
            '不必须。不做任何配置也能用内置的 Google / Bing 免费端点翻译；想用更好的模型或官方机器翻译时，再填入自己的 Key。',
        },
        {
          question: '翻译会把我的网页内容上传吗？',
          answer:
            '只会把需要翻译的文字发给你在扩展里选择的翻译服务。密钥与同步凭据只存本机，备份始终加密，扩展不收集浏览记录。',
        },
        {
          question: '支持哪些浏览器？',
          answer: 'Chromium 系（Chrome 111+、Edge）与 Firefox 136+，Manifest V3。',
        },
        {
          question: '有付费功能吗？',
          answer:
            '划词、整页翻译等基础功能免费；备份还原与站点规则的写入需要一次性买断许可。购买页开放后，在官网付款并提交交易单号，人工审核通过后会收到许可邮件，再在扩展里用同一邮箱激活。',
        },
      ],
    },
    footer: {
      brandName: '译无界',
      brandSub: 'Beyond Translate',
      tagline: '让整个互联网，读成你的语言。',
      navLabel: '页脚',
      groups: [
        {
          title: '产品',
          links: [
            { label: '功能', href: '#features' },
            { label: '隐私', href: '#privacy' },
            { label: '翻译引擎', href: '#services' },
          ],
        },
        {
          title: '帮助',
          links: [
            { label: '帮助中心', href: 'help/' },
            { label: '快速上手', href: 'help/getting-started/' },
            { label: '机器翻译', href: 'help/machine-translation/' },
            { label: '常见问题', href: 'help/faq/' },
          ],
        },
      ],
      legal: '© 2026 译无界 · Beyond Translate。本站源码以 MIT 许可开源。',
    },
  },
  'zh-Hant': {
    eyebrow: '劃詞與整頁翻譯 · 站點規則 · 自選引擎',
    status: '已在 Chrome、Edge 與 Firefox 上架。',
    stores: {
      label: '從瀏覽器商店安裝',
    },
    kickers: {
      features: '功能',
      services: '引擎',
      privacy: '隱私',
      release: '已上架',
      faq: '問答',
    },
    tools: {
      language: '語言',
      theme: '切換深淺色',
    },
    preview: {
      url: 'fieldnotes.example/essay/bilingual-reading',
      title: 'The Quiet Power of Bilingual Reading',
      byline: 'Field Notes · 6 分鐘閱讀',
      sourceLabel: '原文 · English',
      targetLabel: '譯文 · 繁體中文',
      firstSource:
        'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
      firstTranslation:
        '用兩種語言閱讀，改變的不只是你看到的文字。它放慢節奏，讓原文留在眼前，也讓意義在字裡行間慢慢沉澱。',
      secondSource:
        'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
      secondTranslation: '好的翻譯不會取代頁面。它待在原文旁邊，隨時可以在你想讀原文時消失。',
      selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
      selectedTranslation: '它放慢節奏，讓原文留在眼前，也讓意義在字裡行間慢慢沉澱。',
      bubbleLabel: '翻譯為 繁體中文',
      bilingual: '雙語對照',
      translationOnly: '僅譯文',
      translated: '已翻譯',
      selection: '劃詞翻譯',
      translatePage: '整頁翻譯',
      showOriginal: '顯示原文',
    },
    features: {
      heading: '翻譯之外，留下你自己的東西',
      intro: '隱私、站點規則與生詞本，是 Beyond Translate 與其它翻譯擴充功能最不一樣的地方。',
      items: {
        privacy: {
          title: '隱私',
          body: '金鑰只存本機，備份始終加密，不記錄來源頁面；文字只發給所選的翻譯服務。',
        },
        rules: {
          title: '站點規則',
          body: '按站點記住作用域、語言、提示詞與自動翻譯；內建 GitHub、Stack Overflow、Wikipedia 等規則。',
        },
        memory: {
          title: '生詞本與譯文存檔',
          body: '劃過的詞句進生詞本；整頁譯文可永久存檔，下次開啟直接上屏。',
        },
        selection: {
          title: '劃詞即譯',
          body: '選中文字，譯文在選區旁展開；單詞還能看到音標、詞性、義項與例句。',
        },
        compare: {
          title: '多服務對照',
          body: '劃詞槽位可同時放入多個翻譯服務，譯文並排比較，點哪塊存哪塊。',
        },
        engine: {
          title: '自選翻譯引擎',
          body: '約 37 家模型供應商預設與四種介面協定；也可用 Google、Bing 與雲端廠商機器翻譯。',
        },
      },
      more: '還有懸浮球、預翻譯、快捷搜尋與 25 種介面語言。',
    },
    services: {
      heading: '翻譯引擎，由你決定',
      intro: '不綁定某一家服務。用免費的，還是用你自己的模型，都由你決定。',
      stats: [
        { value: '≈37', label: '模型供應商預設' },
        { value: '≈130', label: '種目標語言' },
        { value: '25', label: '種介面語言' },
        { value: '4', label: '種介面協定' },
      ],
      body: '內建 Google 翻譯與 Bing 翻譯的免費端點，無需金鑰即可使用；也可以接入自己的模型供應商，或 Google Cloud、Azure、阿里雲與火山引擎的官方機器翻譯。',
      chips: [
        'OpenAI Chat Completions',
        'Anthropic Messages',
        'Gemini',
        'Google 翻譯',
        'Bing 翻譯',
        'Google Cloud Translation',
        'Azure Translator',
        '阿里雲機器翻譯',
        '火山引擎機器翻譯',
      ],
    },
    privacy: {
      heading: '你的文字，只去你選擇的地方',
      intro:
        '翻譯需要把文字發給翻譯服務；除此之外，擴充功能不做別的事。連備份都被強制用 AES-256-GCM 加密，想存明文都沒這個選項。',
      items: [
        {
          title: '金鑰只存本機',
          body: 'API Key、雲端廠商 Access Key 與同步憑證只保存在本機，內容腳本拿不到。',
        },
        {
          title: '備份必須加密',
          body: '設定、生詞本與譯文存檔都各自用 AES-256-GCM 加密，再打包成 zip；雲端同步也只上傳加密包。資料金鑰只存本機，丟了連我們也解不開。',
        },
        {
          title: '不收集瀏覽內容',
          body: '不記錄來源頁面，不做後台統計，也沒有廣告。你在看什麼，我們既不知道，也不想知道。',
        },
      ],
      link: '看看我們如何不看你',
    },
    release: {
      heading: '安裝擴充功能',
      intro: 'Beyond Translate 已在 Chrome、Edge 與 Firefox 上架。',
      body: '選擇你的瀏覽器商店安裝擴充功能；安裝說明與幫助文件會同步更新。',
      browsers: ['Chrome', 'Edge', 'Firefox'],
      notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
      helpCta: '先看看幫助中心',
      feedbackCta: '前往回饋倉庫',
    },
    faq: {
      heading: '常見問題',
      items: [
        {
          question: '在哪裡可以安裝？',
          answer: '已在 Chrome、Edge 與 Firefox 上架，可從本頁的安裝入口進入商店。安裝後把擴充功能固定到工具列。',
        },
        {
          question: '必須自己準備 API Key 嗎？',
          answer:
            '不必須。不做任何設定也能用內建的 Google / Bing 免費端點翻譯；想用更好的模型或官方機器翻譯時，再填入自己的 Key。',
        },
        {
          question: '翻譯會把我的網頁內容上傳嗎？',
          answer:
            '只會把需要翻譯的文字發給你在擴充功能裡選擇的翻譯服務。金鑰與同步憑證只存本機，備份始終加密，擴充功能不收集瀏覽記錄。',
        },
        {
          question: '支援哪些瀏覽器？',
          answer: 'Chromium 系（Chrome 111+、Edge）與 Firefox 136+，Manifest V3。',
        },
        {
          question: '有付費功能嗎？',
          answer:
            '劃詞、整頁翻譯等基礎功能免費；備份還原與站點規則的寫入需要一次性買斷授權。購買頁開放後，在官網付款並提交交易單號，人工審核通過後會收到授權郵件，再在擴充功能裡用同一信箱啟用。',
        },
      ],
    },
    footer: {
      brandName: '譯無界',
      brandSub: 'Beyond Translate',
      tagline: '讓整個網際網路，讀成你的語言。',
      navLabel: '頁尾',
      groups: [
        {
          title: '產品',
          links: [
            { label: '功能', href: '#features' },
            { label: '隱私', href: '#privacy' },
            { label: '翻譯引擎', href: '#services' },
          ],
        },
        {
          title: '幫助',
          links: [
            { label: '幫助中心', href: 'help/' },
            { label: '快速上手', href: 'help/getting-started/' },
            { label: '機器翻譯', href: 'help/machine-translation/' },
            { label: '常見問題', href: 'help/faq/' },
          ],
        },
      ],
      legal: '© 2026 譯無界 · Beyond Translate。本站原始碼以 MIT 授權開源。',
    },
  },
  en: {
    eyebrow: 'Selection & full page · Site rules · Your own engine',
    status: 'Available on Chrome, Edge and Firefox.',
    stores: {
      label: "Install from your browser's store",
    },
    kickers: {
      features: 'Features',
      services: 'Engines',
      privacy: 'Privacy',
      release: 'Available',
      faq: 'FAQ',
    },
    tools: {
      language: 'Language',
      theme: 'Toggle theme',
    },
    preview: {
      url: 'fieldnotes.example/essay/lecture-bilingue',
      title: 'Le pouvoir discret de la lecture bilingue',
      byline: 'Field Notes · 6 min read',
      sourceLabel: 'Original · Français',
      targetLabel: 'Translation · English',
      firstSource:
        "Lire dans deux langues change plus que les mots que l'on voit. Cela ralentit le rythme, garde l'original à portée de main et laisse le sens se déposer entre les lignes.",
      firstTranslation:
        'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
      secondSource:
        'Une bonne traduction ne remplace pas la page. Elle se tient à côté, prête à disparaître dès que vous voulez retrouver l’original.',
      secondTranslation:
        'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
      selectedSource:
        "Cela ralentit le rythme, garde l'original à portée de main et laisse le sens se déposer entre les lignes.",
      selectedTranslation:
        'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
      bubbleLabel: 'Translate to English',
      bilingual: 'Bilingual',
      translationOnly: 'Translation only',
      translated: 'Translated',
      selection: 'Selection',
      translatePage: 'Translate page',
      showOriginal: 'Show original',
    },
    features: {
      heading: 'More than translation',
      intro:
        'Privacy, site rules and the notebook are where Beyond Translate differs most from other translation extensions.',
      items: {
        privacy: {
          title: 'Privacy',
          body: 'Keys stay on your device, backups are always encrypted, source pages are never recorded, and text goes only to the service you choose.',
        },
        rules: {
          title: 'Site rules',
          body: 'Remember scope, language, prompt and auto-translate per site, with built-in rules for GitHub, Stack Overflow, Wikipedia and more.',
        },
        memory: {
          title: 'Notebook and archive',
          body: 'Saved words and sentences live in the notebook; page translations can be archived and shown instantly next time.',
        },
        selection: {
          title: 'Select and translate',
          body: 'Select text and the translation appears beside it; single words also get phonetics, parts of speech, senses and examples.',
        },
        compare: {
          title: 'Compare services',
          body: 'Put multiple translation services in the selection slot and compare their output; save whichever block you prefer.',
        },
        engine: {
          title: 'Your own engine',
          body: 'About 37 model provider presets across four protocols, plus Google, Bing and cloud machine translation.',
        },
      },
      more: 'Also includes a floating ball, pre-translation, quick search and 25 interface languages.',
    },
    services: {
      heading: 'Your engine, your call',
      intro: 'No lock-in. Use the free endpoints, or bring your own models.',
      stats: [
        { value: '≈37', label: 'model provider presets' },
        { value: '≈130', label: 'target languages' },
        { value: '25', label: 'interface languages' },
        { value: '4', label: 'API protocols' },
      ],
      body: 'Google and Bing machine translation work out of the box with no API key. You can also connect your own model providers, or official Google Cloud, Azure, Alibaba Cloud and Volcengine translation APIs.',
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
      heading: 'Your words go only where you choose',
      intro:
        'Translation has to send text to a translation service. That is all the extension does with it — backups are forced through AES-256-GCM, and plaintext is not even an option.',
      items: [
        {
          title: 'Keys stay on your device',
          body: 'API keys, cloud access keys and sync credentials are stored locally and are not exposed to content scripts.',
        },
        {
          title: 'Backups must be encrypted',
          body: 'Settings, notebook and page archive are each encrypted with AES-256-GCM, then packed into a zip; cloud sync uploads only that encrypted package. The data key never leaves your device — lose it and even we cannot open the file.',
        },
        {
          title: 'No browsing data collected',
          body: 'Source pages are never recorded, there is no background analytics and no advertising. We neither know nor care what you read.',
        },
      ],
      link: "See how we don't look at you",
    },
    release: {
      heading: 'Install',
      intro: 'Beyond Translate is available on Chrome, Edge and Firefox.',
      body: "Choose your browser's store to install the extension; the install steps and help docs stay in sync.",
      browsers: ['Chrome', 'Edge', 'Firefox'],
      notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
      helpCta: 'Browse the help center',
      feedbackCta: 'Open the feedback repository',
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          question: 'Where can I install it?',
          answer:
            'Install it from the Chrome Web Store, Microsoft Edge Add-ons or Firefox Add-ons, then pin the extension to the toolbar.',
        },
        {
          question: 'Do I need my own API key?',
          answer:
            'No. The built-in Google and Bing endpoints work without any configuration. Add your own key only when you want a better model or an official machine translation API.',
        },
        {
          question: 'Does translation upload my pages?',
          answer:
            'Only the text that needs translating is sent to the service you choose. Keys and sync credentials stay on your device, backups are encrypted, and no browsing history is collected.',
        },
        {
          question: 'Which browsers are supported?',
          answer: 'Chromium-based browsers (Chrome 111+, Edge) and Firefox 136+, on Manifest V3.',
        },
        {
          question: 'Are there paid features?',
          answer:
            'Selection and full-page translation are free. Backup/restore and writing site rules require a one-time license: when the purchase page opens, pay there, submit the transaction number, and after manual review activate it in the extension with the purchase email.',
        },
      ],
    },
    footer: {
      brandName: 'Beyond Translate',
      brandSub: '译无界',
      tagline: 'Read the whole web in your own language.',
      navLabel: 'Footer',
      groups: [
        {
          title: 'Product',
          links: [
            { label: 'Features', href: '#features' },
            { label: 'Privacy', href: '#privacy' },
            { label: 'Engines', href: '#services' },
          ],
        },
        {
          title: 'Help',
          links: [
            { label: 'Help center', href: 'help/' },
            { label: 'Getting started', href: 'help/getting-started/' },
            { label: 'Machine translation', href: 'help/machine-translation/' },
            { label: 'FAQ', href: 'help/faq/' },
          ],
        },
      ],
      legal: '© 2026 Beyond Translate · 译无界. Site source is open under the MIT license.',
    },
  },
} as const satisfies Record<LandingLocale, LandingStrings>;

export function landingLocale(lang: string | undefined): LandingLocale {
  const value = lang?.toLowerCase();
  if (
    value === 'zh-hant' ||
    value === 'zh-tw' ||
    value === 'zh-hk' ||
    value === 'zh-mo' ||
    value?.startsWith('zh-hant')
  ) {
    return 'zh-Hant';
  }
  if (value?.startsWith('zh')) return 'zh-CN';
  return 'en';
}

export function getLanding(lang: string | undefined): LandingStrings {
  return landingStrings[landingLocale(lang)];
}
