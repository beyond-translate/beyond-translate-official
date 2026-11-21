import type { PaymentMethodId } from '../config/purchase';
import type { OrderFailure } from '../lib/purchase';
import { landingLocale, type LandingLocale } from './landing';
import { docsPath, languageBuy, languageHome, localizedPath } from './languages';
import { purchase as de } from './purchase/de';
import { purchase as es } from './purchase/es';
import { purchase as fr } from './purchase/fr';
import { purchase as it } from './purchase/it';
import { purchase as ja } from './purchase/ja';
import { purchase as ko } from './purchase/ko';
import { purchase as pt } from './purchase/pt';

export type PurchaseLocale = LandingLocale;

export interface PurchaseStrings {
  meta: { title: string; description: string };
  closed: { kicker: string; title: string; body: string; feedbackCta: string; helpCta: string };
  entry: { heroCta: string; footerLink: string };
  hero: { kicker: string; title: string; intro: string };
  price: { oneTime: string; cnyLabel: string; usdtLabel: string; note: string };
  steps: { title: string; intro: string; items: readonly string[] };
  payment: {
    title: string;
    intro: string;
    hint: string;
    zoom: string;
    zoomHint: string;
    scan: Record<PaymentMethodId, string>;
    close: string;
    copy: string;
    copied: string;
    copyFailed: string;
    qrLabel: string;
  };
  paymentMethods: Record<PaymentMethodId, string>;
  form: {
    title: string;
    intro: string;
    open: string;
    emailLabel: string;
    emailHint: string;
    emailConfirmLabel: string;
    emailConfirmHint: string;
    methodLegend: string;
    amountNote: string;
    transactionLabel: string;
    transactionHint: string;
    transactionHints: Record<PaymentMethodId, string>;
    turnstileLabel: string;
    turnstileHint: string;
    turnstileLoading: string;
    turnstileFailed: string;
    submit: string;
    submitting: string;
    requiredEmail: string;
    invalidEmail: string;
    emailMismatch: string;
    requiredMethod: string;
    requiredTransaction: string;
    invalidTransaction: string;
    missingToken: string;
    problemTitle: string;
    supportFallback: string;
    noScript: string;
  };
  success: {
    title: string;
    body: string;
    emailLabel: string;
    review: string;
    waitEmail: string;
    activate: string;
  };
  already: { title: string };
  errors: Record<OrderFailure, string>;
  terms: { title: string; items: readonly string[] };
  privacy: { title: string; body: string };
  support: { title: string; body: string };
}

export const purchaseStrings = {
  'zh-CN': {
    meta: {
      title: '购买译无界许可',
      description: '一次性购买译无界许可：支持支付宝、微信与 USDT，人工审核后通过邮件发放许可，在扩展中激活。',
    },
    closed: {
      kicker: '许可',
      title: '尚未开售',
      body: '许可尚未开售。开售后，这里会显示价格、支付方式与订单表单。',
      feedbackCta: '关注反馈仓库',
      helpCta: '查看帮助文档',
    },
    entry: {
      heroCta: '购买许可',
      footerLink: '购买许可',
    },
    hero: {
      kicker: '许可',
      title: '一次买断，长期使用',
      intro: '基础翻译免费；备份还原与站点规则写入需要一次性许可。人工审核后，许可邮件会发送到你的购买邮箱。',
    },
    price: {
      oneTime: '一次性买断制许可，不会自动续费。',
      cnyLabel: '人民币',
      usdtLabel: 'USDT',
      note: '请按页面显示的金额与网络转账。',
    },
    steps: {
      title: '购买步骤',
      intro: '整个过程无需注册账号。',
      items: [
        '选择支付方式，按页面显示的金额付款；支付宝与微信的收款码不含金额，需要手动输入 {amount}。',
        '付款后，在本页填写购买邮箱、支付方式与交易单号。',
        '等待人工审核，通常需要 {hours} 小时；通过后会收到「许可已就绪」邮件。',
        '在扩展的许可分区用同一邮箱获取验证码并激活。',
      ],
    },
    payment: {
      title: '支付方式',
      intro: '任选一种支付方式；付款后回到本页提交订单。',
      hint: '支付宝与微信的收款码不含金额，扫码后手动输入 {cny}；USDT 请转 {usdt}，并选择与收款码相同的网络，转错网络的资金无法找回。',
      zoom: '放大{method}收款码',
      zoomHint: '点击收款码可单独放大显示，避免扫到旁边的码。',
      scan: {
        alipay: '打开支付宝「扫一扫」，扫码后手动输入 {amount}。',
        wechat: '打开微信「扫一扫」，扫码后手动输入 {amount}。',
        'usdt-trc20': '用钱包扫码或复制地址，在 {network} 网络转入 {amount}。',
        'usdt-erc20': '用钱包扫码或复制地址，在 {network} 网络转入 {amount}。',
      },
      close: '关闭',
      copy: '复制地址',
      copied: '已复制',
      copyFailed: '复制失败，请手动选中地址复制。',
      qrLabel: '{method}收款码，金额 {amount}',
    },
    paymentMethods: {
      alipay: '支付宝',
      wechat: '微信支付',
      'usdt-trc20': 'USDT（TRC-20）',
      'usdt-erc20': 'USDT（ERC-20）',
    },
    form: {
      title: '提交订单',
      intro: '购买邮箱用于接收许可邮件；在扩展中激活时也必须使用同一个邮箱。',
      open: '提交订单',
      emailLabel: '购买邮箱',
      emailHint: '许可邮件会发送到这个地址，最多 254 个字符。',
      emailConfirmLabel: '再次输入购买邮箱',
      emailConfirmHint: '再输入一次，避免拼写错误。',
      methodLegend: '支付方式',
      amountNote: '支付宝与微信的收款码不含金额，付款时请手动输入 {amount}。',
      transactionLabel: '交易单号',
      transactionHint: '交易单号是 6–66 位字母、数字、下划线或连字符。',
      transactionHints: {
        alipay: '支付宝账单中的订单号。',
        wechat: '微信支付账单中的交易单号。',
        'usdt-trc20': 'USDT 转账的交易哈希（TxID）。',
        'usdt-erc20': 'USDT 转账的交易哈希（TxID）。',
      },
      turnstileLabel: '人机验证',
      turnstileHint: '完成验证后才能提交订单。',
      turnstileLoading: '正在加载人机验证…',
      turnstileFailed: '人机验证加载失败。请刷新页面重试，或按下方说明通过支持邮箱下单。',
      submit: '提交订单',
      submitting: '正在提交…',
      requiredEmail: '请填写购买邮箱。',
      invalidEmail: '请输入有效的邮箱地址（最多 254 个字符）。',
      emailMismatch: '两次输入的邮箱不一致。',
      requiredMethod: '请选择支付方式。',
      requiredTransaction: '请填写交易单号。',
      invalidTransaction: '交易单号应为 6–66 位字母、数字、下划线或连字符。',
      missingToken: '请先完成人机验证。',
      problemTitle: '提交失败',
      supportFallback: '如果人机验证无法加载，请把购买邮箱、支付方式与交易单号发送到 {email}，我们会人工处理订单。',
      noScript: '订单表单需要 JavaScript。请把购买邮箱、支付方式与交易单号发送到 {email}，我们会人工处理订单。',
    },
    success: {
      title: '订单已提交',
      body: '我们已收到 {email} 的订单，正在人工审核。',
      emailLabel: '许可邮件将发送到',
      review: '人工审核通常在 {hours} 小时内完成。',
      waitEmail: '审核通过后，你会收到一封「许可已就绪」邮件；请勿重复提交同一笔付款。',
      activate: '收到邮件后，在扩展的许可分区用同一邮箱获取验证码并激活。',
    },
    already: { title: '这笔付款已提交' },
    errors: {
      invalidRequest: '请检查购买邮箱与交易单号。',
      originNotAllowed: '站点配置有误，请联系支持邮箱。',
      humanCheckFailed: '人机验证失败，请刷新后重试。',
      notOnSale: '该售卖项已停售，请联系支持邮箱。',
      methodUnavailable: '该支付方式暂不可用，请换一种。',
      alreadySubmitted: '该交易单号已有通过审核的订单，请直接在扩展中激活，或联系支持邮箱。',
      rateLimited: '请求太频繁，请稍后再试。',
      serverError: '服务暂时不可用，请稍后再试。',
      unavailable: '网络暂时不可用，请稍后再试或联系支持邮箱。',
      invalidResponse: '服务返回了无法识别的结果，请稍后再试或联系支持邮箱。',
    },
    terms: {
      title: '购买须知',
      items: [
        '这是一次性买断制的许可，不会自动续费。',
        '许可绑定购买邮箱，最多允许 5 台设备同时激活；可以在扩展中停用设备，腾出设备名额。',
        '许可不会过期。',
        '未激活的许可可联系支持邮箱退款；已激活的许可不支持退款。',
        '支付或激活遇到问题时，请联系支持邮箱 {email}。',
      ],
    },
    privacy: {
      title: '订单数据与隐私',
      body: '提交订单时，购买邮箱、售卖项、支付方式、交易单号与人机验证令牌会发送给译无界的许可服务，用于人工审核与发放许可。本页会加载 Cloudflare Turnstile 完成人机验证；订单数据不用于营销，也不会进入扩展。销售关闭时，本页不加载 Turnstile。',
    },
    support: {
      title: '需要帮助？',
      body: '支付、订单或激活遇到问题，请发送邮件到 {email}，并附上购买邮箱与交易单号。',
    },
  },
  'zh-Hant': {
    meta: {
      title: '購買譯無界授權',
      description: '一次性購買譯無界授權：支援支付寶、微信與 USDT，人工審核後透過郵件發放授權，在擴充功能中啟用。',
    },
    closed: {
      kicker: '授權',
      title: '尚未開賣',
      body: '授權尚未開賣。開賣後，這裡會顯示價格、付款方式與訂單表單。',
      feedbackCta: '關注回饋倉庫',
      helpCta: '查看說明文件',
    },
    entry: {
      heroCta: '購買授權',
      footerLink: '購買授權',
    },
    hero: {
      kicker: '授權',
      title: '一次買斷，長期使用',
      intro: '基礎翻譯免費；備份還原與站點規則寫入需要一次性授權。人工審核後，授權郵件會寄到你的購買信箱。',
    },
    price: {
      oneTime: '一次性買斷制授權，不會自動續訂。',
      cnyLabel: '人民幣',
      usdtLabel: 'USDT',
      note: '請依頁面顯示的金額與網路轉帳。',
    },
    steps: {
      title: '購買步驟',
      intro: '整個過程無需註冊帳號。',
      items: [
        '選擇付款方式，依頁面顯示的金額付款；支付寶與微信的收款碼不含金額，需要手動輸入 {amount}。',
        '付款後，在本頁填寫購買信箱、付款方式與交易單號。',
        '等待人工審核，通常需要 {hours} 小時；通過後會收到「授權已就緒」郵件。',
        '在擴充功能的授權分區用同一信箱取得驗證碼並啟用。',
      ],
    },
    payment: {
      title: '付款方式',
      intro: '任選一種付款方式；付款後回到本頁提交訂單。',
      hint: '支付寶與微信的收款碼不含金額，掃碼後手動輸入 {cny}；USDT 請轉 {usdt}，並選擇與收款碼相同的網路，轉錯網路的資金無法找回。',
      zoom: '放大{method}收款碼',
      zoomHint: '點擊收款碼可單獨放大顯示，避免掃到旁邊的碼。',
      scan: {
        alipay: '開啟支付寶「掃一掃」，掃碼後手動輸入 {amount}。',
        wechat: '開啟微信「掃一掃」，掃碼後手動輸入 {amount}。',
        'usdt-trc20': '用錢包掃碼或複製地址，在 {network} 網路轉入 {amount}。',
        'usdt-erc20': '用錢包掃碼或複製地址，在 {network} 網路轉入 {amount}。',
      },
      close: '關閉',
      copy: '複製地址',
      copied: '已複製',
      copyFailed: '複製失敗，請手動選取地址複製。',
      qrLabel: '{method}收款碼，金額 {amount}',
    },
    paymentMethods: {
      alipay: '支付寶',
      wechat: '微信支付',
      'usdt-trc20': 'USDT（TRC-20）',
      'usdt-erc20': 'USDT（ERC-20）',
    },
    form: {
      title: '提交訂單',
      intro: '購買信箱用於接收授權郵件；在擴充功能中啟用時也必須使用同一個信箱。',
      open: '提交訂單',
      emailLabel: '購買信箱',
      emailHint: '授權郵件會寄到這個地址，最多 254 個字元。',
      emailConfirmLabel: '再次輸入購買信箱',
      emailConfirmHint: '再輸入一次，避免拼寫錯誤。',
      methodLegend: '付款方式',
      amountNote: '支付寶與微信的收款碼不含金額，付款時請手動輸入 {amount}。',
      transactionLabel: '交易單號',
      transactionHint: '交易單號是 6–66 位字母、數字、底線或連字號。',
      transactionHints: {
        alipay: '支付寶帳單中的訂單號。',
        wechat: '微信支付帳單中的交易單號。',
        'usdt-trc20': 'USDT 轉帳的交易雜湊（TxID）。',
        'usdt-erc20': 'USDT 轉帳的交易雜湊（TxID）。',
      },
      turnstileLabel: '人機驗證',
      turnstileHint: '完成驗證後才能提交訂單。',
      turnstileLoading: '正在載入人機驗證…',
      turnstileFailed: '人機驗證載入失敗。請重新整理頁面再試，或依下方說明透過支援信箱下單。',
      submit: '提交訂單',
      submitting: '正在提交…',
      requiredEmail: '請填寫購買信箱。',
      invalidEmail: '請輸入有效的信箱地址（最多 254 個字元）。',
      emailMismatch: '兩次輸入的信箱不一致。',
      requiredMethod: '請選擇付款方式。',
      requiredTransaction: '請填寫交易單號。',
      invalidTransaction: '交易單號應為 6–66 位字母、數字、底線或連字號。',
      missingToken: '請先完成人機驗證。',
      problemTitle: '提交失敗',
      supportFallback: '如果人機驗證無法載入，請把購買信箱、付款方式與交易單號寄到 {email}，我們會人工處理訂單。',
      noScript: '訂單表單需要 JavaScript。請把購買信箱、付款方式與交易單號寄到 {email}，我們會人工處理訂單。',
    },
    success: {
      title: '訂單已提交',
      body: '我們已收到 {email} 的訂單，正在人工審核。',
      emailLabel: '授權郵件將寄到',
      review: '人工審核通常在 {hours} 小時內完成。',
      waitEmail: '審核通過後，你會收到一封「授權已就緒」郵件；請勿重複提交同一筆付款。',
      activate: '收到郵件後，在擴充功能的授權分區用同一信箱取得驗證碼並啟用。',
    },
    already: { title: '這筆付款已提交' },
    errors: {
      invalidRequest: '請檢查購買信箱與交易單號。',
      originNotAllowed: '站點設定有誤，請聯絡支援信箱。',
      humanCheckFailed: '人機驗證失敗，請重新整理後再試。',
      notOnSale: '此售賣項已停售，請聯絡支援信箱。',
      methodUnavailable: '此付款方式暫時無法使用，請改用其他方式。',
      alreadySubmitted: '該交易單號已有通過審核的訂單，請直接在擴充功能中啟用，或聯絡支援信箱。',
      rateLimited: '請求過於頻繁，請稍後再試。',
      serverError: '服務暫時無法使用，請稍後再試。',
      unavailable: '網路暫時無法使用，請稍後再試或聯絡支援信箱。',
      invalidResponse: '服務回傳了無法辨識的結果，請稍後再試或聯絡支援信箱。',
    },
    terms: {
      title: '購買須知',
      items: [
        '這是一次性買斷制的授權，不會自動續訂。',
        '授權綁定購買信箱，最多允許 5 台裝置同時啟用；可以在擴充功能中停用裝置，騰出裝置名額。',
        '授權不會過期。',
        '未啟用的授權可聯絡支援信箱退款；已啟用的授權不支援退款。',
        '付款或啟用遇到問題時，請聯絡支援信箱 {email}。',
      ],
    },
    privacy: {
      title: '訂單資料與隱私',
      body: '提交訂單時，購買信箱、售賣項、付款方式、交易單號與人機驗證權杖會傳送給譯無界的授權服務，用於人工審核與發放授權。本頁會載入 Cloudflare Turnstile 完成人機驗證；訂單資料不用於行銷，也不會進入擴充功能。銷售關閉時，本頁不載入 Turnstile。',
    },
    support: {
      title: '需要協助？',
      body: '付款、訂單或啟用遇到問題，請寄信到 {email}，並附上購買信箱與交易單號。',
    },
  },
  en: {
    meta: {
      title: 'Buy a Beyond Translate license',
      description:
        'Buy a one-time Beyond Translate license by Alipay, WeChat Pay or USDT. After manual review, the license arrives by email and is activated in the extension.',
    },
    closed: {
      kicker: 'License',
      title: 'Not on sale yet',
      body: 'The license is not on sale yet. When sales open, this page will show the price, payment methods and order form.',
      feedbackCta: 'Follow the feedback repository',
      helpCta: 'Read the help docs',
    },
    entry: {
      heroCta: 'Buy a license',
      footerLink: 'Buy a license',
    },
    hero: {
      kicker: 'License',
      title: 'Buy once, keep it for good',
      intro:
        'Basic translation is free. Backup/restore and writing site rules need a one-time license. After manual review, the license email goes to your purchase address.',
    },
    price: {
      oneTime: 'A one-time purchase with no automatic renewal.',
      cnyLabel: 'CNY',
      usdtLabel: 'USDT',
      note: 'Send the amount and use the network shown on this page.',
    },
    steps: {
      title: 'How to buy',
      intro: 'No account registration is needed.',
      items: [
        'Choose a payment method and pay the amount shown. Alipay and WeChat QR codes carry no amount, so enter {amount} manually.',
        'After paying, enter your purchase email, payment method and transaction number on this page.',
        'Wait for manual review, usually within {hours} hours. You then receive the license-ready email.',
        'Activate in the extension License section with the same email.',
      ],
    },
    payment: {
      title: 'Payment methods',
      intro: 'Pick a payment method, then come back to this page to submit the order.',
      hint: 'The Alipay and WeChat Pay codes carry no amount, so enter {cny} manually after scanning. For USDT, send {usdt} on the same network as the code; funds sent on the wrong network cannot be recovered.',
      zoom: 'Enlarge the {method} code',
      zoomHint: "Click a code to show it on its own, larger, so your phone doesn't pick up the one next to it.",
      scan: {
        alipay: 'Open Alipay, choose Scan, then enter {amount} manually after scanning.',
        wechat: 'Open WeChat, choose Scan, then enter {amount} manually after scanning.',
        'usdt-trc20': 'Scan with your wallet or copy the address, then send {amount} on the {network} network.',
        'usdt-erc20': 'Scan with your wallet or copy the address, then send {amount} on the {network} network.',
      },
      close: 'Close',
      copy: 'Copy address',
      copied: 'Copied',
      copyFailed: 'Copy failed. Select the address and copy it manually.',
      qrLabel: '{method} payment code for {amount}',
    },
    paymentMethods: {
      alipay: 'Alipay',
      wechat: 'WeChat Pay',
      'usdt-trc20': 'USDT (TRC-20)',
      'usdt-erc20': 'USDT (ERC-20)',
    },
    form: {
      title: 'Submit the order',
      intro: 'The purchase email receives your license email and must also be used to activate in the extension.',
      open: 'Submit order',
      emailLabel: 'Purchase email',
      emailHint: 'The license email goes to this address. Up to 254 characters.',
      emailConfirmLabel: 'Purchase email again',
      emailConfirmHint: 'Enter it a second time to catch typos.',
      methodLegend: 'Payment method',
      amountNote: 'Alipay and WeChat QR codes carry no amount. Enter {amount} manually when paying.',
      transactionLabel: 'Transaction number',
      transactionHint: 'Use 6–66 letters, digits, underscores or hyphens.',
      transactionHints: {
        alipay: 'The order number in the Alipay bill.',
        wechat: 'The transaction ID in the WeChat Pay bill.',
        'usdt-trc20': 'The USDT transfer transaction hash (TxID).',
        'usdt-erc20': 'The USDT transfer transaction hash (TxID).',
      },
      turnstileLabel: 'Human verification',
      turnstileHint: 'Complete the check before submitting.',
      turnstileLoading: 'Loading human verification…',
      turnstileFailed:
        'Human verification failed to load. Refresh the page and try again, or order by email as described below.',
      submit: 'Submit order',
      submitting: 'Submitting…',
      requiredEmail: 'Enter your purchase email.',
      invalidEmail: 'Enter a valid email address (up to 254 characters).',
      emailMismatch: 'The two email addresses do not match.',
      requiredMethod: 'Choose a payment method.',
      requiredTransaction: 'Enter the transaction number.',
      invalidTransaction: 'The transaction number must be 6–66 letters, digits, underscores or hyphens.',
      missingToken: 'Complete human verification first.',
      problemTitle: 'Submission failed',
      supportFallback:
        'If human verification cannot load, email your purchase email, payment method and transaction number to {email} and we will process the order manually.',
      noScript:
        'The order form needs JavaScript. Email your purchase email, payment method and transaction number to {email} and we will process the order manually.',
    },
    success: {
      title: 'Order submitted',
      body: 'We received the order for {email} and are reviewing it manually.',
      emailLabel: 'The license email will go to',
      review: 'Manual review usually takes up to {hours} hours.',
      waitEmail: 'Once approved, you receive the license-ready email. Do not submit the same payment again.',
      activate: 'Then activate in the extension License section with the same email.',
    },
    already: { title: 'This payment was already submitted' },
    errors: {
      invalidRequest: 'Check the purchase email and transaction number.',
      originNotAllowed: 'The site configuration is wrong. Contact support.',
      humanCheckFailed: 'Human verification failed. Refresh and try again.',
      notOnSale: 'This offering is no longer on sale. Contact support.',
      methodUnavailable: 'This payment method is unavailable. Choose another.',
      alreadySubmitted:
        'This transaction number already has an approved order. Activate in the extension or contact support.',
      rateLimited: 'Too many requests. Try again later.',
      serverError: 'The service is unavailable. Try again later.',
      unavailable: 'The network is unavailable. Try again later or contact support.',
      invalidResponse: 'The service returned an unexpected result. Try again later or contact support.',
    },
    terms: {
      title: 'What you are buying',
      items: [
        'A one-time license with no automatic renewal.',
        'The license is bound to the purchase email and allows up to 5 simultaneous device activations. Deactivate a device to free a slot.',
        'The license does not expire.',
        'Unactivated licenses can be refunded through support; activated licenses cannot.',
        'Contact support at {email} for payment or activation problems.',
      ],
    },
    privacy: {
      title: 'Order data and privacy',
      body: 'When you submit an order, your purchase email, offering, payment method, transaction number and human-verification token go to the Beyond Translate license service for manual review and license issuance. This page loads Cloudflare Turnstile for human verification. Order data is not used for marketing and does not enter the extension. When sales are closed, this page does not load Turnstile.',
    },
    support: {
      title: 'Need help?',
      body: 'For payment, order or activation problems, email {email} with the purchase email and transaction number.',
    },
  },
  ja,
  ko,
  de,
  fr,
  it,
  es,
  pt,
} as const satisfies Record<PurchaseLocale, PurchaseStrings>;

export function purchaseLocale(lang: string | undefined): PurchaseLocale {
  return landingLocale(lang);
}

export function getPurchaseStrings(lang: string | undefined): PurchaseStrings {
  return purchaseStrings[purchaseLocale(lang)];
}

/** Locale-aware internal path, without the base path. */
export function localePath(lang: string | undefined, path: string): string {
  return localizedPath(lang, path);
}

/** Locale-aware home page, without the base path. */
export function localeHome(lang: string | undefined): string {
  return languageHome(lang);
}

/** Locale-aware purchase route, without the base path. */
export function purchasePath(lang: string | undefined): string {
  return languageBuy(lang);
}

/** Locale-aware help index, without the base path. Untranslated docs fall back to English. */
export function helpPath(lang: string | undefined): string {
  return docsPath(lang, 'help/');
}
