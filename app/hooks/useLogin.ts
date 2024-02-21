import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema} from '@/utils/schemas/login';
import {handleSignIn} from '@/app/api/auth';

export default function useLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean | undefined>(undefined);
  const router = useRouter();

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
        router.push('/dashboard');
        return;
      }
      setValid(false);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    form,
    onSubmit,
    showPassword,
    setShowPassword,
    valid,
  };
}
