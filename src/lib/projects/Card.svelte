<script lang="ts">
export let link: string;
export let text: string;
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="flex-row-center justify-content-center card p-5 gap-5 br-1 border-box cursor-pointer animated-border"
  style="background: url(/grainy.svg), linear-gradient(90deg, var(--grey-950), var(--grey-950));"
>
  <slot name="image" />
  <h3 class="p-2 fs-2xl text-shadow text-primary" style="flex: 0 1 50%;">
    {text}
  </h3>
</a>

<style>
  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  .card {
    width: var(--project-card-size);
    height: 170px;
  }
  .animated-border {
    position: relative;
  }
  .animated-border::before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: inherit;
    background: var(--grey-300);
  }
  .animated-border:hover::before {
    background: conic-gradient(
      from var(--gradient-angle),
      var(--grey-900),
      var(--grey-500),
      var(--grey-100)
    );
    animation: rotation 10s linear infinite;
  }
  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
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
