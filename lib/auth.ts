import {
  signUp,
  confirmSignUp,
  type ConfirmSignUpInput,
  signIn,
  type SignInInput,
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
          // E.164 number convention
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });
    console.log(userId);
    return userId;
  } catch (error) {
    console.log('error signing up:', error);
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
    console.log('error confirming sign up', error);
  }
}

export async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    console.log('isSignedIn, ', isSignedIn);
    return isSignedIn;
  } catch (error) {
    console.log('error signing in', error);
  }
}
