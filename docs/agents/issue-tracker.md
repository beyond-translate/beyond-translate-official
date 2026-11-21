# Issue 跟踪器：本地 Markdown

本仓库的工单与规格以 markdown 文件存放在 `.scratch/` 下。

## 约定

- 一个功能一个目录：`.scratch/<feature-slug>/`
- 规格文件为 `.scratch/<feature-slug>/spec.md`
- 每个实现工单一个文件，放在 `.scratch/<feature-slug>/issues/<NN>-<slug>.md`，从 `01` 开始编号，不使用合并的工单文件
- triage 状态写在每个工单文件靠上的 `Status:` 行，角色字符串见 `triage-labels.md`
- 评论与会话历史追加到文件底部的 `## Comments` 标题下

## 当技能要求「发布到 issue 跟踪器」

在 `.scratch/<feature-slug>/` 下新建文件，目录不存在时一并创建。

## 当技能要求「获取相关工单」

读取引用路径上的文件，工单路径或编号通常随请求直接给出。

## Wayfinding 操作

供 `/wayfinder` 使用。**地图**是一个文件，每个工单一个**子文件**。

- **地图**：`.scratch/<effort>/map.md`，正文包含 Notes、Decisions-so-far、Fog。
- **子工单**：`.scratch/<effort>/issues/NN-<slug>.md`，从 `01` 开始编号，正文写问题。`Type:` 行记录工单类型（`research`、`prototype`、`grilling`、`task`）；`Status:` 行记录 `claimed` 或 `resolved`。
- **阻塞**：靠上写 `Blocked by: NN, NN` 行。文件列出的每个工单都为 `resolved` 时，阻塞解除。
- **Frontier**：扫描 `.scratch/<effort>/issues/`，取第一个未解决、未被阻塞、未被认领的文件。
- **认领**：开始工作前写入 `Status: claimed` 并保存。
- **解决**：在 `## Answer` 标题下追加答案，设置 `Status: resolved`，然后把上下文指针（要点与链接）追加到 `map.md` 的 Decisions-so-far。
