export const getLang = (lang = "es") => {
  return lang === "es" ? "es" : "en";
};

export const getPreferredLanguage = (acceptLanguage: string = "") => {
  const preferredLanguage = acceptLanguage.split(",")[0].split("-")[0];
  return preferredLanguage === "es" ? "es" : "en";
};
