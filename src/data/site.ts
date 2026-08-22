export const SITE_URL = "https://foodex-nationwide-connect.lovable.app";

/** Build an absolute URL from a root-relative path or bundled asset URL. */
export function abs(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
