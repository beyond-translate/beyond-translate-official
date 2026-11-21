import type { LandingStrings } from '../landing';

export const landing: LandingStrings = {
  eyebrow: '選択翻訳とページ全体翻訳 · サイトルール · エンジンは自分で選ぶ',
  status: 'Chrome、Edge、Firefox で公開中です。',
  stores: {
    label: 'ブラウザのストアからインストール',
  },
  kickers: {
    features: '機能',
    services: 'エンジン',
    privacy: 'プライバシー',
    release: '公開中',
    faq: 'FAQ',
  },
  tools: {
    language: '言語',
    theme: 'テーマを切り替え',
  },
  preview: {
    url: 'fieldnotes.example/essay/bilingual-reading',
    title: 'The Quiet Power of Bilingual Reading',
    byline: 'Field Notes · 6 min read',
    sourceLabel: 'Original · English',
    targetLabel: '訳文 · 日本語',
    firstSource:
      'Reading in two languages changes more than the words you see. It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    firstTranslation:
      '二つの言語で読むことは、目にする言葉以上のものを変えます。読む速さはゆるやかになり、原文は手元にとどまり、意味は行間でゆっくりと定着します。',
    secondSource:
      'A good translation does not replace the page. It sits beside it, ready to disappear the moment you want the original back.',
    secondTranslation:
      '優れた翻訳は、ページを置き換えません。原文のそばに寄り添い、原文に戻りたくなった瞬間に消えられるよう控えています。',
    selectedSource: 'It slows the pace, keeps the original close, and lets the meaning settle between the lines.',
    selectedTranslation: '読む速さをゆるやかにし、原文を手元にとどめ、意味を行間でゆっくりと定着させます。',
    bubbleLabel: '日本語に翻訳',
    bilingual: '対訳表示',
    translationOnly: '訳文のみ',
    translated: '翻訳済み',
    selection: '選択翻訳',
    translatePage: 'ページ全体を翻訳',
    showOriginal: '原文を表示',
  },
  features: {
    heading: '翻訳のその先へ。あなたの言葉を手元に。',
    intro:
      'プライバシー、サイトルール、単語帳。Beyond Translate が他の翻訳拡張機能と最も大きく違うのは、この三つです。',
    items: {
      privacy: {
        title: 'プライバシー',
        body: 'キーは端末内にのみ保存され、バックアップは常に暗号化され、閲覧元のページは記録されません。テキストは、選んだ翻訳サービスにだけ送られます。',
      },
      rules: {
        title: 'サイトルール',
        body: 'サイトごとに適用範囲、言語、プロンプト、自動翻訳を記憶します。GitHub、Stack Overflow、Wikipedia などのルールを内蔵しています。',
      },
      memory: {
        title: '単語帳と訳文アーカイブ',
        body: '選択した単語や文は単語帳に残り、ページ全体の訳文は永続的にアーカイブできます。次に開いたときはすぐに画面へ表示されます。',
      },
      selection: {
        title: '選択するだけで翻訳',
        body: 'テキストを選択すると、訳文がその場に展開されます。単語なら発音記号、品詞、語義、例文も確認できます。',
      },
      compare: {
        title: '複数サービスを比較',
        body: '選択翻訳のスロットに複数の翻訳サービスを同時に設定し、訳文を並べて比較できます。保存したいブロックをクリックするだけです。',
      },
      engine: {
        title: '翻訳エンジンは自分で選ぶ',
        body: '約 37 社のモデルプロバイダープリセットと 4 種類の API プロトコルを用意。Google、Bing、クラウド事業者の機械翻訳も使えます。',
      },
    },
    more: 'ほかにも、フローティングボール、事前翻訳、クイック検索などの便利な機能があります。',
  },
  services: {
    heading: '翻訳エンジンは、あなたが決める',
    intro: '特定のサービスに縛られません。無料のものを使うか、自分のモデルを使うかは、あなた次第です。',
    stats: [
      { value: '≈37', label: 'モデルプロバイダーのプリセット' },
      { value: '≈130', label: '対応ターゲット言語' },
      { value: '25', label: '対応インターフェース言語' },
      { value: '4', label: 'API プロトコル' },
    ],
    body: 'Google 翻訳と Bing 翻訳の無料エンドポイントを内蔵しているので、キーなしですぐに使えます。独自のモデルプロバイダーや、Google Cloud、Azure、阿里云、火山引擎の公式機械翻訳にも接続できます。',
    chips: [
      'OpenAI Chat Completions',
      'Anthropic Messages',
      'Gemini',
      'Google 翻訳',
      'Bing 翻訳',
      'Google Cloud Translation',
      'Azure Translator',
      '阿里云機械翻訳',
      '火山引擎機械翻訳',
    ],
  },
  privacy: {
    heading: 'あなたの情報は、あなたが選んだ場所へだけ',
    intro:
      '翻訳には、テキストを翻訳サービスへ送る必要があります。拡張機能がそれ以外のことに使うことはありません。バックアップは AES-256-GCM での暗号化が必須で、平文で保存する選択肢すらありません。',
    items: [
      {
        title: 'キーは端末内にだけ',
        body: 'API Key、クラウド事業者の Access Key、同期認証情報は端末内にのみ保存され、コンテンツスクリプトからは参照できません。',
      },
      {
        title: 'バックアップは暗号化が必須',
        body: '設定、単語帳、訳文アーカイブはそれぞれ AES-256-GCM で暗号化してから zip にまとめます。クラウド同期も暗号化済みのパッケージだけをアップロードします。データキーは端末から出ません。紛失すると、私たちでもファイルを開けなくなります。',
      },
      {
        title: '閲覧内容は収集しません',
        body: '閲覧元のページは記録せず、バックグラウンドでの統計も広告もありません。あなたが何を読んでいるか、私たちは知りませんし、知りたくもありません。',
      },
    ],
    link: '私たちがあなたを見ない理由',
  },
  release: {
    heading: 'インストール',
    intro: 'Beyond Translate は Chrome、Edge、Firefox で公開中です。',
    body: 'お使いのブラウザのストアから拡張機能をインストールしてください。インストール手順とヘルプドキュメントもあわせて更新されます。',
    browsers: ['Chrome', 'Edge', 'Firefox'],
    notes: 'Chromium 111+ · Firefox 136+ · Manifest V3',
    helpCta: 'まずはヘルプセンターへ',
    feedbackCta: 'フィードバックリポジトリへ',
  },
  faq: {
    heading: 'よくある質問',
    items: [
      {
        question: 'どこでインストールできますか？',
        answer:
          'Chrome、Edge、Firefox で公開中です。このページのインストール入口からストアへ移動できます。インストール後は、拡張機能をツールバーに固定してください。',
      },
      {
        question: 'API Key は自分で用意する必要がありますか？',
        answer:
          'いいえ。何も設定しなくても、内蔵の Google / Bing 無料エンドポイントで翻訳できます。より良いモデルや公式の機械翻訳を使いたいときに、自分の Key を入力してください。',
      },
      {
        question: '翻訳するとページの内容はアップロードされますか？',
        answer:
          '翻訳が必要なテキストだけが、拡張機能で選択した翻訳サービスに送信されます。キーと同期認証情報は端末内にのみ保存され、バックアップは常に暗号化され、閲覧履歴は収集されません。',
      },
      {
        question: '対応しているブラウザは？',
        answer: 'Chromium 系（Chrome 111+、Edge）と Firefox 136+、Manifest V3 です。',
      },
      {
        question: '有料機能はありますか？',
        answer:
          '選択翻訳やページ全体翻訳などの基本機能は無料です。バックアップの復元とサイトルールの書き込みには、買い切りのライセンスが必要です。購入ページが公開されたら、公式サイトで支払って取引番号を提出してください。手動審査の承認後にライセンスメールが届くので、拡張機能で同じメールアドレスを使って有効化します。',
      },
    ],
  },
  footer: {
    brandName: 'Beyond Translate',
    brandSub: '译无界',
    tagline: 'インターネットのすべてを、あなたの言語で読む。',
    navLabel: 'フッター',
    groups: [
      {
        title: '製品',
        links: [
          { label: '機能', href: '#features' },
          { label: 'プライバシー', href: '#privacy' },
          { label: '翻訳エンジン', href: '#services' },
        ],
      },
      {
        title: 'ヘルプ',
        links: [
          { label: 'ヘルプセンター', href: 'help/' },
          { label: 'クイックスタート', href: 'help/getting-started/' },
          { label: '機械翻訳', href: 'help/machine-translation/' },
          { label: 'よくある質問', href: 'help/faq/' },
        ],
      },
    ],
    legal: '© 2026 Beyond Translate · 译无界。本サイトのソースコードは MIT ライセンスで公開されています。',
  },
};
