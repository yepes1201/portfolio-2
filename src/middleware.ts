import { defineMiddleware } from "astro:middleware";
import { getPreferredLanguage } from "./lib/utils/query.utils";

export const onRequest = defineMiddleware((context, next) => {
  const lang = context.params.lang;
  const allowedLanguages = ["es", "en"];

  // Si no hay parámetro de idioma o si el idioma es permitido, continuar
  if (!lang || allowedLanguages.includes(lang)) {
    return next();
  }

  // Si el idioma no está permitido, redirigir al idioma preferido del navegador
  const acceptLanguage = context.request.headers.get("accept-language") || "";
  const redirectLang = getPreferredLanguage(acceptLanguage);
  return context.redirect(`/${redirectLang}`);
});
