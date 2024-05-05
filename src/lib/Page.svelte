<script lang="ts">
import { height } from "./stores";
export let id: string;
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
