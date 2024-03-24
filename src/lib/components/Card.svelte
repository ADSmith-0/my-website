<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let tags: string[];
  export let img: string;
  export let alt: string;
</script>

<div
  class="border-1 br-1 border-grey-600 cursor-pointer position-relative hover"
>
  <div class="info position-absolute z-2">
    <div class="flex-row-center">
      <div class="flex-row-column">
        <h2 class="m-0">{title}</h2>
        <span class="text-secondary">{subtitle}</span>
      </div>
      {tags[0]}
    </div>
  </div>
  <img src="/images/{img}" {alt} style="height: 100%; width: 100%;" />
</div>

<style>
  .info {
    top: 0;
    left: 0;
    opacity: 0;
  }
  .hover:hover img {
    filter: blur(2px) brightness(0.4);
    transition: filter 0.2s ease-out;
  }
  .hover:hover .info {
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
</style>
