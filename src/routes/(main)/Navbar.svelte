<script lang="ts">
import { browser } from "$app/environment";
import { onMount } from "svelte";

const pages = ["home", "projects", "about"] as const;
type Pages = (typeof pages)[number];

const labelsFromPage: Record<Pages, string> = {
	home: "Home",
	projects: "Projects",
	about: "About me",
};

let currentPage: Pages = "home";
let scrollY: number;
let navMenu: HTMLElement;
let underlineWidth = "0px";
let underlineOffsetX = "0px";
let highlightedNavItem: HTMLButtonElement;

const navFocus = (event: MouseEvent | FocusEvent) => {
	const element = event.target as HTMLAnchorElement;
	if (element?.classList.contains("nav-item")) {
		underlineWidth = `${element.offsetWidth}px`;
		underlineOffsetX = `${element.offsetLeft}px`;
	}
};

const resetUnderline = () => {
	underlineWidth = `${highlightedNavItem.offsetWidth}px`;
	underlineOffsetX = `${highlightedNavItem.offsetLeft}px`;
};

$: if (browser && currentPage && highlightedNavItem) {
	resetUnderline();
}

onMount(() => {
	const timeout = setTimeout(resetUnderline, 50);

	return () => {
		clearTimeout(timeout);
	};
});

const updateCurrentPage = (
	event: MouseEvent & { currentTarget: HTMLButtonElement },
): void => {
	currentPage = event.currentTarget.getAttribute("data-page") as Pages;
	const page = document.getElementById(currentPage);
	if (page) {
		page.scrollIntoView();
	}
};

const scrollend = () => {
	const page = document.elementFromPoint(50, navMenu.offsetHeight + 20);
	if (page) {
		currentPage = page.id as Pages;
	}
};
</script>

<svelte:window bind:scrollY on:scrollend={scrollend} />

<div id="content-container">
  <div
    class="fixed top-0 w-100 pb-8 bg-transparent z-max {scrollY > 0 &&
      'bb-1 bg-grey-950 border-grey-800'}"
    class:bg-alt={scrollY > 0}
    bind:this={navMenu}
  >
    <nav
      class="flex-row-center relative gap-10 pl-10 pt-8 nav-menu"
      on:mouseover={navFocus}
      on:mouseleave={resetUnderline}
      on:focus={navFocus}
      on:blur={resetUnderline}
      style:--underline-width={underlineWidth}
      style:--underline-offset-x={underlineOffsetX}
    >
      {#each pages as page (page)}
        {#if page === currentPage}
          <button
            data-page={page}
            class="nav-item pb-2 highlighted"
            bind:this={highlightedNavItem}
            on:click={updateCurrentPage}>{labelsFromPage[page]}</button
          >
        {:else}
          <button
            data-page={page}
            class="nav-item pb-2"
            on:click={updateCurrentPage}>{labelsFromPage[page]}</button
          >
        {/if}
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
  .bg-alt {
    border-bottom: var(--spacing-1) solid var(--grey-800);
    box-shadow: 0 0 var(--spacing-4) var(--spacing-1) var(--grey-950-25);
    background: var(--grey-900-50);
    backdrop-filter: blur(var(--spacing-5));
  }
  .highlighted {
    font-weight: bolder;
    color: var(--orange);
  }
</style>
