<script lang="ts">
import { fly } from "svelte/transition";
import Page from "$lib/Page.svelte";
import { onMount } from "svelte";

const typewriter = (node: Node) => {
	const speed = 1;
	const valid =
		node.childNodes.length === 1 &&
		node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(
			"This transition only works on elements with a single text node child",
		);
	}

	const text = node.textContent ?? "";
	const duration = text.length / (speed * 0.008);

	return {
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		},
	};
};

let headerVisible = false;
let subtitleVisible = false;

onMount(() => {
	const timer = setTimeout(() => {
		headerVisible = true;
	}, 50);

	return () => {
		clearTimeout(timer);
	};
});
</script>

<Page id="home">
  {#if headerVisible}
    <h1
      transition:typewriter
      on:introend={() => (subtitleVisible = true)}
      class="mb-10"
    >
      Hi, I'm Adam
    </h1>
    <span class="mt-10" style="flex: 0 1 200px;">
      {#if subtitleVisible}
        <p
          class="fs-xl text-secondary text-center"
          in:fly={{ y: 200, duration: 2000 }}
        >
          I enjoy making websites, web apps, mobile apps and tinkering around
          with code
        </p>
      {/if}
    </span>
  {/if}
</Page>

<style>
  :global(#home) {
    background-image: linear-gradient(135deg, #667eea70 0%, #764ba270 100%);
  }
</style>
