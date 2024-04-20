<script lang="ts">
  export let link: string;
  export let text: string;
  export let background = "var(--grey-950)";
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="flex-row-center justify-content-center card p-5 gap-5 border-2 br-1 border-grey-600 cursor-pointer"
  style="box-sizing: border-box;"
  style:background
>
  <slot name="image" />
  <h3 class="p-2 fs-2xl text-shadow text-primary" style="flex: 0 1 50%;">
    {text}
  </h3>
</a>

<style>
  .card {
    width: var(--project-card-size);
    height: 170px;
  }
  .text-shadow {
    text-shadow:
      -1px -1px 0 var(--grey-900),
      1px -1px 0 var(--grey-900),
      -1px 1px 0 var(--grey-900),
      1px 1px 0 var(--grey-900);
  }
</style>
