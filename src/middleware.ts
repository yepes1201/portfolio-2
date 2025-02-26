import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // TODO: fix middleware rerender
  // const lang = context.params.lang ?? "*"; // Obtener el idioma de la URL, si no existe, usar "*"
  // const allowedLanguages = ["es", "en"]; // Idiomas permitidos

  // if (!allowedLanguages.includes(lang)) {
  //   // Redirigir a la versión en español si el idioma no es válido
  //   return context.redirect("/es");
  // }

  return next();
});
