<script lang="ts">
import type { PageData } from "../$types";
export let data: PageData;
</script>

<div class="grid pl-10" style="grid-template-rows: minmax(200px, 1fr);">
  <aside>
    <a href="/" class="link fs-xl mb-5">&lt; Back</a>
    <div class="flex-column">
      {#each data.projects as { name, tags, link } (name)}
        <a href={`/projects/${link}`} style="display: block">{name} | {tags}</a>
      {/each}
    </div>
  </aside>
  <main>
    <slot {data} />
  </main>
</div>
