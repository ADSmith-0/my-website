import { writable } from "svelte/store";

export const height = writable<number | undefined>(undefined);
