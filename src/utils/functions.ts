/* Constants */
import { TOKEN } from '@/apps/Users/constants';

interface ISessionTokenResponse {
  headers: {
    Authorization: string;
  };
}

/**
 * Return a url with the params replaced.
 */
export const generateUrl = (
  template: string,
  params: Record<string, string | number>
): string => {
  let url = template;

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(`:${key}`, String(params[key]));
    }
  }

  return url;
};

/**
 * Generate a URL-encoded query string from an object of key-value pairs.
 */
export const generateUrlParams = (
  items: Record<string, string | number | undefined>
): string => {
  // Params management.
  const params = new URLSearchParams();

  for (const prop in items) {
    const value = items[prop];
    if (value) params.append(prop, value.toString());
  }

  return `?${params.toString()}`;
};

/**
 * Return a HTTP header authorization token.
 */
export const getSessionToken = (): ISessionTokenResponse => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(TOKEN) ?? 'INVALID_TOKEN'}`,
    },
  };
};
