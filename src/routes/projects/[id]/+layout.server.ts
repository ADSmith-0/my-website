export const prerender = true;
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params }) => {
  return {
    path: params.id,
  };
};
