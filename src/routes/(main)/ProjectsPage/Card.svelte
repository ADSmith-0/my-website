<script lang="ts">
export let link: string;
export let text: string;
export let iconSize: number;
export let borderColour = "#0cf";
// FIX: https://www.youtube.com/watch?v=fcnDBP3k3BE - Change border with this

const containerOffset = "100px";
const glowOffset = "1px";
const borderRadius = "4px";
</script>

<a
  id="container"
  href={link}
  target={link[0] !== "/" ? "_blank" : undefined}
  rel="noopener noreferrer"
  class="flex-row-center justify-content-center br-1 cursor-pointer animated-border glow-effect"
  style:--border-colour={borderColour}
  style:--container-offset={containerOffset}
  style:--glow-offset={glowOffset}
  style:--border-radius={borderRadius}
>
  <div
    id="card"
    class="flex-row-center justify-content-center gap-5 p-5 w-100 h-100 border-box"
  >
    <span
      class="flex-row-center justify-content-center"
      style="height: {iconSize}px; width: {iconSize}px;"
    >
      <slot name="image" />
    </span>
    <h3 class="p-2 fs-2xl text-shadow text-primary" style="flex: 0 1 50%;">
      {text}
    </h3>
  </div>
  <svg id="glow-container">
    <rect
      id="glow-line"
      pathLength="100"
      x={`${parseInt(containerOffset) / 2 + parseInt(glowOffset) / -2}px`}
      y={`${parseInt(containerOffset) / 2 + parseInt(glowOffset) / -2}px`}
      stroke-linecap="round"
      rx={borderRadius}
    ></rect>
    <rect
      id="glow-blur"
      pathLength="100"
      x={`${parseInt(containerOffset) / 2 + parseInt(glowOffset) / -2}px`}
      y={`${parseInt(containerOffset) / 2 + parseInt(glowOffset) / -2}px`}
      stroke-linecap="round"
      rx={borderRadius}
    ></rect>
  </svg>
</a>

<style>
  #container {
    --glow-line-thickness: var(--spacing-1);
    --glow-blur-size: var(--spacing-3);
    --animation-speed: 2s;
    /* do not change, used for calculations */
    --container-offset: 100px;
    --height: calc(var(--project-card-size) * 9 / 16);
    position: relative;
    width: var(--project-card-size);
    height: var(--height);
    border-radius: var(--border-radius);
    transition: transform 0.1s linear;
  }
  #container:is(:hover, :focus) {
    transform: scale(1.02);
  }
  #card {
    border-radius: inherit;
    background: radial-gradient(var(--grey-900), var(--grey-950));
    border: var(--spacing-1) solid var(--border-colour);
    transition: border-color linear 0.4s;
  }
  #glow-container {
    pointer-events: none;
    position: absolute;
    inset: calc(var(--container-offset) / -2);
    width: calc(100% + var(--container-offset));
    height: calc(100% + var(--container-offset));
  }
  #glow-line,
  #glow-blur {
    width: calc(100% - var(--container-offset) + var(--glow-offset));
    height: calc(100% - var(--container-offset) + var(--glow-offset));
    opacity: 0;
    fill: transparent;
    stroke: var(--border-colour);
    stroke-width: var(--glow-line-thickness);
    stroke-dasharray: 20px 30px;
    transition: all 0.1s linear;
  }
  #glow-blur {
    filter: blur(var(--glow-blur-size));
  }
  #container:is(:hover, :focus) :is(#glow-line, #glow-blur) {
    opacity: 1;
    animation: spin var(--animation-speed) linear infinite;
  }
  @keyframes spin {
    0% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: -50px;
    }
  }
  .text-shadow {
    text-shadow:
      -1px -1px 0 var(--grey-900),
      1px -1px 0 var(--grey-900),
      -1px 1px 0 var(--grey-900),
      1px 1px 0 var(--grey-900);
  }
</style>
