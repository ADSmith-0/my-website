<script lang="ts">
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
</script>

<svelte:window bind:innerHeight={height} />

<div
  class="flex-row-center justify-center"
  style:height={height ? height + "px" : "100vh"}
>
  {#if height}
    <h1 transition:typewriter>Hi, I'm Adam</h1>
  {/if}
</div>
