import createClient from "openapi-fetch";
import { paths } from "./lib/api/melodi";

export const client = createClient<paths>({
  baseUrl: "https://app.melodi.fyi/api/external",
});
