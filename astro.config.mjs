import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [
    sanity({
      projectId: "sed0dkpg",
      dataset: "production",
      useCdn: false, // Cámbialo a false para ver los cambios de Sanity al instante mientras desarrollas
      apiVersion: "2024-03-25",
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['tslib', 'rxjs'] // Esto elimina definitivamente los errores rojos que veías
    }
  }
});