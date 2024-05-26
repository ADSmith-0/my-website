<script lang="ts">
import { height } from "./stores";
export let id: string;
export let className = "";
</script>

<div
  {id}
  class="flex-column-center justify-content-center {className}"
  style:min-height={$height ? $height + "px" : "100vh"}
>
  {#if $height}
    <slot />
  {/if}
</div>
