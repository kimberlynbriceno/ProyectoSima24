import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "avzcppcx", // Cámbialo por el tuyo de letras y números
  dataset: "production",
  useCdn: true, 
  apiVersion: "2024-03-25",
});