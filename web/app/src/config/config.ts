import { IS_PRODUCTION } from '../utils/app.utils';

export const SERVER_URL = IS_PRODUCTION ? 'https://emotio.life/graphql' : 'http://localhost:5000/graphql';

export const GOOGLE_CLIENT_ID = '365671645341-n08rihvrhub9ka1rs6b7mh85qi6vqj8n.apps.googleusercontent.com';
export const GOOGLE_ANALYTIC_ID = 'G-J6K1E61E5E';

export const MESSAGE_DURATION = 2;
