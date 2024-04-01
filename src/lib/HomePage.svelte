<script lang="ts">
  import { fly } from "svelte/transition";

  const typewriter = (node: Node) => {
    const speed = 1;
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`,
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

  let height: number;
  let headerVisible: boolean = false;
</script>

<svelte:window bind:innerHeight={height} />

<div
  id="home"
  class="flex-column-center justify-content-center"
  style:height={height ? height + "px" : "100vh"}
>
  {#if height}
    <h1
      transition:typewriter
      class="fs-4xl"
      on:introend={() => (headerVisible = true)}
    >
      Hi, I'm Adam
    </h1>
    {#if !headerVisible}
      <p class="fs-xl text-secondary opacity-0">.</p>
    {:else}
      <p
        class="fs-xl text-secondary"
        transition:fly={{ y: 200, duration: 2000 }}
      >
        I enjoy making interactive and visually stunning websites
      </p>
    {/if}
  {/if}
</div>
