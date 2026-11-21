---
title: 机器翻译服务
description: 免费的 Google / Bing 端点与四家云厂商官方 API 的区别、凭据与配置入口。
---

> 大多数场景下，机器翻译服务速度更快，质量也并不差。日常阅读、查资料、快速理解网页内容时，先用机器翻译通常最省事；需要更讲究语气、术语或长句表达时，再切换到模型供应商。

Beyond Translate 的内置机器翻译服务分两类：一类走免费端点，开箱即用；一类走云厂商官方 API，需要你自己申请凭据。两者都不使用提示词，也不产出单词释义。

## 免费端点

Google 翻译与 Bing 翻译使用公开的免费端点，不需要 API Key，安装后就能作为默认服务使用。中文界面默认用 Bing 翻译，其余界面默认用 Google 翻译；添加第一个模型条目后，默认服务会改为该模型。

免费端点没有服务保证，可能限流、改地址或暂时不可用。失败时换一个服务，或在「翻译服务」里配置官方 API。

## 官方 API

官方 API 走你自己的云账号，不受免费端点的限流影响，用量与费用记在你的账号上。填入凭据并测试通过后，服务才会出现在翻译服务选择器里。

| 服务                                  | 凭据                   | 申请指南                                       |
| ------------------------------------- | ---------------------- | ---------------------------------------------- |
| Google Cloud Translation（基础版 v2） | API Key                | [申请 Google Cloud Translation](google-cloud/) |
| Azure Translator（v3）                | Key + 区域             | [申请 Azure Translator](azure/)                |
| 阿里云机器翻译（通用版）              | AccessKey ID + Secret  | [申请阿里云机器翻译](aliyun/)                  |
| 火山引擎机器翻译                      | Access Key ID + Secret | [申请火山引擎机器翻译](volcengine/)            |

## 安全笔记

官方 API 的凭据申请一次要跑一遍云控制台，Secret 通常只显示一次，丢了就得重新申请。建议申请完成后顺手存进 Bitwarden 这类密码管理器（[Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/)/[Chrome](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb)/[Edge](https://microsoftedge.microsoft.com/addons/detail/bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh)）：新建一条名为「Beyond Translate」的安全笔记（Secure Note），按下面的字段名逐个添加自定义字段（Field），照着抄就行。

- `Google Cloud API Key`
- `Azure Translator Key`
- `Azure Translator Region`
- `阿里云 AccessKey ID`
- `阿里云 AccessKey Secret`
- `火山引擎 AccessKey ID`
- `火山引擎 Secret Access Key`
- `Beyond Translate Secret`（数据加密密钥，启用备份或同步后再填）

扩展本身会把凭据保存在本机配置里，随加密备份与同步一起走，不会出现在日志或错误信息里，内容脚本也拿不到；安全笔记是额外的一份副本，换设备、重装或以后回云控制台管理资源时都用得上。

## 在哪里配置

打开扩展设置页，进入「翻译服务」分区的「机器翻译」选项卡。找到对应服务，点 **配置**，填入凭据并点 **测试**。测试只翻译一个单词，消耗几个字符的额度。

测试通过后，它会出现在默认、划词与整页的翻译服务选择器里。清空凭据后，它会从选择器里消失，已经选它的槽位回到默认规则。

## 兜底翻译

整页翻译使用模型条目时，可以在「翻译服务」里再选一个兜底机器翻译服务。模型恢复后仍失败的段落会改由它译出并正常上屏，译文带浅色下划线；点击该段可以用模型重译。兜底译文不写入译文存档。

划词翻译与单词释义不使用兜底服务；整页服务本身就是机器翻译服务时也不会触发。
