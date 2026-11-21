# Triage 标签

各技能用五个规范 triage 角色沟通。本文件把这些角色映射到本仓库 Issue 跟踪器实际使用的字符串。

| 规范角色          | 本仓库使用的字符串 | 含义                           |
| :---------------- | :----------------- | :----------------------------- |
| `needs-triage`    | `needs-triage`     | 维护者需要评估此工单           |
| `needs-info`      | `needs-info`       | 等待报告者补充信息             |
| `ready-for-agent` | `ready-for-agent`  | 已完整规格化，可交给 AFK agent |
| `ready-for-human` | `ready-for-human`  | 需要人工实现                   |
| `wontfix`         | `wontfix`          | 不予处理                       |

技能提到某个角色（例如「应用 AFK-ready triage 标签」）时，使用表中对应的字符串。

本仓库使用本地 markdown 跟踪器，这些值写在每个工单文件靠上的 `Status:` 行。
