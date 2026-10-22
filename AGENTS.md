# 项目上下文

## Architecture
- 单页个人主页：全部内容（导航、指标、方向、产品、获奖、经历、教育、联系方式）集中在 `src/data/portfolio.ts`，组件仅负责呈现；改文案/链接/数据只动该文件。
- 方向卡片展示顺序由 `Direction.index` 决定（`DirectionSection` 内按 index 排序渲染），调整卡片次序改 index 字段即可，无需移动数组元素。
- 详情浮窗与二维码浮窗基于 shadcn Dialog（Radix），遮罩暗度在 `src/components/ui/dialog.tsx` 定制为轻微暗化。

## What Didn't Work
- ❌ 产品图标用生成时抠图与二次 image-cutout 去黑底 → 抠图引擎降级为启发式，纯黑残边无法去除 → 改为深色渐变底板承载图标，残边融入底板。
- ❌ Hero 插图米白底与页面暖白底有色差，`mix-blend-multiply` 无法消除矩形边界 → 重新生成纯白底插图后正片叠底完全融合。

## Lessons
- 整卡可点击 + 卡内次级链接（Paper ↗）时：整卡用 `absolute inset-0` 的 `<a>`，卡内信息条容器必须 `pointer-events-none`、次级链接 `pointer-events-auto`，否则信息条的 z-index 会吞掉整卡点击。
- 首屏内容不要挂 reveal 渐入类，加载早期或截图时机会呈现空白；reveal 只用于折叠线以下区块。
- 移动端 Hero 插图改为贴右边缘的绝对定位半透明竖条（object-cover 裁切 + 低透明度 + 渐隐遮罩），断点透明度用 Tailwind 响应式类即可，无需 JS 检测设备。
