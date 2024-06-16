import type { EntryGenerator } from "./$types";
import { projects } from "$lib/projects";

export const entries: EntryGenerator = () => {
  const projectPaths = projects.map((project) => ({ project: project.path }));
  return projectPaths;
};

export const prerender = true;
