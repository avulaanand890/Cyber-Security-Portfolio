// OAuth 2.0 Authorization Code + PKCE (login redirect only; no token exchange yet).

const AUTHORIZE_URL =
  'https://am.example.com/am/oauth2/realms/root/realms/testrealm/authorize';
const CLIENT_ID = 'portfolio-spa';

// TODO: set to your live Netlify URL EXACTLY as registered on the client
// (including the trailing slash if it has one), e.g. 'https://my-site.netlify.app/'.
// Can also be supplied via VITE_REDIRECT_URI at build time.
const REDIRECT_URI: string =
  import.meta.env.VITE_REDIRECT_URI ?? 'https://REPLACE-ME.netlify.app/';

const VERIFIER_KEY = 'pkce_code_verifier';
const STATE_KEY = 'oauth_state';

const base64Url = (bytes: Uint8Array): string => {
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const randomString = (byteLength: number): string => {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return base64Url(bytes);
};

export async function startLogin(): Promise<void> {
  // 64 random bytes -> 86 base64url chars (within the 43-128 range)
  const verifier = randomString(64);
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  const challenge = base64Url(new Uint8Array(digest));
  const state = randomString(16);

  sessionStorage.setItem(VERIFIER_KEY, verifier);
  sessionStorage.setItem(STATE_KEY, state);

  const url =
    `${AUTHORIZE_URL}?client_id=${CLIENT_ID}` +
    `&response_type=code&scope=openid&service=secureSignIn1` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&code_challenge=${challenge}&code_challenge_method=S256` +
    `&state=${encodeURIComponent(state)}`;

  window.location.assign(url);
}

export type CallbackResult = 'none' | 'success' | 'error';

let cached: CallbackResult | null = null;

/**
 * If the URL has a `code`, validate `state`, then strip code/state from the
 * address bar. Runs once per page load (safe under React StrictMode).
 * The authorization code is intentionally NOT exchanged yet.
 */
export function handleCallback(): CallbackResult {
  if (cached !== null) return cached;

  const params = new URLSearchParams(window.location.search);
  if (!params.has('code')) return (cached = 'none');

  const expected = sessionStorage.getItem(STATE_KEY);
  const ok = !!expected && params.get('state') === expected;

  sessionStorage.removeItem(STATE_KEY);
  if (!ok) sessionStorage.removeItem(VERIFIER_KEY);

  params.delete('code');
  params.delete('state');
  const qs = params.toString();
  history.replaceState(
    null,
    '',
    window.location.pathname + (qs ? `?${qs}` : '') + window.location.hash,
  );

  return (cached = ok ? 'success' : 'error');
}
