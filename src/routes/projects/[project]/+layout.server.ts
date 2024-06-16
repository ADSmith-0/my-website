import type { LayoutServerLoad } from "./$types";
import { projects } from "$lib/projects";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = ({ params }) => {
  const project = projects.find((project) => project.path === params.project);
  if (project) {
    return {
      projects,
      project,
    };
  }
  return error(404, "Project not found");
};

export const prerender = true;
