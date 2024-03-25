<script lang="ts">
  import { page } from "$app/stores";

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 3,
      name: "About me",
      path: "/about",
    },
  ];
</script>

<div id="content-container" class="mh-10">
  <nav class="flex-row-center w-100 gap-10 mt-8">
    {#each navItems as navItem (navItem.id)}
      <a
        href={navItem.path}
        class="link"
        class:highlighted={$page.route.id === navItem.path}>{navItem.name}</a
      >
    {/each}
  </nav>
  <slot />
</div>

<style>
  .link {
    text-decoration: none;
  }
  .highlighted {
    font-weight: bolder;
    color: var(--orange);
    border-bottom: 2px solid var(--orange);
  }
</style>
