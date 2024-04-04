<script lang="ts">
  export let id: string;
  import { height } from "./stores";
</script>

<div
  {id}
  class="flex-column-center justify-content-center"
  style:min-height={$height ? $height + "px" : "100vh"}
>
  {#if $height}
    <slot />
  {/if}
</div>
