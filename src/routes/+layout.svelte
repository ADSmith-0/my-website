<script lang="ts">
import { page } from "$app/stores";
import { height } from "$lib/stores";
import { updateHash } from "$lib/utils";
import { onMount } from "svelte";

const navItems = [
	{
		id: 1,
		name: "Home",
		path: "#home",
	},
	{
		id: 2,
		name: "Projects",
		path: "#projects",
	},
	{
		id: 3,
		name: "About me",
		path: "#about",
	},
];

let navMenu: HTMLElement;

const navFocus = (event: MouseEvent | FocusEvent) => {
	const element = event.target as HTMLAnchorElement;
	if (navMenu && element && element.classList.contains("nav-item")) {
		navMenu.style.setProperty("--underline-width", `${element.offsetWidth}px`);
		navMenu.style.setProperty(
			"--underline-offset-x",
			`${element.offsetLeft}px`,
		);
	}
};

const resetUnderline = () => {
	const highlightedLink = document.querySelector(".highlighted") as HTMLElement;
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
	window.addEventListener("hashchange", resetUnderline);

	const intersectionCallback: IntersectionObserverCallback = (entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				updateHash(`#${entry.target.id}`);
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
		window.removeEventListener("hashchange", resetUnderline);
		observer.unobserve(home);
		observer.unobserve(projects);
		observer.unobserve(about);
		clearTimeout(timeout);
	};
});

let scrollY: number;
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
      {#each navItems as navItem (navItem.id)}
        <a
          href={navItem.path}
          class="nav-item pb-2"
          class:highlighted={$page.url.hash === ""
            ? navItem.path === "home"
            : $page.url.hash === navItem.path}>{navItem.name}</a
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
