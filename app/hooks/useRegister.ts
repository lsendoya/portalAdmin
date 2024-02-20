import {useState} from 'react';
import {useAuthStore} from '@/app/store/auth';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {handleSignUp, SignUpParameters} from '@/app/api/auth';
import lodash from 'lodash';
import {registerSchema} from '@/utils/schemas/register';

export default function useRegister() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const setEmail = useAuthStore((state) => state.setEmail);
  const setRegister = useAuthStore((state) => state.setRegister);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordAgain: '',
      birthdate: '',
      name: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    const { name, birthdate, password, email } = values;
    let user = {
      name: name,
      birthdate: birthdate,
      password: password,
      email: email,
      username: email,
    } as SignUpParameters;
    try {
      const userID = await handleSignUp(user);
      if (!lodash.isUndefined(userID)) {
        setEmail(email);
        setRegister(true);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    form,
    onSubmit,
    visibility,
    setVisibility,
  };
}
