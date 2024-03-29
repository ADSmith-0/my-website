<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

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

  let navMenu: HTMLElement;

  const navFocus = (event: MouseEvent | FocusEvent) => {
    const element = event.target as HTMLAnchorElement;
    if (navMenu && element && element.classList.contains("link")) {
      navMenu.style.setProperty(
        "--underline-width",
        `${element.offsetWidth}px`,
      );
      navMenu.style.setProperty(
        "--underline-offset-x",
        `${element.offsetLeft}px`,
      );
    }
  };

  const resetUnderline = () => {
    const highlightedLink = document.querySelector(
      ".highlighted",
    ) as HTMLElement;
    if (highlightedLink) {
      navMenu.style.setProperty(
        "--underline-width",
        `${highlightedLink.offsetWidth}px`,
      );
      navMenu.style.setProperty(
        "--underline-offset-x",
        `${highlightedLink.offsetLeft}px`,
      );
    }
  };

  onMount(() => {
    resetUnderline();
  });
</script>

<div id="content-container" class="mh-10">
  <nav
    class="flex-row-center w-100 gap-10 mt-8 nav-menu"
    on:mouseover={navFocus}
    on:mouseleave={resetUnderline}
    on:focus={navFocus}
    on:blur={resetUnderline}
    bind:this={navMenu}
  >
    {#each navItems as navItem (navItem.id)}
      <a
        href={navItem.path}
        class="link pb-2"
        class:highlighted={$page.route.id === navItem.path}>{navItem.name}</a
      >
    {/each}
  </nav>
  <slot />
</div>

<style>
  .nav-menu {
    --underline-width: 0;
    --underline-offset-x: 0;

    position: relative;
  }
  .nav-menu::before {
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    top: 100%;
    left: 0;
    background-color: var(--orange);
    width: var(--underline-width);
    transform: translateX(var(--underline-offset-x));
    transition:
      transform 0.4s,
      width 0.4s;
  }
  .link {
    text-decoration: none;
  }
  .highlighted {
    font-weight: bolder;
    color: var(--orange);
  }
</style>
