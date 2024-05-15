<script lang="ts">
  import { height } from "$lib/stores";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  const pages = ["home", "projects", "about"] as const;
  type Pages = (typeof pages)[number];

  let currentPage: Pages = "home";

  const labelsFromPage: Record<Pages, string> = {
    home: "Home",
    projects: "Projects",
    about: "About me",
  };

  let navMenu: HTMLElement;

  const navFocus = (event: MouseEvent | FocusEvent) => {
    const element = event.target as HTMLAnchorElement;
    if (navMenu && element && element.classList.contains("nav-item")) {
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
    if (browser && navMenu) {
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
    }
  };

  $: currentPage && resetUnderline();

  onMount(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          currentPage = entry.target.id as Pages;
        }
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      threshold: 0.95,
    });

    const home = document.getElementById("home") ?? new Element();
    observer.observe(home);

    const projects = document.getElementById("projects") ?? new Element();
    observer.observe(projects);

    const about = document.getElementById("about") ?? new Element();
    observer.observe(about);

    const timeout = setTimeout(resetUnderline, 50);

    return () => {
      observer.unobserve(home);
      observer.unobserve(projects);
      observer.unobserve(about);
      clearTimeout(timeout);
    };
  });

  let scrollY: number;

  const updateCurrentPage = (
    event: MouseEvent & { currentTarget: HTMLButtonElement },
  ): void => {
    currentPage = event.currentTarget.getAttribute("data-page") as Pages;
  };
</script>

<svelte:window bind:scrollY bind:innerHeight={$height} />

<div id="content-container">
  <div
    class="fixed top-0 w-100 pb-8 bg-transparent z-max {scrollY > 0 &&
      'bb-1 bg-grey-950 border-grey-800'}"
  >
    <nav
      class="flex-row-center relative gap-10 pl-10 pt-8 nav-menu"
      on:mouseover={navFocus}
      on:mouseleave={resetUnderline}
      on:focus={navFocus}
      on:blur={resetUnderline}
      bind:this={navMenu}
    >
      {#each pages as page (page)}
        <button
          data-page={page}
          class="nav-item pb-2"
          class:highlighted={page === currentPage}
          on:click={updateCurrentPage}>{labelsFromPage[page]}</button
        >
      {/each}
    </nav>
  </div>
  <slot />
</div>

<style>
  .nav-menu {
    --underline-width: 0;
    --underline-offset-x: 0;
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
  .highlighted {
    font-weight: bolder;
    color: var(--orange);
  }
</style>
