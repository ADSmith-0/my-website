<script lang="ts">
import { height } from "$lib/stores";

let innerHeight: number;
const MIN_INNER_HEIGHT = 920;

$: if (innerHeight > MIN_INNER_HEIGHT) {
	height.set(innerHeight);
} else if ($height !== MIN_INNER_HEIGHT) {
	height.set(MIN_INNER_HEIGHT);
}
</script>

<svelte:window bind:innerHeight />

<slot />
