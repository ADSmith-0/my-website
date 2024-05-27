import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const projects = await fetch("/api/projects").then((res) => res.json());
  return {
    projects,
  };
};
