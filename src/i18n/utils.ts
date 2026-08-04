import { ui, defaultLang, languages, type Lang } from "./ui";

/** Reads the active language straight off the URL. No cookies, no JS, no flash. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first in languages) return first as Lang;
  return defaultLang;
}

/**
 * Returns a `t()` bound to the given language. Falls back to English when a key
 * has not been translated yet, so a missing string degrades to readable text
 * instead of rendering blank.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Prefixes a root-relative path with the language segment (English keeps `/`). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

/** Strips the language segment, giving the canonical English path. */
export function stripLangFromPath(pathname: string): string {
  const segments = pathname.split("/");
  if (segments[1] in languages && segments[1] !== defaultLang) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest;
  }
  return pathname || "/";
}

/**
 * The same page in every language, for the switcher and for hreflang tags.
 * Because the Spanish tree mirrors the English one slug for slug, swapping the
 * prefix is all that is needed.
 */
export function getAlternateLinks(url: URL) {
  const basePath = stripLangFromPath(url.pathname);
  return (Object.keys(languages) as Lang[]).map((lang) => ({
    lang,
    ...languages[lang],
    path: localizePath(basePath, lang),
  }));
}

export { languages, defaultLang };
export type { Lang };
