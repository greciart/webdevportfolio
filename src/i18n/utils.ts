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

/**
 * `t()` that fills in `{placeholder}` slots. Needed because word order moves
 * between languages: "Blender icon" is "Icono de Blender", so the variable
 * cannot just be concatenated onto a translated prefix.
 */
export function useLabels(lang: Lang) {
  const t = useTranslations(lang);
  return function tf(
    key: keyof (typeof ui)[typeof defaultLang],
    vars: Record<string, string>,
  ): string {
    return Object.entries(vars).reduce(
      (out, [name, value]) => out.replaceAll(`{${name}}`, value),
      t(key),
    );
  };
}

/**
 * The site builds to directories, so `/packages` exists only as a 301 to
 * `/packages/`. Linking to the slashless form costs the visitor a redirect and
 * hands Google a second URL for the same page, which is what Search Console
 * files under "alternate page with proper canonical tag". Anchors, queries and
 * real files (`/rss.xml`) are left exactly as they are.
 */
export function withTrailingSlash(path: string): string {
  const cut = path.search(/[#?]/);
  const pathname = cut === -1 ? path : path.slice(0, cut);
  const suffix = cut === -1 ? "" : path.slice(cut);
  if (pathname.endsWith("/") || /\.[a-z0-9]+$/i.test(pathname)) return path;
  return `${pathname}/${suffix}`;
}

/** Prefixes a root-relative path with the language segment (English keeps `/`). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return withTrailingSlash(clean);
  return withTrailingSlash(`/${lang}${clean}`);
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
