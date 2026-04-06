import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "sed0dkpg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-25",
});