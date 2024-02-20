import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useAuthStore} from '@/app/store/auth';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {currentAuthenticatedUser, handleSignIn} from '@/app/api/auth';
import {loginSchema} from '@/utils/schemas/login';

export default function useLogin() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const router = useRouter();
  const [valid, setValid] = useState<boolean | undefined>(undefined);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    try {
      const isSignedIn = await handleSignIn({
        username: values.email,
        password: values.password,
      });
      if (isSignedIn) {
        setValid(true);
        setAuthenticated(true);
        await currentAuthenticatedUser();

        router.push('/dashboard');
        return;
      }
      setValid(false);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    form,
    onSubmit,
    visibility,
    setVisibility,
    valid,
  };
}
