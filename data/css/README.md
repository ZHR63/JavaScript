# CSS

- ## animation (动画)

  - **_animation-name_** `指定@keyframes 动画名称`

  - **_animation-duration_** `动画完成周期时间`

  - **_animation-timing-function_** `运行节奏`

    - ease 缓慢开始，缓慢结束

    - ease-in 先慢后快
    - ease-out 先快后慢
    - ease-in-out 以慢速开始和结束的过渡效果
    - linear 平滑效果

  - **_animation-delay_** `启动前的延迟间隔`

  - **_animation-iteration-count_** `播放次数`

    - 不可以为负

    - infinite 表示无限循环
    - 可以为小数，比如 0.5 代表播放动画的一半即结束

  - **_animation-direction_** `轮流反向播放动画`

    - normal: 每次从 @keyframes 0% 执行到 100%，一个周期结束后立即回到 0% 的位置

    - alternate: 假设 animation-iteration-count: infinite，从 @keyframes 0% 执行到 100%后，再从 100% 的位置 回到 0%，周而复始

    - reverse: 每次从 @keyframes 100% 执行到 0%，，一个周期结束后立即回到 100% 的位置

    - alternate-reverse: 假设 animation-iteration-count: infinite，从 @keyframes 100% 执行到 0%后，再从 0% 的位置 回到 100%，周而复始

  - **_animation-fill-mode_** `动画不播放时，处于什么状态`

    - none 是默认值，表示动画播放完成后，恢复到初始的状态。

    - forwards 表示动画播放完成后，保持 @keyframes 里最后一帧的样式。

    - backwards 表示开始播放动画之前，元素的样式将设置为动画第一帧的样式

    - both 相当于同时配置了 forwards 和 backwards。也就是说，动画开始前，元素样式将设置为动画第一帧的样式；而在动画线束状态，元素样式将设置为动画最后一帧样式。
  - **_animation-play-state_** `控制动画的运行或暂停`

- ## transition(过度)
- ## transform(变形)
- ## translate(移动)
