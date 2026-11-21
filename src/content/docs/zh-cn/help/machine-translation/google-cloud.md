---
title: '申请 Google Cloud Translation 的 API Key'
description: '用 Google Cloud Translation（基础版 v2）官方接口翻译，创建 API Key、限制权限并设置预算提醒。'
---

Beyond Translate 的「机器翻译」选项卡可以使用 Google Cloud Translation（基础版 v2）官方接口。它走你自己的 Google Cloud 账号，不受免费端点限流的影响，用量与费用也记在你的账号上。

## 免费额度与计费

- 每月有 **50 万字符（500,000 字符）** 免费额度，月初清零、不累计。
- 超出免费额度后按量后付费（目前为 20 美元 / 百万字符）。
- **使用 Cloud Translation 必须为项目关联有效的结算账号（Billing Account）**，即使只在免费额度内使用也是如此。未绑定结算账号或结算账号被关闭时，调用会直接报错拒绝。绑定结算账号需要一张支持外币扣款的 Visa / MasterCard 等信用卡（注册时仅做小额预授权验证，免费额度内不会实际扣费）。
- 整页翻译消耗的字符数与页面文字量成正比，长页面和反复重译会累积用量。建议申请完成后立刻设置预算提醒（见下文）。
- 以上数据查看于 2026-11-07，最新数字以 [官方定价页](https://cloud.google.com/translate/pricing) 为准。
- 官方默认配额较高（每分钟约 600 万字符），扩展默认最多同时发 10 个请求，遇到限流会自动放慢。

## 申请步骤

1. 登录 [Google Cloud 控制台](https://console.cloud.google.com/)。首次登录需完成账号初始化。
2. 在顶部的项目选择器里新建一个项目（例如 `beyond-translate`），或选择已有项目。
3. 打开项目的 [结算页面](https://console.cloud.google.com/billing)，把项目关联到一个处于激活状态的结算账号。若没有结算账号，按提示添加信用卡创建并激活。
4. 打开 [Cloud Translation API 库页面](https://console.cloud.google.com/apis/library/translate.googleapis.com)，确认顶部选中的是上面的目标项目，点击 **启用（Enable）**。若未关联结算账号，系统会弹出提示阻止启用。
5. API 启用成功后，进入 **API 和服务 → 凭据**（[Credentials 页面](https://console.cloud.google.com/apis/credentials)）。
6. 点击顶部的 **创建凭据（Create credentials）**，选择 **API 密钥（API key）**。
7. 为保障安全，建议立即配置该 API Key 的权限范围（见下文）。
8. 复制生成的 API 密钥。

申请完成后，建议把凭据存进[安全笔记](../#安全笔记)。

## 配置密钥权限限制（安全最佳实践）

API 密钥是长期凭据，泄露后可能被用于调用该账号下的其他付费 API。通过限制 API 权限，可以把风险降到最低：

1. 在凭据列表找到刚生成的 API 密钥，点击进入编辑页。
2. 在 **API 限制（API restrictions）** 下，勾选 **限制密钥（Restrict key）**。
3. 在下拉列表中仅勾选 **Cloud Translation API**，保存。
4. 限制后该密钥仅可用于文本翻译接口，无法用于调用其他云服务。

## 在扩展里使用

1. 打开扩展设置页，进入「翻译服务」分区的「机器翻译」选项卡。
2. 在 Google Cloud Translation 一行点 **配置**，在对话框里粘贴 API Key，点 **测试**。测试只翻译一个单词，消耗几个字符的额度。
3. 测试通过后，它会出现在默认、划词、整页的翻译服务选择器里；清空 Key 后它会从选择器里消失，已选它的槽位回到默认规则。

API Key 保存在扩展配置里，随加密备份与同步一起走，不会出现在日志或错误信息里。

## 设置预算提醒

在 [预算和提醒页面](https://console.cloud.google.com/billing/budgets) 新建预算，设一个你能接受的月度金额与提醒阈值（如 5 美元或 10 美元）。预算提醒只发通知，不会自动停用服务；如需硬性上限，可以在 [配额页面](https://console.cloud.google.com/iam-admin/quotas) 调低 Cloud Translation 的每日字符配额。

## 常见错误

| 提示                                             | 原因与处理                                           |
| ------------------------------------------------ | ---------------------------------------------------- |
| API Key 被拒绝（API key not valid）              | Key 复制不完整或已删除；重新复制。                   |
| 没有启用 Cloud Translation API                   | 在目标项目里启用 API；刚启用时可能要等一两分钟生效。 |
| 请求被拒绝，提示需要结算账号（Billing required） | 项目没有关联有效激活的结算账号，回到第 3 步处理。    |
| 额度用尽或请求过于频繁（Rate / Daily Limit）     | 稍后再试，或到配额页面查看并调整配额。               |
