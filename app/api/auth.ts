import {
    autoSignIn,
    confirmSignUp,
    type ConfirmSignUpInput,
    fetchAuthSession,
    signIn,
    type SignInInput,
    signOut,
    signUp,
} from 'aws-amplify/auth';

export type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  birthdate: string;
  name: string;
};

export async function handleSignUp({
  username,
  password,
  email,
  birthdate,
  name,
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          birthdate,
          name,
        },
        autoSignIn: true,
      },
    });
    console.log(userId);
    return userId;
  } catch (error) {
    console.error('error signing up:', error);
  }
}

export async function handleSignUpConfirmation({
  username,
  confirmationCode,
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode,
    });

    return isSignUpComplete;
  } catch (error) {
    console.error('error confirming sign up', error);
  }
}

export async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    return isSignedIn;
  } catch (error) {
    console.error('error signing in', error);
  }
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.error('error signing out: ', error);
  }
}

export async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return {
      accessToken,
      idToken,
    };
  } catch (err) {
    console.error(err);
  }
}

async function handleAutoSignIn() {
  try {
    const signInOutput = await autoSignIn();
  } catch (error) {
    console.error(error);
  }
}
