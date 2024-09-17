import { executeQuery } from '@datocms/cda-client';

export const performRequest = async <T>(
  query: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: Record<string, any>,
): Promise<T> => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_DATOCMS_API_TOKEN as string,
  }) as Promise<T>;
};
