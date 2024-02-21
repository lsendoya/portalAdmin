import {useState} from 'react';
import {useAuthStore} from '@/app/store/auth';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {handleSignUpConfirmation} from '@/app/api/auth';
import {confirmationSchema} from '@/utils/schemas/confirmation';
import {useRouter} from 'next/navigation';

export default function useConfirmation() {
  const router = useRouter();
  const [valid, setValid] = useState<boolean>(true);

  const email = useAuthStore((state) => state.email);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const form = useForm<z.infer<typeof confirmationSchema>>({
    resolver: zodResolver(confirmationSchema),
    defaultValues: {
      code: '',
    },
  });
  async function onSubmit(values: z.infer<typeof confirmationSchema>) {
    console.log(values);

    try {
      const isSignUpComplete = await handleSignUpConfirmation({
        confirmationCode: values.code,
        username: email,
      });
      if (isSignUpComplete) {
        setValid(true);
        setAuthenticated(true);
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
    valid,
    email,
  };
}
