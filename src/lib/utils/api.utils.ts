// Utils
import { TRANSLATION_SEARCH_QUERY } from "../constants/query.constants";
import { ENV } from "../config/env";
import { getLang } from "./query.utils";

// TODO: optimize queries

export const getHomeTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/home_texts/1?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getAboutMe = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/aboutme/1?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getServices = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/services?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getRecentProjects = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/projects?fields[]=*,gallery.*,skills.*.*,translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getProjectById = (id: number, lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/projects/${id}?fields[]=*,gallery.*,skills.*.*,translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
    ).then((res) => res.json());
  };

export const getFooterTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/footer_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getNavItems = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/nav?fields[]=*,translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getProjectsText = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/projects_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getAboutTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/about_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getEducation = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/education?fields[]=translations.*.*.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getSkills = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/skills?fields[]=name&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getCertifications = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/certifications?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getWorkExperience = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/work_experience?fields[]=translations.*.*.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getProjectsUniqueTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  return fetch(
    `${ENV.CMS_ITEMS_URL}/projects_unique_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`,
    {
      headers: {
        Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};
