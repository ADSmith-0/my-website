import { json, type RequestHandler } from "@sveltejs/kit";
import data from "./projects.json";

export const GET: RequestHandler = () => {
  return json(data);
};
