# 领域文档

工程技能探索代码库时，按本文件读取本仓库的领域文档。

## 探索前先读

- 仓库根目录的 `GLOSSARY.md`。
- 仓库根目录的 `GLOSSARY-MAP.md`，如果存在。它指向每个上下文各自的 `GLOSSARY.md`，按主题读取相关的那几份。
- `docs/adr/` 中与即将改动的区域相关的 ADR。多上下文仓库还要检查 `src/<context>/docs/adr/` 下的上下文级决策。

这些文件不存在时静默继续，不提示缺失，也不建议先行创建。`/domain-modeling` 技能经由 `/grill-with-docs` 与 `/improve-codebase-architecture` 调用，会在术语或决策真正确定时按需创建。

## 文件结构

本仓库是单上下文，领域文档放在仓库根目录：

```
/
├── GLOSSARY.md
├── docs/adr/          ← 系统级决策
└── src/
```

多上下文仓库在根目录放 `GLOSSARY-MAP.md`，指向 `src/<context>/GLOSSARY.md` 与 `src/<context>/docs/adr/`。本仓库不使用这种结构。

## 使用术语表词汇

输出中命名领域概念时（工单标题、重构提案、假设、测试名称），使用 `GLOSSARY.md` 定义的术语，不要使用术语表明确回避的同义词。

需要的概念尚未进入术语表时，这本身是信号：要么在发明项目并不使用的说法，应重新考虑；要么确有空白，应记录下来交给 `/domain-modeling`。

## 标记 ADR 冲突

输出与现有 ADR 矛盾时明确指出来，不要静默覆盖：

> _与 ADR-0007 矛盾，但值得重新讨论，因为……_
