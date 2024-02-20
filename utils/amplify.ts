import {Amplify, type ResourcesConfig} from 'aws-amplify';
import {defaultStorage} from 'aws-amplify/utils';
import {cognitoUserPoolsTokenProvider} from 'aws-amplify/auth/cognito';

const redirectSignIn = [process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN as string];
const redirectSignOut = [process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT as string];
export function initConfig() {
  Amplify.configure({
    Auth: authConfig,
  });

  cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);
}

const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID as string,
    userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID as string,
    identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID as string,

    loginWith: {
      oauth: {
        domain: process.env.NEXT_PUBLIC_DOMAIN_COGNITO as string,
        scopes: ['email', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: redirectSignIn,
        redirectSignOut: redirectSignOut,
        responseType: 'token',
      },
    },
  },
};
