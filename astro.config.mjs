import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/services/puertas-giratorias/": "/producto/puertas-giratorias/",
    "/services/puertas-corredizas/": "/producto/puertas-corredizas/",
    "/services/puertas-telescopicas/": "/producto/puertas-telescopicas/",
    "/services/puertas-batientes/": "/producto/puertas-batientes/",
    "/services/puertas-plegadizas/": "/producto/puertas-plegadizas/",
    "/services/torniquetes/": "/producto/torniquetes/",
    "/services/puertas-de-seguridad/": "/producto/puertas-de-seguridad/",
    "/services/huella-digital/": "/producto/huella-digital/",
    "/services/chapas-magneticas/": "/producto/chapas-magneticas/",
    "/services/teclado-digital-y-lector-de-tarjetas/":
      "/producto/teclado-digital-y-lector-de-tarjetas",
    "/services/iris/": "/producto/iris/",
  },
});
