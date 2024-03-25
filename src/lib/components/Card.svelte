<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<div
  class="border-1 br-1 border-grey-600 cursor-pointer position-relative corner"
>
  <img src="/images/{src}" {alt} class="w-100 h-100" />
</div>
