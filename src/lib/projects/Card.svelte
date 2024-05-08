<script lang="ts">
export let link: string;
export let text: string;
export let borderColour = "#0cf";
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="flex-row-center justify-content-center card p-5 br-1 border-box cursor-pointer animated-border"
  style:--border-colour={borderColour}
>
  <div class="flex-row-center justify-content-center gap-5">
    <slot name="image" />
    <h3 class="p-2 fs-2xl text-shadow text-primary" style="flex: 0 1 50%;">
      {text}
    </h3>
  </div>
</a>

<style>
  .card {
    position: relative;
    width: var(--project-card-size);
    aspect-ratio: 16 / 9;
    overflow: hidden;
    transition: transform 0.2s linear;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card div {
    position: absolute;
    inset: 2px;
    z-index: 10;
    border-radius: inherit;
    background: url(/grainy.svg),
      linear-gradient(90deg, var(--grey-950), var(--grey-950));
  }
  .card::before,
  .card::after {
    content: "";
    position: absolute;
    width: 345px;
    height: 345px;
    border-radius: inherit;
    background: var(--border-colour);
    animation: rotate 6s linear infinite;
  }
  .card::after {
    animation-delay: -3s;
  }
  .card:hover::before,
  .card:hover::after {
    background: conic-gradient(transparent, transparent, var(--border-colour));
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
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
