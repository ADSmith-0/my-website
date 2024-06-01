<script lang="ts">
import type { LayoutData } from "./$types";
export let data: LayoutData;
</script>

<div class="grid pl-10" style="grid-template-columns: minmax(200px, auto) 1fr;">
  <aside class="p-3 bri-1 border-grey-600">
    <a href="/" class="link fs-xl mb-5">&lt; Back</a>
    <div class="flex-column gap-3">
      {#each data.projects as { name, tags, link } (name)}
        <a href={`/projects/${link}`} class="fs-l">{name}</a>
      {/each}
    </div>
  </aside>
  <main class="p-5">
    <slot />
  </main>
</div>
