<script lang="ts">
export let title: string;
</script>

<div class="flex-column-center justify-content-start flex-50 border-box">
  <h3 class="fs-xl text-secondary mb-4">{title}</h3>
  <ul class="list flex-column-center align-items-start gap-5">
    <slot />
  </ul>
</div>

<style>
  .list {
    list-style: none;
  }
</style>
