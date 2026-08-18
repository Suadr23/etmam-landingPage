export type Lang = 'en' | 'ar';

export const LANG_COOKIE = 'ETMAM_LANG';

/** Read the initial language from a cookie set by the server layout. */
export function getInitialLang(cookie?: string | null): Lang {
  if (cookie) {
    const match = cookie
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith(`${LANG_COOKIE}=`));
    if (match) {
      const value = match.split('=')[1];
      if (value === 'ar' || value === 'en') return value;
    }
  }
  return 'en';
}

