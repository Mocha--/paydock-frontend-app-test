import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */

const config = {
    name: 'paydockapp',
    entryPointUriPath: 'paydock-app',
    cloudIdentifier: 'gcp-au',
    env: {
        development: {
            initialProjectKey: process.env.APP_PROJECT_KEY,
        },
        production: {
            applicationId: 'clu8i7yq100513h7d0duarye1',
            url: 'https://jsp-test-six.vercel.app',
        },
    },
    additionalEnv:{
        clientId: process.env.APP_CLIENT_ID,
        clientSecret: process.env.APP_CLIENT_SECRET,
        projectKey: process.env.APP_PROJECT_KEY,
        region: process.env.APP_REGION,
        notificationUrl: process.env.APP_NOTIFICATION_URL,
    },
    oAuthScopes: {
        view: ['view_products'],
        manage: ['manage_products'],
    },
    icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
    mainMenuLink: {
        defaultLabel: 'Paydock Settings',
        uriPath: 'settings',
        labelAllLocales: [],
        permissions: ['ViewProducts'],
    },
    submenuLinks: [
        {
            uriPath: 'settings',
            defaultLabel: 'Live connection',
            labelAllLocales: [],
            permissions: ['ViewProducts'],
        },
    ],
    headers: {
        csp: {
            'connect-src': ['*'],
            'script-src': ['*'],
            'style-src': ['*'],
            'img-src': ['*'],
            'font-src': ['*'],
            'frame-src': ['*'],
        },
    },
};
export default config;
