import { Directus } from '@directus/sdk';
import { environment } from '../../../environments/environment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const directus = new Directus<Record<string, any>>(
  environment.directusBaseUrl
);
