// Utils
import { TRANSLATION_SEARCH_QUERY } from "../constants/query.constants";
import { ENV } from "../config/env";
import { getLang } from "./query.utils";

// Cache implementation
interface CacheItem {
  data: any;
  timestamp: number;
}

const apiCache = new Map<string, CacheItem>();
const DEFAULT_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

const fetchWithCache = (
  url: string,
  options: RequestInit,
  cacheKey: string,
  ttl = DEFAULT_TTL
) => {
  const now = Date.now();

  // Check if data exists in cache and is not expired
  if (apiCache.has(cacheKey)) {
    const cachedData = apiCache.get(cacheKey)!;
    if (now - cachedData.timestamp < ttl) {
      return Promise.resolve(cachedData.data);
    }
  }

  // If not in cache or expired, make the request
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      // Save to cache
      apiCache.set(cacheKey, { data, timestamp: now });
      return data;
    });
};

// Helper to create API request options
const getRequestOptions = () => ({
  headers: {
    Authorization: `Bearer ${ENV.CMS_ACCESS_TOKEN}`,
  },
});

// TODO: optimize queries

export const getHomeTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/home_texts/1?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `home_texts_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getAboutMe = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/aboutme/1?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `aboutme_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getServices = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/services?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `services_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getRecentProjects = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/projects?fields[]=*,gallery.*,skills.*.*,translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `recent_projects_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getProjectById = (id: number, lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/projects/${id}?fields[]=*,gallery.*,skills.*.*,translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `project_${id}_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getFooterTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/footer_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `footer_texts_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getNavItems = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/nav?fields[]=*,translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `nav_items_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getProjectsText = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/projects_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `projects_text_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getAboutTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/about_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `about_texts_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getEducation = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/education?fields[]=translations.*.*.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `education_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getSkills = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/skills?fields[]=name&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `skills_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getCertifications = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/certifications?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `certifications_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getWorkExperience = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/work_experience?fields[]=translations.*.*.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `work_experience_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

export const getProjectsUniqueTexts = (lang = "es") => {
  const finalLang = getLang(lang);
  const url = `${ENV.CMS_ITEMS_URL}/projects_unique_texts?fields[]=translations.*&${TRANSLATION_SEARCH_QUERY}=${finalLang}`;
  const cacheKey = `projects_unique_texts_${finalLang}`;

  return fetchWithCache(url, getRequestOptions(), cacheKey);
};

// Function to clear the entire cache
export const clearCache = () => {
  apiCache.clear();
};

// Function to clear specific cache entries by key pattern
export const clearCacheByPattern = (pattern: string) => {
  for (const key of apiCache.keys()) {
    if (key.includes(pattern)) {
      apiCache.delete(key);
    }
  }
};
