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
    {
      id: 4,
      name: "Hot takes",
      path: "/hot_takes",
    },
  ];
</script>

<nav>
  {#each navItems as navItem (navItem.id)}
    <a href={navItem.path} class:highlighted={$page.route.id === navItem.path}
      >{navItem.name}</a
    >
  {/each}
</nav>

<slot />

<style>
  .highlighted {
    color: red;
  }
</style>
