# K12 设计思维教学案例库 Design System

## 0. Research Log

- **Live-site extraction (reference contract)**: `https://ideodesignthinking.cn/` — Edge headless + CDP `getComputedStyle` 全量扫描（1440×900，254 元素）+ 375/768/1440 截图（`%TEMP%\opencode\cdp\ref\`）。运行时令牌：Sentinel A 板衬线 + Gotham SSm A 无衬线；正文 22px/33px(1.5)；字距 2.67px(0.12em)/2px(0.167em) 宽字距标签；色板 黑 #000 / 白 #FFF / 橙 rgb(237,148,62) / 浅粉 rgb(230,217,217) / 灰 rgb(74,74,74) / 发丝边框 rgb(162,174,182)；圆角 2px；阴影几乎不存在；黑底白字小标签分区；左侧粘性章节导航 + 中央主栏 + 右侧旁注的三栏编辑排版；手绘单色插图。
- **Embedded refs**: shortlisted `notion.md` / `claude.md` → picked **minimalist-skill.md** (Layer A) + 实站提取令牌 (Layer B 替代，clone-from-url 路径) — 用户点名参考站，实站就是最高优先级 token 源。
- **Lazyweb / Imagen lanes**: skipped — 实站参考已提供完整 token/布局语法/组件解剖，无歧义需消解。
- **字体替代决策**：Sentinel/Gotham 为 Adobe 商用字体不可引用。替代：Noto Serif SC（中文宋体感板衬线，匹配参考站中文正文的宋体质感）+ Jost（Gotham 系几何无衬线的开源近亲）+ Noto Sans SC。CDN 加载 + `font-display: swap` + 系统回退（PingFang SC / Microsoft YaHei / SimSun），离线可完整降级。

## 1. Atmosphere & Identity

一本克制的教育出版物，不是一个 SaaS 产品。白纸上的黑字与宋体大标题，橙色只在你需要转弯的地方出现一次。签名元素是**黑底白字小标签**（参考站的 section badge）：每个区块以一枚黑色矩形标签开场，像杂志的章节钉。其余一切靠留白、发丝线和字距撑住版面。访客会记住的那个瞬间：首页橙色满幅色带上的黑色宋体大标题，以及按钮 hover 时黑色翻转为橙色的那一刻。

## 2. Color

### Palette

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Surface | --surface | #FFFFFF | 页面画布（白底为主，用户硬性要求） |
| Surface tint | --surface-tint | #FAF9F7 | 表单区、代码块的微暖底 |
| Ink | --ink | #000000 | 标题与正文（参考站运行时为纯黑，保真） |
| Ink secondary | --ink-2 | #4A4A4A | 次级说明、图注 |
| Ink tertiary | --ink-3 | #767676 | 弱化 meta（对比 4.5:1 达标下限使用，仅限 ≥14px） |
| Paper inverse | --ink-band | #000000 | 黑色满幅带、黑底标签 |
| On dark | --paper | #FFFFFF | 黑底上的文字 |
| Accent | --accent | #ED943E | 橙：hero 色带、链接 hover、按钮 hover、焦点态（黑字在其上，禁白字） |
| Accent deep | --accent-deep | #D97A22 | 橙 hover 深化 |
| Tint rose | --tint-rose | #E6D9D9 | 浅粉分区底（参考站提取） |
| Border | --line | #A2AEB6 | 发丝分隔线 1px（参考站提取） |
| Border soft | --line-soft | #E3E1DC | 卡片内弱分隔 |
| Tag/primary pastel | --tag-blue-bg / --tag-blue-ink | #E1F3FE / #1F5C8B | 学段标签·高中 |
| Tag/success pastel | --tag-green-bg / --tag-green-ink | #EDF3EC / #346538 | 学段标签·初中 |
| Tag/warning pastel | --tag-yellow-bg / --tag-yellow-ink | #FBF3DB / #7A5200 | 学段标签·小学高年级 |
| Tag/rose pastel | --tag-rose-bg / --tag-rose-ink | #F7E8E8 / #8F3A3A | 学段标签·小学低年级 |
| Tag/neutral pastel | --tag-gray-bg / --tag-gray-ink | #EFEFED / #4A4A4A | 跨学段 / 学科标签 |
| Error | --error | #9F2F2D | 表单校验错误（配底 #FDEBEC） |

### Rules
- 白底为绝对主体。橙色覆盖率 < 10% 视口面积（hero 带 + 交互态）。
- 橙色上只允许黑字（参考站行为：橙底黑字）。白字只允许出现在 #000 上。
- 彩色标签只用于语义分类（学段/学科），每张卡片 ≤ 3 枚。
- 禁止引入表中未列颜色；禁止渐变。

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(34px, 5vw, 52px) | 900 (Serif) | 1.25 | 0.04em | 首页 hero 主标题 |
| H1 | clamp(28px, 4vw, 38px) | 700 (Serif) | 1.3 | 0.03em | 页面主标题 |
| H2 | clamp(22px, 3vw, 28px) | 600 (Serif) | 1.4 | 0.02em | 区块标题 |
| H3 | 20px | 700 (Sans) | 1.5 | 0 | 卡片标题 |
| Body/lg | 18px | 400 | 1.8 | 0 | 导语、重要正文 |
| Body | 16px | 400 | 1.8 | 0 | 默认正文 |
| Body/sm | 14px | 400 | 1.7 | 0 | meta、表单帮助文字 |
| Label | 12px | 600 | 1.5 | 0.167em | 大写 kicker、黑底标签（参考站 2px/12px 保真） |
| Micro | 11px | 500 | 1.5 | 0.08em | 页脚版权、编号 |

### Font Stack
- Display/衬线：`"Noto Serif SC", "Songti SC", "STSong", "SimSun", serif`
- Body/无衬线：`"Jost", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`
- 中文正文永远无衬线；衬线只用于标题、引语、数字编号。

### Rules
- 正文 ≥14px，行高 1.7–1.8（中文可读性）。
- 引语用衬线斜体 + 无衬线署名（参考站 Tim Brown 引言语法）。

## 4. Spacing & Layout

### Base Unit: 4px

| Token | Value | Usage |
|---|---|---|
| --s-2 | 8px | 标签内距、紧凑行距 |
| --s-3 | 12px | 表单字段内距、小内距 |
| --s-4 | 16px | 卡片内距（紧凑）、图标间距 |
| --s-5 | 20px | 卡片内距（默认） |
| --s-6 | 24px | 移动端页面左右安全边距 |
| --s-8 | 32px | 卡片间距、组间距 |
| --s-10 | 40px | 区块内节奏 |
| --s-12 | 48px | 桌面端页面左右边距 |
| --s-16 | 64px | 区块间垂直节奏（移动端区块距） |
| --s-24 | 96px | 桌面端区块间垂直节奏（参考站大留白语法） |
| --s-32 | 128px | hero / 收尾超大笑位 |

### Grid
- 内容最大宽：1160px；正文阅读列：max-width 720px。
- 编辑三栏（首页简介区，≥1024px）：左导航轨 200px(sticky) / 主栏 1fr / 右旁注 240px；<1024px 折叠为单栏。
- 案例网格：`repeat(auto-fill, minmax(300px, 1fr))`，gap --s-8。
- 断点：375 / 768 / 1024 / 1440（QA 用 375 / 768 / 1280）。

### Rules
- 区块间垂直节奏宁大勿小：桌面 96px 起步（参考站 60–100px 留白的保真）。
- 黑色满幅色带（hero、页脚带）内部再套内容列。

## 5. Components

### SiteNav（全站顶栏）
- Structure: sticky header，左 wordmark（衬线 900），右链接组（首页/案例库/提交案例），当前页链接下划线橙色。
- States: 默认白底 + 底部 1px --line；滚动后加微阴影 `0 1px 0 rgba(0,0,0,0.04)`；<768px 折叠为汉堡，展开为全宽面板。
- Focus: 链接 focus-visible 2px --accent 外描边 offset 2px。
- Motion: 移动面板展开 240ms ease-out（max-height + opacity）。

### SectionBadge（签名组件）
- Structure: `display:inline-block; background:#000; color:#fff; 12px/600; letter-spacing:0.167em; padding:8px 16px; border-radius:2px`。
- States: 静态装饰，无交互态。
- 用于每个区块开场，替代任何渐变或彩色标题。

### Button（btn / btn-accent-outline）
- Structure: inline-flex, 14px/600, letter-spacing 0.05em, padding 14px 28px, radius 2px, 无阴影。
- Variants: `btn-primary`（#000 底白字）；`btn-ghost`（透明底 + 1px #000 边黑字）。
- States: hover — primary 翻转为 --accent 底 + 黑字；ghost 边框转 --accent + 文字转 --accent-deep；active `scale(0.98)`；disabled 40% 透明度 + 禁用指针；focus-visible 2px --accent offset 2px。
- Motion: background-color/color 200ms ease, transform 100ms。

### CaseCard（案例卡）
- Structure: 白底 + 1px --line-soft 边，radius 2px，内距 --s-5；头部：学段彩色标签 1–2 枚；H3 标题（衬线）；meta 行（课时/年级，14px --ink-2）；流程迷你标签行；成果摘要 2 行截断；底部「阅读案例 →」文字链（hover 箭头右移 4px）。
- States: hover 边框转 #000 + translateY(-2px) + `0 2px 8px rgba(0,0,0,0.04)`；focus-visible 同 hover 外观 + 描边。
- Motion: transform/border-color/shadow 200ms ease。
- 点击任意处打开案例详情 dialog。

### FilterBar
- Structure: 学段筛选（ pill radio 组，选中态黑底白字）+ 搜索框（1px --line 边，radius 2px）+ 结果计数（Label 样式）。
- States: pill 选中 #000/#fff，未选中透明底 1px --line 边；搜索框 focus 边框 #000。

### Dialog（案例详情）
- Structure: 原生 `<dialog>`，max-width 720px，白底 radius 2px，::backdrop rgba(10,10,10,0.5)；内部：SectionBadge 学段 + H2 标题 + meta 网格 + 各字段小节（Label + 正文）。
- States: Esc/点击 backdrop 关闭；打开时 focus 移入，关闭归还。
- Motion: 打开 200ms opacity + translateY(8px→0)。

### Form（提交案例）
- Structure: 两栏网格（≥768px），字段含 text/select/textarea/checkbox；label 14px/600 上置；input 白底 1px --line 边 radius 2px padding 12px；帮助文字 14px --ink-2；错误文字 14px --error + 输入边转 --error。
- States: focus 边框 #000 + 无默认 outline 换描边；invalid 提交时标错误；成功后整表单替换为确认面板（对勾 SVG + 编号 + 「再提交一个」按钮）。
- A11y: 每个 input 显式 label[for]；required + aria-required；错误 aria-describedby + aria-invalid。

### ProfileBlock（主理人）
- Structure: ≥900px 两栏（肖像 320px / 履历 1fr），<900px 单栏；肖像方形容器带 1px --line 边 + 8px 白色相纸边距（编辑风）；履历含衬线引语块 + 资质列表（发丝分隔）+ 经历时间线（左竖线 + 节点）。

### Footer
- Structure: 黑色满幅带，白字；三列（wordmark/导航/说明），底部 Micro 版权行。
- 唯一的大面积深色区。

## 6. Motion & Interaction

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 100ms | ease-out | 按钮 active 缩放 |
| Standard | 200ms | ease | hover 色变、卡片抬升 |
| Emphasis | 240ms | ease-out | 移动端菜单、dialog |
| Entry | 600ms | cubic-bezier(0.16, 1, 0.3, 1) | 滚动入场 translateY(12px)+opacity |

### Rules
- 只动 transform/opacity（+color/background-color/border-color 着色类）。
- 入场用 IntersectionObserver + `--i` 级联延迟 80ms。
- `prefers-reduced-motion: reduce` 时全部入场动画与过渡关闭。
- 无装饰性动效：每个动效必须对应交互或入场。

## 7. Depth & Surface

**Strategy: borders-only（参考站保真）。**
- 全站唯一阴影：卡片 hover `0 2px 8px rgba(0,0,0,0.04)`、顶栏滚动 `0 1px 0 rgba(0,0,0,0.04)`。
- 表面分离靠 1px 发丝线（--line / --line-soft）与底色 tint（--surface-tint / --tint-rose），不靠阴影。
- 圆角统一 2px（参考站保真），禁止大圆角/胶囊容器。

## 8. Accessibility Constraints & Accepted Debt

### Constraints
- WCAG 2.1 AA：正文对比 ≥4.5:1（#000/#4A4A4A on #FFF 均 >7:1；橙底黑字 ≈7.4:1；禁止白字于橙底 ≈2.1:1）。
- 全键盘可达：跳转链接、focus-visible 全覆盖、dialog 焦点圈闭、Esc 关闭。
- landmark：header/nav/main/footer 全站齐备；每页唯一 h1；所有输入显式 label；图片有意义 alt。
- `prefers-reduced-motion` 关闭动效；触控目标 ≥44px。

### Accepted Debt
| Item | Location | Why accepted | Owner / Exit |
|------|----------|--------------|--------------|
| Google Fonts CDN 依赖（Noto Serif SC/Jost） | 全站 | 中国大陆可达性不确定；swap + 系统字体回退保证可用性，离线仅损字体气质不损功能 | 用户要求自托管时下载字体文件替换 |
| 案例数据存 localStorage，无后端 | submit/cases 页 | 本次范围无服务器；表单校验 + 本地持久化已满足"支持提交"的演示闭环 | 接入后端/表单服务时替换 app.js 持久层 |
| 主理人肖像为生成插画而非真人照片 | index.html ProfileBlock | 对话中照片无法落盘；插画匹配手绘 DNA；保留 assets/nicki-portrait.jpg 路径，用户放同名照片即替换 | 用户提供照片文件时 |
