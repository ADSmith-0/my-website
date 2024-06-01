import type { LayoutServerLoad } from "./$types";
import type { Project } from "$lib/types";

export const load: LayoutServerLoad = async ({ fetch }) => {
  const projects: Project[] = await fetch("/api/projects").then((res) =>
    res.json(),
  );
  return {
    projects,
  };
};
