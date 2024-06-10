<script lang="ts">
import { height } from "./stores";
export let id: string;
export let className = "";

$: minHeight = $height ? `${$height}px` : "100vh";
</script>

<div
  {id}
  class="flex-column-center justify-content-center {className}"
  style:min-height={minHeight}
>
  {#if minHeight}
    <slot />
  {/if}
</div>
