<script lang="ts">
export let title: string;
export let backgroundColour1: string;
export let backgroundColour2: string;
</script>

<div
  class="flex-column-center justify-content-start align-items-start bg-grey-950 flex-50 border-box border-2 border-grey-400 br-1 list-item p-8"
  style:--background-colour-1={backgroundColour1}
  style:--background-colour-2={backgroundColour2}
>
  <h3 class="fs-l text-secondary mb-3">{title}</h3>
  <ul class="list flex-column-center align-items-start gap-5">
    <slot />
  </ul>
</div>

<style>
  .list {
    list-style: none;
  }
  .list-item {
    position: relative;
  }
  .list-item::before {
    content: "";
    position: absolute;
    inset: -20px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      var(--background-colour-1),
      var(--background-colour-2)
    );
    /* background: linear-gradient( */
    /*   135deg, */
    /*   red, */
    /*   orange, */
    /*   yellow, */
    /*   green, */
    /*   blue, */
    /*   indigo, */
    /*   violet */
    /* ); */
    box-shadow: inset 0 0 var(--spacing-3) var(--spacing-5) var(--grey-950);
    z-index: -1;
  }
</style>
