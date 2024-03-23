import type { PageServerLoad } from "./$types";
import projects from "./projects.json";

export const load: PageServerLoad = () => {
	return {
		projects,
	};
};
