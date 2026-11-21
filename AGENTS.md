# AGENTS.md

译无界（Beyond Translate）的官网与帮助文档。Astro + Starlight 静态站点，发布到 GitHub Pages。

## 项目事实

- 产品是浏览器翻译扩展，已在 Chrome、Microsoft Edge 与 Firefox 上架，商店入口集中在 `src/config/stores.ts`。官网包含形象页、帮助文档与受控的购买页；购买页由构建时开关控制，销售关闭时只显示「尚未开售」，不展示价格、收款方式或订单表单。
- 官网源码以 MIT 许可开源；扩展源码不在本仓库，也不对外开源。
- 站点地址为 `https://beyond-translate.xinlu.ink/`（GitHub Pages 自定义域名，站点从根路径提供），对应 `astro.config.mjs` 中的 `site` 与 `base`。更换域名时两者与 `public/robots.txt`、`scripts/generate-og.mjs` 一起改。
- 默认语言是 English（`/`），简体中文在 `/zh-cn/`，繁體中文在 `/zh-hant/`。入口按「localStorage 手动选择 > 浏览器语言 > English」协商；显式访问 `/zh-cn/` 或 `/zh-hant/` 时不跳转。手动选择存在 `beyond-translate-lang`，只在第一方内联脚本里读写。
- 运行时与包管理器由 mise 与 `package.json` 管理：Node 24、pnpm 11。项目的原生依赖通过 `pnpm-workspace.yaml` 的 `allowBuilds` 放行。
- 购买页的开关、价格、支付方式、许可服务主机、Turnstile 站点密钥与支持邮箱只在 `src/config/purchase.ts` 配置，购买页文案只在 `src/i18n/purchase.ts`；首页、帮助文档与 README 只描述流程与数据去向，不复述这些值。

## 命令

```bash
pnpm install        # 安装依赖
pnpm dev            # 开发服务器
pnpm build          # 生产构建，含链接校验与 Pagefind 索引
pnpm preview        # 预览构建产物
pnpm check          # astro check
pnpm test           # Vitest：三语字典、订单提交与购买配置守卫
pnpm format         # Prettier，含 .astro
pnpm lint           # oxlint
pnpm og:image       # 重新生成 public/og-image.png
```

改动交付前运行：

```bash
pnpm format:check && pnpm lint && pnpm check && pnpm test && pnpm build
```

站内搜索只在构建产物中可用，不要在 `pnpm dev` 里判断搜索是否正常。

## 目录

| 路径                                      | 职责                                                                 |
| ----------------------------------------- | -------------------------------------------------------------------- |
| `astro.config.mjs`                        | `site` / `base`、Starlight 配置、侧栏、head、链接校验与组件覆写      |
| `src/content.config.ts`                   | Starlight 的 `docs` 内容集合                                         |
| `src/content/docs/`                       | English 首页与帮助文档（默认语言，无 URL 前缀）                      |
| `src/content/docs/zh-cn/`                 | 简体中文首页与帮助文档                                               |
| `src/content/docs/zh-hant/`               | 繁體中文首页；帮助文档是转址页，指向 `/zh-cn/help/...`               |
| `src/i18n/landing.ts`                     | 首页分区文案、预览示例、统计数字与页脚，三语共用一套类型             |
| `src/config/purchase.ts`                  | 购买开关、价格、支付方式、许可服务主机、Turnstile 站点密钥与支持邮箱 |
| `src/config/stores.ts`                    | Chrome、Edge 与 Firefox 的商店链接                                   |
| `src/i18n/purchase.ts`                    | 购买页三语文案、语言路径与帮助路径                                   |
| `src/lib/purchase.ts`                     | 订单提交纯函数、错误映射与主备主机切换                               |
| `src/lib/purchase-guard.ts`               | 销售开启时校验购买配置的构建守卫                                     |
| `src/components/purchase/`                | 购买页的关闭态、开启态、订单表单与支持邮箱片段                       |
| `src/components/landing/`                 | 首页分区组件与纯 CSS 产品预览                                        |
| `src/components/starlight/Hero.astro`     | 首页双栏 Hero 覆写，读取 frontmatter 的 `hero` 数据                  |
| `src/components/starlight/EditLink.astro` | 在回退页隐藏「编辑此页」，避免指向不存在的源文件                     |
| `src/styles/theme.css`                    | Geist 字体、Starlight CSS 变量、品牌色与深浅色 token                 |
| `public/`                                 | favicon、扩展图标、浏览器商店 Logo、OG 图与 `robots.txt`             |
| `src/pages/buy.astro`                     | 三语购买页路由：根路径（英文）、`zh-cn/` 与 `zh-hant/` 各一份        |
| `tests/`                                  | 首页与购买页三语字典、订单提交与配置守卫的 Vitest 检查               |
| `scripts/generate-og.mjs`                 | 用 sharp 渲染 OG 图，生成后提交，不参与构建                          |

## 内容维护

- 首页文案分两处：Hero 的标题、简介与按钮在三个 `index.mdx` 的 frontmatter 里；其余分区文案与预览示例在 `src/i18n/landing.ts`。新增文案时三语一起补，`pnpm test` 会检查键形状、空字符串与列表长度。
- 购买页文案只写在 `src/i18n/purchase.ts`，三语一起补；价格、支付方式载荷、审核时长、支持邮箱与许可服务地址只写在 `src/config/purchase.ts`。首页、帮助文档与 README 只描述购买流程、人工审核、订单数据去向与 Turnstile 例外，不复述这些值。
- 购买页与首页入口由 `src/config/purchase.ts` 的 `enabled` 控制：关闭时首页首屏与页脚没有购买入口，购买页只显示开售说明、不进帮助侧栏与站内搜索并带 noindex；开启时构建守卫会拒绝缺失或格式不对的价格、支付载荷、站点密钥、支持邮箱与站点来源。
- 帮助文档先写 English 与简体中文，路径保持镜像。新增页面时同时补根 `help/` 与 `zh-cn/help/` 下的同一路径，并在 `astro.config.mjs` 的 `sidebar` 增加 slug；分组标签用 `translations`，键为 BCP-47（`zh-CN`、`zh-TW`）。
- 繁體中文帮助文档只放转址页：每个 `zh-hant/help/...` 文件用 frontmatter `head` 的 meta refresh 指向对应的 `/zh-cn/help/...`，并设 `pagefind: false` 与 `noindex`。新增或改名帮助页时同步补转址；不要复制整份中文正文到繁中目录。
- 产品事实以扩展仓库的 `README.md` 与 `GLOSSARY.md` 为准。不写没有确认的数量、价格、商店链接或下载地址；站点里的商店链接与浏览器 Logo 只从 `src/config/stores.ts` 读取（README 另列商店入口，需与该文件同步），允许展示的价格只从 `src/config/purchase.ts` 读取。
- 使用扩展的术语：划词翻译面板、整页翻译、双语对照、仅译文、翻译服务、模型供应商、机器翻译服务、站点规则、生词本、译文存档、悬浮球、预翻译。不要用「气泡」「浮动按钮」替代这些界面名。
- 机器翻译指南改编自扩展仓库的 `docs/machine-translation/` 中英文文档。原文档更新时，同步这里的对应页面，保留「核对日期」与外部定价链接。
- 站点不加载第三方字体、脚本、样式、统计或 CDN；字体随站点打包，图片与图标放在 `public/` 或 `src/assets/`。唯一例外是销售开启时购买页加载的 Cloudflare Turnstile 人机验证脚本。
- 只改文案、图标、间距、颜色时，按纯视觉改动处理：跑门禁并自查 diff，不派评审子代理。

## 验证与发布

- 构建时 `starlight-links-validator` 会校验绝对站内链接；相对链接不校验（`errorOnRelativeLinks: false`），锚点不报错，根路径、`zh-cn/` 与 `zh-hant/` 的自定义购买页在排除列表中。新增链接后在 `pnpm build` 输出里确认没有新的失效项，相对链接需要手动点验。
- 浏览器实测覆盖三种语言、深浅色、桌面与窄屏、语言切换、锚点、帮助与反馈链接、控制台与网络请求。语言相关改动还要验：无 `beyond-translate-lang` 时按浏览器语言进入、手动切换后写入存储、再次访问 `/` 使用手动选择、显式访问 `/zh-cn/` 或 `/zh-hant/` 不被弹走。界面改动至少检查一次构建产物，不只看开发服务器。
- 发布由 `.github/workflows/pages.yml` 完成：推送到 `main` 后安装、构建、上传并部署；Pages 的 build type 必须是 `workflow`。首次发布前用 `gh api` 开启 Pages；首次运行若在开启前失败，重跑 deploy job。
- 开卖前，官网的生产来源须同时登记在许可服务的产品站点来源与共享 Turnstile 小组件的主机名中：当前自定义域名与 GitHub Pages fallback 都要在列。购买页只使用共享小组件的公开站点密钥，不使用其他产品的独立小组件；Turnstile 私密密钥与 API 凭据不进入本仓库。
- CI 在 `.github/workflows/ci.yml`，与交付前命令一致。
- 不提交 `.env*`、`.local.env`、凭据、个人邮箱或任何密钥。反馈统一指向公开的 `beyond-translate/feedback` 仓库。购买页支持邮箱是 owner 批准的例外，只写在 `src/config/purchase.ts`。

## Agent skills

### Issue tracker

工单与规格以 markdown 文件存放在 `.scratch/` 下。见 `docs/agents/issue-tracker.md`。

### Triage labels

triage 角色沿用默认字符串（`needs-triage` 等），作为工单文件的 `Status:` 取值。见 `docs/agents/triage-labels.md`。

### Domain docs

单上下文：根目录 `GLOSSARY.md` 与 `docs/adr/`。见 `docs/agents/domain.md`。
